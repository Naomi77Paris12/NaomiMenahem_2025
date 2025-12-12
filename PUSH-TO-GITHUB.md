# How to Push to GitHub - Step by Step

## Step 1: Install Xcode Command Line Tools
Open Terminal and run:
```bash
xcode-select --install
```
Click "Install" when prompted. This may take a few minutes.

## Step 2: Open Terminal and Navigate to Your Project
```bash
cd /Users/yazeewilson/Netflix-UI-Clone
```

## Step 3: Initialize Git (if not already done)
```bash
git init
```

## Step 4: Add All Files
```bash
git add .
```

## Step 5: Create Your First Commit
```bash
git commit -m "Initial commit: Netflix UI Clone"
```

## Step 6: Connect to Your GitHub Repository
```bash
git remote add origin https://github.com/Naomi77Paris12/NaomiMenahem_2025.git
```

## Step 7: Set Main Branch
```bash
git branch -M main
```

## Step 8: Push to GitHub
```bash
git push -u origin main
```

**Note:** When prompted for credentials:
- Username: `Naomi77Paris12`
- Password: You'll need a **Personal Access Token** (not your GitHub password)

### How to Create a Personal Access Token:
1. Go to GitHub.com → Click your profile picture → **Settings**
2. Scroll down to **Developer settings** (left sidebar)
3. Click **Personal access tokens** → **Tokens (classic)**
4. Click **Generate new token** → **Generate new token (classic)**
5. Give it a name (e.g., "Netflix Clone")
6. Check the box for **repo** (full control of private repositories)
7. Click **Generate token** at the bottom
8. **Copy the token immediately** (you won't see it again!)
9. Use this token as your password when pushing

## Step 9: Enable GitHub Pages
1. Go to https://github.com/Naomi77Paris12/NaomiMenahem_2025
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Source", select **main** branch
5. Click **Save**

Your site will be live at:
**https://naomi77paris12.github.io/NaomiMenahem_2025/**
