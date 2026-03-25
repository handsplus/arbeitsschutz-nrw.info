@echo off
cd /d "%~dp0"
echo Starte Next.js auf http://localhost:3010 ...
echo Fenster offen lassen. Zum Beenden: Strg+C
echo.
npm run dev
pause
