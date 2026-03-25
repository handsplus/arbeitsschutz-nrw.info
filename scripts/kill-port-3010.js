/**
 * Beendet unter Windows den Prozess, der auf Port 3010 lauscht (z. B. alter next dev).
 * Hilft, wenn EADDRINUSE oder ein "zombie" Dev-Server noch 500 liefert.
 */
const { execSync } = require('child_process');

if (process.platform !== 'win32') {
  process.exit(0);
}

let out;
try {
  out = execSync('netstat -ano', { encoding: 'utf8' });
} catch {
  process.exit(0);
}

const pids = new Set();
for (const line of out.split(/\r?\n/)) {
  if (!line.includes(':3010')) continue;
  // Zeile mit lokalem Listen-Socket (EN: LISTENING, DE: ABHÖREN o. Ä.)
  if (!/\b(LISTENING|ABH)/i.test(line)) continue;
  const parts = line.trim().split(/\s+/);
  const pid = parts[parts.length - 1];
  if (/^\d+$/.test(pid)) pids.add(pid);
}

for (const pid of pids) {
  try {
    execSync(`taskkill /PID ${pid} /F`, { stdio: 'pipe' });
    console.log(`kill-port-3010: Prozess ${pid} beendet.`);
  } catch {
    /* ignorieren */
  }
}
