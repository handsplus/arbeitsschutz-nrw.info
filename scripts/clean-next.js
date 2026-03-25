/**
 * Löscht den Next.js-Cache (.next).
 * Dev-Server vorher beenden (Strg+C), sonst schlägt das unter Windows fehl.
 */
const fs = require('fs');
const path = require('path');

const nextDir = path.join(__dirname, '..', '.next');

if (!fs.existsSync(nextDir)) {
  console.log('clean-next: Kein Ordner .next vorhanden – nichts zu tun.');
  process.exit(0);
}

try {
  fs.rmSync(nextDir, { recursive: true, force: true });
  console.log('clean-next: Ordner .next wurde gelöscht. Jetzt: npm run dev');
} catch (e) {
  console.error(
    'clean-next: Konnte .next nicht löschen. Zuerst den Dev-Server stoppen (Strg+C im Terminal mit npm run dev), dann erneut: npm run clean'
  );
  console.error(e.message);
  process.exit(1);
}
