# Troubleshooting GitHub Pages 404 Error

If you're getting a 404 error at `https://naomi77paris12.github.io/NaomiMenahem_2025/`, follow these steps:

## Step 1: Verify Code is Pushed to GitHub

1. **Check if your code is on GitHub:**
   - Go to: https://github.com/Naomi77Paris12/NaomiMenahem_2025
   - Verify you can see your files (index.html, main.css, app.js, Images folder)
   - If the repository is empty or doesn't exist, you need to push your code

2. **If code is not on GitHub, push it:**
   ```bash
   git push -u origin main
   ```
   (You may need to authenticate - see authentication options below)

## Step 2: Check Repository Visibility

**IMPORTANT:** For free GitHub Pages, your repository MUST be public.

1. Go to: https://github.com/Naomi77Paris12/NaomiMenahem_2025
2. Click **Settings** → Scroll to bottom → **Danger Zone**
3. If it says "Change visibility" and the repo is private, click it and make it **Public**

## Step 3: Enable GitHub Pages

1. Go to: https://github.com/Naomi77Paris12/NaomiMenahem_2025/settings/pages
2. Under **"Source"**, select:
   - **Branch:** `main` (or `master` if that's what you have)
   - **Folder:** `/ (root)`
3. Click **Save**
4. Wait 5-10 minutes for GitHub to build and deploy your site

## Step 4: Verify index.html is in Root

- Make sure `index.html` exists in the root of your repository (not in a subfolder)
- The file name must be exactly `index.html` (case-sensitive)

## Step 5: Check GitHub Actions (if enabled)

1. Go to: https://github.com/Naomi77Paris12/NaomiMenahem_2025/actions
2. Look for any failed builds or errors

## Step 6: Clear Cache and Wait

- Clear your browser cache or use incognito mode
- Wait 10-15 minutes after enabling Pages
- GitHub Pages can take time to propagate

## Authentication for Git Push

If you need to push but get authentication errors:

**Option 1: GitHub CLI**
```bash
gh auth login
git push -u origin main
```

**Option 2: Personal Access Token**
1. Go to: https://github.com/settings/tokens
2. Generate new token (classic) with `repo` permissions
3. Use token as password when pushing

**Option 3: SSH** (if configured)
```bash
git remote set-url origin git@github.com:Naomi77Paris12/NaomiMenahem_2025.git
git push -u origin main
```

## Common Issues Checklist

- ✅ Repository exists on GitHub
- ✅ Repository is **PUBLIC** (not private)
- ✅ Code is pushed to `main` branch
- ✅ `index.html` exists in root directory
- ✅ GitHub Pages is enabled in Settings → Pages
- ✅ Source branch is set to `main` and folder to `/ (root)`
- ✅ Waited 10+ minutes after enabling Pages

## Still Not Working?

1. Try accessing: `https://naomi77paris12.github.io/NaomiMenahem_2025/index.html` (with index.html explicitly)
2. Check the repository URL matches your GitHub username exactly
3. Verify the repository name is exactly `NaomiMenahem_2025` (case-sensitive)

