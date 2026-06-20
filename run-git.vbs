Set WshShell = CreateObject("WScript.Shell")

Dim projectPath
projectPath = "C:\Users\HP\Claude\Projects\website 2 - trail"

' Delete old broken .git folder and reinit
Dim cmd
cmd = "cmd /c """ & _
    "cd /d """ & projectPath & """ && " & _
    "rd /s /q .git 2>nul & " & _
    "git init && " & _
    "git branch -M main && " & _
    "git config user.email rolandmaamari@gmail.com && " & _
    "git config user.name Roland && " & _
    "git add . && " & _
    "git commit -m ""Initial commit: RusLearn Translator"" && " & _
    "echo SUCCESS > """ & projectPath & "\git-log.txt"""""

' Run hidden (0 = hidden window), wait for it to finish (True)
WshShell.Run cmd, 1, True

MsgBox "Git setup complete! Check git-log.txt in your project folder.", 64, "RusLearn Translator"
