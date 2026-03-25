/**
 * Startet `next dev` mit bereinigtem process.env.
 * Einige Umgebungen setzen einen absoluten distDir-Pfad (z. B. unter AppData);
 * auf Windows führt path.join(projekt, "C:\\Users\\...") zu ungültigen Pfaden und
 * bricht den Dev-Server (mkdir ENOENT / Internal Server Error).
 */
const { spawn } = require('child_process');
const path = require('path');

const root = path.join(__dirname, '..');
const env = { ...process.env };

if ('NEXT_DIST_DIR' in env) {
  delete env.NEXT_DIST_DIR;
}

const nextBin = path.join(root, 'node_modules', 'next', 'dist', 'bin', 'next');
const child = spawn(process.execPath, [nextBin, 'dev', '-p', '3010'], {
  stdio: 'inherit',
  cwd: root,
  env,
});

child.on('exit', (code) => process.exit(code ?? 0));
