# How to Deploy to GitHub Pages

## Step 1: Install Git (if not already installed)
If you see an error about Xcode command line tools, install them by running:
```bash
xcode-select --install
```

## Step 2: Create a GitHub Repository
1. Go to https://github.com and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it (e.g., "netflix-ui-clone")
4. Choose **Public** (required for free GitHub Pages)
5. **Don't** check "Initialize with README"
6. Click "Create repository"

## Step 3: Initialize Git and Push Your Code
Run these commands in Terminal (from the project directory):

```bash
cd /Users/yazeewilson/Netflix-UI-Clone

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Netflix UI Clone"

# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under "Source", select **main** branch
5. Click **Save**

## Step 5: Access Your Site
Your site will be available at:
`https://YOUR_USERNAME.github.io/REPO_NAME/`

**Note:** It may take a few minutes for the site to be available after enabling Pages.

## Updating Your Site
After making changes, push updates with:
```bash
git add .
git commit -m "Description of changes"
git push
```
