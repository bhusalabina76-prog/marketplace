# 🛍️ BazaarHub — Modern Responsive E-Commerce & Multi-Role Marketplace

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

A responsive, high-performance e-commerce storefront and multi-role marketplace built with **clean semantic HTML5, modern CSS3 variables/Grid/Flexbox, and vanilla JavaScript**. It features an interactive storefront, shopping cart drawer with `localStorage` persistence, flash sales, search filters, and dedicated interactive portals for **Customers**, **Sellers**, and **Admins**.

---

## 🌟 Key Features

- **🛒 Modern Storefront & Discovery**:
  - 3-slide animated hero banner with autoloop, dots, and navigation controls.
  - Category showcase (Electronics, Fashion, Home & Living, Beauty, Accessories, Sports).
  - Live flash deals with real-time countdown timer.
  - Handpicked featured products and trending collections with discount badges and star ratings.
  - Instant live product search bar.

- **🛍️ Complete Shopping Cart System**:
  - Slide-out cart drawer with animated overlay.
  - Add to cart, quantity increments (`+` / `-`), item removal, and live subtotal calculations in NPR (Rs.).
  - Free delivery threshold calculator (over Rs. 2,500).
  - Persistent cart state saved via browser `localStorage`.

- **👥 Multi-Role Portal System (Storefront / Customer / Seller / Admin)**:
  - **Quick Role Switcher** on top bar for instant testing.
  - **Customer Portal**: Order history with 4-stage tracking visualizer (Placed → Packed → In Transit → Delivered), wishlist items, wallet balance, and delivery address manager.
  - **Seller Portal**: Revenue & order KPI cards, storefront inventory list, stock status badges, and an interactive **"Add New Product"** modal to publish live items.
  - **Admin Portal**: Total platform revenue, active seller verification queue with Approve/Reject toggles, and catalog management.

- **⚡ 1-Click Instant Demo Login**:
  - Modal with 1-click test credentials for **Sarah (Customer)**, **Ram (Seller)**, and **Admin (Platform Control)**.

---

## 🚀 Deploying to Vercel

### Method 1: Connect GitHub Repository to Vercel (Recommended)
1. Push your repository to GitHub (see [Push to GitHub](#-pushing-to-github) below).
2. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
3. Click **"Add New..."** → **"Project"**.
4. Select your `marketplace` repository and click **"Import"**.
5. Leave the default settings (Framework Preset: **Other**, Build Command: empty, Output Directory: `./`).
6. Click **"Deploy"**.
7. Vercel will build and assign you a live production URL (e.g., `https://your-project.vercel.app`) in seconds! Every future `git push` will automatically trigger an instant deployment.

### Method 2: Deploy via Vercel CLI
If you prefer deploying directly from your terminal:
```bash
# 1. Install or run Vercel CLI
npx vercel

# 2. Follow the terminal prompts to log in and select your scope
# 3. For production deployment:
npx vercel --prod
```

---

## 🐙 Pushing to GitHub

Run these commands in your project terminal:

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Add all files to staging
git add .

# 3. Commit changes
git commit -m "feat: initial commit with Vercel and GitHub deploy configuration"

# 4. Set default branch to main
git branch -M main

# 5. Link your GitHub repository (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# 6. Push to GitHub
git push -u origin main
```

---

## 💻 Running Locally

No dependencies or build steps required!

### Option A: VS Code Live Server
1. Open the project folder in VS Code.
2. Right-click on `index.html` and click **"Open with Live Server"**.

### Option B: Node.js `serve`
```bash
npx serve .
```
Visit `http://localhost:3000` in your browser.

### Option C: Direct Browser
Simply double-click `index.html` to open it directly in any modern browser (Chrome, Edge, Firefox, Safari).

---

## 📁 Project Structure

```text
marketplace/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions automated workflow for Pages
├── css/
│   ├── global.css          # Design tokens, storefront layout, modals & portals
│   └── responsive.css      # Mobile, tablet, and responsive media queries
├── js/
│   └── main.js             # Data catalogue, state management, cart & UI logic
├── index.html              # Core single-page marketplace application
├── package.json            # Project manifest & local serve scripts
├── vercel.json             # Vercel deployment configuration & caching headers
├── .gitignore              # Git ignore rules for build files, OS files & logs
└── README.md               # Documentation & deployment guide
```

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
