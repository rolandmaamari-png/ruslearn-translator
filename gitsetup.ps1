Set-Location "C:\Users\HP\Claude\Projects\website 2 - trail"
Remove-Item -Recurse -Force ".git" -ErrorAction SilentlyContinue
git init
git branch -M main
git config user.email "rolandmaamari@gmail.com"
git config user.name "Roland"
git add .
git commit -m "Initial commit: RusLearn Translator"
$status = git status
$log = git log --oneline
"SUCCESS`n$status`n$log" | Out-File "git-log.txt"
[System.Windows.Forms.MessageBox]::Show("Git setup complete! Check git-log.txt", "RusLearn") | Out-Null
