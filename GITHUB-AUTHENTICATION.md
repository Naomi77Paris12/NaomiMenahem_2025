# GitHub Authentication Guide

GitHub no longer accepts passwords for git operations. You need to use a **Personal Access Token (PAT)** instead.

## Create a Personal Access Token

1. **Go to GitHub Token Settings:**
   - Visit: https://github.com/settings/tokens
   - Or: GitHub → Your Profile → Settings → Developer settings → Personal access tokens → Tokens (classic)

2. **Generate New Token:**
   - Click "Generate new token" → "Generate new token (classic)"

3. **Configure Token:**
   - **Note:** Give it a name like "NaomiMenahem Project"
   - **Expiration:** Choose your preference (90 days, 1 year, or no expiration)
   - **Select scopes:** Check the box for `repo` (this gives full repository access)
   
4. **Generate and Copy:**
   - Click "Generate token" at the bottom
   - **IMPORTANT:** Copy the token immediately - you won't be able to see it again!
   - It will look like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

## Use the Token

When you push to GitHub:

```bash
cd /Users/yazeewilson/Documents/GitHub/NaomiMenahem_2025
git push -u origin main
```

When prompted:
- **Username:** `Naomi77Paris12`
- **Password:** Paste your Personal Access Token (not your GitHub password!)

The token will be saved by git, so you won't need to enter it every time.

## Alternative: Use SSH (Recommended for Future)

If you have SSH keys set up with GitHub, you can switch to SSH:

```bash
git remote set-url origin git@github.com:Naomi77Paris12/NaomiMenahem_2025.git
git push -u origin main
```

SSH keys don't expire like tokens, so this is more convenient long-term.

## Quick Steps Summary

1. Create token at: https://github.com/settings/tokens
2. Select `repo` scope
3. Copy the token
4. Use token as password when pushing

