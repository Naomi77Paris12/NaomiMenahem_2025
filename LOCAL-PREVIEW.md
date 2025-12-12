# How to Preview Locally

## Option 1: Python HTTP Server (Easiest)

If you have Python installed:

1. Open Terminal in this directory:
   ```bash
   cd /Users/yazeewilson/Documents/GitHub/NaomiMenahem_2025
   ```

2. Run Python's built-in server:
   ```bash
   python3 -m http.server 8000
   ```

3. Open your browser and go to:
   ```
   http://localhost:8000
   ```

4. To stop the server, press `Ctrl + C` in the terminal

## Option 2: Node.js http-server

If you have Node.js installed:

1. Install http-server globally (one time only):
   ```bash
   npm install -g http-server
   ```

2. Run the server:
   ```bash
   http-server -p 8000
   ```

3. Open: `http://localhost:8000`

## Option 3: VS Code Live Server Extension

If you use VS Code:

1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Option 4: Direct File Open (Limited)

You can open `index.html` directly in your browser, but some features (like API calls) might not work due to CORS restrictions.

---

**Recommended:** Use Option 1 (Python server) - it's the simplest and works immediately!

