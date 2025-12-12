# GitHub Pages Deployment Guide

This guide will help you deploy your Netflix UI Clone to GitHub Pages so you can share it with a public URL.

## Step 1: Push to GitHub

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `NaomiMenahem_2025` (or your preferred name)
   - Make it **Public** (required for free GitHub Pages)
   - Do NOT initialize with README, .gitignore, or license
   - Click "Create repository"

2. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit: Netflix UI Clone"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/NaomiMenahem_2025.git
   git push -u origin main
   ```
   (Replace `YOUR_USERNAME` with your GitHub username)

## Step 2: Enable GitHub Pages

1. **Go to your repository on GitHub**
2. **Click on "Settings"** (top menu bar)
3. **Scroll down to "Pages"** in the left sidebar
4. **Under "Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. **Click "Save"**

## Step 3: Access Your Site

After a few minutes, your site will be available at:
```
https://YOUR_USERNAME.github.io/NaomiMenahem_2025/
```

**Note:** It may take 5-10 minutes for the site to be live after enabling Pages.

## Troubleshooting

- If images don't load, check that all image paths in your HTML/CSS use relative paths (starting with `Images/` not `/Images/`)
- Make sure your repository is **Public** for free hosting
- Clear your browser cache if you don't see updates

## Custom Domain (Optional)

If you have a custom domain, you can add it in the Pages settings under "Custom domain".

