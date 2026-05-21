Here is a curated list of the most essential Git and GitHub commands you will need while working in the VS Code terminal. These are broken down logically by workflow stage, focusing on what you actually use day-to-day.

1. Setting Up & Starting a Project
Before you do anything, tell Git who you are so your commits are correctly credited on GitHub.

Bash
# Configure your global identity (only need to do this once)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Turn a local folder into a Git repository
git init

# Download an existing repository from GitHub to your computer
git clone <github-repository-url>
2. The Daily Workflow (Save & Track Changes)
This is the cycle you will repeat multiple times a day: Check status ➔ Stage changes ➔ Commit.

Bash
# Check what files have been modified, deleted, or added
git status

# Stage a specific file for the next commit
git add filename.js

# Stage ALL changed and new files at once (most common)
git add .

# Save your staged changes with a clear descriptive message
git commit -m "Fix: resolve login page button crash"
💡 VS Code Shortcut: Running git status or git add is great, but look at the Source Control icon on the left sidebar of VS Code (the one with the branches icon). It visually tracks everything in real-time.

3. Working with GitHub (Push & Pull)
Once your changes are saved locally, you need to sync them with your remote repository on GitHub.

Bash
# Link your local repository to a GitHub repository (only done once per project)
git remote add origin <github-repository-url>

# Rename your default branch to 'main' (if it is currently 'master')
git branch -M main

# Send your local commits to GitHub for the first time
git push -u origin main

# Send subsequent commits to GitHub (after the first setup)
git push

# Download the latest changes from GitHub made by others into your computer
git pull
4. Branching (Working on Features Safely)
Never work directly on the main branch. Create a separate branch for every new feature or bug fix.

Bash
# View all branches in your repository (the one with * is active)
git branch

# Create a new branch and instantly switch to it
git checkout -b feature-login-page

# Switch back to an existing branch (e.g., back to main)
git checkout main

# Merge changes from a feature branch into your current branch
git merge feature-login-page

# Delete a branch locally after you are completely done with it
git branch -d feature-login-page
5. Checking History & Fixing Mistakes
If something goes wrong or you need to see what happened in the past.

Bash
# Show a list of all past commits (Press 'q' to exit this view)
git log --oneline

# Unstage a file you accidentally added using 'git add'
git restore --staged filename.js

# Throw away ALL local changes since your last commit (Be careful!)
git reset --hard
Pro-Tip for VS Code Terminal Users:
Instead of typing long names, you can use Tab completion. Type git checkout feat and press Tab—VS Code will automatically fill out the rest of the branch name for you!