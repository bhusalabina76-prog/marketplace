/* BazaarHub — Modern Multi-Role E-Commerce Marketplace & Escrow System */
"use strict";

const BRAND_NAME = "BazaarHub";
const money = n => `Rs. ${Number(n || 0).toLocaleString("en-IN")}`;

// Image helper for Unsplash
const imageUrl = id => {
  if (!id) return "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80";
  if (id.startsWith("http") || id.startsWith("data:")) return id;
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=80`;
};

/* ============================================================
   DEFAULT PERSISTED DATA STORES (100% CLOTHING & APPAREL CATALOG)
   ============================================================ */
const defaultProducts = [
  { id: 1, name: "Oversized Heavyweight Fleece Hoodie", category: "Streetwear & Hoodies", price: 2490, old: 3490, tag: "-29%", rating: "4.9", reviews: 142, image: "photo-1556905055-8f358a7a47b2", badge: "Best seller", stock: 35, sellerId: "SEL-101", sellerName: "Urban Threads Kathmandu" },
  { id: 2, name: "Classic Vintage Denim Trucker Jacket", category: "Men's Fashion", price: 3890, old: 4990, tag: "-22%", rating: "4.8", reviews: 98, image: "photo-1576995853123-5a10305d93c0", badge: "Trending", stock: 20, sellerId: "SEL-101", sellerName: "Urban Threads Kathmandu" },
  { id: 3, name: "Floral Linen Wrap Summer Dress", category: "Women's Fashion", price: 2190, old: 2890, tag: "-24%", rating: "4.9", reviews: 86, image: "photo-1515372039744-b8f02a3ae446", badge: "Popular", stock: 28, sellerId: "SEL-103", sellerName: "Lalitpur Heritage Apparels" },
  { id: 4, name: "Pure Himalayan Wool Knit Sweater", category: "Winterwear & Jackets", price: 3250, old: 4200, tag: "-23%", rating: "4.8", reviews: 112, image: "photo-1583743814966-8936f5b7be1a", badge: "", stock: 0, sellerId: "SEL-102", sellerName: "Himalayan Wool & Winterwear" },
  { id: 5, name: "Relaxed Fit Cotton Cargo Trousers", category: "Streetwear & Hoodies", price: 2290, old: 2990, tag: "-23%", rating: "4.7", reviews: 64, image: "photo-1517445312882-bc9910d016b7", badge: "", stock: 2, sellerId: "SEL-101", sellerName: "Urban Threads Kathmandu" },
  { id: 6, name: "Handcrafted Dhaka Blend Kurti Set", category: "Traditional & Ethnic", price: 2750, old: 3500, tag: "-21%", rating: "5.0", reviews: 120, image: "photo-1610030469983-98e550d6193c", badge: "Authentic", stock: 22, sellerId: "SEL-103", sellerName: "Lalitpur Heritage Apparels" },
  { id: 7, name: "Down-Filled Thermal Puffer Jacket", category: "Winterwear & Jackets", price: 4490, old: 5990, tag: "-25%", rating: "4.9", reviews: 75, image: "photo-1544923246-77307dd654cb", badge: "", stock: 3, sellerId: "SEL-102", sellerName: "Himalayan Wool & Winterwear" },
  { id: 8, name: "Vintage Washed Graphic T-Shirt", category: "Streetwear & Hoodies", price: 1290, old: 1690, tag: "-24%", rating: "4.6", reviews: 153, image: "photo-1521572267360-ee0c2909d518", badge: "", stock: 60, sellerId: "SEL-101", sellerName: "Urban Threads Kathmandu" },
  { id: 9, name: "Tailored High-Waist Wide Leg Trousers", category: "Women's Fashion", price: 2390, old: 3100, tag: "-23%", rating: "4.8", reviews: 52, image: "photo-1594633312681-425c7b97ccd1", badge: "", stock: 30, sellerId: "SEL-103", sellerName: "Lalitpur Heritage Apparels" },
  { id: 10, name: "Everyday Premium Oxford Cotton Shirt", category: "Men's Fashion", price: 1890, old: 2490, tag: "-24%", rating: "4.7", reviews: 89, image: "photo-1596755094514-f87e34085b2c", badge: "Classic", stock: 50, sellerId: "SEL-101", sellerName: "Urban Threads Kathmandu" },
  { id: 11, name: "Seamless Ribbed Athleisure Activewear Set", category: "Activewear & Loungewear", price: 2690, old: 3490, tag: "-23%", rating: "4.8", reviews: 68, image: "photo-1518611012118-696072aa579a", badge: "", stock: 25, sellerId: "SEL-101", sellerName: "Urban Threads Kathmandu" },
  { id: 12, name: "Fine Cashmere Pashmina Shawl & Stole", category: "Traditional & Ethnic", price: 3800, old: 4900, tag: "-22%", rating: "4.9", reviews: 94, image: "photo-1601924994987-69e26d50dc26", badge: "", stock: 0, sellerId: "SEL-103", sellerName: "Lalitpur Heritage Apparels" }
];

const defaultSellers = [
  {
    id: "SEL-101",
    role: "seller",
    name: "Ram Sharma",
    storeName: "Urban Threads Kathmandu",
    email: "ram@urbanthreads.np",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    phone: "+977 9812345678",
    location: "Thamel, Kathmandu",
    category: "Streetwear & Men's Fashion",
    status: "Approved",
    rating: "4.9 ★ (215 reviews)",
    revenue: 384500,
    payoutAvailable: 72400,
    bank: "Nabil Bank (A/C: 0192847291801)",
    joined: "Mar 2024"
  },
  {
    id: "SEL-102",
    role: "seller",
    name: "Anup Gurung",
    storeName: "Himalayan Wool & Winterwear",
    email: "anup@himalayanwool.np",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    phone: "+977 9801234567",
    location: "Lakeside, Pokhara",
    category: "Winterwear & Knitwear",
    status: "Approved",
    rating: "4.8 ★ (94 reviews)",
    revenue: 142000,
    payoutAvailable: 24500,
    bank: "Global IME Bank (A/C: 1102938475)",
    joined: "May 2024"
  },
  {
    id: "SEL-103",
    role: "seller",
    name: "Maya Maharjan",
    storeName: "Lalitpur Heritage Apparels",
    email: "maya@heritageapparels.com",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    phone: "+977 9860123456",
    location: "Patan Durbar Square, Lalitpur",
    category: "Traditional & Ethnic Wear",
    status: "Approved",
    rating: "5.0 ★ (42 reviews)",
    revenue: 89000,
    payoutAvailable: 15300,
    bank: "NIC Asia Bank (A/C: 2209384711)",
    joined: "Aug 2024"
  }
];

const defaultCustomers = [
  {
    id: "CUST-201",
    role: "customer",
    name: "Sarah Shrestha",
    email: "sarah@customer.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    phone: "+977 9841234567",
    location: "New Baneshwor, Kathmandu",
    tier: "🌟 Gold Shopper",
    points: 1420,
    wallet: 3850,
    status: "Active",
    joined: "Jan 2024",
    totalOrders: 3,
    totalSpent: 9630,
    addresses: [
      { id: 1, label: "Home", text: "House 42, Shanti Marga, New Baneshwor, Kathmandu", isDefault: true },
      { id: 2, label: "Office", text: "Tech Park Level 3, Pulchowk, Lalitpur", isDefault: false }
    ],
    coupons: [
      { code: "STYLE20", discount: "20% OFF", desc: "Applicable on apparel orders above Rs. 2,000", expiry: "30 Nov 2026" },
      { code: "FREESHIP", discount: "Free Delivery", desc: "Valid for all clothing categories", expiry: "15 Dec 2026" }
    ]
  },
  {
    id: "CUST-202",
    role: "customer",
    name: "Bikash Tamang",
    email: "bikash@gmail.com",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
    phone: "+977 9849876543",
    location: "Chabahil, Kathmandu",
    tier: "🆕 New Customer",
    points: 100,
    wallet: 500,
    status: "Pending",
    joined: "Today",
    totalOrders: 0,
    totalSpent: 0,
    addresses: [{ id: 1, label: "Home", text: "Chabahil Chowk, Kathmandu", isDefault: true }],
    coupons: []
  },
  {
    id: "CUST-203",
    role: "customer",
    name: "Pooja Karki",
    email: "pooja.k@outlook.com",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    phone: "+977 9811223344",
    location: "Suryabinayak, Bhaktapur",
    tier: "Bronze Shopper",
    points: 210,
    wallet: 500,
    status: "Active",
    joined: "Jun 2024",
    totalOrders: 1,
    totalSpent: 2750,
    addresses: [{ id: 1, label: "Home", text: "Suryabinayak, Ward 5, Bhaktapur", isDefault: true }],
    coupons: []
  }
];

const defaultOrders = [
  {
    id: "ORD-9821",
    date: "15 Nov 2026, 02:40 PM",
    customerName: "Sarah Shrestha",
    customerEmail: "sarah@customer.com",
    customerPhone: "+977 9841234567",
    customerAddress: "House 42, Shanti Marga, New Baneshwor, Kathmandu",
    sellerId: "SEL-101",
    sellerName: "Urban Threads Kathmandu",
    items: [
      { id: 1, name: "Oversized Heavyweight Fleece Hoodie", price: 2490, qty: 1, image: "photo-1556905055-8f358a7a47b2" }
    ],
    total: 2490,
    commissionRate: 10,
    commissionAmount: 249,
    sellerPayout: 2241,
    paymentMethod: "eSewa QR",
    txnRef: "TXN-87429184",
    proofImage: "sample-receipt-1",
    status: "In Transit",
    step: 3,
    settled: true,
    remarks: "Admin verified TXN-87429184 and credited Rs. 2,241 to Urban Threads Kathmandu."
  },
  {
    id: "ORD-9244",
    date: "02 Nov 2026, 11:15 AM",
    customerName: "Sarah Shrestha",
    customerEmail: "sarah@customer.com",
    customerPhone: "+977 9841234567",
    customerAddress: "House 42, Shanti Marga, New Baneshwor, Kathmandu",
    sellerId: "SEL-101",
    sellerName: "Urban Threads Kathmandu",
    items: [
      { id: 2, name: "Classic Vintage Denim Trucker Jacket", price: 3890, qty: 1, image: "photo-1576995853123-5a10305d93c0" }
    ],
    total: 3890,
    commissionRate: 10,
    commissionAmount: 389,
    sellerPayout: 3501,
    paymentMethod: "Khalti QR",
    txnRef: "TXN-65829103",
    proofImage: "sample-receipt-2",
    status: "Delivered",
    step: 4,
    settled: true,
    remarks: "Delivered successfully to customer."
  },
  {
    id: "ORD-8710",
    date: "19 Oct 2026, 04:20 PM",
    customerName: "Sarah Shrestha",
    customerEmail: "sarah@customer.com",
    customerPhone: "+977 9841234567",
    customerAddress: "House 42, Shanti Marga, New Baneshwor, Kathmandu",
    sellerId: "SEL-102",
    sellerName: "Himalayan Wool & Winterwear",
    items: [
      { id: 4, name: "Pure Himalayan Wool Knit Sweater", price: 3250, qty: 1, image: "photo-1583743814966-8936f5b7be1a" }
    ],
    total: 3250,
    commissionRate: 10,
    commissionAmount: 325,
    sellerPayout: 2925,
    paymentMethod: "Fonepay QR",
    txnRef: "TXN-41920482",
    proofImage: "sample-receipt-3",
    status: "Delivered",
    step: 4,
    settled: true,
    remarks: "Delivered successfully."
  }
];

const defaultAdmin = {
  role: "admin",
  name: "BazaarHub Admin",
  email: "admin@bazaarhub.com",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  platformGmv: 2490500,
  commissionEarned: 199240,
  commissionRate: 10, // 10%
  escrowAccount: "BazaarHub Escrow Central (A/C: 0192847291801, Nabil Bank)",
  fonepayId: "9841234567"
};

const categories = [
  { name: "Men's Fashion", sub: "Shirts, denim, polos & casuals", icon: "👔", tone: "blue", image: "photo-1617137984095-74e4e5e3613f" },
  { name: "Women's Fashion", sub: "Dresses, tops, skirts & trousers", icon: "👗", tone: "pink", image: "photo-1490481651871-ab68de25d43d" },
  { name: "Winterwear & Jackets", sub: "Puffers, woolens, coats & knits", icon: "🧥", tone: "peach", image: "photo-1539571696357-5a69c17a67c6" },
  { name: "Streetwear & Hoodies", sub: "Oversized hoodies, tees & cargos", icon: "🧢", tone: "lavender", image: "photo-1552374196-1ab2a1c593e8" },
  { name: "Traditional & Ethnic", sub: "Dhaka kurtis, shawls & vest sets", icon: "✨", tone: "yellow", image: "photo-1610030469983-98e550d6193c" },
  { name: "Activewear & Loungewear", sub: "Joggers, tracksuits & gym sets", icon: "🏃", tone: "green", image: "photo-1518611012118-696072aa579a" }
];

/* ============================================================
   PERSISTENCE CONTROLLER & AUTO CACHE INVALIDATION
   ============================================================ */
const APP_VERSION = "3.5";
if (localStorage.getItem("bazaarhub-app-version") !== APP_VERSION) {
  // Clear stale cache and previous non-clothing data
  localStorage.removeItem("bazaarhub-products");
  localStorage.removeItem("bazaarhub-orders");
  localStorage.removeItem("bazaarhub-sellers");
  localStorage.removeItem("bazaarhub-customers");
  localStorage.removeItem("bazaarhub-admin");
  localStorage.removeItem("bazaarhub-user");
  localStorage.setItem("bazaarhub-app-version", APP_VERSION);
}

let products = JSON.parse(localStorage.getItem("bazaarhub-products") || "null") || defaultProducts;
let sellers = JSON.parse(localStorage.getItem("bazaarhub-sellers") || "null") || defaultSellers;
let customers = JSON.parse(localStorage.getItem("bazaarhub-customers") || "null") || defaultCustomers;
let orders = JSON.parse(localStorage.getItem("bazaarhub-orders") || "null") || defaultOrders;
let adminStats = JSON.parse(localStorage.getItem("bazaarhub-admin") || "null") || defaultAdmin;

let currentUser = JSON.parse(localStorage.getItem("bazaarhub-user") || "null");
let currentView = "storefront"; // "storefront" | "dashboard"
let activeSlide = 0;
let slideTimer;
let cart = JSON.parse(localStorage.getItem("bazaarhub-cart") || "[]");
let authModalRole = "customer";
let authIsSignUp = false;

// Staging temporary uploaded proof data URL
let currentProofDataUrl = "";
let viewingProofOrder = null;

function saveAllData() {
  localStorage.setItem("bazaarhub-products", JSON.stringify(products));
  localStorage.setItem("bazaarhub-sellers", JSON.stringify(sellers));
  localStorage.setItem("bazaarhub-customers", JSON.stringify(customers));
  localStorage.setItem("bazaarhub-orders", JSON.stringify(orders));
  localStorage.setItem("bazaarhub-admin", JSON.stringify(adminStats));
  if (currentUser) {
    localStorage.setItem("bazaarhub-user", JSON.stringify(currentUser));
  }
}

/* ============================================================
   SVG QR CODE GENERATOR (Crisp Nepal Fonepay/eSewa Style)
   ============================================================ */
function generateNepalQrSvg(amount, orderId = "ORD-DEMO") {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="175" height="175" style="border-radius:8px;">
      <rect width="200" height="200" fill="#ffffff" rx="8"/>
      <!-- Top Left Position Detection Box -->
      <rect x="15" y="15" width="46" height="46" fill="#0b1329" rx="6"/>
      <rect x="23" y="23" width="30" height="30" fill="#ffffff" rx="4"/>
      <rect x="29" y="29" width="18" height="18" fill="#ff5722" rx="3"/>

      <!-- Top Right Position Detection Box -->
      <rect x="139" y="15" width="46" height="46" fill="#0b1329" rx="6"/>
      <rect x="147" y="23" width="30" height="30" fill="#ffffff" rx="4"/>
      <rect x="153" y="29" width="18" height="18" fill="#ff5722" rx="3"/>

      <!-- Bottom Left Position Detection Box -->
      <rect x="15" y="139" width="46" height="46" fill="#0b1329" rx="6"/>
      <rect x="23" y="147" width="30" height="30" fill="#ffffff" rx="4"/>
      <rect x="29" y="153" width="18" height="18" fill="#ff5722" rx="3"/>

      <!-- Realistic Data Matrix Pixels -->
      <rect x="70" y="20" width="8" height="8" fill="#0b1329"/>
      <rect x="85" y="20" width="16" height="8" fill="#0b1329"/>
      <rect x="110" y="20" width="8" height="8" fill="#0b1329"/>
      <rect x="70" y="35" width="24" height="8" fill="#0b1329"/>
      <rect x="105" y="35" width="18" height="8" fill="#0b1329"/>

      <rect x="20" y="70" width="8" height="24" fill="#0b1329"/>
      <rect x="35" y="80" width="18" height="8" fill="#0b1329"/>
      <rect x="20" y="105" width="16" height="8" fill="#0b1329"/>
      <rect x="45" y="115" width="8" height="16" fill="#0b1329"/>

      <rect x="70" y="70" width="16" height="16" fill="#0b1329"/>
      <rect x="115" y="70" width="14" height="16" fill="#0b1329"/>
      <rect x="140" y="80" width="20" height="8" fill="#0b1329"/>
      <rect x="170" y="70" width="15" height="14" fill="#0b1329"/>

      <rect x="70" y="115" width="18" height="18" fill="#0b1329"/>
      <rect x="95" y="140" width="16" height="16" fill="#0b1329"/>
      <rect x="120" y="115" width="24" height="8" fill="#0b1329"/>
      <rect x="150" y="135" width="15" height="15" fill="#0b1329"/>
      <rect x="170" y="155" width="15" height="25" fill="#0b1329"/>
      <rect x="115" y="160" width="20" height="12" fill="#0b1329"/>
      <rect x="70" y="165" width="15" height="15" fill="#0b1329"/>

      <!-- Center Logo Watermark: BazaarHub Nepal -->
      <circle cx="100" cy="100" r="22" fill="#ffffff" stroke="#ff5722" stroke-width="3"/>
      <text x="100" y="107" font-family="Arial, sans-serif" font-weight="900" font-size="20" fill="#ff5722" text-anchor="middle">B</text>
    </svg>
  `;
}

/* ============================================================
   DEMO PAYMENT RECEIPT GENERATOR (eSewa / Fonepay Digital Slip)
   ============================================================ */
function generateDemoReceiptDataUrl(orderId, amount, txnRef, channel = "eSewa QR", payer = "Sarah Shrestha") {
  const dateStr = new Date().toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 460" width="360" height="460">
      <defs>
        <linearGradient id="slipGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#059669"/>
          <stop offset="100%" stop-color="#047857"/>
        </linearGradient>
      </defs>
      <rect width="360" height="460" fill="#f8fafc" rx="16"/>
      <!-- Header Banner -->
      <rect width="360" height="110" fill="url(#slipGrad)" rx="16"/>
      <circle cx="180" cy="45" r="22" fill="#ffffff"/>
      <text x="180" y="53" font-family="Arial, sans-serif" font-size="22" font-weight="900" fill="#059669" text-anchor="middle">✓</text>
      <text x="180" y="86" font-family="Arial, sans-serif" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">TRANSFER SUCCESSFUL</text>
      <text x="180" y="102" font-family="Arial, sans-serif" font-size="11" fill="#ecfdf5" text-anchor="middle">${channel} · Nepal</text>

      <!-- Amount Section -->
      <rect x="20" y="125" width="320" height="70" fill="#ffffff" stroke="#e2e8f0" rx="12"/>
      <text x="180" y="152" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#64748b" text-anchor="middle">TOTAL AMOUNT PAID</text>
      <text x="180" y="180" font-family="Arial, sans-serif" font-size="22" font-weight="900" fill="#0b1329" text-anchor="middle">NPR ${Number(amount).toLocaleString('en-IN')}</text>

      <!-- Details List -->
      <rect x="20" y="208" width="320" height="190" fill="#ffffff" stroke="#e2e8f0" rx="12"/>
      <g font-family="Arial, sans-serif" font-size="11.5" fill="#475569">
        <text x="36" y="235">Recipient:</text>
        <text x="324" y="235" font-weight="800" fill="#0b1329" text-anchor="end">BazaarHub Escrow Central</text>

        <text x="36" y="265">Bank / Account:</text>
        <text x="324" y="265" font-weight="700" fill="#0b1329" text-anchor="end">Nabil Bank (0192847291801)</text>

        <text x="36" y="295">Txn Reference ID:</text>
        <text x="324" y="295" font-family="monospace" font-weight="800" fill="#ff5722" text-anchor="end">${txnRef}</text>

        <text x="36" y="325">Order Reference:</text>
        <text x="324" y="325" font-weight="700" fill="#0b1329" text-anchor="end">${orderId}</text>

        <text x="36" y="355">Sender Payer:</text>
        <text x="324" y="355" font-weight="700" fill="#0b1329" text-anchor="end">${payer}</text>

        <text x="36" y="385">Payment Date:</text>
        <text x="324" y="385" font-weight="600" fill="#64748b" text-anchor="end">${dateStr}</text>
      </g>

      <!-- Security Watermark Footer -->
      <text x="180" y="425" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#059669" text-anchor="middle">🔒 SECURED BY NEPAL ESCROW GATEWAY</text>
      <text x="180" y="442" font-family="Arial, sans-serif" font-size="9" fill="#94a3b8" text-anchor="middle">Official Verified Digital Receipt Slip</text>
    </svg>
  `;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

/* ============================================================
   TOAST NOTIFICATION ENGINE
   ============================================================ */
let toastTimer;
function showToast(message) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.innerHTML = `<span>✨</span> <span>${message}</span>`;
  t.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("is-visible"), 3200);
}

/* ============================================================
   SLIDER & COUNTDOWN TIMERS
   ============================================================ */
function startSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll("#slider-dots button");
  if (!slides.length) return;

  function goToSlide(n) {
    slides.forEach((s, idx) => s.classList.toggle("is-active", idx === n));
    dots.forEach((d, idx) => d.classList.toggle("is-active", idx === n));
    activeSlide = n;
  }

  document.getElementById("slide-prev")?.addEventListener("click", () => {
    goToSlide((activeSlide - 1 + slides.length) % slides.length);
  });
  document.getElementById("slide-next")?.addEventListener("click", () => {
    goToSlide((activeSlide + 1) % slides.length);
  });
  dots.forEach((dot, idx) => dot.addEventListener("click", () => goToSlide(idx)));

  clearInterval(slideTimer);
  slideTimer = setInterval(() => {
    goToSlide((activeSlide + 1) % slides.length);
  }, 5000);
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
   PRODUCT CATALOG RENDERING & FILTERING
   ============================================================ */
function productCardHtml(p) {
  const isSoldOut = (p.stock || 0) <= 0;
  const isLowStock = !isSoldOut && p.stock <= 3;

  let badgeHtml = "";
  if (isSoldOut) {
    badgeHtml = `<span class="product-badge product-badge--out">OUT OF STOCK</span>`;
  } else if (isLowStock) {
    badgeHtml = `<span class="product-badge product-badge--low">Low Stock: ${p.stock} left</span>`;
  } else if (p.badge) {
    badgeHtml = `<span class="product-badge">${p.badge}</span>`;
  }

  const buttonHtml = isSoldOut
    ? `<button class="quick-add is-disabled" disabled title="Out of stock">Sold Out ✕</button>`
    : `<button class="quick-add" data-add="${p.id}">＋ Quick Add</button>`;

  const stockPillHtml = isSoldOut
    ? `<div class="stock-pill out" style="margin-bottom:6px;">⚠️ Out of Stock</div>`
    : (isLowStock ? `<div class="stock-pill low" style="margin-bottom:6px;">⚡ Only ${p.stock} units left!</div>` : "");

  return `
    <article class="product-card ${isSoldOut ? 'is-sold-out' : ''}" data-product-id="${p.id}">
      <div class="product-media">
        <img class="product-image" src="${imageUrl(p.image)}" alt="${p.name}" loading="lazy">
        ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ""}
        ${badgeHtml}
        ${buttonHtml}
      </div>
      <div class="product-info">
        <span class="product-category">${p.category}</span>
        <h3>${p.name}</h3>
        ${stockPillHtml}
        <div class="product-rating">
          <span class="stars">★★★★★</span>
          <b>${p.rating}</b>
          <small>(${p.reviews})</small>
        </div>
        <div class="price-row">
          <strong>${money(p.price)}</strong>
          ${p.old ? `<del>${money(p.old)}</del>` : ""}
        </div>
      </div>
    </article>
  `;
}

function showDefaultProducts() {
  const flash = document.getElementById("flash-products");
  const feat = document.getElementById("featured-products");
  const trend = document.getElementById("trending-products");

  if (flash) flash.innerHTML = products.slice(0, 4).map(productCardHtml).join("");
  if (feat) feat.innerHTML = products.slice(0, 8).map(productCardHtml).join("");
  if (trend) trend.innerHTML = products.slice(4, 9).map(productCardHtml).join("");
}

function filterProducts(query) {
  const q = query.toLowerCase().trim();
  const matched = products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  );

  const feat = document.getElementById("featured-products");
  if (!feat) return;

  if (matched.length === 0) {
    feat.innerHTML = `
      <div class="empty-results">
        <span>🔍</span>
        <h3>No matching products found</h3>
        <p>Try searching for "sneakers", "headphones", "lamp", or clear your filter.</p>
      </div>
    `;
  } else {
    feat.innerHTML = matched.map(productCardHtml).join("");
  }
}

function renderCategories() {
  const grid = document.getElementById("category-grid");
  if (!grid) return;
  grid.innerHTML = categories.map(c => `
    <a class="category-card" href="#featured" onclick="filterProducts('${c.name}')">
      <img class="category-photo" src="${imageUrl(c.image)}" alt="${c.name}">
      <span class="category-icon ${c.tone}">${c.icon}</span>
      <div class="category-title">
        <h3>${c.name}</h3>
        <p>${c.sub}</p>
      </div>
    </a>
  `).join("");
}

/* ============================================================
   SHOPPING CART CONTROLLER
   ============================================================ */
function addToCart(productId) {
  const id = Number(productId);
  const p = products.find(x => x.id === id);
  if (!p) return;

  // 1. Must be logged in as customer
  if (!currentUser) {
    showToast("⚠️ Please sign in or register to add clothes to bag.", 3200);
    openAuthModal("customer");
    return;
  }

  // Admin view reminder
  if (currentUser.role === "admin") {
    showToast("ℹ️ Store Admin view: Please switch to customer mode to shop.", 3000);
    return;
  }

  // 2. Must be approved by store admin
  if (currentUser.role === "customer" && currentUser.status === "Pending") {
    openApprovalModal(`Hello ${currentUser.name}! Your account (${currentUser.id}) is currently pending approval by the store admin. You can browse all clothes now. As soon as the admin approves your account, you will be able to add to cart and purchase!`);
    return;
  }

  // 3. Stock Check
  if ((p.stock || 0) <= 0) {
    showToast(`⚠️ Out of Stock: "${p.name}" is currently sold out!`, 3200);
    return;
  }

  const existing = cart.find(x => x.id === id);
  if (existing) {
    if (existing.qty >= p.stock) {
      showToast(`⚠️ Cannot add more: Only ${p.stock} units available in stock!`, 3000);
      return;
    }
    existing.qty += 1;
  } else {
    cart.push({
      id: p.id,
      name: p.name,
      price: p.price,
      image: p.image,
      sellerId: p.sellerId || "STORE-01",
      sellerName: p.sellerName || "BazaarHub Official Store",
      qty: 1
    });
  }
  updateCart();
  openCart();
  showToast(`Added “${p.name}” to your bag ✓`);
}

function updateCart() {
  localStorage.setItem("bazaarhub-cart", JSON.stringify(cart));
  const counts = document.querySelectorAll(".cart-count");
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  counts.forEach(c => c.textContent = totalItems);

  const list = document.getElementById("cart-items");
  const subtotalEl = document.getElementById("cart-subtotal");
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  if (subtotalEl) subtotalEl.textContent = money(subtotal);

  if (!list) return;

  if (cart.length === 0) {
    list.innerHTML = `
      <div class="cart-empty">
        <span>🛒</span>
        <h3>Your shopping cart is empty</h3>
        <p>Explore our trending marketplace collections and add everyday favorites.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${imageUrl(item.image)}" alt="${item.name}">
      <div>
        <b>${item.name}</b>
        <span>${money(item.price)}</span>
        <small style="font-size:10.5px; color:#64748b;">Sold by: ${item.sellerName || 'Verified Merchant'}</small>
        <div class="quantity">
          <button data-qty="${item.id}" data-change="-1">−</button>
          <span>${item.qty}</span>
          <button data-qty="${item.id}" data-change="1">＋</button>
        </div>
      </div>
      <button class="remove-item" data-remove="${item.id}" title="Remove item">×</button>
    </div>
  `).join("");
}

function openCart() {
  document.getElementById("cart-drawer")?.classList.add("is-open");
  document.getElementById("cart-overlay")?.classList.add("is-open");
  document.body.classList.add("drawer-open");
}

function closeCart() {
  document.getElementById("cart-drawer")?.classList.remove("is-open");
  document.getElementById("cart-overlay")?.classList.remove("is-open");
  document.body.classList.remove("drawer-open");
}

/* ============================================================
   HEADER & TOP BAR RENDERING
   ============================================================ */
function renderHeader() {
  const target = document.querySelector("#site-header");
  if (!target) return;

  let userHtml = "";
  if (currentUser) {
    if (currentUser.role === "admin") {
      userHtml = `
        <div class="header-actions-user">
          <button class="header-user-btn" id="open-user-dash" title="Open Store Admin Portal">
            <span style="font-size: 15px;">🔐</span>
            <span>Admin</span>
            <span class="user-badge-role role--admin">Store Admin</span>
          </button>
          <button class="action-btn-sm outline" id="btn-logout" title="Log out" style="padding: 6px 10px; font-size: 11px;">Logout</button>
        </div>`;
    } else {
      userHtml = `
        <div class="header-actions-user">
          <button class="header-user-btn" id="open-user-dash" title="Open Customer Profile">
            <img src="${currentUser.avatar || ''}" alt="" class="user-avatar-mini">
            <span>${(currentUser.name || 'User').split(" ")[0]}</span>
            <span class="user-badge-role ${currentUser.status === 'Pending' ? 'role--pending' : 'role--customer'}">
              ${currentUser.status === 'Pending' ? 'Pending Approval' : 'Verified Shopper'}
            </span>
          </button>
          <button class="action-btn-sm outline" id="btn-logout" title="Log out" style="padding: 6px 10px; font-size: 11px;">Logout</button>
        </div>`;
    }
  } else {
    userHtml = `
      <button class="header-login-btn" id="open-auth-btn">
        <span>👤 Sign In / Register</span>
      </button>`;
  }

  target.innerHTML = `
    <header class="site-header">
      <div class="container header-main">
        <a class="brand" href="#" id="brand-link">
          <span class="brand-mark">B</span>
          <span>Bazaar<span>Hub</span> Clothing</span>
        </a>

        <form class="search-form" id="search-form" role="search">
          <span class="search-symbol">⌕</span>
          <label class="visually-hidden" for="site-search">Search clothing</label>
          <input id="site-search" type="search" placeholder="Search for hoodies, winter jackets, dresses, shirts, kurtis…">
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

        <button class="menu-toggle" id="menu-toggle" aria-label="Toggle menu">☰</button>
      </div>

      <div class="nav-row" id="nav-row">
        <nav class="container main-nav">
          <a class="${currentView === 'storefront' ? 'active' : ''}" href="#" id="nav-home">Home</a>
          <a href="#categories">Clothing Categories</a>
          <a href="#deals">Flash Deals</a>
          <a href="#featured">Featured Clothes</a>
          <a href="#trending">Trending Styles</a>
          <a href="#" id="nav-dashboard-link">
            ${currentUser ? (currentUser.role === 'admin' ? '🛡️ Store Admin Portal' : '🛍️ My Account & Orders') : '🛍️ Track Orders & Account'}
          </a>
          <a href="#site-footer">Shop Info & Delivery</a>
          <span class="nav-note">🇳🇵 Kathmandu's Curated Clothing Store</span>
        </nav>
      </div>
    </header>
  `;

  // Attach nav handlers
  target.querySelector("#brand-link")?.addEventListener("click", e => { e.preventDefault(); switchToStorefront(); });
  target.querySelector("#nav-home")?.addEventListener("click", e => { e.preventDefault(); switchToStorefront(); });
  target.querySelector("#nav-dashboard-link")?.addEventListener("click", e => {
    e.preventDefault();
    if (currentUser) {
      if (currentUser.role === "admin") switchToDashboard("admin");
      else switchToDashboard("customer");
    } else {
      openAuthModal("customer");
    }
  });

  target.querySelector("#open-user-dash")?.addEventListener("click", () => {
    if (currentUser) {
      if (currentUser.role === "admin") switchToDashboard("admin");
      else switchToDashboard("customer");
    }
  });
  target.querySelector("#btn-logout")?.addEventListener("click", logoutUser);
  target.querySelector("#open-auth-btn")?.addEventListener("click", () => openAuthModal("customer"));

  target.querySelector("#menu-toggle")?.addEventListener("click", () => {
    target.querySelector("#nav-row")?.classList.toggle("is-open");
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

function renderFooter() {
  const el = document.querySelector("#site-footer");
  if (!el) return;
  el.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-main">
        <div class="footer-brand">
          <a class="brand brand--footer" href="#">
            <span class="brand-mark">B</span>
            <span>Bazaar<span>Hub</span> Clothing</span>
          </a>
          <p>Nepal’s premier boutique clothing store offering premium streetwear, winter knitwear, authentic ethnic apparel, and everyday fashion essentials with direct Nepal QR payment.</p>
          <div style="margin-top:14px; font-size:12px; color:#94a3b8; line-height:1.7;">
            📍 <b>Showroom:</b> New Baneshwor, Kathmandu, Nepal<br>
            📞 <b>WhatsApp / Phone:</b> +977 9841234567<br>
            ⏰ <b>Hours:</b> Sunday – Friday, 10:00 AM – 8:00 PM
          </div>
        </div>
        <div class="footer-col">
          <h4>Clothing Collections</h4>
          <ul>
            <li><a href="#categories" onclick="filterProducts('Streetwear & Hoodies'); return false;">Streetwear & Hoodies</a></li>
            <li><a href="#categories" onclick="filterProducts('Winterwear & Jackets'); return false;">Winterwear & Jackets</a></li>
            <li><a href="#categories" onclick="filterProducts('Men\'s Fashion'); return false;">Men's Fashion & Shirts</a></li>
            <li><a href="#categories" onclick="filterProducts('Women\'s Fashion'); return false;">Women's Dresses & Pants</a></li>
            <li><a href="#categories" onclick="filterProducts('Traditional & Ethnic'); return false;">Ethnic & Dhaka Kurti Sets</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Customer Care</h4>
          <ul>
            <li><a href="#" onclick="openAuthModal('customer'); return false;">Customer Login / Register</a></li>
            <li><a href="#categories">Size Guide & Fit Assistance</a></li>
            <li><a href="#deals">7-Day Free Exchange Policy</a></li>
            <li><a href="#site-footer">Kathmandu Valley 24h Delivery</a></li>
            <li><a href="#site-footer">All Nepal Courier Service</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Store Information</h4>
          <ul>
            <li><a href="#main-content">About Our Clothing Label</a></li>
            <li><a href="#site-footer">Payment via eSewa & Fonepay QR</a></li>
            <li><a href="#site-footer">Cash on Delivery (Inside Valley)</a></li>
            <li><a href="#" id="footer-admin-link" class="admin-footer-link" style="color:#94a3b8; font-size:11.5px; opacity:0.8;">🔐 Store Staff Portal</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
          <p>© 2026 BazaarHub Clothing Store Nepal. All rights reserved.</p>
          <p>Powered by <b>Nepal QR Pay</b> · Fonepay · eSewa · Khalti · Doorstep Delivery</p>
        </div>
      </div>
    </footer>
  `;

  // Attach discreet admin modal trigger
  document.getElementById("footer-admin-link")?.addEventListener("click", (e) => {
    e.preventDefault();
    openAdminLoginModal();
  });
}

/* ============================================================
   AUTHENTICATION SYSTEM & MODAL
   ============================================================ */
function openAuthModal(role = "customer") {
  authModalRole = role;
  const modal = document.getElementById("auth-modal");
  const overlay = document.getElementById("auth-overlay");
  if (!modal || !overlay) return;

  document.querySelectorAll(".auth-role-tab").forEach(tab => {
    tab.classList.toggle("is-active", tab.dataset.role === role);
  });

  updateAuthFormFields(role);

  modal.classList.add("is-open");
  overlay.classList.add("is-open");
}

function closeAuthModal() {
  document.getElementById("auth-modal")?.classList.remove("is-open");
  document.getElementById("auth-overlay")?.classList.remove("is-open");
}

function updateAuthFormFields(role = "customer") {
  const emailInput = document.getElementById("auth-email");
  const submitBtn = document.getElementById("auth-submit-btn");
  const subTitle = document.getElementById("auth-subtitle");
  const modalTitle = document.getElementById("auth-modal-title");
  const approvalHint = document.getElementById("register-approval-hint");

  const nameGroup = document.getElementById("name-group");
  const phoneGroup = document.getElementById("phone-group");
  const cityGroup = document.getElementById("city-group");
  const rememberRow = document.getElementById("remember-row");

  if (authIsSignUp) {
    if (modalTitle) modalTitle.textContent = "Customer Registration";
    if (subTitle) subTitle.textContent = "Create your shopper profile for BazaarHub Clothing Store";
    if (nameGroup) nameGroup.style.display = "block";
    if (phoneGroup) phoneGroup.style.display = "block";
    if (cityGroup) cityGroup.style.display = "block";
    if (rememberRow) rememberRow.style.display = "none";
    if (approvalHint) approvalHint.style.display = "block";
    if (submitBtn) submitBtn.innerHTML = `Register Customer Account <span>→</span>`;
    if (emailInput && emailInput.value === "sarah@customer.com") emailInput.value = "";
  } else {
    if (modalTitle) modalTitle.textContent = "Sign In to Your Account";
    if (subTitle) subTitle.textContent = "Enter your credentials to browse bags, orders & wishlist";
    if (nameGroup) nameGroup.style.display = "none";
    if (phoneGroup) phoneGroup.style.display = "none";
    if (cityGroup) cityGroup.style.display = "none";
    if (rememberRow) rememberRow.style.display = "flex";
    if (approvalHint) approvalHint.style.display = "none";
    if (submitBtn) submitBtn.innerHTML = `Sign In to Account <span>→</span>`;
    if (emailInput && !emailInput.value) emailInput.value = "sarah@customer.com";
  }
}

function openAdminLoginModal() {
  closeAuthModal();
  document.getElementById("admin-login-modal")?.classList.add("is-open");
  document.getElementById("admin-login-overlay")?.classList.add("is-open");
}

function closeAdminLoginModal() {
  document.getElementById("admin-login-modal")?.classList.remove("is-open");
  document.getElementById("admin-login-overlay")?.classList.remove("is-open");
}

function openApprovalModal(msg) {
  if (msg) {
    const desc = document.getElementById("approval-modal-desc");
    if (desc) desc.textContent = msg;
  }
  document.getElementById("approval-modal")?.classList.add("is-open");
  document.getElementById("approval-overlay")?.classList.add("is-open");
}

function closeApprovalModal() {
  document.getElementById("approval-modal")?.classList.remove("is-open");
  document.getElementById("approval-overlay")?.classList.remove("is-open");
}

function loginAsRole(role) {
  if (role === "customer") {
    currentUser = customers[0];
  } else if (role === "seller") {
    currentUser = sellers[0];
  } else if (role === "admin") {
    currentUser = adminStats;
  }
  localStorage.setItem("bazaarhub-user", JSON.stringify(currentUser));
  closeAuthModal();
  renderHeader();
  updateRolePillHighlights();
  showToast(`Signed in as ${currentUser.name} (${role.toUpperCase()})`);
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
    loginAsRole(role);
    return;
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

function renderDashboard(role) {
  const container = document.getElementById("dashboard-view");
  if (!container) return;
  if (role === "customer") renderCustomerDashboard(container);
  else if (role === "seller") renderSellerDashboard(container);
  else if (role === "admin") renderAdminDashboard(container);
}

/* ============================================================
   1. CUSTOMER DASHBOARD
   ============================================================ */
function renderCustomerDashboard(container) {
  const c = currentUser && currentUser.role === "customer" ? currentUser : customers[0];

  // Filter orders made by this customer
  const customerOrders = orders.filter(o => o.customerEmail === c.email || o.customerName === c.name);

  container.innerHTML = `
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

    <div class="container dash-header-banner">
      <div class="dash-header-card">
        <div class="dash-user-meta">
          <img src="${c.avatar || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'}" alt="" class="dash-avatar-large">
          <div class="dash-user-info">
            <h2>Welcome back, ${c.name}!</h2>
            <p>✉ ${c.email} &nbsp;·&nbsp; 📍 ${c.location || 'Kathmandu, Nepal'}</p>
            <div class="dash-badge-row">
              <span class="dash-tag dash-tag--orange">${c.tier || '🌟 Verified Shopper'}</span>
              <span class="dash-tag dash-tag--green">✓ Phone Verified (${c.phone || '+977 984XXXXXXX'})</span>
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
            <strong>${money(c.wallet || 3850)}</strong>
            <small>Instant checkout ready</small>
          </div>
        </div>
        <div class="dash-kpi-card">
          <div class="kpi-icon-wrap amber">⭐</div>
          <div class="kpi-text">
            <span>Reward Points</span>
            <strong>${c.points || 1420} pts</strong>
            <small>Redeemable for Rs. 350 discount</small>
          </div>
        </div>
        <div class="dash-kpi-card">
          <div class="kpi-icon-wrap blue">📦</div>
          <div class="kpi-text">
            <span>Orders Placed</span>
            <strong>${customerOrders.length} orders</strong>
            <small>${customerOrders.filter(o => o.status !== 'Delivered').length} active shipments</small>
          </div>
        </div>
        <div class="dash-kpi-card">
          <div class="kpi-icon-wrap green">🎟️</div>
          <div class="kpi-text">
            <span>Active Coupons</span>
            <strong>${(c.coupons || []).length} vouchers</strong>
            <small>Up to 20% savings available</small>
          </div>
        </div>
      </div>

      <!-- Subtabs -->
      <div class="dash-content-area">
        <div class="dash-subtabs">
          <button class="dash-subtab is-active" data-tab="orders">📦 My Orders (${customerOrders.length})</button>
          <button class="dash-subtab" data-tab="wishlist">♡ Saved Wishlist</button>
          <button class="dash-subtab" data-tab="addresses">📍 Delivery Addresses</button>
          <button class="dash-subtab" data-tab="coupons">🎟️ Available Coupons</button>
        </div>

        <!-- Orders Panel -->
        <div id="customer-panel-orders" class="dash-panel">
          <div class="dash-card">
            <div class="dash-card-header">
              <div>
                <h3>My Purchases & Nepal QR Escrow Deliveries</h3>
                <p>Track your parcels live from order placement to verified delivery</p>
              </div>
            </div>

            <!-- Active Order Live Tracker -->
            ${customerOrders.length > 0 ? `
              <div style="background: #fff8f5; border: 1.5px solid var(--primary-border); border-radius: 12px; padding: 20px; margin-bottom: 22px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
                  <div>
                    <span style="font-size:11px; font-weight:800; color:var(--primary); text-transform:uppercase;">Live Escrow Tracking Active</span>
                    <h4 style="margin:2px 0 0; font-size:15px; font-weight:800;">Order #${customerOrders[0].id} · ${customerOrders[0].items[0]?.name || 'Item'}</h4>
                  </div>
                  <span class="status-badge ${
                    customerOrders[0].step === 1 ? 'pending-verification' :
                    customerOrders[0].step === 2 ? 'active' :
                    customerOrders[0].step === 3 ? 'in-transit' : 'delivered'
                  }">
                    ${customerOrders[0].status}
                  </span>
                </div>

                <div class="order-tracker">
                  <div class="tracker-step ${customerOrders[0].step >= 1 ? 'done' : ''}">
                    <div class="tracker-dot">${customerOrders[0].step > 1 ? '✓' : '1'}</div>
                    <span>1. QR Paid & Proof Sent</span>
                  </div>
                  <div class="tracker-step ${customerOrders[0].step > 2 ? 'done' : (customerOrders[0].step === 2 ? 'current' : '')}">
                    <div class="tracker-dot">${customerOrders[0].step > 2 ? '✓' : (customerOrders[0].step === 2 ? '●' : '2')}</div>
                    <span>2. Admin Verified & Packing</span>
                  </div>
                  <div class="tracker-step ${customerOrders[0].step > 3 ? 'done' : (customerOrders[0].step === 3 ? 'current' : '')}">
                    <div class="tracker-dot">${customerOrders[0].step > 3 ? '✓' : (customerOrders[0].step === 3 ? '●' : '3')}</div>
                    <span>3. In Transit Courier</span>
                  </div>
                  <div class="tracker-step ${customerOrders[0].step >= 4 ? 'done' : ''}">
                    <div class="tracker-dot">${customerOrders[0].step >= 4 ? '✓' : '4'}</div>
                    <span>4. Delivered & Settled</span>
                  </div>
                </div>

                <p style="margin:8px 0 0; font-size:11.5px; color:#64748b; text-align:center;">
                  Status Note: <b>${customerOrders[0].remarks || 'Payment proof is being reviewed by BazaarHub Admin.'}</b>
                </p>
              </div>
            ` : ""}

            <div class="dash-table-wrap">
              <table class="dash-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Product Item</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Payment</th>
                    <th>Status</th>
                    <th>Slip / Invoice</th>
                  </tr>
                </thead>
                <tbody>
                  ${customerOrders.length === 0 ? `
                    <tr><td colspan="7" style="text-align:center; padding:30px; color:#94a3b8;">No orders placed yet. Add items to cart and pay via Nepal QR!</td></tr>
                  ` : customerOrders.map(o => `
                    <tr>
                      <td><b>#${o.id}</b></td>
                      <td>
                        <div class="product-cell">
                          <img src="${imageUrl(o.items[0]?.image || 'photo-1542291026-7eec264c27ff')}" alt="">
                          <div>
                            <b>${o.items[0]?.name || 'Product'}</b>
                            <small>${o.items.length > 1 ? `+${o.items.length - 1} more items` : `Qty: ${o.items[0]?.qty || 1}`}</small>
                          </div>
                        </div>
                      </td>
                      <td>${o.date}</td>
                      <td><b>${money(o.total)}</b></td>
                      <td><span style="font-size:11px; font-weight:700; color:#0369a1;">${o.paymentMethod || 'Nepal QR'}</span></td>
                      <td>
                        <span class="status-badge ${
                          o.step === 1 ? 'pending-verification' :
                          o.step === 2 ? 'active' :
                          o.step === 3 ? 'in-transit' : 'delivered'
                        }">
                          ${o.status}
                        </span>
                      </td>
                      <td>
                        <button class="action-btn-sm outline" onclick="viewOrderSlipCustomer('${o.id}')">View Slip</button>
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
                <p>Items you saved to purchase later</p>
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
                <p>Manage your home, work and pickup locations in Nepal</p>
              </div>
              <button class="action-btn-sm primary" onclick="showToast('New delivery address added')">＋ Add New Address</button>
            </div>
            <div class="dash-grid-cards">
              ${(c.addresses || []).map(a => `
                <div class="dash-card-item">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <span class="dash-tag ${a.isDefault ? 'dash-tag--orange' : ''}">${a.label}</span>
                    ${a.isDefault ? '<small style="color:var(--primary); font-weight:700;">Default</small>' : ''}
                  </div>
                  <p style="font-size:13px; color:var(--ink); line-height:1.5;">${a.text}</p>
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
                <h3>Active Marketplace Discount Coupons</h3>
                <p>Apply these voucher codes during QR checkout</p>
              </div>
            </div>
            <div class="dash-grid-cards">
              ${(c.coupons || []).map(cp => `
                <div class="dash-card-item" style="border:1.5px dashed var(--primary-border); background:#fff9f5;">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                    <strong style="color:var(--primary); font-size:16px;">${cp.code}</strong>
                    <span class="dash-tag dash-tag--orange">${cp.discount}</span>
                  </div>
                  <p style="margin-bottom:8px;">${cp.desc}</p>
                  <small style="color:var(--muted); display:block; margin-bottom:12px;">Valid until: ${cp.expiry}</small>
                  <button class="action-btn-sm outline" onclick="navigator.clipboard?.writeText('${cp.code}'); showToast('Coupon code copied: ${cp.code}')">Copy Voucher</button>
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

/* ============================================================
   2. SELLER DASHBOARD (MERCHANT HUB)
   ============================================================ */
function renderSellerDashboard(container) {
  const s = currentUser && currentUser.role === "seller" ? currentUser : sellers[0];

  // Find products listed by this seller
  const sellerProducts = products.filter(p => !p.sellerId || p.sellerId === s.id || p.sellerName === s.storeName);

  // Find incoming orders for this seller
  const sellerOrders = orders.filter(o => !o.sellerId || o.sellerId === s.id || o.sellerName === s.storeName);

  container.innerHTML = `
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

    <div class="container dash-header-banner">
      <div class="dash-header-card">
        <div class="dash-user-meta">
          <img src="${s.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'}" alt="" class="dash-avatar-large">
          <div class="dash-user-info">
            <h2>${s.storeName}</h2>
            <p>Merchant Owner: ${s.name} &nbsp;·&nbsp; ✉ ${s.email} &nbsp;·&nbsp; 📞 ${s.phone}</p>
            <div class="dash-badge-row">
              <span class="dash-tag dash-tag--green">✓ ${s.status || 'Verified Merchant'}</span>
              <span class="dash-tag dash-tag--orange">${s.rating || '4.9 ★ (215 reviews)'}</span>
              <span class="dash-tag" style="background:#f1f5f9; color:#475569;">${s.category || 'Retail'}</span>
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
            <small>Gross sales across storefront</small>
          </div>
        </div>
        <div class="dash-kpi-card">
          <div class="kpi-icon-wrap amber">📦</div>
          <div class="kpi-text">
            <span>Orders to Fulfill</span>
            <strong>${sellerOrders.filter(o => o.status !== 'Delivered').length} orders</strong>
            <small>Active shipments in progress</small>
          </div>
        </div>
        <div class="dash-kpi-card">
          <div class="kpi-icon-wrap blue">🏷️</div>
          <div class="kpi-text">
            <span>Active Listings</span>
            <strong>${sellerProducts.length} items</strong>
            <small>Live on BazaarHub Storefront</small>
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

      <!-- Inner Tabs -->
      <div class="dash-content-area">
        <div class="dash-subtabs">
          <button class="dash-subtab is-active" data-tab="products">🏷️ Store Inventory (${sellerProducts.length})</button>
          <button class="dash-subtab" data-tab="orders">📦 Orders to Fulfill (${sellerOrders.length})</button>
          <button class="dash-subtab" data-tab="finance">💵 Bank Settlements & Finance</button>
        </div>

        <!-- Inventory Tab -->
        <div id="seller-panel-products" class="dash-panel">
          <div class="dash-card">
            <div class="dash-card-header">
              <div>
                <h3>Store Product Catalog</h3>
                <p>Manage items, prices, discounts, and real-time inventory units</p>
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
                  ${sellerProducts.map(p => `
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
                      <td><span class="status-badge active">● Live on Store</span></td>
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
                <h3>Orders Awaiting Fulfillment</h3>
                <p>Ship verified customer orders and dispatch parcels across Nepal</p>
              </div>
            </div>
            <div class="dash-table-wrap">
              <table class="dash-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer Name</th>
                    <th>Item(s)</th>
                    <th>Gross Total</th>
                    <th>Net Payout (90%)</th>
                    <th>Payment Status</th>
                    <th>Ship / Fulfill</th>
                  </tr>
                </thead>
                <tbody>
                  ${sellerOrders.length === 0 ? `
                    <tr><td colspan="7" style="text-align:center; padding:30px; color:#94a3b8;">No incoming orders yet.</td></tr>
                  ` : sellerOrders.map(o => `
                    <tr>
                      <td><b>#${o.id}</b></td>
                      <td>
                        <b>${o.customerName}</b><br>
                        <small style="color:#64748b;">${o.customerPhone || ''}</small>
                      </td>
                      <td>${o.items[0]?.name || 'Item'} (x${o.items[0]?.qty || 1})</td>
                      <td>${money(o.total)}</td>
                      <td><b style="color:#059669;">${money(o.sellerPayout || (o.total * 0.9))}</b></td>
                      <td>
                        <span class="status-badge ${
                          o.step === 1 ? 'pending-verification' :
                          o.step === 2 ? 'active' :
                          o.step === 3 ? 'in-transit' : 'delivered'
                        }">
                          ${o.status}
                        </span>
                      </td>
                      <td>
                        ${o.step === 1 ? `
                          <small style="color:#b45309; font-weight:700;">Awaiting Admin QR Check</small>
                        ` : o.step === 2 ? `
                          <button class="action-btn-sm primary" onclick="advanceOrderStatus('${o.id}', 3)">🚚 Ship Order</button>
                        ` : o.step === 3 ? `
                          <button class="action-btn-sm outline" onclick="advanceOrderStatus('${o.id}', 4)">✓ Mark Delivered</button>
                        ` : `
                          <span style="color:#059669; font-weight:800; font-size:11px;">✓ Settled</span>
                        `}
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
                <h3>Bank Settlements & Payout Receipts</h3>
                <p>Automated weekly net payout transfer directly into your verified bank account</p>
              </div>
              <button class="action-btn-sm primary" onclick="showToast('Withdrawal request of ${money(s.payoutAvailable)} initiated to ${s.bank}')">Withdraw Balance</button>
            </div>
            <div class="dash-grid-cards">
              <div class="dash-card-item">
                <span class="dash-tag dash-tag--orange">Linked Nepali Bank Account</span>
                <h4 style="margin-top:10px;">${s.bank}</h4>
                <p>Account Holder: <b>${s.name}</b><br>Branch: Kathmandu Central</p>
                <button class="action-btn-sm outline" onclick="showToast('Bank details update modal')">Update Bank Account</button>
              </div>
              <div class="dash-card-item">
                <span class="dash-tag dash-tag--green">Escrow Payout Settlement</span>
                <h4 style="margin-top:10px;">90.0% Net Payout</h4>
                <p>Available Balance: <b>${money(s.payoutAvailable)}</b><br>Platform commission fee (10%) is already deducted upon Admin verification.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  attachDashboardEvents(container, "seller");

  container.querySelector("#btn-seller-add-product")?.addEventListener("click", openSellerProductModal);
  container.querySelector("#btn-seller-add-quick")?.addEventListener("click", openSellerProductModal);
}

/* ============================================================
   3. ADMIN DASHBOARD (PLATFORM GOVERNANCE & PAYMENT ESCROW)
   ============================================================ */
function renderAdminDashboard(container) {
  const pendingCount = orders.filter(o => o.step === 1).length;
  const pendingCustomersCount = customers.filter(c => c.status === "Pending").length;
  const outOfStockCount = products.filter(p => (p.stock || 0) <= 0).length;
  const lowStockCount = products.filter(p => (p.stock || 0) > 0 && p.stock <= 3).length;

  container.innerHTML = `
    <div class="dash-navbar">
      <div class="container dash-navbar__inner">
        <button class="dash-back-btn" id="dash-back-store">
          <span>←</span> Back to Clothing Storefront
        </button>
        <div class="dash-role-indicator">
          <span class="dash-role-badge admin">🛡️ Store Admin & Inventory Master</span>
        </div>
        <div class="dash-switcher-tabs">
          <button class="dash-tab-pill" data-switch="customer">Customer Mode</button>
          <button class="dash-tab-pill" data-switch="seller">Seller Mode</button>
          <button class="dash-tab-pill is-active" data-switch="admin">Admin Portal</button>
        </div>
      </div>
    </div>

    <div class="container dash-header-banner">
      <div class="dash-header-card" style="background: linear-gradient(135deg, #0b1329 0%, #152244 100%); color: #ffffff;">
        <div class="dash-user-meta">
          <img src="${adminStats.avatar}" alt="" class="dash-avatar-large" style="border-color:#ff9800;">
          <div class="dash-user-info">
            <h2 style="color:#ffffff;">Store Master Administration</h2>
            <p style="color:#94a3b8;">Administrator: ${adminStats.name} &nbsp;·&nbsp; ✉ ${adminStats.email} &nbsp;·&nbsp; Full Store & Inventory Authority</p>
            <div class="dash-badge-row">
              <span class="dash-tag" style="background:#ff9800; color:#ffffff;">Super Administrator</span>
              <span class="dash-tag" style="background:rgba(255,255,255,0.15); color:#ffffff;">Nepal QR Escrow Online</span>
            </div>
          </div>
        </div>
        <div class="dash-actions-right">
          <button class="button button--primary" onclick="showToast('Store statistics refreshed')">
            Refresh Store Stats ⟳
          </button>
        </div>
      </div>

      <!-- Admin KPIs -->
      <div class="dash-kpis">
        <div class="dash-kpi-card">
          <div class="kpi-icon-wrap orange">📈</div>
          <div class="kpi-text">
            <span>Store Gross Sales</span>
            <strong>${money(adminStats.platformGmv)}</strong>
            <small>Total gross transactions</small>
          </div>
        </div>
        <div class="dash-kpi-card">
          <div class="kpi-icon-wrap amber">💵</div>
          <div class="kpi-text">
            <span>Platform Revenue (10%)</span>
            <strong>${money(adminStats.commissionEarned)}</strong>
            <small>Commission retained</small>
          </div>
        </div>
        <div class="dash-kpi-card">
          <div class="kpi-icon-wrap blue">📦</div>
          <div class="kpi-text">
            <span>Clothing Catalog</span>
            <strong>${products.length} products</strong>
            <small>${outOfStockCount > 0 ? `<b style="color:#ef4444;">${outOfStockCount} Out of Stock</b>` : 'All in stock'}</small>
          </div>
        </div>
        <div class="dash-kpi-card">
          <div class="kpi-icon-wrap green">👥</div>
          <div class="kpi-text">
            <span>Registered Customers</span>
            <strong>${customers.length} accounts</strong>
            <small>${pendingCustomersCount > 0 ? `<b style="color:#f59e0b;">${pendingCustomersCount} Pending Approval</b>` : 'All approved'}</small>
          </div>
        </div>
      </div>

      <!-- Inner Tabs: Distinct Dedicated Pages for Payments, Customers, Products, Sellers -->
      <div class="dash-content-area">
        <div class="dash-subtabs">
          <button class="dash-subtab is-active" data-tab="payments">
            📋 Payment Verifications ${pendingCount > 0 ? `<span class="badge-counter">${pendingCount}</span>` : ""}
          </button>
          <button class="dash-subtab" data-tab="customers">
            🛍️ Customers & Approvals (${customers.length}) ${pendingCustomersCount > 0 ? `<span class="badge-counter" style="background:#f59e0b;">${pendingCustomersCount}</span>` : ""}
          </button>
          <button class="dash-subtab" data-tab="products">
            📦 Clothing Inventory & Stock Alerts (${products.length}) ${outOfStockCount > 0 ? `<span class="badge-counter" style="background:#ef4444;">${outOfStockCount}</span>` : ""}
          </button>
          <button class="dash-subtab" data-tab="sellers">🏪 Merchant Hub</button>
          <button class="dash-subtab" data-tab="settings">⚙ Store Settings</button>
        </div>

        <!-- 1. PAYMENT VERIFICATIONS TAB -->
        <div id="admin-panel-payments" class="dash-panel">
          <div class="dash-card">
            <div class="dash-card-header">
              <div>
                <h3>Customer QR Payment Verifications & Seller Escrow Settlements</h3>
                <p>Inspect uploaded screenshot slips, verify transaction reference numbers, deduct 10% platform commission, and transfer net payouts</p>
              </div>
            </div>

            <div class="dash-table-wrap">
              <table class="dash-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer Payer</th>
                    <th>Gross Total</th>
                    <th>Platform Cut (10%)</th>
                    <th>Seller Net Payout (90%)</th>
                    <th>Destination Seller</th>
                    <th>Payment Slip</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${orders.length === 0 ? `
                    <tr><td colspan="9" style="text-align:center; padding:30px; color:#94a3b8;">No orders in system yet.</td></tr>
                  ` : orders.map(o => `
                    <tr id="admin-order-row-${o.id}">
                      <td><b>#${o.id}</b><br><small style="color:#64748b;">${o.date}</small></td>
                      <td>
                        <b>${o.customerName}</b><br>
                        <small style="color:#0284c7;">${o.paymentMethod || 'Nepal QR'}</small>
                      </td>
                      <td><b>${money(o.total)}</b></td>
                      <td><b style="color:#059669;">+${money(o.commissionAmount || Math.round(o.total * 0.1))}</b></td>
                      <td><b style="color:var(--primary);">${money(o.sellerPayout || Math.round(o.total * 0.9))}</b></td>
                      <td><b>${o.sellerName || 'Himalayan Tech'}</b></td>
                      <td>
                        <button class="action-btn-sm outline" onclick="openProofModal('${o.id}')">
                          🔍 View Slip
                        </button>
                      </td>
                      <td>
                        <span class="status-badge ${
                          o.step === 1 ? 'pending-verification' :
                          o.step === 2 ? 'active' :
                          o.step === 3 ? 'in-transit' : 'delivered'
                        }">
                          ${o.status}
                        </span>
                      </td>
                      <td>
                        ${o.step === 1 ? `
                          <div style="display:flex; gap:6px;">
                            <button class="action-btn-sm primary" onclick="approveAndSettleOrder('${o.id}')" title="Deduct commission and credit seller">
                              Approve & Pay Seller ✓
                            </button>
                            <button class="action-btn-sm danger" onclick="rejectOrder('${o.id}')">
                              Reject ✕
                            </button>
                          </div>
                        ` : `
                          <span style="color:#059669; font-weight:800; font-size:11.5px;">✓ Settled & Paid</span>
                        `}
                      </td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- 2. SELLERS MANAGEMENT TAB -->
        <div id="admin-panel-sellers" class="dash-panel" style="display: none;">
          <div class="dash-card">
            <div class="dash-card-header">
              <div>
                <h3>Registered Sellers & Merchant Stores</h3>
                <p>Directory of clothing boutiques, sales volume, bank details, and payout balances</p>
              </div>
              <button class="action-btn-sm primary" id="btn-admin-add-seller">
                ＋ Add New Seller
              </button>
            </div>

            <div class="dash-table-wrap">
              <table class="dash-table">
                <thead>
                  <tr>
                    <th>Store Name</th>
                    <th>Merchant Owner</th>
                    <th>Contact Info</th>
                    <th>Category</th>
                    <th>Total Sales</th>
                    <th>Available Payout</th>
                    <th>Bank Account</th>
                    <th>Status</th>
                    <th>Moderation</th>
                  </tr>
                </thead>
                <tbody id="admin-sellers-tbody">
                  ${sellers.map(s => `
                    <tr id="admin-seller-row-${s.id}">
                      <td>
                        <div class="product-cell">
                          <img src="${s.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'}" alt="">
                          <div>
                            <b>${s.storeName}</b>
                            <small>ID: ${s.id}</small>
                          </div>
                        </div>
                      </td>
                      <td><b>${s.name}</b></td>
                      <td>
                        ✉ ${s.email}<br>
                        📞 ${s.phone}
                      </td>
                      <td><span class="dash-tag">${s.category || 'Retail'}</span></td>
                      <td><b>${money(s.revenue)}</b></td>
                      <td><b style="color:#059669;">${money(s.payoutAvailable)}</b></td>
                      <td><small style="color:#64748b;">${s.bank}</small></td>
                      <td><span class="status-badge ${s.status === 'Approved' ? 'active' : 'suspended'}">${s.status}</span></td>
                      <td>
                        <div style="display:flex; gap:6px;">
                          <button class="action-btn-sm ${s.status === 'Approved' ? 'danger' : 'primary'}" onclick="toggleSellerStatus('${s.id}')">
                            ${s.status === 'Approved' ? 'Suspend' : 'Activate'}
                          </button>
                          <button class="action-btn-sm outline" onclick="deleteSeller('${s.id}')">Delete</button>
                        </div>
                      </td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- 3. CUSTOMERS MANAGEMENT & APPROVAL TAB -->
        <div id="admin-panel-customers" class="dash-panel" style="display: none;">
          <div class="dash-card">
            <div class="dash-card-header">
              <div>
                <h3>Customer Accounts & Verification Approvals</h3>
                <p>Review and approve new shopper registrations before they can add items to bag or checkout</p>
              </div>
              <button class="action-btn-sm primary" id="btn-admin-add-customer">
                ＋ Add New Customer
              </button>
            </div>

            ${pendingCustomersCount > 0 ? `
              <div class="approval-notice-card" style="margin-bottom: 16px;">
                <h4>⚠️ ${pendingCustomersCount} Customer Account(s) Awaiting Store Admin Approval</h4>
                <p>New customers cannot add clothes to bag or complete checkout until verified. Review their information below and click <b>"Approve Account ✓"</b> to enable full purchasing access.</p>
              </div>
            ` : ""}

            <div class="dash-table-wrap">
              <table class="dash-table">
                <thead>
                  <tr>
                    <th>Customer ID & Name</th>
                    <th>Email Address</th>
                    <th>Phone</th>
                    <th>City / Location</th>
                    <th>Orders</th>
                    <th>Wallet Balance</th>
                    <th>Status</th>
                    <th>Verification / Action</th>
                  </tr>
                </thead>
                <tbody id="admin-customers-tbody">
                  ${customers.map(c => `
                    <tr id="admin-customer-row-${c.id}">
                      <td>
                        <div class="product-cell">
                          <img src="${c.avatar || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'}" alt="">
                          <div>
                            <b>${c.name}</b>
                            <small>ID: ${c.id} · ${c.tier || 'Shopper'}</small>
                          </div>
                        </div>
                      </td>
                      <td>${c.email}</td>
                      <td><b>${c.phone || '+977 984XXXXXXX'}</b></td>
                      <td>${c.location || 'Kathmandu, Nepal'}</td>
                      <td><b>${c.totalOrders || 0}</b></td>
                      <td><b style="color:#059669;">${money(c.wallet || 0)}</b></td>
                      <td>
                        <span class="status-badge ${
                          c.status === 'Pending' ? 'pending-verification' :
                          c.status === 'Active' ? 'active' : 'suspended'
                        }">
                          ${c.status === 'Pending' ? 'Pending Approval ⏳' : (c.status || 'Active')}
                        </span>
                      </td>
                      <td>
                        <div style="display:flex; gap:6px; flex-wrap:wrap;">
                          ${c.status === 'Pending' ? `
                            <button class="action-btn-sm primary" onclick="approveCustomerAccount('${c.id}')" title="Approve customer to allow purchasing">
                              Approve Account ✓
                            </button>
                            <button class="action-btn-sm danger" onclick="rejectCustomerAccount('${c.id}')">
                              Reject ✕
                            </button>
                          ` : `
                            <button class="action-btn-sm outline" onclick="creditCustomerWallet('${c.id}')">+ Rs. 500</button>
                            <button class="action-btn-sm ${c.status === 'Active' ? 'danger' : 'primary'}" onclick="toggleCustomerStatus('${c.id}')">
                              ${c.status === 'Active' ? 'Suspend' : 'Activate'}
                            </button>
                          `}
                        </div>
                      </td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- 4. CLOTHING INVENTORY & STOCK ALERTS TAB -->
        <div id="admin-panel-products" class="dash-panel" style="display: none;">
          <div class="dash-card">
            <div class="dash-card-header">
              <div>
                <h3>Store Clothing Catalog & Live Inventory Management</h3>
                <p>Track stock levels in real time, restock sold-out clothes, and add new fashion pieces</p>
              </div>
              <div style="display:flex; gap:10px;">
                <button class="action-btn-sm primary" onclick="openSellerProductModal()">
                  ＋ Add New Clothing Item
                </button>
              </div>
            </div>

            <!-- Stock Alert Banner if any items are out of stock -->
            ${outOfStockCount > 0 ? `
              <div class="inventory-alert-banner">
                <div>
                  <b>⚠️ Critical Inventory Alert:</b> ${outOfStockCount} clothing item(s) are currently <b>OUT OF STOCK</b> (Sold Out) on the storefront and blocked from purchases!
                </div>
                <button class="action-btn-sm primary" onclick="quickRestockAllOutOfStock()">
                  Restock All Out-of-Stock (+15 units) 📦
                </button>
              </div>
            ` : ""}

            ${lowStockCount > 0 && outOfStockCount === 0 ? `
              <div style="background:#fffbeb; border:1px solid #fde68a; border-radius:10px; padding:12px 16px; margin-bottom:16px; font-size:12.5px; color:#b45309;">
                ⚡ <b>Low Stock Warning:</b> ${lowStockCount} clothing item(s) have 3 or fewer units remaining.
              </div>
            ` : ""}

            <!-- Inventory KPI Mini Row -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; margin-bottom: 18px;">
              <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:12px;">
                <small style="color:#64748b; font-weight:700;">Total Catalog Items</small>
                <div style="font-size:20px; font-weight:800; color:#0f172a;">${products.length}</div>
              </div>
              <div style="background:#ecfdf5; border:1px solid #a7f3d0; border-radius:8px; padding:12px;">
                <small style="color:#047857; font-weight:700;">Healthy Stock</small>
                <div style="font-size:20px; font-weight:800; color:#047857;">${products.length - outOfStockCount - lowStockCount}</div>
              </div>
              <div style="background:#fffbeb; border:1px solid #fde68a; border-radius:8px; padding:12px;">
                <small style="color:#b45309; font-weight:700;">Low Stock (≤ 3)</small>
                <div style="font-size:20px; font-weight:800; color:#b45309;">${lowStockCount}</div>
              </div>
              <div style="background:#fff1f2; border:1px solid #fecdd3; border-radius:8px; padding:12px;">
                <small style="color:#b91c1c; font-weight:700;">Out of Stock (0)</small>
                <div style="font-size:20px; font-weight:800; color:#b91c1c;">${outOfStockCount}</div>
              </div>
            </div>

            <div class="dash-table-wrap">
              <table class="dash-table">
                <thead>
                  <tr>
                    <th>Product & SKU</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Inventory Status</th>
                    <th>Stock Units</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  ${products.map(p => {
                    const isOut = (p.stock || 0) <= 0;
                    const isLow = !isOut && p.stock <= 3;
                    return `
                      <tr>
                        <td>
                          <div class="product-cell">
                            <img src="${imageUrl(p.image)}" alt="">
                            <div>
                              <b>${p.name}</b>
                              <small>SKU: CLOTH-${p.id}</small>
                            </div>
                          </div>
                        </td>
                        <td><span class="dash-tag">${p.category}</span></td>
                        <td><b>${money(p.price)}</b> ${p.old ? `<del style="color:#94a3b8; font-size:11px;">${money(p.old)}</del>` : ""}</td>
                        <td>
                          ${isOut ? `<span class="stock-pill out">⚠️ Out of Stock</span>` :
                            isLow ? `<span class="stock-pill low">⚡ Low Stock (${p.stock})</span>` :
                            `<span class="stock-pill ok">✓ In Stock</span>`}
                        </td>
                        <td>
                          <b style="font-size:14px; color:${isOut ? '#b91c1c' : isLow ? '#b45309' : '#0f172a'};">
                            ${p.stock || 0} pcs
                          </b>
                        </td>
                        <td>
                          <div style="display:flex; gap:6px;">
                            <button class="action-btn-sm ${isOut ? 'primary' : 'outline'}" onclick="quickRestockProduct(${p.id})" title="Add 10 units">
                              Restock (+10) 📦
                            </button>
                            <button class="action-btn-sm outline" onclick="editProductStockPrompt(${p.id})">
                              Edit
                            </button>
                            <button class="action-btn-sm danger" onclick="deleteProduct(${p.id})">
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    `;
                  }).join("")}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- 5. PLATFORM SETTINGS TAB -->
        <div id="admin-panel-settings" class="dash-panel" style="display: none;">
          <div class="dash-card">
            <div class="dash-card-header">
              <div>
                <h3>Escrow & Platform Commission Parameters</h3>
                <p>Adjust marketplace system commission and payout rules</p>
              </div>
            </div>
            <div class="dash-grid-cards">
              <div class="dash-card-item">
                <h4>Platform Escrow Commission Rate</h4>
                <p>Current fee retained per transaction: <b>10.0%</b></p>
                <div style="display:flex; gap:8px; align-items:center; margin-top:10px;">
                  <input type="range" min="5" max="20" value="10" style="accent-color:var(--primary); width:100%;" oninput="this.nextElementSibling.textContent = this.value + '%'">
                  <b style="font-size:15px; color:var(--primary);">10%</b>
                </div>
                <button class="action-btn-sm primary" style="margin-top:12px;" onclick="showToast('Commission rate saved at 10%')">Save Commission Rate</button>
              </div>
              <div class="dash-card-item">
                <h4>Free Delivery Threshold</h4>
                <p>Orders above this amount qualify for free delivery across Nepal: <b>Rs. 2,500</b></p>
                <button class="action-btn-sm outline" onclick="showToast('Delivery threshold confirmed at Rs. 2,500')">Update Delivery Rules</button>
              </div>
              <div class="dash-card-item">
                <h4>Reset Demo Data</h4>
                <p>Restore default products, orders, and balances.</p>
                <button class="action-btn-sm danger" onclick="resetAllDemoData()">Reset All Demo Stores</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  attachDashboardEvents(container, "admin");

  // Admin Add Seller & Add Customer button handlers
  container.querySelector("#btn-admin-add-seller")?.addEventListener("click", () => openAdminUserModal("seller"));
  container.querySelector("#btn-admin-add-customer")?.addEventListener("click", () => openAdminUserModal("customer"));
}

/* ============================================================
   DASHBOARD NAVIGATION & SUBTAB SWITCHER
   ============================================================ */
function attachDashboardEvents(container, currentRole) {
  container.querySelector("#dash-back-store")?.addEventListener("click", switchToStorefront);

  container.querySelectorAll(".dash-tab-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const targetRole = pill.dataset.switch;
      switchToDashboard(targetRole);
    });
  });

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

  container.querySelector("#btn-browse-more")?.addEventListener("click", switchToStorefront);
}

/* ============================================================
   ADMIN ACTIONS (Approve, Reject, Settle, Moderation)
   ============================================================ */
window.approveAndSettleOrder = function(orderId) {
  const o = orders.find(x => x.id === orderId);
  if (!o) return;

  const commission = Math.round(o.total * 0.1);
  const payout = o.total - commission;

  o.step = 2;
  o.status = "Payment Verified & Processing";
  o.settled = true;
  o.commissionAmount = commission;
  o.sellerPayout = payout;
  o.remarks = `Admin verified payment on ${new Date().toLocaleTimeString()} and settled Rs. ${payout.toLocaleString()} to ${o.sellerName}.`;

  // Credit admin platform revenue
  adminStats.commissionEarned += commission;
  adminStats.platformGmv += o.total;

  // Credit seller payout
  const targetSeller = sellers.find(s => s.id === o.sellerId || s.storeName === o.sellerName) || sellers[0];
  targetSeller.revenue += o.total;
  targetSeller.payoutAvailable += payout;

  saveAllData();
  showToast(`✓ Payment for #${orderId} verified! Rs. ${money(commission)} commission earned, Rs. ${money(payout)} transferred to ${targetSeller.storeName}.`);

  // Close proof modal if open
  closeProofModal();

  // Re-render Admin view
  if (currentView === "dashboard" && currentUser?.role === "admin") {
    renderAdminDashboard(document.getElementById("dashboard-view"));
  }
};

window.rejectOrder = function(orderId) {
  const reason = prompt("Enter reason for rejection (e.g. Invalid transaction code, unreadable screenshot):", "Invalid transaction slip or amount mismatch");
  if (!reason) return;

  const o = orders.find(x => x.id === orderId);
  if (!o) return;

  o.status = "Payment Rejected";
  o.step = 1;
  o.remarks = `Payment rejected: ${reason}`;
  saveAllData();

  showToast(`Order #${orderId} payment proof rejected.`);
  closeProofModal();

  if (currentView === "dashboard" && currentUser?.role === "admin") {
    renderAdminDashboard(document.getElementById("dashboard-view"));
  }
};

window.advanceOrderStatus = function(orderId, nextStep) {
  const o = orders.find(x => x.id === orderId);
  if (!o) return;

  o.step = nextStep;
  if (nextStep === 3) {
    o.status = "In Transit";
    o.remarks = `Order handed over to courier. Estimated delivery in 24-48 hours.`;
    showToast(`Order #${orderId} marked as Shipped! Customer can track it live.`);
  } else if (nextStep === 4) {
    o.status = "Delivered";
    o.remarks = `Parcel successfully delivered to ${o.customerName}.`;
    showToast(`Order #${orderId} marked as Delivered!`);
  }

  saveAllData();

  if (currentView === "dashboard") {
    renderDashboard(currentUser?.role || "seller");
  }
};

window.deleteProductAsSeller = function(id) {
  if (!confirm("Are you sure you want to remove this product from the storefront?")) return;
  products = products.filter(p => p.id !== id);
  saveAllData();
  showToast("Product removed from catalog");
  showDefaultProducts();
  if (currentView === "dashboard") {
    renderDashboard(currentUser?.role || "seller");
  }
};

window.toggleSellerStatus = function(sellerId) {
  const s = sellers.find(x => x.id === sellerId);
  if (!s) return;
  s.status = s.status === "Approved" ? "Suspended" : "Approved";
  saveAllData();
  showToast(`Seller ${s.storeName} status changed to ${s.status}`);
  renderAdminDashboard(document.getElementById("dashboard-view"));
};

window.deleteSeller = function(sellerId) {
  if (!confirm("Are you sure you want to remove this merchant?")) return;
  sellers = sellers.filter(x => x.id !== sellerId);
  saveAllData();
  showToast("Seller removed");
  renderAdminDashboard(document.getElementById("dashboard-view"));
};

window.toggleCustomerStatus = function(customerId) {
  const c = customers.find(x => x.id === customerId);
  if (!c) return;
  c.status = c.status === "Active" ? "Suspended" : "Active";
  saveAllData();
  showToast(`Customer ${c.name} is now ${c.status}`);
  renderAdminDashboard(document.getElementById("dashboard-view"));
};

window.creditCustomerWallet = function(customerId) {
  const c = customers.find(x => x.id === customerId);
  if (!c) return;
  c.wallet = (c.wallet || 0) + 500;
  saveAllData();
  showToast(`Credited Rs. 500 to ${c.name}'s wallet!`);
  renderAdminDashboard(document.getElementById("dashboard-view"));
};

window.approveCustomerAccount = function(custId) {
  const c = customers.find(x => x.id === custId);
  if (!c) return;
  c.status = "Active";
  if (currentUser && currentUser.id === custId) {
    currentUser.status = "Active";
    renderHeader();
  }
  saveAllData();
  showToast(`✓ Customer account "${c.name}" (${c.id}) APPROVED! Full shopping access enabled.`);
  renderAdminDashboard(document.getElementById("dashboard-view"));
};

window.rejectCustomerAccount = function(custId) {
  const c = customers.find(x => x.id === custId);
  if (!c) return;
  c.status = "Rejected";
  if (currentUser && currentUser.id === custId) {
    currentUser.status = "Rejected";
    renderHeader();
  }
  saveAllData();
  showToast(`Customer account "${c.name}" was rejected.`);
  renderAdminDashboard(document.getElementById("dashboard-view"));
};

window.quickRestockProduct = function(productId) {
  const p = products.find(x => x.id === productId);
  if (!p) return;
  p.stock = (p.stock || 0) + 10;
  saveAllData();
  showToast(`Restocked "${p.name}" (+10)! New stock: ${p.stock} units.`);
  renderAdminDashboard(document.getElementById("dashboard-view"));
  showDefaultProducts();
};

window.quickRestockAllOutOfStock = function() {
  let count = 0;
  products.forEach(p => {
    if ((p.stock || 0) <= 0) {
      p.stock = 15;
      count++;
    }
  });
  saveAllData();
  showToast(`Restocked ${count} out-of-stock clothing items with 15 units each!`);
  renderAdminDashboard(document.getElementById("dashboard-view"));
  showDefaultProducts();
};

window.editProductStockPrompt = function(productId) {
  const p = products.find(x => x.id === productId);
  if (!p) return;
  const newStock = prompt(`Update stock units for "${p.name}":`, p.stock);
  if (newStock !== null && !isNaN(Number(newStock))) {
    p.stock = Math.max(0, parseInt(newStock, 10));
    saveAllData();
    showToast(`Stock for "${p.name}" updated to ${p.stock} units.`);
    renderAdminDashboard(document.getElementById("dashboard-view"));
    showDefaultProducts();
  }
};

window.deleteProduct = function(productId) {
  const idx = products.findIndex(x => x.id === productId);
  if (idx === -1) return;
  if (!confirm(`Are you sure you want to delete "${products[idx].name}" from store catalog?`)) return;
  products.splice(idx, 1);
  saveAllData();
  showToast("Clothing item removed from catalog.");
  renderAdminDashboard(document.getElementById("dashboard-view"));
  showDefaultProducts();
};

window.resetAllDemoData = function() {
  if (!confirm("Reset all products, orders, and accounts to default seed data?")) return;
  localStorage.clear();
  products = defaultProducts;
  sellers = defaultSellers;
  customers = defaultCustomers;
  orders = defaultOrders;
  adminStats = defaultAdmin;
  currentUser = customers[0];
  saveAllData();
  showToast("Demo data reset to fresh state!");
  setTimeout(() => location.reload(), 600);
};

/* ============================================================
   PROOF LIGHTBOX INSPECTION MODAL (Admin)
   ============================================================ */
window.openProofModal = function(orderId) {
  const o = orders.find(x => x.id === orderId);
  if (!o) return;
  viewingProofOrder = o;

  const modal = document.getElementById("proof-modal");
  const overlay = document.getElementById("proof-overlay");
  if (!modal || !overlay) return;

  const commission = Math.round(o.total * 0.1);
  const payout = o.total - commission;

  document.getElementById("admin-proof-order-id").textContent = `#${o.id}`;
  document.getElementById("admin-proof-customer-name").textContent = o.customerName;
  document.getElementById("admin-proof-customer-phone").textContent = o.customerPhone || "+977 98XXXXXXXX";
  document.getElementById("admin-proof-channel").textContent = o.paymentMethod || "Nepal QR";
  document.getElementById("admin-proof-txn").textContent = o.txnRef || "TXN-NOT-PROVIDED";
  document.getElementById("admin-proof-gross").textContent = money(o.total);
  document.getElementById("admin-proof-commission").textContent = `+${money(commission)}`;
  document.getElementById("admin-proof-payout").textContent = money(payout);
  document.getElementById("admin-proof-seller-name").textContent = o.sellerName || "Himalayan Tech & Style";

  const imgEl = document.getElementById("admin-view-proof-img");
  if (imgEl) {
    imgEl.src = (o.proofImage && o.proofImage.startsWith("data:"))
      ? o.proofImage
      : generateDemoReceiptDataUrl(o.id, o.total, o.txnRef || "TXN-87429184", o.paymentMethod || "eSewa QR", o.customerName);
  }

  const badgeEl = document.getElementById("proof-order-badge");
  if (badgeEl) {
    badgeEl.innerHTML = `<span class="status-badge ${o.step === 1 ? 'pending-verification' : 'active'}">${o.status}</span>`;
  }

  // Bind actions
  const approveBtn = document.getElementById("btn-admin-approve-proof");
  const rejectBtn = document.getElementById("btn-admin-reject-proof");

  if (approveBtn) {
    approveBtn.onclick = () => approveAndSettleOrder(o.id);
  }
  if (rejectBtn) {
    rejectBtn.onclick = () => rejectOrder(o.id);
  }

  modal.classList.add("is-open");
  overlay.classList.add("is-open");
};

window.closeProofModal = function() {
  document.getElementById("proof-modal")?.classList.remove("is-open");
  document.getElementById("proof-overlay")?.classList.remove("is-open");
};

window.viewOrderSlipCustomer = function(orderId) {
  openProofModal(orderId);
};

/* ============================================================
   CHECKOUT & NEPAL QR PAYMENT MODAL CONTROLLER
   ============================================================ */
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast("Your shopping bag is empty.");
    return;
  }

  if (!currentUser || currentUser.role !== "customer") {
    showToast("Please sign in as a Customer to proceed with payment.");
    openAuthModal("customer");
    return;
  }

  if (currentUser.status === "Pending") {
    showToast("Your customer account is pending store approval.");
    openApprovalModal(`Hello ${currentUser.name}! Your account (${currentUser.id}) is pending store approval. Our team will verify and activate your account shortly.`);
    return;
  }

  closeCart();

  const modal = document.getElementById("checkout-modal");
  const overlay = document.getElementById("checkout-overlay");
  if (!modal || !overlay) return;

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const delivery = subtotal >= 2500 ? 0 : 150;
  const grandTotal = subtotal + delivery;

  // Populate items
  const itemsList = document.getElementById("checkout-items-list");
  if (itemsList) {
    itemsList.innerHTML = cart.map(i => `
      <div class="checkout-summary-row">
        <span>${i.name} (x${i.qty})</span>
        <b>${money(i.price * i.qty)}</b>
      </div>
    `).join("");
  }

  document.getElementById("checkout-items-count").textContent = `${cart.length} item(s)`;
  document.getElementById("checkout-subtotal").textContent = money(subtotal);
  document.getElementById("checkout-delivery").textContent = delivery === 0 ? "FREE (Orders over Rs. 2,500)" : money(delivery);
  document.getElementById("checkout-grand-total").textContent = money(grandTotal);

  // Pre-fill user details
  const nameInput = document.getElementById("checkout-name");
  const phoneInput = document.getElementById("checkout-phone");
  const addressInput = document.getElementById("checkout-address");

  if (nameInput) nameInput.value = currentUser.name || "";
  if (phoneInput) phoneInput.value = currentUser.phone || "+977 9841234567";
  if (addressInput) addressInput.value = (currentUser.addresses && currentUser.addresses[0]?.text) || currentUser.location || "New Baneshwor, Kathmandu";

  // Render QR Graphic
  const qrContainer = document.getElementById("qr-code-container");
  if (qrContainer) {
    qrContainer.innerHTML = generateNepalQrSvg(grandTotal);
  }
  const qrAmountDisplay = document.getElementById("qr-display-amount");
  if (qrAmountDisplay) {
    qrAmountDisplay.textContent = `Pay Exact: ${money(grandTotal)}`;
  }

  // Reset proof state
  currentProofDataUrl = "";
  document.getElementById("proof-preview-wrap").style.display = "none";
  document.getElementById("proof-upload-prompt").style.display = "block";
  document.getElementById("checkout-txn-ref").value = "";

  modal.classList.add("is-open");
  overlay.classList.add("is-open");
}

function closeCheckoutModal() {
  document.getElementById("checkout-modal")?.classList.remove("is-open");
  document.getElementById("checkout-overlay")?.classList.remove("is-open");
}

/* ============================================================
   ADMIN: ADD USER / SELLER MODAL CONTROLLER
   ============================================================ */
function openAdminUserModal(type = "customer") {
  const modal = document.getElementById("admin-user-modal");
  const overlay = document.getElementById("admin-user-overlay");
  if (!modal || !overlay) return;

  const isSeller = type === "seller";
  document.getElementById("admin-new-user-type").value = type;

  const btnCustomer = document.getElementById("btn-toggle-add-customer");
  const btnSeller = document.getElementById("btn-toggle-add-seller");
  const storeGroup = document.getElementById("admin-store-name-group");
  const catGroup = document.getElementById("admin-store-category-group");
  const balanceGroup = document.getElementById("admin-initial-balance-group");
  const badge = document.getElementById("admin-modal-badge");
  const title = document.getElementById("admin-user-modal-title");
  const submitBtn = document.getElementById("admin-submit-user-btn");

  if (isSeller) {
    btnCustomer?.classList.remove("is-active");
    btnSeller?.classList.add("is-active");
    if (storeGroup) storeGroup.style.display = "block";
    if (catGroup) catGroup.style.display = "block";
    if (balanceGroup) balanceGroup.style.display = "none";
    if (badge) badge.textContent = "🏪";
    if (title) title.textContent = "Add New Merchant Seller";
    if (submitBtn) submitBtn.innerHTML = `Register & Approve Seller <span>✓</span>`;
  } else {
    btnCustomer?.classList.add("is-active");
    btnSeller?.classList.remove("is-active");
    if (storeGroup) storeGroup.style.display = "none";
    if (catGroup) catGroup.style.display = "none";
    if (balanceGroup) balanceGroup.style.display = "block";
    if (badge) badge.textContent = "🛍️";
    if (title) title.textContent = "Add New Customer Account";
    if (submitBtn) submitBtn.innerHTML = `Create & Register Customer <span>✓</span>`;
  }

  modal.classList.add("is-open");
  overlay.classList.add("is-open");
}

function closeAdminUserModal() {
  document.getElementById("admin-user-modal")?.classList.remove("is-open");
  document.getElementById("admin-user-overlay")?.classList.remove("is-open");
}

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
   GLOBAL DOM INITIALIZATION & EVENT LISTENERS
   ============================================================ */
document.addEventListener("click", e => {
  // Add to cart
  const add = e.target.closest("[data-add]");
  if (add) addToCart(add.dataset.add);

  // Cart quantity controls
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
    if (role === "storefront") switchToStorefront();
    else loginAsRole(role);
  }

  // Open dashboard from homepage cards
  const portal = e.target.closest("[data-open-dashboard]");
  if (portal) {
    loginAsRole(portal.dataset.openDashboard);
  }

  // Auth role tab inside auth modal
  const authTab = e.target.closest(".auth-role-tab");
  if (authTab && authTab.dataset.role) {
    document.querySelectorAll(".auth-role-tab").forEach(t => t.classList.remove("is-active"));
    authTab.classList.add("is-active");
    authModalRole = authTab.dataset.role;
    updateAuthFormFields(authModalRole);
  }

  // 1-Click demo logins
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

  // Cart Drawer controls
  document.getElementById("close-cart")?.addEventListener("click", closeCart);
  document.getElementById("cart-overlay")?.addEventListener("click", closeCart);
  document.getElementById("checkout-button")?.addEventListener("click", openCheckoutModal);

  // Checkout Modal controls
  document.getElementById("close-checkout-modal")?.addEventListener("click", closeCheckoutModal);
  document.getElementById("checkout-overlay")?.addEventListener("click", closeCheckoutModal);
  document.getElementById("btn-cancel-checkout")?.addEventListener("click", closeCheckoutModal);

  // Proof Modal controls
  document.getElementById("close-proof-modal")?.addEventListener("click", closeProofModal);
  document.getElementById("proof-overlay")?.addEventListener("click", closeProofModal);

  // Admin User Modal controls
  document.getElementById("close-admin-user-modal")?.addEventListener("click", closeAdminUserModal);
  document.getElementById("admin-user-overlay")?.addEventListener("click", closeAdminUserModal);
  document.getElementById("btn-toggle-add-customer")?.addEventListener("click", () => openAdminUserModal("customer"));
  document.getElementById("btn-toggle-add-seller")?.addEventListener("click", () => openAdminUserModal("seller"));

  // Screenshot Upload Handler
  const fileInput = document.getElementById("payment-screenshot-file");
  fileInput?.addEventListener("change", e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = ev => {
        currentProofDataUrl = ev.target.result;
        const img = document.getElementById("proof-preview-img");
        if (img) img.src = currentProofDataUrl;
        document.getElementById("proof-upload-prompt").style.display = "none";
        document.getElementById("proof-preview-wrap").style.display = "flex";
        showToast("Payment screenshot loaded successfully!");
      };
      reader.readAsDataURL(file);
    }
  });

  // Use Demo Slip Button
  document.getElementById("btn-use-demo-receipt")?.addEventListener("click", () => {
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const delivery = subtotal >= 2500 ? 0 : 150;
    const total = subtotal + delivery;
    const randomTxn = `TXN-${Math.floor(10000000 + Math.random() * 90000000)}`;

    currentProofDataUrl = generateDemoReceiptDataUrl(
      `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      total,
      randomTxn,
      document.getElementById("checkout-wallet-app")?.value || "eSewa QR",
      document.getElementById("checkout-name")?.value || "Sarah Shrestha"
    );

    const img = document.getElementById("proof-preview-img");
    if (img) img.src = currentProofDataUrl;
    document.getElementById("proof-upload-prompt").style.display = "none";
    document.getElementById("proof-preview-wrap").style.display = "flex";
    document.getElementById("checkout-txn-ref").value = randomTxn;

    showToast("Verified demo payment slip & transaction reference generated!");
  });

  // Remove uploaded proof
  document.getElementById("btn-remove-proof")?.addEventListener("click", () => {
    currentProofDataUrl = "";
    document.getElementById("proof-preview-wrap").style.display = "none";
    document.getElementById("proof-upload-prompt").style.display = "block";
    if (fileInput) fileInput.value = "";
  });

  // Checkout Form Submission (Creates Order & Sends to Admin)
  document.getElementById("checkout-payment-form")?.addEventListener("submit", e => {
    e.preventDefault();

    if (!currentProofDataUrl) {
      alert("Please upload your payment screenshot or click '⚡ Use Instant Demo Payment Receipt' to proceed.");
      return;
    }

    const txnRef = document.getElementById("checkout-txn-ref").value.trim();
    if (!txnRef) {
      alert("Please enter the transaction reference code from your payment slip.");
      return;
    }

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const delivery = subtotal >= 2500 ? 0 : 150;
    const grandTotal = subtotal + delivery;
    const newOrderId = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
    const dateStr = new Date().toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });

    const newOrder = {
      id: newOrderId,
      date: dateStr,
      customerName: document.getElementById("checkout-name").value.trim(),
      customerEmail: currentUser?.email || "customer@bazaarhub.com",
      customerPhone: document.getElementById("checkout-phone").value.trim(),
      customerAddress: document.getElementById("checkout-address").value.trim(),
      sellerId: cart[0]?.sellerId || "SEL-101",
      sellerName: cart[0]?.sellerName || "Himalayan Tech & Style",
      items: JSON.parse(JSON.stringify(cart)),
      total: grandTotal,
      commissionRate: 10,
      commissionAmount: Math.round(grandTotal * 0.1),
      sellerPayout: grandTotal - Math.round(grandTotal * 0.1),
      paymentMethod: document.getElementById("checkout-wallet-app").value,
      txnRef: txnRef,
      proofImage: currentProofDataUrl,
      status: "Pending Verification",
      step: 1,
      settled: false,
      remarks: "Customer submitted QR payment slip. Awaiting Admin verification."
    };

    orders.unshift(newOrder);

    // Empty cart
    cart = [];
    saveAllData();
    updateCart();
    closeCheckoutModal();

    showToast(`🎉 Order #${newOrderId} placed! Sent to Admin for payment verification.`);

    // Switch to customer dashboard to view the live tracker
    switchToDashboard("customer");
  });

  // Admin Add User / Seller Form Submission
  document.getElementById("admin-add-user-form")?.addEventListener("submit", e => {
    e.preventDefault();
    const type = document.getElementById("admin-new-user-type").value;
    const name = document.getElementById("admin-user-name").value.trim();
    const email = document.getElementById("admin-user-email").value.trim();
    const phone = document.getElementById("admin-user-phone").value.trim();
    const loc = document.getElementById("admin-user-location").value.trim();

    if (type === "seller") {
      const storeName = document.getElementById("admin-store-name").value.trim() || `${name}'s Store`;
      const cat = document.getElementById("admin-store-category").value;
      const newSeller = {
        id: `SEL-${Math.floor(100 + Math.random() * 900)}`,
        role: "seller",
        name: name,
        storeName: storeName,
        email: email,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
        phone: phone,
        location: loc,
        category: cat,
        status: "Approved",
        rating: "5.0 ★ (New Store)",
        revenue: 0,
        payoutAvailable: 0,
        bank: "Nabil Bank (A/C: **** 1092)",
        joined: "Nov 2026"
      };
      sellers.unshift(newSeller);
      saveAllData();
      closeAdminUserModal();
      showToast(`Merchant Store “${storeName}” registered and approved!`);
    } else {
      const balance = Number(document.getElementById("admin-user-balance").value) || 1000;
      const newCustomer = {
        id: `CUST-${Math.floor(100 + Math.random() * 900)}`,
        role: "customer",
        name: name,
        email: email,
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
        phone: phone,
        location: loc,
        tier: "Standard Shopper",
        points: 100,
        wallet: balance,
        status: "Active",
        joined: "Nov 2026",
        totalOrders: 0,
        totalSpent: 0,
        addresses: [{ id: 1, label: "Home", text: loc, isDefault: true }],
        coupons: [{ code: "WELCOME10", discount: "10% OFF", desc: "Welcome voucher", expiry: "31 Dec 2026" }]
      };
      customers.unshift(newCustomer);
      saveAllData();
      closeAdminUserModal();
      showToast(`Customer account for “${name}” created!`);
    }

    if (currentView === "dashboard" && currentUser?.role === "admin") {
      renderAdminDashboard(document.getElementById("dashboard-view"));
    }
  });

  // Auth Modal (Sign In / Register) Form Submission
  document.getElementById("auth-form")?.addEventListener("submit", e => {
    e.preventDefault();
    if (authIsSignUp) {
      const name = document.getElementById("auth-name").value.trim() || "New User";
      const email = document.getElementById("auth-email").value.trim();
      const phone = document.getElementById("auth-phone").value.trim() || "+977 98XXXXXXXX";
      const city = document.getElementById("auth-city").value.trim() || "Kathmandu";

      if (authModalRole === "seller") {
        const storeName = document.getElementById("auth-store-name")?.value?.trim() || `${name}'s Store`;
        const cat = document.getElementById("auth-store-cat")?.value || "Streetwear & Hoodies";
        const newSeller = {
          id: `SEL-${Math.floor(100 + Math.random() * 900)}`,
          role: "seller",
          name: name,
          storeName: storeName,
          email: email,
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
          phone: phone,
          location: city,
          category: cat,
          status: "Approved",
          rating: "5.0 ★ (New Store)",
          revenue: 0,
          payoutAvailable: 0,
          bank: "Nabil Bank (A/C: **** 9081)",
          joined: "Nov 2026"
        };
        sellers.unshift(newSeller);
        currentUser = newSeller;
        saveAllData();
        closeAuthModal();
        renderHeader();
        updateRolePillHighlights();
        showToast(`Welcome! Merchant Store “${storeName}” registered.`);
        switchToDashboard("seller");
      } else {
        const newCustomer = {
          id: `CUST-${Math.floor(100 + Math.random() * 900)}`,
          role: "customer",
          name: name,
          email: email,
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
          phone: phone,
          location: city,
          tier: "🆕 New Customer",
          points: 100,
          wallet: 500,
          status: "Pending", // Pending admin approval!
          joined: "Today",
          totalOrders: 0,
          totalSpent: 0,
          addresses: [{ id: 1, label: "Home", text: city, isDefault: true }],
          coupons: [{ code: "WELCOME10", discount: "10% OFF", desc: "Welcome coupon upon approval", expiry: "31 Dec 2026" }]
        };
        customers.unshift(newCustomer);
        currentUser = newCustomer;
        saveAllData();
        closeAuthModal();
        renderHeader();
        updateRolePillHighlights();
        showToast(`Account registered (ID: ${newCustomer.id})! Waiting for store approval.`, 4000);
        openApprovalModal(`Hello ${name}! Your customer ID is ${newCustomer.id}. Your account has been registered and is pending approval by the store admin. You can browse all clothing items now. As soon as approved, you can add clothes to your bag and order!`);
        switchToStorefront();
      }
    } else {
      const email = (document.getElementById("auth-email").value.trim() || "").toLowerCase();
      let matched = customers.find(c => c.email.toLowerCase() === email);
      if (!matched) {
        matched = customers[0];
      }
      currentUser = matched;
      localStorage.setItem("bazaarhub-user", JSON.stringify(currentUser));
      closeAuthModal();
      renderHeader();
      updateRolePillHighlights();
      if (currentUser.status === "Pending") {
        showToast(`Signed in as ${currentUser.name} (Account Pending Approval)`);
        openApprovalModal(`Welcome back, ${currentUser.name}! Your customer account is currently pending store approval. You can browse all clothes now, and our admin will verify your account shortly.`);
      } else {
        showToast(`Welcome back, ${currentUser.name}!`);
      }
      switchToStorefront();
    }
  });

  // Admin Login Modal controls
  document.getElementById("close-admin-login-modal")?.addEventListener("click", closeAdminLoginModal);
  document.getElementById("admin-login-overlay")?.addEventListener("click", closeAdminLoginModal);
  document.getElementById("link-open-admin-login")?.addEventListener("click", e => {
    e.preventDefault();
    openAdminLoginModal();
  });
  document.getElementById("admin-login-form")?.addEventListener("submit", e => {
    e.preventDefault();
    currentUser = adminStats;
    localStorage.setItem("bazaarhub-user", JSON.stringify(currentUser));
    closeAdminLoginModal();
    renderHeader();
    showToast("🔐 Logged in as Store Administrator. Welcome back!");
    switchToDashboard("admin");
  });
  document.getElementById("btn-quick-admin-fill")?.addEventListener("click", () => {
    currentUser = adminStats;
    localStorage.setItem("bazaarhub-user", JSON.stringify(currentUser));
    closeAdminLoginModal();
    renderHeader();
    showToast("🔐 Instant Admin Access Granted!");
    switchToDashboard("admin");
  });

  // Customer Account Approval Modal controls
  document.getElementById("close-approval-modal")?.addEventListener("click", closeApprovalModal);
  document.getElementById("approval-overlay")?.addEventListener("click", closeApprovalModal);
  document.getElementById("btn-ack-approval")?.addEventListener("click", closeApprovalModal);

  // Toggle between Sign In and Sign Up in Auth Modal
  document.getElementById("toggle-auth-action")?.addEventListener("click", () => {
    authIsSignUp = !authIsSignUp;
    const toggleText = document.getElementById("auth-toggle-text");
    if (toggleText) {
      toggleText.innerHTML = authIsSignUp
        ? `Already have an account? <button type="button" id="toggle-auth-action" class="link-btn">Sign in</button>`
        : `Don't have an account? <button type="button" id="toggle-auth-action" class="link-btn">Create one now</button>`;
    }
    updateAuthFormFields(authModalRole);
  });

  // Seller Add Product Modal controls
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

    const s = currentUser && currentUser.role === "seller" ? currentUser : sellers[0];

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
      stock: stock,
      sellerId: s.id,
      sellerName: s.storeName
    };

    products.unshift(newProd);
    saveAllData();
    closeSellerProductModal();
    e.target.reset();

    showToast(`Published “${title}” to storefront!`);
    showDefaultProducts();

    if (currentView === "dashboard") {
      if (currentUser?.role === "seller") renderSellerDashboard(document.getElementById("dashboard-view"));
      else if (currentUser?.role === "admin") renderAdminDashboard(document.getElementById("dashboard-view"));
    }
  });

  // Hero seller CTA
  document.getElementById("hero-seller-btn")?.addEventListener("click", () => loginAsRole("seller"));

  // Newsletter form
  document.getElementById("newsletter-form")?.addEventListener("submit", e => {
    e.preventDefault();
    showToast("Subscribed! Check your email for special discount vouchers.");
    e.target.reset();
  });
});
