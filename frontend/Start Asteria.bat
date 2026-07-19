@echo off
title ASTERIA AI

cd /d "%~dp0"

echo Starting ASTERIA...
echo.

start cmd /k "npm run dev"

timeout /t 10 >nul

start "" http://localhost:3000