/* BazaarHub Phase 2 — Modern Orange & Midnight Multi-Role Storefront & Dashboards */
"use strict";

const BRAND_NAME = "BazaarHub";
const money = n => `Rs. ${Number(n).toLocaleString("en-IN")}`;

// Image helper for Unsplash
const imageUrl = id => id.includes(" ") || !id
  ? "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80"
  : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=80`;

// Initial Product Catalog (stored in localStorage if modified)
const defaultProducts = [
  { id: 1, name: "CloudWalk Everyday Sneakers", category: "Fashion", price: 2890, old: 3990, tag: "-28%", rating: "4.8", reviews: 126, image: "photo-1542291026-7eec264c27ff", badge: "Best seller", stock: 32 },
  { id: 2, name: "Aura Wireless Headphones", category: "Electronics", price: 3499, old: 4999, tag: "-30%", rating: "4.9", reviews: 84, image: "photo-1505740420928-5e560c06d30e", badge: "Hot pick", stock: 18 },
  { id: 3, name: "Minimal Ceramic Table Lamp", category: "Home & Living", price: 1850, old: 2400, tag: "-23%", rating: "4.7", reviews: 53, image: "photo-1507473885765-e6ed057f782c", badge: "", stock: 24 },
  { id: 4, name: "Everyday Classic Backpack", category: "Fashion", price: 2190, old: 2790, tag: "-21%", rating: "4.8", reviews: 91, image: "photo-1553062407-98eeb64c6a62", badge: "Popular", stock: 40 },
  { id: 5, name: "Smart Fitness Watch Ultra", category: "Electronics", price: 4299, old: 5999, tag: "-28%", rating: "4.6", reviews: 72, image: "photo-1523275335684-37898b6baf30", badge: "", stock: 15 },
  { id: 6, name: "Glow Skin Care Revival Set", category: "Beauty", price: 1590, old: 1990, tag: "-20%", rating: "4.9", reviews: 148, image: "photo-1608248543803-ba4f8c70ae0b", badge: "Top rated", stock: 55 },
  { id: 7, name: "Soft Knit Warm Throw Blanket", category: "Home & Living", price: 1990, old: 2590, tag: "-23%", rating: "4.7", reviews: 38, image: "photo-1600210492486-724fe5c67fb0", badge: "", stock: 20 },
  { id: 8, name: "Modern Polarized Sunglasses", category: "Accessories", price: 1290, old: 1790, tag: "-28%", rating: "4.5", reviews: 64, image: "photo-1511499767150-a48a237f0083", badge: "", stock: 50 },
  { id: 9, name: "Portable Bass Bluetooth Speaker", category: "Electronics", price: 2490, old: 3290, tag: "-24%", rating: "4.8", reviews: 109, image: "photo-1608043152269-423dbba4e7e1", badge: "Trending", stock: 28 },
  { id: 10, name: "Daily Canvas Cotton Tote Bag", category: "Fashion", price: 990, old: 1390, tag: "-29%", rating: "4.6", reviews: 42, image: "photo-1590874103328-eac38a683ce7", badge: "", stock: 65 },
  { id: 11, name: "Hydrating Vitamin Face Serum", category: "Beauty", price: 890, old: 1190, tag: "-25%", rating: "4.7", reviews: 97, image: "photo-1620916566398-39f1143ab7be", badge: "", stock: 30 },
  { id: 12, name: "Insulated Sports Travel Bottle", category: "Sports", price: 790, old: 1090, tag: "-28%", rating: "4.8", reviews: 118, image: "photo-1602143407151-7111542de6e8", badge: "", stock: 75 }
];

let products = JSON.parse(localStorage.getItem("bazaarhub-products") || "null") || defaultProducts;

const categories = [
  { name: "Fashion", sub: "Style for every day", icon: "✳", tone: "lavender", image: "photo-1483985988355-763728e1935b" },
  { name: "Electronics", sub: "Tech made simple", icon: "⌁", tone: "blue", image: "photo-1498049794561-7780e7231661" },
  { name: "Home & Living", sub: "Make it feel like home", icon: "⌂", tone: "peach", image: "photo-1616486338812-3dadae4b4ace" },
  { name: "Beauty", sub: "A little self-care", icon: "✿", tone: "pink", image: "photo-1608248543803-ba4f8c70ae0b" },
  { name: "Accessories", sub: "The finishing touch", icon: "◇", tone: "yellow", image: "photo-1529139574466-a303027c1d8b" },
  { name: "Sports", sub: "Move your way", icon: "↗", tone: "green", image: "photo-1517836357463-d25dfeac3438" }
];

// Predefined Demo Profiles
const demoUsers = {
  customer: {
    role: "customer",
    name: "Sarah Shrestha",
    email: "sarah@customer.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    phone: "+977 9841234567",
    location: "New Baneshwor, Kathmandu",
    tier: "🌟 Gold Shopper",
    points: 1420,
    wallet: 3850,
    orders: [
      { id: "ORD-9821", date: "Nov 15, 2026", product: "Aura Wireless Headphones", price: 3499, qty: 1, status: "In Transit", step: 3, thumb: "photo-1505740420928-5e560c06d30e" },
      { id: "ORD-9244", date: "Nov 02, 2026", product: "CloudWalk Everyday Sneakers", price: 2890, qty: 1, status: "Delivered", step: 4, thumb: "photo-1542291026-7eec264c27ff" },
      { id: "ORD-8710", date: "Oct 19, 2026", product: "Minimal Ceramic Table Lamp", price: 1850, qty: 1, status: "Delivered", step: 4, thumb: "photo-1507473885765-e6ed057f782c" }
    ],
    addresses: [
      { id: 1, label: "Home", text: "House 42, Shanti Marga, New Baneshwor, Kathmandu", isDefault: true },
      { id: 2, label: "Office", text: "Tech Park Level 3, Pulchowk, Lalitpur", isDefault: false }
    ],
    coupons: [
      { code: "ORANGE20", discount: "20% OFF", desc: "Applicable on orders above Rs. 2,000", expiry: "30 Nov 2026" },
      { code: "FREESHIP", discount: "Free Delivery", desc: "Valid for all marketplace categories", expiry: "15 Dec 2026" }
    ]
  },
  seller: {
    role: "seller",
    name: "Ram Sharma",
    storeName: "Himalayan Tech & Style",
    email: "ram@kathmanducrafts.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    phone: "+977 9812345678",
    rating: "4.9 ★ (215 reviews)",
    verified: true,
    revenue: 384500,
    ordersToday: 18,
    activeListings: 24,
    pendingShipments: 4,
    payoutAvailable: 72400,
    bank: "Nabil Bank (A/C: **** 4921)",
    incomingOrders: [
      { id: "ORD-9821", buyer: "Sarah Shrestha", item: "Aura Wireless Headphones", qty: 1, total: 3499, status: "Shipped", date: "15 Nov 2026" },
      { id: "ORD-9840", buyer: "Bikash Tamang", item: "Smart Fitness Watch Ultra", qty: 1, total: 4299, status: "Processing", date: "16 Nov 2026" },
      { id: "ORD-9842", buyer: "Pooja Karki", item: "CloudWalk Everyday Sneakers", qty: 2, total: 5780, status: "Processing", date: "16 Nov 2026" }
    ]
  },
  admin: {
    role: "admin",
    name: "BazaarHub Admin",
    email: "admin@bazaarhub.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    platformGmv: 2490500,
    totalSellers: 84,
    totalCustomers: 16420,
    commissionEarned: 199240,
    sellerApplications: [
      { id: "APP-101", store: "Pokhara Organic Teas", owner: "Anup Gurung", category: "Food & Beverage", docs: "PAN & Ward Verified", status: "Pending" },
      { id: "APP-102", store: "Everest Outdoor Gears", owner: "Dawa Sherpa", category: "Sports & Trekking", docs: "VAT Registered", status: "Pending" },
      { id: "APP-103", store: "Lalitpur Handicrafts", owner: "Maya Maharjan", category: "Handicrafts & Decor", docs: "Pending Inspection", status: "Pending" }
    ],
    moderationUsers: [
      { id: 1, name: "Sarah Shrestha", email: "sarah@customer.com", role: "Customer", status: "Active", joined: "Jan 2024" },
      { id: 2, name: "Ram Sharma", email: "ram@kathmanducrafts.com", role: "Seller", status: "Active", joined: "Mar 2024" },
      { id: 3, name: "Kiran Basnet", email: "kiran@gadgethub.np", role: "Seller", status: "Active", joined: "Jul 2024" },
      { id: 4, name: "Spam Bot 99", email: "cheapdeals@xyz.biz", role: "Customer", status: "Suspended", joined: "Nov 2026" }
    ]
  }
};

// Application State
let currentUser = JSON.parse(localStorage.getItem("bazaarhub-user") || "null");
let currentView = "storefront"; // "storefront" | "dashboard"
let activeSlide = 0;
let slideTimer;
let cart = JSON.parse(localStorage.getItem("bazaarhub-cart") || "[]");
let activeDashboardSubtab = "main";
let authModalRole = "customer";
let authIsSignUp = false;

/* ============================================================
   HEADER & TOP BAR RENDERING
   ============================================================ */
function renderHeader() {
  const target = document.querySelector("#site-header");
  if (!target) return;

  const userHtml = currentUser
    ? `<div class="header-actions-user">
        <button class="header-user-btn" id="open-user-dash" title="Open ${currentUser.role} dashboard">
          <img src="${currentUser.avatar}" alt="" class="user-avatar-mini">
          <span>${currentUser.name.split(" ")[0]}</span>
          <span class="user-badge-role role--${currentUser.role}">${currentUser.role}</span>
        </button>
        <button class="action-btn-sm outline" id="btn-logout" title="Log out" style="padding: 6px 10px; font-size: 11px;">Logout</button>
       </div>`
    : `<button class="header-login-btn" id="open-auth-btn">
        <span>👤 Sign In</span>
       </button>`;

  target.innerHTML = `
    <header class="site-header">
      <div class="container header-main">
        <a class="brand" href="#" id="brand-link">
          <span class="brand-mark">B</span>
          <span>Bazaar<span>Hub</span></span>
        </a>

        <form class="search-form" id="search-form" role="search">
          <span class="search-symbol">⌕</span>
          <label class="visually-hidden" for="site-search">Search products</label>
          <input id="site-search" type="search" placeholder="Search for products, tech, fashion and more…">
          <button type="submit">Search</button>
        </form>

        <div class="header-actions">
          <a class="header-action" href="#categories" id="wishlist-link">
            <span class="action-icon">♡</span>
            <small>Wishlist</small>
          </a>
          <button class="header-action cart-trigger" id="open-cart">
            <span class="action-icon">♧<i class="cart-count">0</i></span>
            <small>My cart</small>
          </button>
          ${userHtml}
        </div>

        <button class="menu-toggle" id="menu-toggle" aria-label="Toggle menu" aria-expanded="false">☰</button>
      </div>

      <div class="nav-row" id="nav-row">
        <nav class="container main-nav">
          <a class="${currentView === 'storefront' ? 'active' : ''}" href="#" id="nav-home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#deals">Flash sale</a>
          <a href="#featured">Featured</a>
          <a href="#trending">Trending</a>
          <a href="#" id="nav-dashboard-link">
            ${currentUser ? `My Dashboard (${currentUser.role})` : 'Portals & Dashboards'}
          </a>
          <a href="#site-footer">Contact</a>
          <span class="nav-note">✨ 2-Tone Sunset Orange & Midnight Edition</span>
        </nav>
      </div>
    </header>
  `;

  // Attach event handlers
  target.querySelector("#brand-link")?.addEventListener("click", e => {
    e.preventDefault();
    switchToStorefront();
  });
  target.querySelector("#nav-home")?.addEventListener("click", e => {
    e.preventDefault();
    switchToStorefront();
  });
  target.querySelector("#nav-dashboard-link")?.addEventListener("click", e => {
    e.preventDefault();
    if (currentUser) {
      switchToDashboard(currentUser.role);
    } else {
      openAuthModal("customer");
    }
  });

  target.querySelector("#open-user-dash")?.addEventListener("click", () => {
    switchToDashboard(currentUser.role);
  });
  target.querySelector("#btn-logout")?.addEventListener("click", () => {
    logoutUser();
  });
  target.querySelector("#open-auth-btn")?.addEventListener("click", () => {
    openAuthModal("customer");
  });

  target.querySelector("#menu-toggle")?.addEventListener("click", e => {
    const navRow = target.querySelector("#nav-row");
    const open = navRow.classList.toggle("is-open");
    e.currentTarget.setAttribute("aria-expanded", String(open));
  });

  target.querySelector("#search-form")?.addEventListener("submit", e => {
    e.preventDefault();
    switchToStorefront();
    filterProducts(target.querySelector("#site-search").value);
  });

  target.querySelector("#site-search")?.addEventListener("input", e => {
    if (e.target.value.trim().length > 1) {
      switchToStorefront();
      filterProducts(e.target.value);
    } else {
      showDefaultProducts();
    }
  });

  target.querySelector("#open-cart")?.addEventListener("click", openCart);
  updateCart();
}

/* ============================================================
   FOOTER RENDERING
   ============================================================ */
function renderFooter() {
  const el = document.querySelector("#site-footer");
  if (!el) return;
  el.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-main">
        <div class="footer-brand">
          <a class="brand brand--footer" href="#">
            <span class="brand-mark">B</span>
            <span>Bazaar<span>Hub</span></span>
          </a>
          <p>Your premier multi-role online marketplace in Nepal. Connecting shoppers, sellers and artisans in one vibrant community.</p>
          <div class="socials">
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="Facebook">fb</a>
            <a href="#" aria-label="TikTok">tt</a>
          </div>
        </div>
        <div class="footer-col">
          <h3>Marketplace Roles</h3>
          <a href="#" class="footer-role-link" data-role="customer">🛍️ Customer Dashboard</a>
          <a href="#" class="footer-role-link" data-role="seller">🏪 Seller Center</a>
          <a href="#" class="footer-role-link" data-role="admin">🛡️ Platform Admin</a>
          <a href="#deals">Flash Deals & Offers</a>
        </div>
        <div class="footer-col">
          <h3>Customer Care</h3>
          <a href="#help">Help Centre & FAQ</a>
          <a href="#help">Delivery & Shipping</a>
          <a href="#help">7-Day Return Policy</a>
          <a href="#help">Track Your Order</a>
        </div>
        <div class="footer-col footer-contact">
          <h3>Get In Touch</h3>
          <p>Kathmandu, Nepal</p>
          <a href="mailto:support@bazaarhub.com">✉ support@bazaarhub.com</a>
          <span>◷ Sun – Fri, 9:00 AM – 7:00 PM</span>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <span>© ${new Date().getFullYear()} ${BRAND_NAME} Nepal. Built with Sunset Orange & Midnight Obsidian aesthetic.</span>
          <span>Made for happy shopping & smart selling <b>♥</b></span>
        </div>
      </div>
    </footer>
  `;

  el.querySelectorAll(".footer-role-link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      loginAsRole(link.dataset.role);
    });
  });
}

/* ============================================================
   PRODUCT CATALOG RENDERING
   ============================================================ */
function productCard(p) {
  return `
    <article class="product-card" data-product="${p.id}">
      <div class="product-image">
        <img src="${imageUrl(p.image)}" alt="${p.name}" loading="lazy">
        <span class="discount-tag">${p.tag || '-20%'}</span>
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
        <button class="wish-button" aria-label="Add ${p.name} to wishlist">♡</button>
        <button class="quick-add" data-add="${p.id}">＋ Quick add</button>
      </div>
      <div class="product-info">
        <span class="product-category">${p.category}</span>
        <h3>${p.name}</h3>
        <div class="rating">
          <span>★</span> ${p.rating || '4.8'} <small>(${p.reviews || 42})</small>
        </div>
        <div class="price-row">
          <strong>${money(p.price)}</strong>
          <del>${money(p.old || Math.round(p.price * 1.3))}</del>
        </div>
      </div>
    </article>
  `;
}

function renderProducts(id, items) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = items.map(p => productCard(p)).join("");
}

function renderCategories() {
  const el = document.getElementById("category-grid");
  if (!el) return;
  el.innerHTML = categories.map(c => `
    <button class="category-card ${c.tone}" data-category="${c.name}">
      <span class="category-photo">
        <img src="${imageUrl(c.image)}" alt="" loading="lazy">
      </span>
      <span class="category-icon">${c.icon}</span>
      <b>${c.name}</b>
      <small>${c.sub}</small>
      <span class="category-arrow">↗</span>
    </button>
  `).join("");

  el.addEventListener("click", e => {
    const b = e.target.closest("[data-category]");
    if (b) {
      document.getElementById("site-search").value = b.dataset.category;
      filterProducts(b.dataset.category);
      document.getElementById("featured").scrollIntoView({ behavior: "smooth" });
    }
  });
}

function showDefaultProducts() {
  renderProducts("featured-products", products.slice(0, 4));
  renderProducts("flash-products", [products[1], products[0], products[4], products[8]]);
  renderProducts("trending-products", [products[2], products[3], products[5]]);
}

function filterProducts(query) {
  const q = query.toLowerCase().trim();
  const found = products.filter(p => (p.name + " " + p.category).toLowerCase().includes(q));
  const el = document.getElementById("featured-products");
  if (!el) return;

  el.innerHTML = found.length
    ? found.map(productCard).join("")
    : `<div class="empty-results">
        <span>⌕</span>
        <h3>No products found</h3>
        <p>Try searching with another keyword or category name.</p>
        <button class="button button--primary" id="clear-search" style="margin-top: 14px;">Show all products</button>
       </div>`;

  const heading = document.querySelector("#featured .section-head h2");
  if (heading) heading.textContent = `Search results for “${query}”`;

  document.getElementById("clear-search")?.addEventListener("click", () => {
    if (heading) heading.textContent = "Featured products";
    document.getElementById("site-search").value = "";
    showDefaultProducts();
  });
}

/* ============================================================
   HERO SLIDER
   ============================================================ */
function changeSlide(next) {
  const slides = [...document.querySelectorAll(".hero-slide")];
  const dots = [...document.querySelectorAll(".slider-dots button")];
  if (!slides.length) return;
  activeSlide = (next + slides.length) % slides.length;
  slides.forEach((s, i) => s.classList.toggle("is-active", i === activeSlide));
  dots.forEach((d, i) => d.classList.toggle("is-active", i === activeSlide));
}

function startSlider() {
  document.getElementById("slide-prev")?.addEventListener("click", () => {
    changeSlide(activeSlide - 1);
    resetSlider();
  });
  document.getElementById("slide-next")?.addEventListener("click", () => {
    changeSlide(activeSlide + 1);
    resetSlider();
  });
  document.getElementById("slider-dots")?.addEventListener("click", e => {
    const i = [...e.currentTarget.children].indexOf(e.target);
    if (i >= 0) {
      changeSlide(i);
      resetSlider();
    }
  });
  const slider = document.getElementById("hero-slider");
  if (slider) {
    slider.addEventListener("mouseenter", () => clearInterval(slideTimer));
    slider.addEventListener("mouseleave", resetSlider);
  }
  resetSlider();
}

function resetSlider() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => changeSlide(activeSlide + 1), 5500);
}

/* ============================================================
   CART SYSTEM
   ============================================================ */
function updateCart() {
  document.querySelectorAll(".cart-count").forEach(el => {
    el.textContent = cart.reduce((n, x) => n + x.qty, 0);
  });
  const subtotalEl = document.getElementById("cart-subtotal");
  if (subtotalEl) {
    subtotalEl.textContent = money(cart.reduce((n, x) => n + x.price * x.qty, 0));
  }
  localStorage.setItem("bazaarhub-cart", JSON.stringify(cart));
  const el = document.getElementById("cart-items");
  if (!el) return;

  el.innerHTML = cart.length
    ? cart.map(x => `
        <div class="cart-item">
          <img src="${imageUrl(x.image)}" alt="">
          <div>
            <b>${x.name}</b>
            <span>${money(x.price)}</span>
            <div class="quantity">
              <button data-qty="${x.id}" data-change="-1" aria-label="Decrease quantity">−</button>
              <span>${x.qty}</span>
              <button data-qty="${x.id}" data-change="1" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <button class="remove-item" data-remove="${x.id}" aria-label="Remove item">×</button>
        </div>
      `).join("")
    : `
        <div class="cart-empty">
          <span>♧</span>
          <h3>Your bag is empty</h3>
          <p>Add some vibrant discoveries to get started.</p>
        </div>
      `;
}

function addToCart(id) {
  const p = products.find(x => x.id === Number(id));
  if (!p) return;
  const existing = cart.find(x => x.id === p.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...p, qty: 1 });
  }
  updateCart();
  showToast(`Added “${p.name}” to your bag`);
}

function openCart() {
  document.getElementById("cart-drawer")?.classList.add("is-open");
  document.getElementById("cart-overlay")?.classList.add("is-open");
  document.getElementById("cart-drawer")?.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
}

function closeCart() {
  document.getElementById("cart-drawer")?.classList.remove("is-open");
  document.getElementById("cart-overlay")?.classList.remove("is-open");
  document.getElementById("cart-drawer")?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
}

/* ============================================================
   TOAST NOTIFICATION & COUNTDOWN
   ============================================================ */
let toastTimer;
function showToast(message) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.innerHTML = `<span>✓</span> <span>${message}</span>`;
  t.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("is-visible"), 2800);
}

function startCountdown() {
  let remaining = 8 * 3600 + 24 * 60 + 36;
  const el = document.getElementById("countdown");
  if (!el) return;
  setInterval(() => {
    remaining = remaining > 0 ? remaining - 1 : 8 * 3600 + 24 * 60 + 36;
    const h = String(Math.floor(remaining / 3600)).padStart(2, "0");
    const m = String(Math.floor((remaining % 3600) / 60)).padStart(2, "0");
    const s = String(remaining % 60).padStart(2, "0");
    el.innerHTML = `<b>${h}</b><i>:</i><b>${m}</b><i>:</i><b>${s}</b>`;
  }, 1000);
}

/* ============================================================
   AUTHENTICATION SYSTEM & MODAL
   ============================================================ */
function openAuthModal(role = "customer") {
  authModalRole = role;
  const modal = document.getElementById("auth-modal");
  const overlay = document.getElementById("auth-overlay");
  if (!modal || !overlay) return;

  // Set active tab
  document.querySelectorAll(".auth-role-tab").forEach(tab => {
    tab.classList.toggle("is-active", tab.dataset.role === role);
  });

  // Update prefilled credentials
  updateAuthFormFields(role);

  modal.classList.add("is-open");
  overlay.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeAuthModal() {
  const modal = document.getElementById("auth-modal");
  const overlay = document.getElementById("auth-overlay");
  if (!modal || !overlay) return;
  modal.classList.remove("is-open");
  overlay.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

function updateAuthFormFields(role) {
  const emailInput = document.getElementById("auth-email");
  const submitBtn = document.getElementById("auth-submit-btn");
  const subTitle = document.getElementById("auth-subtitle");

  const roleNames = { customer: "Customer", seller: "Seller", admin: "Admin" };
  const demoEmails = {
    customer: "sarah@customer.com",
    seller: "ram@kathmanducrafts.com",
    admin: "admin@bazaarhub.com"
  };

  if (emailInput) emailInput.value = demoEmails[role] || "";
  if (submitBtn) {
    submitBtn.innerHTML = authIsSignUp
      ? `Create ${roleNames[role]} Account <span>→</span>`
      : `Sign In as ${roleNames[role]} <span>→</span>`;
  }
  if (subTitle) {
    subTitle.textContent = authIsSignUp
      ? `Register a new ${roleNames[role]} account`
      : `Sign in to access your ${roleNames[role]} workspace`;
  }
}

function loginAsRole(role) {
  const user = demoUsers[role];
  if (!user) return;
  currentUser = user;
  localStorage.setItem("bazaarhub-user", JSON.stringify(currentUser));
  closeAuthModal();
  renderHeader();
  updateRolePillHighlights();
  showToast(`Logged in successfully as ${user.name} (${role.toUpperCase()})`);
  switchToDashboard(role);
}

function logoutUser() {
  currentUser = null;
  localStorage.removeItem("bazaarhub-user");
  renderHeader();
  updateRolePillHighlights();
  showToast("Logged out successfully");
  switchToStorefront();
}

function updateRolePillHighlights() {
  const activeRole = currentView === "dashboard" && currentUser ? currentUser.role : "storefront";
  document.querySelectorAll(".role-pill").forEach(pill => {
    pill.classList.toggle("is-active", pill.dataset.quickRole === activeRole);
  });
}

/* ============================================================
   VIEW SWITCHING: STOREFRONT VS DASHBOARDS
   ============================================================ */
function switchToStorefront() {
  currentView = "storefront";
  document.getElementById("main-content").style.display = "block";
  document.getElementById("dashboard-view").style.display = "none";
  renderHeader();
  updateRolePillHighlights();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function switchToDashboard(role = "customer") {
  if (!currentUser || currentUser.role !== role) {
    currentUser = demoUsers[role];
    localStorage.setItem("bazaarhub-user", JSON.stringify(currentUser));
  }
  currentView = "dashboard";
  document.getElementById("main-content").style.display = "none";
  const dashView = document.getElementById("dashboard-view");
  dashView.style.display = "block";

  renderHeader();
  updateRolePillHighlights();
  renderDashboard(role);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ============================================================
   MULTI-ROLE DASHBOARD RENDERING ENGINE
   ============================================================ */
function renderDashboard(role) {
  const container = document.getElementById("dashboard-view");
  if (!container) return;

  if (role === "customer") renderCustomerDashboard(container);
  else if (role === "seller") renderSellerDashboard(container);
  else if (role === "admin") renderAdminDashboard(container);
}

/* ------------------------------------------------------------
   1. CUSTOMER DASHBOARD
   ------------------------------------------------------------ */
function renderCustomerDashboard(container) {
  const u = demoUsers.customer;
  container.innerHTML = `
    <!-- Top Action Nav -->
    <div class="dash-navbar">
      <div class="container dash-navbar__inner">
        <button class="dash-back-btn" id="dash-back-store">
          <span>←</span> Back to Storefront
        </button>
        <div class="dash-role-indicator">
          <span class="dash-role-badge customer">🛍️ Customer Dashboard</span>
        </div>
        <div class="dash-switcher-tabs">
          <button class="dash-tab-pill is-active" data-switch="customer">Customer</button>
          <button class="dash-tab-pill" data-switch="seller">Seller Hub</button>
          <button class="dash-tab-pill" data-switch="admin">Admin Portal</button>
        </div>
      </div>
    </div>

    <!-- Header Banner -->
    <div class="container dash-header-banner">
      <div class="dash-header-card">
        <div class="dash-user-meta">
          <img src="${u.avatar}" alt="${u.name}" class="dash-avatar-large">
          <div class="dash-user-info">
            <h2>Welcome back, ${u.name}!</h2>
            <p>✉ ${u.email} &nbsp;·&nbsp; 📍 ${u.location}</p>
            <div class="dash-badge-row">
              <span class="dash-tag dash-tag--orange">${u.tier}</span>
              <span class="dash-tag dash-tag--green">✓ Phone Verified</span>
            </div>
          </div>
        </div>
        <div class="dash-actions-right">
          <button class="button button--primary" id="btn-browse-more">
            Shop New Arrivals <span>↗</span>
          </button>
        </div>
      </div>

      <!-- Quick Metrics -->
      <div class="dash-kpis">
        <div class="dash-kpi-card">
          <div class="kpi-icon-wrap orange">💳</div>
          <div class="kpi-text">
            <span>BazaarHub Wallet</span>
            <strong>${money(u.wallet)}</strong>
            <small>Instant checkout ready</small>
          </div>
        </div>
        <div class="dash-kpi-card">
          <div class="kpi-icon-wrap amber">⭐</div>
          <div class="kpi-text">
            <span>Reward Points</span>
            <strong>${u.points} pts</strong>
            <small>Redeemable for Rs. 350 discount</small>
          </div>
        </div>
        <div class="dash-kpi-card">
          <div class="kpi-icon-wrap blue">📦</div>
          <div class="kpi-text">
            <span>Total Orders</span>
            <strong>${u.orders.length} placed</strong>
            <small>1 order currently on way</small>
          </div>
        </div>
        <div class="dash-kpi-card">
          <div class="kpi-icon-wrap green">🎟️</div>
          <div class="kpi-text">
            <span>Active Coupons</span>
            <strong>${u.coupons.length} vouchers</strong>
            <small>Up to 20% savings available</small>
          </div>
        </div>
      </div>

      <!-- Inner Tabs & Content -->
      <div class="dash-content-area">
        <div class="dash-subtabs">
          <button class="dash-subtab is-active" data-tab="orders">📦 My Orders (${u.orders.length})</button>
          <button class="dash-subtab" data-tab="wishlist">♡ Saved Wishlist</button>
          <button class="dash-subtab" data-tab="addresses">📍 Delivery Addresses</button>
          <button class="dash-subtab" data-tab="coupons">🎟️ Available Coupons</button>
        </div>

        <!-- Orders Panel -->
        <div id="customer-panel-orders" class="dash-panel">
          <div class="dash-card">
            <div class="dash-card-header">
              <div>
                <h3>Recent Purchases & Delivery Status</h3>
                <p>Track your parcels live across Nepal</p>
              </div>
            </div>

            <!-- Active Order Tracker Preview -->
            <div style="background: #fff8f5; border: 1.5px solid var(--primary-border); border-radius: 12px; padding: 20px; margin-bottom: 22px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                <div>
                  <span style="font-size:11px; font-weight:800; color:var(--primary); text-transform:uppercase;">Live Tracking Active</span>
                  <h4 style="margin:2px 0 0; font-size:15px; font-weight:800;">Order #ORD-9821 · Aura Wireless Headphones</h4>
                </div>
                <span class="status-badge in-transit">🚚 In Transit</span>
              </div>
              
              <div class="order-tracker">
                <div class="tracker-step done">
                  <div class="tracker-dot">✓</div>
                  <span>Order Placed</span>
                </div>
                <div class="tracker-step done">
                  <div class="tracker-dot">✓</div>
                  <span>Packed & Ready</span>
                </div>
                <div class="tracker-step current">
                  <div class="tracker-dot">●</div>
                  <span>Out for Delivery</span>
                </div>
                <div class="tracker-step">
                  <div class="tracker-dot">○</div>
                  <span>Delivered</span>
                </div>
              </div>
              <p style="margin:0; font-size:11.5px; color:#64748b; text-align:center;">Estimated Delivery: <b>Tomorrow by 2:00 PM (Kathmandu Valley)</b></p>
            </div>

            <div class="dash-table-wrap">
              <table class="dash-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Product</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${u.orders.map(o => `
                    <tr>
                      <td><b>#${o.id}</b></td>
                      <td>
                        <div class="product-cell">
                          <img src="${imageUrl(o.thumb)}" alt="">
                          <div>
                            <b>${o.product}</b>
                            <small>Qty: ${o.qty}</small>
                          </div>
                        </div>
                      </td>
                      <td>${o.date}</td>
                      <td><b>${money(o.price)}</b></td>
                      <td><span class="status-badge ${o.status.toLowerCase().replace(' ', '-')}">${o.status}</span></td>
                      <td>
                        <button class="action-btn-sm outline" onclick="alert('Viewing invoice for ${o.id}')">Invoice</button>
                      </td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Wishlist Panel -->
        <div id="customer-panel-wishlist" class="dash-panel" style="display: none;">
          <div class="dash-card">
            <div class="dash-card-header">
              <div>
                <h3>My Saved Items</h3>
                <p>Items you saved to buy later</p>
              </div>
            </div>
            <div class="dash-grid-cards">
              ${products.slice(2, 5).map(p => `
                <div class="dash-card-item">
                  <img src="${imageUrl(p.image)}" alt="" style="width:100%; height:140px; object-fit:cover; border-radius:8px; margin-bottom:12px;">
                  <h4>${p.name}</h4>
                  <p style="color:var(--primary); font-weight:800; font-size:14px;">${money(p.price)}</p>
                  <button class="action-btn-sm primary" data-add="${p.id}" style="width:100%;">Add to Cart</button>
                </div>
              `).join("")}
            </div>
          </div>
        </div>

        <!-- Addresses Panel -->
        <div id="customer-panel-addresses" class="dash-panel" style="display: none;">
          <div class="dash-card">
            <div class="dash-card-header">
              <div>
                <h3>Saved Delivery Addresses</h3>
                <p>Manage your home, work and pickup locations</p>
              </div>
              <button class="action-btn-sm primary" onclick="showToast('New address modal opened')">＋ Add New Address</button>
            </div>
            <div class="dash-grid-cards">
              ${u.addresses.map(a => `
                <div class="dash-card-item">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <span class="dash-tag ${a.isDefault ? 'dash-tag--orange' : ''}">${a.label}</span>
                    ${a.isDefault ? '<small style="color:var(--primary); font-weight:700;">Default</small>' : ''}
                  </div>
                  <p style="font-size:13px; color:var(--ink); line-height:1.5;">${a.text}</p>
                  <div style="display:flex; gap:8px; margin-top:12px;">
                    <button class="action-btn-sm outline">Edit</button>
                    ${!a.isDefault ? '<button class="action-btn-sm outline" onclick="showToast(\'Address set as default\')">Set Default</button>' : ''}
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>

        <!-- Coupons Panel -->
        <div id="customer-panel-coupons" class="dash-panel" style="display: none;">
          <div class="dash-card">
            <div class="dash-card-header">
              <div>
                <h3>Your Active Coupons & Discounts</h3>
                <p>Apply these voucher codes during checkout</p>
              </div>
            </div>
            <div class="dash-grid-cards">
              ${u.coupons.map(c => `
                <div class="dash-card-item" style="border:1.5px dashed var(--primary-border); background:#fff9f5;">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                    <strong style="color:var(--primary); font-size:16px;">${c.code}</strong>
                    <span class="dash-tag dash-tag--orange">${c.discount}</span>
                  </div>
                  <p style="margin-bottom:8px;">${c.desc}</p>
                  <small style="color:var(--muted); display:block; margin-bottom:12px;">Valid until: ${c.expiry}</small>
                  <button class="action-btn-sm outline" onclick="navigator.clipboard?.writeText('${c.code}'); showToast('Coupon code copied: ${c.code}')">Copy Voucher Code</button>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  attachDashboardEvents(container, "customer");
}

/* ------------------------------------------------------------
   2. SELLER DASHBOARD (MERCHANT HUB)
   ------------------------------------------------------------ */
function renderSellerDashboard(container) {
  const s = demoUsers.seller;
  container.innerHTML = `
    <!-- Top Action Nav -->
    <div class="dash-navbar">
      <div class="container dash-navbar__inner">
        <button class="dash-back-btn" id="dash-back-store">
          <span>←</span> Back to Storefront
        </button>
        <div class="dash-role-indicator">
          <span class="dash-role-badge seller">🏪 Merchant Seller Hub</span>
        </div>
        <div class="dash-switcher-tabs">
          <button class="dash-tab-pill" data-switch="customer">Customer</button>
          <button class="dash-tab-pill is-active" data-switch="seller">Seller Hub</button>
          <button class="dash-tab-pill" data-switch="admin">Admin Portal</button>
        </div>
      </div>
    </div>

    <!-- Header Banner -->
    <div class="container dash-header-banner">
      <div class="dash-header-card">
        <div class="dash-user-meta">
          <img src="${s.avatar}" alt="${s.name}" class="dash-avatar-large">
          <div class="dash-user-info">
            <h2>${s.storeName}</h2>
            <p>Merchant: ${s.name} &nbsp;·&nbsp; ✉ ${s.email} &nbsp;·&nbsp; 📞 ${s.phone}</p>
            <div class="dash-badge-row">
              <span class="dash-tag dash-tag--green">✓ Verified Merchant</span>
              <span class="dash-tag dash-tag--orange">${s.rating}</span>
            </div>
          </div>
        </div>
        <div class="dash-actions-right">
          <button class="dash-add-product-btn" id="btn-seller-add-product">
            ＋ Add New Product
          </button>
        </div>
      </div>

      <!-- Seller Metrics -->
      <div class="dash-kpis">
        <div class="dash-kpi-card">
          <div class="kpi-icon-wrap orange">💰</div>
          <div class="kpi-text">
            <span>Total Sales Revenue</span>
            <strong>${money(s.revenue)}</strong>
            <small>▲ +18.4% growth this month</small>
          </div>
        </div>
        <div class="dash-kpi-card">
          <div class="kpi-icon-wrap amber">📦</div>
          <div class="kpi-text">
            <span>Orders Today</span>
            <strong>${s.ordersToday} orders</strong>
            <small>4 orders pending dispatch</small>
          </div>
        </div>
        <div class="dash-kpi-card">
          <div class="kpi-icon-wrap blue">🏷️</div>
          <div class="kpi-text">
            <span>Active Listings</span>
            <strong>${products.length} products</strong>
            <small>Live on Marketplace</small>
          </div>
        </div>
        <div class="dash-kpi-card">
          <div class="kpi-icon-wrap green">🏦</div>
          <div class="kpi-text">
            <span>Available Payout</span>
            <strong>${money(s.payoutAvailable)}</strong>
            <small>${s.bank}</small>
          </div>
        </div>
      </div>

      <!-- Inner Tabs & Content -->
      <div class="dash-content-area">
        <div class="dash-subtabs">
          <button class="dash-subtab is-active" data-tab="products">🏷️ Product Inventory (${products.length})</button>
          <button class="dash-subtab" data-tab="orders">📦 Orders to Fulfill (${s.incomingOrders.length})</button>
          <button class="dash-subtab" data-tab="finance">💵 Payouts & Finance</button>
        </div>

        <!-- Inventory Tab -->
        <div id="seller-panel-products" class="dash-panel">
          <div class="dash-card">
            <div class="dash-card-header">
              <div>
                <h3>Store Product Catalog</h3>
                <p>Manage your listings, prices, discounts and stock units</p>
              </div>
              <button class="action-btn-sm primary" id="btn-seller-add-quick">＋ Add Product</button>
            </div>

            <div class="dash-table-wrap">
              <table class="dash-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${products.map(p => `
                    <tr id="seller-row-${p.id}">
                      <td>
                        <div class="product-cell">
                          <img src="${imageUrl(p.image)}" alt="">
                          <div>
                            <b>${p.name}</b>
                            <small>SKU: BH-PRD-${p.id}</small>
                          </div>
                        </div>
                      </td>
                      <td>${p.category}</td>
                      <td><b>${money(p.price)}</b></td>
                      <td><b>${p.stock || 25} units</b></td>
                      <td><span class="status-badge active">● Live</span></td>
                      <td>
                        <button class="action-btn-sm danger" onclick="deleteProductAsSeller(${p.id})">Delete</button>
                      </td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Orders Tab -->
        <div id="seller-panel-orders" class="dash-panel" style="display: none;">
          <div class="dash-card">
            <div class="dash-card-header">
              <div>
                <h3>Orders Awaiting Dispatch</h3>
                <p>Pack items carefully and hand them to the courier</p>
              </div>
            </div>
            <div class="dash-table-wrap">
              <table class="dash-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Item Ordered</th>
                    <th>Total</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Fulfill</th>
                  </tr>
                </thead>
                <tbody id="seller-orders-tbody">
                  ${s.incomingOrders.map(o => `
                    <tr>
                      <td><b>#${o.id}</b></td>
                      <td>${o.buyer}</td>
                      <td>${o.item} (x${o.qty})</td>
                      <td><b>${money(o.total)}</b></td>
                      <td>${o.date}</td>
                      <td><span class="status-badge ${o.status === 'Shipped' ? 'delivered' : 'pending'}">${o.status}</span></td>
                      <td>
                        ${o.status === 'Processing'
                          ? `<button class="action-btn-sm primary" onclick="markOrderShipped('${o.id}', this)">Ship Order</button>`
                          : `<span style="color:#059669; font-weight:700; font-size:11px;">✓ Shipped</span>`
                        }
                      </td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Finance Tab -->
        <div id="seller-panel-finance" class="dash-panel" style="display: none;">
          <div class="dash-card">
            <div class="dash-card-header">
              <div>
                <h3>Earnings & Bank Settlements</h3>
                <p>Settled weekly directly into your bank account</p>
              </div>
              <button class="action-btn-sm primary" onclick="showToast('Payout request of ${money(s.payoutAvailable)} initiated successfully')">Withdraw Now</button>
            </div>
            <div class="dash-grid-cards">
              <div class="dash-card-item">
                <span class="dash-tag dash-tag--orange">Linked Payout Account</span>
                <h4 style="margin-top:10px;">${s.bank}</h4>
                <p>Account Holder: Ram Sharma<br>Branch: Durbarmarg, Kathmandu</p>
                <button class="action-btn-sm outline">Update Account</button>
              </div>
              <div class="dash-card-item">
                <span class="dash-tag dash-tag--green">Next Scheduled Payout</span>
                <h4 style="margin-top:10px;">Friday, Nov 20, 2026</h4>
                <p>Estimated Transfer: <b>${money(s.payoutAvailable)}</b><br>Platform commission fee (8%) already deducted.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  attachDashboardEvents(container, "seller");

  // Open product modal
  container.querySelector("#btn-seller-add-product")?.addEventListener("click", openSellerProductModal);
  container.querySelector("#btn-seller-add-quick")?.addEventListener("click", openSellerProductModal);
}

/* ------------------------------------------------------------
   3. ADMIN DASHBOARD (PLATFORM CONTROL)
   ------------------------------------------------------------ */
function renderAdminDashboard(container) {
  const a = demoUsers.admin;
  container.innerHTML = `
    <!-- Top Action Nav -->
    <div class="dash-navbar">
      <div class="container dash-navbar__inner">
        <button class="dash-back-btn" id="dash-back-store">
          <span>←</span> Back to Storefront
        </button>
        <div class="dash-role-indicator">
          <span class="dash-role-badge admin">🛡️ Platform Administration</span>
        </div>
        <div class="dash-switcher-tabs">
          <button class="dash-tab-pill" data-switch="customer">Customer</button>
          <button class="dash-tab-pill" data-switch="seller">Seller Hub</button>
          <button class="dash-tab-pill is-active" data-switch="admin">Admin Portal</button>
        </div>
      </div>
    </div>

    <!-- Header Banner -->
    <div class="container dash-header-banner">
      <div class="dash-header-card" style="background: linear-gradient(135deg, #0b1329 0%, #152244 100%); color: #ffffff;">
        <div class="dash-user-meta">
          <img src="${a.avatar}" alt="${a.name}" class="dash-avatar-large" style="border-color:#ff9800;">
          <div class="dash-user-info">
            <h2 style="color:#ffffff;">Marketplace Master Portal</h2>
            <p style="color:#94a3b8;">Administrator: ${a.name} &nbsp;·&nbsp; ✉ ${a.email} &nbsp;·&nbsp; Full Platform Control</p>
            <div class="dash-badge-row">
              <span class="dash-tag" style="background:#ff9800; color:#ffffff;">Super Administrator</span>
              <span class="dash-tag" style="background:rgba(255,255,255,0.15); color:#ffffff;">Nepal Gateway Online</span>
            </div>
          </div>
        </div>
        <div class="dash-actions-right">
          <button class="button button--primary" onclick="showToast('Platform cache purged & refreshed')">
            Refresh Platform Stats ⟳
          </button>
        </div>
      </div>

      <!-- Admin KPIs -->
      <div class="dash-kpis">
        <div class="dash-kpi-card">
          <div class="kpi-icon-wrap orange">📈</div>
          <div class="kpi-text">
            <span>Marketplace GMV</span>
            <strong>${money(a.platformGmv)}</strong>
            <small>Total gross transactions</small>
          </div>
        </div>
        <div class="dash-kpi-card">
          <div class="kpi-icon-wrap amber">🏪</div>
          <div class="kpi-text">
            <span>Registered Merchants</span>
            <strong>${a.totalSellers} sellers</strong>
            <small>3 applications pending review</small>
          </div>
        </div>
        <div class="dash-kpi-card">
          <div class="kpi-icon-wrap blue">👥</div>
          <div class="kpi-text">
            <span>Registered Shoppers</span>
            <strong>${Number(a.totalCustomers).toLocaleString()} users</strong>
            <small>+342 new shoppers this week</small>
          </div>
        </div>
        <div class="dash-kpi-card">
          <div class="kpi-icon-wrap green">💵</div>
          <div class="kpi-text">
            <span>Platform Revenue</span>
            <strong>${money(a.commissionEarned)}</strong>
            <small>8.0% standard commission cut</small>
          </div>
        </div>
      </div>

      <!-- Inner Tabs & Content -->
      <div class="dash-content-area">
        <div class="dash-subtabs">
          <button class="dash-subtab is-active" data-tab="approvals">📋 Seller Verification Queue (${a.sellerApplications.length})</button>
          <button class="dash-subtab" data-tab="users">👥 User Moderation (${a.moderationUsers.length})</button>
          <button class="dash-subtab" data-tab="controls">⚙ Platform Settings</button>
        </div>

        <!-- Approvals Panel -->
        <div id="admin-panel-approvals" class="dash-panel">
          <div class="dash-card">
            <div class="dash-card-header">
              <div>
                <h3>Merchant Verification Queue</h3>
                <p>Verify business documents and approve stores to sell on BazaarHub</p>
              </div>
            </div>
            <div class="dash-table-wrap">
              <table class="dash-table">
                <thead>
                  <tr>
                    <th>Store Name</th>
                    <th>Owner</th>
                    <th>Category</th>
                    <th>Verification Docs</th>
                    <th>Status</th>
                    <th>Review Action</th>
                  </tr>
                </thead>
                <tbody id="admin-approvals-tbody">
                  ${a.sellerApplications.map(app => `
                    <tr id="row-${app.id}">
                      <td><b>${app.store}</b></td>
                      <td>${app.owner}</td>
                      <td>${app.category}</td>
                      <td><span style="color:#0284c7; font-weight:700;">${app.docs}</span></td>
                      <td><span class="status-badge ${app.status === 'Approved' ? 'active' : (app.status === 'Rejected' ? 'suspended' : 'pending')}">${app.status}</span></td>
                      <td>
                        ${app.status === 'Pending' ? `
                          <div style="display:flex; gap:6px;">
                            <button class="action-btn-sm primary" onclick="approveSeller('${app.id}', '${app.store}')">Approve ✓</button>
                            <button class="action-btn-sm danger" onclick="rejectSeller('${app.id}', '${app.store}')">Reject ✕</button>
                          </div>
                        ` : `
                          <span style="font-weight:700; font-size:11.5px; color:${app.status === 'Approved' ? '#059669' : '#b91c1c'}">${app.status}</span>
                        `}
                      </td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- User Moderation Panel -->
        <div id="admin-panel-users" class="dash-panel" style="display: none;">
          <div class="dash-card">
            <div class="dash-card-header">
              <div>
                <h3>User Accounts & Moderation</h3>
                <p>Manage access, verify identities or suspend abusive accounts</p>
              </div>
            </div>
            <div class="dash-table-wrap">
              <table class="dash-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Joined</th>
                    <th>Status</th>
                    <th>Moderation</th>
                  </tr>
                </thead>
                <tbody>
                  ${a.moderationUsers.map(u => `
                    <tr>
                      <td><b>${u.name}</b></td>
                      <td>${u.email}</td>
                      <td><span class="dash-tag ${u.role === 'Seller' ? 'dash-tag--orange' : (u.role === 'Admin' ? 'dash-tag--green' : '')}">${u.role}</span></td>
                      <td>${u.joined}</td>
                      <td><span class="status-badge ${u.status === 'Active' ? 'active' : 'suspended'}">${u.status}</span></td>
                      <td>
                        <button class="action-btn-sm ${u.status === 'Active' ? 'danger' : 'primary'}" onclick="toggleUserStatus(${u.id}, this)">
                          ${u.status === 'Active' ? 'Suspend' : 'Activate'}
                        </button>
                      </td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Platform Controls Panel -->
        <div id="admin-panel-controls" class="dash-panel" style="display: none;">
          <div class="dash-card">
            <div class="dash-card-header">
              <div>
                <h3>Marketplace Configuration</h3>
                <p>Adjust system-wide marketplace parameters</p>
              </div>
            </div>
            <div class="dash-grid-cards">
              <div class="dash-card-item">
                <h4>Platform Commission Rate</h4>
                <p>Current commission charged to sellers per transaction: <b>8.0%</b></p>
                <div style="display:flex; gap:8px; align-items:center;">
                  <input type="range" min="3" max="15" value="8" style="accent-color:var(--primary); width:100%;" oninput="this.nextElementSibling.textContent = this.value + '%'">
                  <b style="font-size:14px; color:var(--primary);">8%</b>
                </div>
                <button class="action-btn-sm primary" style="margin-top:12px;" onclick="showToast('Commission rate updated')">Save Rate</button>
              </div>

              <div class="dash-card-item">
                <h4>Flash Sale Timer</h4>
                <p>Control the homepage countdown timer duration.</p>
                <button class="action-btn-sm outline" onclick="showToast('Flash sale timer reset to 8 hours')">Reset Countdown (8h)</button>
              </div>

              <div class="dash-card-item">
                <h4>Platform Announcement</h4>
                <p>Top strip ticker message for all shoppers.</p>
                <button class="action-btn-sm outline" onclick="showToast('Announcement ticker broadcast updated')">Update Broadcast</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  attachDashboardEvents(container, "admin");
}

/* ============================================================
   DASHBOARD ACTIONS & EVENT BINDINGS
   ============================================================ */
function attachDashboardEvents(container, currentRole) {
  // Back to store
  container.querySelector("#dash-back-store")?.addEventListener("click", () => {
    switchToStorefront();
  });

  // Switch role pills in header
  container.querySelectorAll(".dash-tab-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const targetRole = pill.dataset.switch;
      switchToDashboard(targetRole);
    });
  });

  // Subtab switching
  container.querySelectorAll(".dash-subtab").forEach(tab => {
    tab.addEventListener("click", () => {
      container.querySelectorAll(".dash-subtab").forEach(t => t.classList.remove("is-active"));
      tab.classList.add("is-active");

      const tabName = tab.dataset.tab;
      container.querySelectorAll(".dash-panel").forEach(p => p.style.display = "none");
      const targetPanel = container.querySelector(`#${currentRole}-panel-${tabName}`);
      if (targetPanel) targetPanel.style.display = "block";
    });
  });

  // Browse more button
  container.querySelector("#btn-browse-more")?.addEventListener("click", () => {
    switchToStorefront();
  });
}

// Global functions for inline action buttons
window.deleteProductAsSeller = function(id) {
  if (!confirm("Are you sure you want to remove this product from your inventory?")) return;
  products = products.filter(p => p.id !== id);
  localStorage.setItem("bazaarhub-products", JSON.stringify(products));
  showToast("Product removed from catalog");
  showDefaultProducts();
  const row = document.getElementById(`seller-row-${id}`);
  if (row) row.remove();
};

window.markOrderShipped = function(orderId, btn) {
  const seller = demoUsers.seller;
  const order = seller.incomingOrders.find(o => o.id === orderId);
  if (order) order.status = "Shipped";
  btn.parentElement.innerHTML = `<span style="color:#059669; font-weight:700; font-size:11px;">✓ Shipped</span>`;
  showToast(`Order #${orderId} marked as Shipped`);
};

window.approveSeller = function(appId, storeName) {
  const app = demoUsers.admin.sellerApplications.find(a => a.id === appId);
  if (app) app.status = "Approved";
  const row = document.getElementById(`row-${appId}`);
  if (row) {
    row.querySelector("td:nth-child(5)").innerHTML = `<span class="status-badge active">Approved</span>`;
    row.querySelector("td:nth-child(6)").innerHTML = `<span style="color:#059669; font-weight:700; font-size:11.5px;">✓ Approved</span>`;
  }
  showToast(`Store “${storeName}” has been approved to sell!`);
};

window.rejectSeller = function(appId, storeName) {
  const app = demoUsers.admin.sellerApplications.find(a => a.id === appId);
  if (app) app.status = "Rejected";
  const row = document.getElementById(`row-${appId}`);
  if (row) {
    row.querySelector("td:nth-child(5)").innerHTML = `<span class="status-badge suspended">Rejected</span>`;
    row.querySelector("td:nth-child(6)").innerHTML = `<span style="color:#b91c1c; font-weight:700; font-size:11.5px;">✕ Rejected</span>`;
  }
  showToast(`Application for “${storeName}” was rejected.`);
};

window.toggleUserStatus = function(userId, btn) {
  const user = demoUsers.admin.moderationUsers.find(u => u.id === userId);
  if (!user) return;
  if (user.status === "Active") {
    user.status = "Suspended";
    btn.textContent = "Activate";
    btn.className = "action-btn-sm primary";
    btn.closest("tr").querySelector("td:nth-child(5)").innerHTML = `<span class="status-badge suspended">Suspended</span>`;
    showToast(`User ${user.name} suspended`);
  } else {
    user.status = "Active";
    btn.textContent = "Suspend";
    btn.className = "action-btn-sm danger";
    btn.closest("tr").querySelector("td:nth-child(5)").innerHTML = `<span class="status-badge active">Active</span>`;
    showToast(`User ${user.name} activated`);
  }
};

/* ============================================================
   SELLER: ADD NEW PRODUCT MODAL
   ============================================================ */
function openSellerProductModal() {
  document.getElementById("seller-product-modal")?.classList.add("is-open");
  document.getElementById("seller-product-overlay")?.classList.add("is-open");
}

function closeSellerProductModal() {
  document.getElementById("seller-product-modal")?.classList.remove("is-open");
  document.getElementById("seller-product-overlay")?.classList.remove("is-open");
}

/* ============================================================
   SETUP & EVENT LISTENERS
   ============================================================ */
document.addEventListener("click", e => {
  // Add to cart
  const add = e.target.closest("[data-add]");
  if (add) addToCart(add.dataset.add);

  // Cart quantity changes
  const qty = e.target.closest("[data-qty]");
  if (qty) {
    const item = cart.find(x => x.id === Number(qty.dataset.qty));
    if (item) {
      item.qty += Number(qty.dataset.change);
      if (item.qty < 1) cart = cart.filter(x => x.id !== item.id);
      updateCart();
    }
  }

  // Remove from cart
  const remove = e.target.closest("[data-remove]");
  if (remove) {
    cart = cart.filter(x => x.id !== Number(remove.dataset.remove));
    updateCart();
  }

  // Quick Role Pills in top bar
  const pill = e.target.closest("[data-quick-role]");
  if (pill) {
    const role = pill.dataset.quickRole;
    if (role === "storefront") {
      switchToStorefront();
    } else {
      loginAsRole(role);
    }
  }

  // Open dashboard from homepage cards
  const portal = e.target.closest("[data-open-dashboard]");
  if (portal) {
    loginAsRole(portal.dataset.openDashboard);
  }

  // Auth role tab inside modal
  const authTab = e.target.closest(".auth-role-tab");
  if (authTab) {
    document.querySelectorAll(".auth-role-tab").forEach(t => t.classList.remove("is-active"));
    authTab.classList.add("is-active");
    authModalRole = authTab.dataset.role;
    updateAuthFormFields(authModalRole);
  }

  // 1-Click fast demo login in modal
  const demoBtn = e.target.closest("[data-demo-role]");
  if (demoBtn) {
    loginAsRole(demoBtn.dataset.demoRole);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  renderCategories();
  showDefaultProducts();
  startSlider();
  startCountdown();
  updateCart();
  updateRolePillHighlights();

  // Cart modal controls
  document.getElementById("close-cart")?.addEventListener("click", closeCart);
  document.getElementById("cart-overlay")?.addEventListener("click", closeCart);
  document.getElementById("checkout-button")?.addEventListener("click", () => {
    showToast(cart.length ? "Checkout will process order in the next phase." : "Your bag is empty.");
  });

  // Newsletter form
  document.getElementById("newsletter-form")?.addEventListener("submit", e => {
    e.preventDefault();
    showToast("Thanks for subscribing! Check your email for special codes.");
    e.target.reset();
  });

  // Hero seller button
  document.getElementById("hero-seller-btn")?.addEventListener("click", () => {
    loginAsRole("seller");
  });

  // Auth modal controls
  document.getElementById("close-auth")?.addEventListener("click", closeAuthModal);
  document.getElementById("auth-overlay")?.addEventListener("click", closeAuthModal);

  // Toggle between Sign In and Sign Up in modal
  document.getElementById("toggle-auth-action")?.addEventListener("click", () => {
    authIsSignUp = !authIsSignUp;
    const nameGroup = document.getElementById("name-group");
    const rememberRow = document.getElementById("remember-row");
    const toggleText = document.getElementById("auth-toggle-text");

    if (authIsSignUp) {
      nameGroup.style.display = "flex";
      rememberRow.style.display = "none";
      toggleText.innerHTML = `Already have an account? <button type="button" id="toggle-auth-action" class="link-btn">Sign in</button>`;
    } else {
      nameGroup.style.display = "none";
      rememberRow.style.display = "flex";
      toggleText.innerHTML = `Don't have an account? <button type="button" id="toggle-auth-action" class="link-btn">Create one now</button>`;
    }
    updateAuthFormFields(authModalRole);
  });

  // Auth form submit
  document.getElementById("auth-form")?.addEventListener("submit", e => {
    e.preventDefault();
    loginAsRole(authModalRole);
  });

  // Seller add product modal controls
  document.getElementById("close-product-modal")?.addEventListener("click", closeSellerProductModal);
  document.getElementById("seller-product-overlay")?.addEventListener("click", closeSellerProductModal);

  document.getElementById("seller-add-product-form")?.addEventListener("submit", e => {
    e.preventDefault();
    const title = document.getElementById("new-product-name").value.trim();
    const cat = document.getElementById("new-product-category").value;
    const price = Number(document.getElementById("new-product-price").value);
    const oldPrice = Number(document.getElementById("new-product-old").value);
    const stock = Number(document.getElementById("new-product-stock").value) || 30;
    const img = document.getElementById("new-product-image").value.trim() || "photo-1546868871-7041f2a55e12";

    const newProd = {
      id: Date.now(),
      name: title,
      category: cat,
      price: price,
      old: oldPrice,
      tag: `-${Math.round((1 - price/oldPrice) * 100)}%`,
      rating: "5.0",
      reviews: 1,
      image: img,
      badge: "New",
      stock: stock
    };

    products.unshift(newProd);
    localStorage.setItem("bazaarhub-products", JSON.stringify(products));
    closeSellerProductModal();
    e.target.reset();

    showToast(`Published “${title}” to BazaarHub marketplace!`);
    showDefaultProducts();

    // If currently on seller dashboard, re-render it
    if (currentView === "dashboard" && currentUser && currentUser.role === "seller") {
      renderSellerDashboard(document.getElementById("dashboard-view"));
    }
  });
});
