# 🔹 Git Commands for VS Code Terminal

You can use all of these commands in the VS Code terminal using PowerShell, CMD, or Git Bash.

---

# 🔹 Git Setup Commands

## Check Git Version

```bash id="9lm5r8"
git --version
```

## Set Git Username

```bash id="tl6c5y"
git config --global user.name "Your Name"
```

## Set Git Email

```bash id="7hnth7"
git config --global user.email "yourmail@example.com"
```

## View Git Configuration

```bash id="b8vjlwm"
git config --list
```

---

# 🔹 Repository Commands

## Initialize a New Git Repository

```bash id="uw7tmv"
git init
```

## Clone an Existing Repository

```bash id="88h9mx"
git clone https://github.com/username/repo-name.git
```

## Clone into a Specific Folder

```bash id="8r0ckg"
git clone <repo-link> folder-name
```

---

# 🔹 File Tracking Commands

## Check Repository Status

```bash id="7t6c9n"
git status
```

## Add a Specific File

```bash id="cux22r"
git add filename
```

## Add All Files

```bash id="nqy2ot"
git add .
```

## Add All Modified + Deleted Files

```bash id="b58ffj"
git add -A
```

---

# 🔹 Commit Commands

## Create a Commit

```bash id="x9gk7l"
git commit -m "Initial Commit"
```

## Add and Commit Together

```bash id="2l6ffh"
git commit -am "Updated code"
```

## Edit Last Commit Message

```bash id="jvjlwm"
git commit --amend -m "New Commit Message"
```

---

# 🔹 Branch Commands

## View All Branches

```bash id="v2s2rt"
git branch
```

## Create a New Branch

```bash id="b6n8ps"
git branch branch-name
```

## Switch Branch

```bash id="mkx28t"
git checkout branch-name
```

## Create and Switch to a New Branch

```bash id="i65e0d"
git checkout -b branch-name
```

## Modern Switch Syntax

```bash id="9dztaj"
git switch branch-name
```

## Create + Switch Using Modern Syntax

```bash id="vqof92"
git switch -c branch-name
```

## Delete a Branch

```bash id="mnxw8z"
git branch -d branch-name
```

## Force Delete a Branch

```bash id="4c0w7p"
git branch -D branch-name
```

---

# 🔹 Remote Repository Commands

## Add Remote Repository

```bash id="d0c4jk"
git remote add origin https://github.com/username/repo.git
```

## View Remote Repositories

```bash id="yg0mx7"
git remote -v
```

## Change Remote URL

```bash id="t9f7jk"
git remote set-url origin new-url
```

---

# 🔹 Push Commands

## First Push

```bash id="u4z8d4"
git push -u origin main
```

## Normal Push

```bash id="o6m1eh"
git push
```

## Push Specific Branch

```bash id="d6st0k"
git push origin branch-name
```

## Force Push

```bash id="q4r4f8"
git push --force
```

---

# 🔹 Pull & Fetch Commands

## Pull Latest Changes

```bash id="2ax5f4"
git pull
```

## Pull Specific Branch

```bash id="e8v1tm"
git pull origin main
```

## Fetch Changes Only

```bash id="lqqeae"
git fetch
```

---

# 🔹 Merge Commands

## Merge a Branch

```bash id="9ylmr3"
git merge branch-name
```

## Abort Merge

```bash id="nls4hr"
git merge --abort
```

---

# 🔹 Stash Commands

## Temporarily Save Changes

```bash id="w2c7ja"
git stash
```

## View Stash List

```bash id="3l9z5m"
git stash list
```

## Apply Last Stash

```bash id="9vk0nk"
git stash apply
```

## Apply and Remove Last Stash

```bash id="4tx0aj"
git stash pop
```

## Delete a Stash

```bash id="ms1ubd"
git stash drop
```

---

# 🔹 Log / History Commands

## View Commit History

```bash id="y4q18r"
git log
```

## One-Line Commit History

```bash id="zb5xq1"
git log --oneline
```

## Graph View of History

```bash id="w1v1gq"
git log --oneline --graph --all
```

---

# 🔹 Undo Commands

## Undo Last Commit (Keep Changes)

```bash id="j3mgur"
git reset --soft HEAD~1
```

## Undo Last Commit (Remove Changes)

```bash id="mjlwm2"
git reset --hard HEAD~1
```

## Unstage a File

```bash id="9m9tkm"
git restore --staged filename
```

## Restore a File

```bash id="w29llg"
git restore filename
```

---

# 🔹 Clean Commands

## Remove Untracked Files

```bash id="5qgn8n"
git clean -f
```

## Remove Untracked Files and Folders

```bash id="6rbjlwm"
git clean -fd
```

---

# 🔹 Tag Commands

## Create a Tag

```bash id="2h2a0r"
git tag v1.0
```

## View All Tags

```bash id="bof3hh"
git tag
```

## Push a Tag

```bash id="76sxof"
git push origin v1.0
```

---

# 🔹 GitHub Authentication

## Login with GitHub CLI

```bash id="1kn4j0"
gh auth login
```

---

# 🔹 Useful VS Code Terminal Commands

## Clear Terminal

```bash id="96ckaz"
cls
```

or

```bash id="qvjlwm"
clear
```

## Show Current Directory

```bash id="2p0w54"
pwd
```

## List Files/Folders

```bash id="4glvgb"
dir
```

or

```bash id="b4yhy4"
ls
```

---

# 🔹 Most Used Daily Workflow

```bash id="rjlwmj"
git status
git add .
git commit -m "Updated project"
git push
```

---

# 🔹 Full Workflow to Upload a New Project to GitHub

```bash id="tjlwm8"
git init
git add .
git commit -m "First Commit"
git branch -M main
git remote add origin https://github.com/username/repo.git
git push -u origin main
```

---

# 🔹 Create a `.gitignore` File

Example:

```gitignore id="fjlwmk"
bin/
obj/
.vs/
node_modules/
appsettings.json
```

---

# 🔹 Useful Advanced Commands

## Show Current Branch

```bash id="cjlwm2"
git branch --show-current
```

## Show Differences

```bash id="jlwmk4"
git diff
```

## Checkout a Specific Commit

```bash id="5jlwm9"
git checkout commit-id
```

## Rebase

```bash id="mjlwm5"
git rebase main
```

## Cherry Pick

```bash id="jlwmn8"
git cherry-pick commit-id
```

---

# 🔹 Most Important Git Concepts

To become professional with Git, focus on understanding:

* Repository
* Commit
* Branch
* Merge
* Pull
* Push
* Remote
* Conflict Resolution
* Stash
* Rebase

Once you understand these concepts properly, you’ll be able to work professionally with Git in team environments and real-world projects.
