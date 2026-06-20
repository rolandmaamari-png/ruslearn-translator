@echo off
echo ============================================
echo  RusLearn Translator - Push to GitHub
echo ============================================

cd /d "%~dp0"

set /p REPO_URL="Paste your GitHub repo URL here (e.g. https://github.com/yourname/ruslearn-translator.git): "

echo.
echo Connecting to GitHub...
git remote add origin %REPO_URL%

echo Pushing to GitHub...
git push -u origin main

echo.
echo ============================================
echo  Done! Your app is on GitHub.
echo  Now go to render.com to deploy it live.
echo ============================================
pause
