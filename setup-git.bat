@echo off
cd /d "%~dp0"
echo Starting git setup... > git-log.txt

echo Removing old .git folder...
if exist ".git" (
    rd /s /q ".git"
    echo Old .git removed >> git-log.txt
)

echo Initializing git...
git init >> git-log.txt 2>&1
git branch -M main >> git-log.txt 2>&1

echo Setting identity...
git config user.email "rolandmaamari@gmail.com" >> git-log.txt 2>&1
git config user.name "Roland" >> git-log.txt 2>&1

echo Adding files...
git add . >> git-log.txt 2>&1

echo Committing...
git commit -m "Initial commit: RusLearn Translator" >> git-log.txt 2>&1

echo. >> git-log.txt
echo === STATUS === >> git-log.txt
git status >> git-log.txt 2>&1
git log --oneline >> git-log.txt 2>&1

echo Done! Check git-log.txt for results.
type git-log.txt
pause
