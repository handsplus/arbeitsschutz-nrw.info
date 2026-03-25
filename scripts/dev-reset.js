/**
 * Cache leeren und Dev-Server starten (ohne && – funktioniert in PowerShell und cmd).
 * Nutzen bei kaputtem .next (OneDrive / MODULE_NOT_FOUND).
 */
const { execSync, spawn } = require('child_process');
const path = require('path');

const root = path.join(__dirname, '..');

try {
  execSync(`node "${path.join(__dirname, 'clean-next.js')}"`, {
    stdio: 'inherit',
    cwd: root,
  });
} catch {
  console.warn('Hinweis: clean-next meldete einen Fehler (Server noch aktiv?). Trotzdem starten …');
}

try {
  execSync(`node "${path.join(__dirname, 'kill-port-3010.js')}"`, {
    stdio: 'inherit',
    cwd: root,
  });
} catch {
  /* optional */
}

const devJs = path.join(__dirname, 'dev.js');
const child = spawn(process.execPath, [devJs], {
  stdio: 'inherit',
  cwd: root,
});

child.on('exit', (code) => process.exit(code ?? 0));
