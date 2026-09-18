// Vision Pro TV Store - Main Application Logic

// Application State
const state = {
  currentTab: 'home',
  products: [...TV_DATA.products],
  filteredProducts: [...TV_DATA.products],
  filters: {
    category: 'all',
    brand: 'all',
    size: 'all',
    maxPrice: 200000,
    search: '',
    sort: 'popular'
  },
  cart: JSON.parse(localStorage.getItem('tv_cart') || '[]'),
  appliedVoucher: null,
  wishlist: JSON.parse(localStorage.getItem('tv_wishlist') || '[]'),
  compareList: [],
  chatMessages: [
    {
      sender: 'bot',
      time: 'เมื่อสักครู่',
      text: 'สวัสดีครับ ยินดีต้อนรับสู่ **Vision Pro TV Store** ศูนย์รวมทีวีและสมาร์ททีวีของแท้ 100% 📺✨ มีอะไรให้ผมและทีมช่างผู้เชี่ยวชาญช่วยเหลือ สามารถพิมพ์สอบถามหรือเลือกหัวข้อด้านล่างได้เลยครับ!'
    }
  ]
};

// DOM Initializer
document.addEventListener('DOMContentLoaded', () => {
  initIcons();
  initRouter();
  initHomeSection();
  initProductsSection();
  initPromotionsSection();
  initArticlesSection();
  initContactSection();
  initCart();
  initCompareSystem();
  initLiveChat();
  initFlashSaleTimer();

  // Handle Initial Hash
  const hash = window.location.hash.replace('#', '');
  if (['home', 'products', 'promotions', 'articles', 'contact'].includes(hash)) {
    switchTab(hash);
  } else {
    switchTab('home');
  }
});

// Re-render lucide icons helper
function initIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// -------------------------------------------------------------
// Router & Tab Navigation
// -------------------------------------------------------------
function initRouter() {
  const tabButtons = document.querySelectorAll('[data-tab-target]');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-tab-target');
      switchTab(target);
      // Close mobile menu if open
      closeMobileMenu();
    });
  });

  window.addEventListener('popstate', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    if (['home', 'products', 'promotions', 'articles', 'contact'].includes(hash)) {
      switchTab(hash, false);
    }
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMobileMenuBtn = document.getElementById('close-mobile-menu-btn');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
    });
  }
  if (closeMobileMenuBtn && mobileMenu) {
    closeMobileMenuBtn.addEventListener('click', closeMobileMenu);
  }
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.add('hidden');
  }
}

function switchTab(tabId, updateHash = true) {
  state.currentTab = tabId;
  if (updateHash) {
    window.location.hash = tabId;
  }

  // Update tab content visibility
  const sections = document.querySelectorAll('.tab-section');
  sections.forEach(sec => {
    if (sec.id === `section-${tabId}`) {
      sec.classList.remove('hidden');
      sec.classList.add('fade-in');
    } else {
      sec.classList.add('hidden');
      sec.classList.remove('fade-in');
    }
  });

  // Update active state in nav buttons
  const navButtons = document.querySelectorAll('[data-tab-target]');
  navButtons.forEach(btn => {
    if (btn.getAttribute('data-tab-target') === tabId) {
      btn.classList.add('active', 'text-blue-400', 'font-semibold');
      btn.classList.remove('text-gray-300');
    } else {
      btn.classList.remove('active', 'text-blue-400', 'font-semibold');
      btn.classList.add('text-gray-300');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
  initIcons();
}

// -------------------------------------------------------------
// Home Section Logic
// -------------------------------------------------------------
function initHomeSection() {
  // Render Categories on Home
  const homeCatContainer = document.getElementById('home-categories-grid');
  if (homeCatContainer) {
    homeCatContainer.innerHTML = TV_DATA.categories.filter(c => c.id !== 'all').map(cat => `
      <div onclick="filterFromHomeCategory('${cat.id}')" 
           class="glass-panel p-5 rounded-2xl cursor-pointer hover:border-blue-500/60 transition-all duration-300 group text-center flex flex-col items-center justify-center hover:-translate-y-1">
        <div class="w-14 h-14 rounded-2xl bg-blue-600/10 text-blue-400 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 glow-box">
          <i data-lucide="${cat.icon}" class="w-7 h-7"></i>
        </div>
        <h4 class="font-semibold text-white text-base group-hover:text-blue-400 transition-colors">${cat.name}</h4>
        <p class="text-xs text-gray-400 mt-1">${cat.desc || ''}</p>
      </div>
    `).join('');
  }

  // Render Featured / Best Sellers on Home
  const homeFeatured = document.getElementById('home-featured-products');
  if (homeFeatured) {
    const featuredList = state.products.slice(0, 4);
    homeFeatured.innerHTML = featuredList.map(p => renderProductCard(p)).join('');
  }

  // Render OLED Highlights on Home
  const homeOled = document.getElementById('home-oled-products');
  if (homeOled) {
    const oledList = state.products.filter(p => p.category === 'oled' || p.category === '8k').slice(0, 4);
    homeOled.innerHTML = oledList.map(p => renderProductCard(p)).join('');
  }

  // Render Latest Article on Home
  const homeArticleHighlight = document.getElementById('home-article-highlight');
  if (homeArticleHighlight && TV_DATA.articles.length > 0) {
    const art = TV_DATA.articles[0];
    homeArticleHighlight.innerHTML = `
      <div class="glass-panel rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 lg:p-8 items-center border border-blue-500/20">
        <div class="relative rounded-2xl overflow-hidden aspect-video">
          <img src="${art.image}" alt="${art.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <span class="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
            ${art.category}
          </span>
        </div>
        <div>
          <div class="flex items-center gap-4 text-xs text-gray-400 mb-3">
            <span><i data-lucide="user" class="w-3.5 h-3.5 inline mr-1 text-blue-400"></i> ${art.author}</span>
            <span><i data-lucide="calendar" class="w-3.5 h-3.5 inline mr-1 text-blue-400"></i> ${art.date}</span>
            <span><i data-lucide="clock" class="w-3.5 h-3.5 inline mr-1 text-blue-400"></i> ${art.readTime}</span>
          </div>
          <h3 class="text-xl lg:text-2xl font-bold text-white mb-3 hover:text-blue-400 cursor-pointer" onclick="openArticleModal('${art.id}')">${art.title}</h3>
          <p class="text-gray-300 text-sm mb-6 line-clamp-3">${art.excerpt}</p>
          <div class="flex items-center gap-4">
            <button onclick="openArticleModal('${art.id}')" class="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold transition-all shadow-lg hover:shadow-blue-500/25 flex items-center gap-2">
              อ่านบทความเต็ม <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
            <button onclick="switchTab('articles')" class="text-sm text-gray-300 hover:text-blue-400 font-medium">
              ดูบทความทั้งหมด (${TV_DATA.articles.length})
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

function filterFromHomeCategory(categoryId) {
  state.filters.category = categoryId;
  switchTab('products');
  applyFilters();
}

// -------------------------------------------------------------
// Products Catalog Section
// -------------------------------------------------------------
function initProductsSection() {
  // Render Brand Filter Options
  const brandFilter = document.getElementById('filter-brand');
  if (brandFilter) {
    brandFilter.innerHTML = `
      <option value="all">ทุกแบรนด์ (Samsung, LG, Sony...)</option>
      ${TV_DATA.brands.map(b => `<option value="${b}">${b}</option>`).join('')}
    `;
    brandFilter.addEventListener('change', (e) => {
      state.filters.brand = e.target.value;
      applyFilters();
    });
  }

  // Render Category Filter Chips
  const categoryChips = document.getElementById('category-filter-chips');
  if (categoryChips) {
    categoryChips.innerHTML = TV_DATA.categories.map(cat => `
      <button onclick="selectCategoryFilter('${cat.id}')" 
              id="cat-chip-${cat.id}"
              class="cat-chip-btn px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all whitespace-nowrap border ${state.filters.category === cat.id ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/30' : 'glass-panel text-gray-300 border-white/10 hover:border-blue-500/40'}">
        <i data-lucide="${cat.icon}" class="w-3.5 h-3.5 inline mr-1.5"></i> ${cat.name}
      </button>
    `).join('');
  }

  // Render Screen Size Filter
  const sizeFilter = document.getElementById('filter-size');
  if (sizeFilter) {
    sizeFilter.innerHTML = `
      <option value="all">ทุกขนาดหน้าจอ</option>
      ${TV_DATA.sizes.map(s => `<option value="${s}">${s} นิ้ว</option>`).join('')}
    `;
    sizeFilter.addEventListener('change', (e) => {
      state.filters.size = e.target.value;
      applyFilters();
    });
  }

  // Price Slider
  const priceSlider = document.getElementById('filter-price-slider');
  const priceValueDisplay = document.getElementById('price-slider-display');
  if (priceSlider && priceValueDisplay) {
    priceSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      state.filters.maxPrice = val;
      priceValueDisplay.textContent = `฿${val.toLocaleString()}`;
      applyFilters();
    });
  }

  // Sort By
  const sortSelect = document.getElementById('filter-sort');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.filters.sort = e.target.value;
      applyFilters();
    });
  }

  // Search input
  const searchInput = document.getElementById('product-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.filters.search = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }

  // Header quick search input
  const headerSearchInput = document.getElementById('header-search-input');
  if (headerSearchInput) {
    headerSearchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const query = headerSearchInput.value.toLowerCase().trim();
        state.filters.search = query;
        if (searchInput) searchInput.value = query;
        switchTab('products');
        applyFilters();
      }
    });
  }

  applyFilters();
}

function selectCategoryFilter(catId) {
  state.filters.category = catId;
  const chips = document.querySelectorAll('.cat-chip-btn');
  chips.forEach(chip => {
    chip.className = 'cat-chip-btn px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all whitespace-nowrap border glass-panel text-gray-300 border-white/10 hover:border-blue-500/40';
  });
  const activeChip = document.getElementById(`cat-chip-${catId}`);
  if (activeChip) {
    activeChip.className = 'cat-chip-btn px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all whitespace-nowrap border bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/30';
  }
  applyFilters();
}

function applyFilters() {
  let result = [...state.products];

  // Category filter
  if (state.filters.category !== 'all') {
    result = result.filter(p => p.category === state.filters.category);
  }

  // Brand filter
  if (state.filters.brand !== 'all') {
    result = result.filter(p => p.brand.toLowerCase() === state.filters.brand.toLowerCase());
  }

  // Size filter
  if (state.filters.size !== 'all') {
    result = result.filter(p => p.size === parseInt(state.filters.size, 10));
  }

  // Price filter
  result = result.filter(p => p.price <= state.filters.maxPrice);

  // Search filter
  if (state.filters.search) {
    result = result.filter(p => 
      p.name.toLowerCase().includes(state.filters.search) ||
      p.brand.toLowerCase().includes(state.filters.search) ||
      p.panelType.toLowerCase().includes(state.filters.search) ||
      p.resolution.toLowerCase().includes(state.filters.search) ||
      p.description.toLowerCase().includes(state.filters.search)
    );
  }

  // Sort
  if (state.filters.sort === 'price-asc') {
    result.sort((a, b) => a.price - b.price);
  } else if (state.filters.sort === 'price-desc') {
    result.sort((a, b) => b.price - a.price);
  } else if (state.filters.sort === 'size-desc') {
    result.sort((a, b) => b.size - a.size);
  } else if (state.filters.sort === 'rating') {
    result.sort((a, b) => b.rating - a.rating);
  }

  state.filteredProducts = result;
  renderProductGrid();
}

function renderProductGrid() {
  const grid = document.getElementById('products-catalog-grid');
  const countDisplay = document.getElementById('products-count-display');
  
  if (countDisplay) {
    countDisplay.textContent = `พบสินค้าทั้งหมด ${state.filteredProducts.length} รายการ`;
  }

  if (!grid) return;

  if (state.filteredProducts.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-16 glass-panel rounded-3xl p-8 border border-white/10">
        <div class="w-20 h-20 mx-auto rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
          <i data-lucide="search-x" class="w-10 h-10"></i>
        </div>
        <h3 class="text-xl font-bold text-white mb-2">ไม่พบสินค้าที่ตรงกับเงื่อนไข</h3>
        <p class="text-gray-400 text-sm mb-6">ลองปรับเงื่อนไขการค้นหา เช่น เลือกแบรนด์อื่น หรือขยายช่วงราคา</p>
        <button onclick="resetAllFilters()" class="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold transition-all shadow-lg">
          ล้างตัวกรองทั้งหมด
        </button>
      </div>
    `;
  } else {
    grid.innerHTML = state.filteredProducts.map(p => renderProductCard(p)).join('');
  }
  initIcons();
}

function resetAllFilters() {
  state.filters = {
    category: 'all',
    brand: 'all',
    size: 'all',
    maxPrice: 200000,
    search: '',
    sort: 'popular'
  };

  const brandFilter = document.getElementById('filter-brand');
  const sizeFilter = document.getElementById('filter-size');
  const priceSlider = document.getElementById('filter-price-slider');
  const priceValueDisplay = document.getElementById('price-slider-display');
  const searchInput = document.getElementById('product-search-input');
  const sortSelect = document.getElementById('filter-sort');

  if (brandFilter) brandFilter.value = 'all';
  if (sizeFilter) sizeFilter.value = 'all';
  if (priceSlider) priceSlider.value = 200000;
  if (priceValueDisplay) priceValueDisplay.textContent = '฿200,000';
  if (searchInput) searchInput.value = '';
  if (sortSelect) sortSelect.value = 'popular';

  selectCategoryFilter('all');
}

// -------------------------------------------------------------
// Product Card Template
// -------------------------------------------------------------
function renderProductCard(product) {
  const isWishlisted = state.wishlist.includes(product.id);
  const isCompared = state.compareList.includes(product.id);
  const monthlyInstallment = Math.round(product.price / 10);

  return `
    <div class="product-card glass-panel rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group relative bg-gray-900/80">
      
      <!-- Top Image Area -->
      <div class="relative overflow-hidden bg-gray-950/60 aspect-[16/10] p-4 flex items-center justify-center">
        <!-- Badge -->
        ${product.badge ? `
          <span class="absolute top-3 left-3 ${product.badgeColor || 'bg-blue-600'} text-white text-[11px] font-bold px-2.5 py-1 rounded-lg z-10 shadow-md">
            ${product.badge}
          </span>
        ` : ''}

        <!-- Wishlist Button -->
        <button onclick="toggleWishlist('${product.id}')" 
                class="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-900/80 hover:bg-red-500/20 text-gray-300 hover:text-red-400 flex items-center justify-center transition-all z-10 ${isWishlisted ? 'text-red-500 bg-red-500/10' : ''}">
          <i data-lucide="heart" class="w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}"></i>
        </button>

        <!-- Product Image -->
        <img src="${product.image}" alt="${product.name}" 
             class="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500">

        <!-- Quick View Overlay -->
        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
          <button onclick="openQuickView('${product.id}')" 
                  class="px-3.5 py-2 bg-white text-gray-900 font-semibold rounded-xl text-xs hover:bg-blue-500 hover:text-white transition-all shadow-lg flex items-center gap-1.5">
            <i data-lucide="eye" class="w-4 h-4"></i> ดูสเปกละเอียด
          </button>
        </div>
      </div>

      <!-- Card Content -->
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <!-- Brand & Screen Size -->
          <div class="flex items-center justify-between text-xs text-gray-400 mb-1.5">
            <span class="font-semibold text-blue-400 tracking-wider uppercase">${product.brand}</span>
            <span class="bg-blue-900/40 text-blue-300 px-2 py-0.5 rounded font-mono font-medium">${product.size} นิ้ว (${product.resolution.split(' ')[0]})</span>
          </div>

          <!-- Product Title -->
          <h4 onclick="openQuickView('${product.id}')" 
              class="font-bold text-white text-sm md:text-base leading-snug line-clamp-2 hover:text-blue-400 cursor-pointer transition-colors mb-2">
            ${product.name}
          </h4>

          <!-- Key Specs Tags -->
          <div class="flex flex-wrap gap-1.5 mb-3">
            <span class="text-[11px] bg-white/5 text-gray-300 px-2 py-0.5 rounded-md border border-white/5">
              ${product.panelType.split('(')[0]}
            </span>
            <span class="text-[11px] bg-white/5 text-gray-300 px-2 py-0.5 rounded-md border border-white/5">
              ${product.refreshRate.split(' ')[0]}
            </span>
            <span class="text-[11px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-md border border-emerald-500/20">
              ผ่อน 0% ~ ฿${monthlyInstallment.toLocaleString()}/ด.
            </span>
          </div>

          <!-- Rating -->
          <div class="flex items-center gap-1.5 text-xs text-amber-400 mb-3">
            <div class="flex text-amber-400">
              <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400"></i>
            </div>
            <span class="font-bold text-white text-xs">${product.rating}</span>
            <span class="text-gray-400 text-[11px]">(${product.reviewsCount} รีวิว)</span>
          </div>
        </div>

        <!-- Price and Actions -->
        <div class="pt-3 border-t border-white/10 mt-2">
          <div class="flex items-baseline justify-between mb-3">
            <div>
              <div class="text-xs text-gray-400 line-through">฿${product.originalPrice.toLocaleString()}</div>
              <div class="text-lg md:text-xl font-extrabold text-blue-400">฿${product.price.toLocaleString()}</div>
            </div>
            <span class="text-xs font-bold text-red-400 bg-red-500/10 border border-red-500/20 px-2 py-1 rounded-md">
              ลด ${product.discount}%
            </span>
          </div>

          <!-- Action Buttons -->
          <div class="grid grid-cols-2 gap-2">
            <button onclick="addToCart('${product.id}')" 
                    class="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-1.5">
              <i data-lucide="shopping-cart" class="w-3.5 h-3.5"></i> ใส่ตะกร้า
            </button>
            <button onclick="toggleCompare('${product.id}')" 
                    class="w-full py-2 border ${isCompared ? 'border-amber-500 bg-amber-500/10 text-amber-400' : 'border-white/10 hover:border-white/30 text-gray-300'} rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1">
              <i data-lucide="arrow-left-right" class="w-3.5 h-3.5"></i> ${isCompared ? 'กำลังเทียบ' : 'เปรียบเทียบ'}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// Quick View Modal
// -------------------------------------------------------------
function openQuickView(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quick-view-modal');
  const modalContent = document.getElementById('quick-view-content');

  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
      <!-- Left: Image & Tags -->
      <div>
        <div class="rounded-2xl overflow-hidden aspect-[16/10] bg-gray-950 border border-white/10 relative mb-4">
          <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
          ${product.badge ? `
            <span class="absolute top-4 left-4 ${product.badgeColor || 'bg-blue-600'} text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
              ${product.badge}
            </span>
          ` : ''}
        </div>
        
        <!-- Highlights Box -->
        <div class="glass-panel p-4 rounded-xl border border-blue-500/20">
          <h5 class="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i data-lucide="check-circle" class="w-4 h-4"></i> จุดเด่นและฟังก์ชันหลัก
          </h5>
          <ul class="space-y-1.5 text-xs text-gray-300">
            ${product.features.map(f => `
              <li class="flex items-start gap-2">
                <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0"></i>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>

      <!-- Right: Info & Specs -->
      <div class="flex flex-col justify-between">
        <div>
          <!-- Header -->
          <div class="flex items-center justify-between text-xs text-gray-400 mb-2">
            <span class="font-bold text-blue-400 uppercase tracking-wider">${product.brand} SMART TV</span>
            <span class="text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full font-medium">มีสินค้าพร้อมส่ง</span>
          </div>

          <h3 class="text-xl md:text-2xl font-bold text-white mb-2">${product.name}</h3>
          
          <p class="text-xs md:text-sm text-gray-300 mb-4 leading-relaxed">${product.description}</p>

          <!-- Price Section -->
          <div class="glass-panel p-4 rounded-2xl border border-white/10 mb-5 flex items-center justify-between">
            <div>
              <div class="text-xs text-gray-400 line-through">ราคาปกติ ฿${product.originalPrice.toLocaleString()}</div>
              <div class="text-2xl md:text-3xl font-black text-blue-400">฿${product.price.toLocaleString()}</div>
              <div class="text-xs text-emerald-400 mt-0.5">หรือผ่อน 0% นาน 10 เดือน เพียง ฿${Math.round(product.price/10).toLocaleString()}/เดือน</div>
            </div>
            <div class="text-right">
              <span class="inline-block bg-red-500 text-white font-bold text-xs px-3 py-1.5 rounded-xl shadow-lg shadow-red-500/20">
                ประหยัด ฿${(product.originalPrice - product.price).toLocaleString()}
              </span>
            </div>
          </div>

          <!-- Specs Table -->
          <div class="space-y-2 mb-6">
            <h5 class="text-xs font-bold text-gray-400 uppercase tracking-wider">สเปกทางเทคนิค (Specifications)</h5>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="bg-white/5 p-2.5 rounded-xl border border-white/5">
                <span class="text-gray-400 block mb-0.5">ขนาดหน้าจอ</span>
                <strong class="text-white">${product.size} นิ้ว</strong>
              </div>
              <div class="bg-white/5 p-2.5 rounded-xl border border-white/5">
                <span class="text-gray-400 block mb-0.5">ความละเอียด</span>
                <strong class="text-white">${product.resolution}</strong>
              </div>
              <div class="bg-white/5 p-2.5 rounded-xl border border-white/5">
                <span class="text-gray-400 block mb-0.5">เทคโนโลยีจอ</span>
                <strong class="text-white">${product.panelType}</strong>
              </div>
              <div class="bg-white/5 p-2.5 rounded-xl border border-white/5">
                <span class="text-gray-400 block mb-0.5">รีเฟรชเรท</span>
                <strong class="text-white">${product.refreshRate}</strong>
              </div>
              <div class="bg-white/5 p-2.5 rounded-xl border border-white/5">
                <span class="text-gray-400 block mb-0.5">ระบบปฏิบัติการ</span>
                <strong class="text-white">${product.smartOS}</strong>
              </div>
              <div class="bg-white/5 p-2.5 rounded-xl border border-white/5">
                <span class="text-gray-400 block mb-0.5">ระบบเสียง</span>
                <strong class="text-white">${product.sound}</strong>
              </div>
              <div class="bg-white/5 p-2.5 rounded-xl border border-white/5 col-span-2">
                <span class="text-gray-400 block mb-0.5">พอร์ตเชื่อมต่อ</span>
                <strong class="text-white">${product.hdmiPorts}</strong>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Action Buttons -->
        <div class="flex items-center gap-3 pt-4 border-t border-white/10">
          <button onclick="addToCart('${product.id}'); closeQuickView();" 
                  class="flex-1 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2">
            <i data-lucide="shopping-bag" class="w-4 h-4"></i> สั่งซื้อ / ใส่ตะกร้าสินค้า
          </button>
          <button onclick="toggleCompare('${product.id}'); closeQuickView();" 
                  class="px-4 py-3.5 border border-white/20 hover:border-white text-gray-200 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5">
            <i data-lucide="arrow-left-right" class="w-4 h-4"></i> เปรียบเทียบ
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  initIcons();
}

function closeQuickView() {
  const modal = document.getElementById('quick-view-modal');
  if (modal) modal.classList.add('hidden');
}

// -------------------------------------------------------------
// Compare System (Side-by-side)
// -------------------------------------------------------------
function initCompareSystem() {
  updateCompareBar();
}

function toggleCompare(productId) {
  const idx = state.compareList.indexOf(productId);
  if (idx > -1) {
    state.compareList.splice(idx, 1);
    showToast('นำสินค้าออกจากรายการเปรียบเทียบแล้ว');
  } else {
    if (state.compareList.length >= 3) {
      showToast('เปรียบเทียบได้สูงสุด 3 รุ่นพร้อมกันครับ', 'warning');
      return;
    }
    state.compareList.push(productId);
    showToast('เพิ่มสินค้าเข้ารายการเปรียบเทียบแล้ว');
  }

  updateCompareBar();
  renderProductGrid();
}

function updateCompareBar() {
  const bar = document.getElementById('compare-floating-bar');
  const countSpan = document.getElementById('compare-count');
  const previewContainer = document.getElementById('compare-items-preview');

  if (!bar) return;

  if (state.compareList.length > 0) {
    bar.classList.remove('translate-y-32');
    bar.classList.add('translate-y-0');
    if (countSpan) countSpan.textContent = state.compareList.length;

    if (previewContainer) {
      const items = state.compareList.map(id => state.products.find(p => p.id === id)).filter(Boolean);
      previewContainer.innerHTML = items.map(it => `
        <div class="flex items-center gap-2 bg-gray-800/80 px-2.5 py-1.5 rounded-lg border border-white/10 text-xs">
          <img src="${it.image}" class="w-6 h-6 object-cover rounded">
          <span class="truncate max-w-[100px] text-white">${it.name}</span>
          <button onclick="toggleCompare('${it.id}')" class="text-gray-400 hover:text-red-400 ml-1">×</button>
        </div>
      `).join('');
    }
  } else {
    bar.classList.add('translate-y-32');
    bar.classList.remove('translate-y-0');
  }
}

function clearCompareList() {
  state.compareList = [];
  updateCompareBar();
  renderProductGrid();
}

function openCompareModal() {
  if (state.compareList.length < 2) {
    showToast('กรุณาเลือกสินค้าอย่างน้อย 2 รุ่นเพื่อเปรียบเทียบครับ', 'warning');
    return;
  }

  const modal = document.getElementById('compare-modal');
  const modalBody = document.getElementById('compare-modal-body');
  if (!modal || !modalBody) return;

  const items = state.compareList.map(id => state.products.find(p => p.id === id)).filter(Boolean);

  modalBody.innerHTML = `
    <div class="overflow-x-auto">
      <table class="w-full text-left text-sm">
        <thead>
          <tr class="border-b border-white/10">
            <th class="p-4 bg-gray-900/50 w-44 font-bold text-gray-400">คุณสมบัติ / สเปก</th>
            ${items.map(it => `
              <th class="p-4 bg-gray-900/80 min-w-[240px] text-center border-l border-white/10">
                <img src="${it.image}" class="w-32 h-20 object-cover mx-auto rounded-lg mb-2">
                <h5 class="font-bold text-white text-sm line-clamp-2">${it.name}</h5>
                <div class="text-blue-400 font-extrabold text-base mt-1">฿${it.price.toLocaleString()}</div>
                <button onclick="addToCart('${it.id}'); closeCompareModal();" class="mt-2 w-full py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold">
                  ใส่ตะกร้า
                </button>
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody class="divide-y divide-white/5 text-xs md:text-sm">
          <tr>
            <td class="p-3.5 font-semibold text-gray-400 bg-white/5">แบรนด์</td>
            ${items.map(it => `<td class="p-3.5 text-center text-white border-l border-white/5 font-bold">${it.brand}</td>`).join('')}
          </tr>
          <tr>
            <td class="p-3.5 font-semibold text-gray-400 bg-white/5">ขนาดหน้าจอ</td>
            ${items.map(it => `<td class="p-3.5 text-center text-white border-l border-white/5">${it.size} นิ้ว</td>`).join('')}
          </tr>
          <tr>
            <td class="p-3.5 font-semibold text-gray-400 bg-white/5">ความละเอียดภาพ</td>
            ${items.map(it => `<td class="p-3.5 text-center text-white border-l border-white/5">${it.resolution}</td>`).join('')}
          </tr>
          <tr>
            <td class="p-3.5 font-semibold text-gray-400 bg-white/5">ชนิดจอภาพ (Panel)</td>
            ${items.map(it => `<td class="p-3.5 text-center text-white border-l border-white/5">${it.panelType}</td>`).join('')}
          </tr>
          <tr>
            <td class="p-3.5 font-semibold text-gray-400 bg-white/5">อัตรารีเฟรชเรท</td>
            ${items.map(it => `<td class="p-3.5 text-center text-white border-l border-white/5 text-blue-400 font-semibold">${it.refreshRate}</td>`).join('')}
          </tr>
          <tr>
            <td class="p-3.5 font-semibold text-gray-400 bg-white/5">ระบบปฏิบัติการ</td>
            ${items.map(it => `<td class="p-3.5 text-center text-white border-l border-white/5">${it.smartOS}</td>`).join('')}
          </tr>
          <tr>
            <td class="p-3.5 font-semibold text-gray-400 bg-white/5">ระบบเสียง</td>
            ${items.map(it => `<td class="p-3.5 text-center text-white border-l border-white/5">${it.sound}</td>`).join('')}
          </tr>
          <tr>
            <td class="p-3.5 font-semibold text-gray-400 bg-white/5">พอร์ตเชื่อมต่อ</td>
            ${items.map(it => `<td class="p-3.5 text-center text-white border-l border-white/5">${it.hdmiPorts}</td>`).join('')}
          </tr>
          <tr>
            <td class="p-3.5 font-semibold text-gray-400 bg-white/5">การรับประกัน</td>
            ${items.map(() => `<td class="p-3.5 text-center text-emerald-400 border-l border-white/5 font-semibold">ศูนย์ไทย 3 ปี (Onsite Service)</td>`).join('')}
          </tr>
        </tbody>
      </table>
    </div>
  `;

  modal.classList.remove('hidden');
  initIcons();
}

function closeCompareModal() {
  const modal = document.getElementById('compare-modal');
  if (modal) modal.classList.add('hidden');
}

// -------------------------------------------------------------
// Shopping Cart & Checkout
// -------------------------------------------------------------
function initCart() {
  updateCartBadge();
  renderCartDrawer();

  // Cart Drawer open/close
  const cartTrigger = document.getElementById('cart-drawer-trigger');
  const cartDrawer = document.getElementById('cart-drawer');
  const closeCartBtn = document.getElementById('close-cart-btn');

  if (cartTrigger && cartDrawer) {
    cartTrigger.addEventListener('click', () => {
      cartDrawer.classList.remove('hidden');
    });
  }
  if (closeCartBtn && cartDrawer) {
    closeCartBtn.addEventListener('click', () => {
      cartDrawer.classList.add('hidden');
    });
  }
}

function addToCart(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.size,
      quantity: 1
    });
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
  showToast(`เพิ่ม "${product.name}" ลงในตะกร้าแล้ว 🛒`);

  // Open drawer automatically
  const cartDrawer = document.getElementById('cart-drawer');
  if (cartDrawer) cartDrawer.classList.remove('hidden');
}

function updateCartQuantity(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => i.id !== productId);
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCart();
  updateCartBadge();
  renderCartDrawer();
  showToast('ลบสินค้าออกจากตะกร้าแล้ว');
}

function saveCart() {
  localStorage.setItem('tv_cart', JSON.stringify(state.cart));
}

function updateCartBadge() {
  const totalCount = state.cart.reduce((sum, i) => sum + i.quantity, 0);
  const badges = document.querySelectorAll('.cart-count-badge');
  badges.forEach(b => {
    b.textContent = totalCount;
    if (totalCount > 0) {
      b.classList.remove('hidden');
    } else {
      b.classList.add('hidden');
    }
  });
}

function renderCartDrawer() {
  const container = document.getElementById('cart-items-container');
  const subtotalDisplay = document.getElementById('cart-subtotal-display');
  const discountDisplay = document.getElementById('cart-discount-display');
  const totalDisplay = document.getElementById('cart-total-display');
  const checkoutBtn = document.getElementById('cart-checkout-btn');

  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16 text-gray-400">
        <i data-lucide="shopping-cart" class="w-16 h-16 mx-auto mb-3 opacity-30 text-blue-400"></i>
        <p class="text-base font-semibold text-white mb-1">ไม่มีสินค้าในตะกร้า</p>
        <p class="text-xs text-gray-500 mb-6">เลือกชมทีวีสุดล้ำและเพิ่มลงในตะกร้าได้เลยครับ</p>
        <button onclick="document.getElementById('cart-drawer').classList.add('hidden'); switchTab('products');" 
                class="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold shadow-lg">
          เลือกซื้อสินค้า
        </button>
      </div>
    `;
    if (subtotalDisplay) subtotalDisplay.textContent = '฿0';
    if (discountDisplay) discountDisplay.textContent = '-฿0';
    if (totalDisplay) totalDisplay.textContent = '฿0';
    if (checkoutBtn) checkoutBtn.disabled = true;
    initIcons();
    return;
  }

  if (checkoutBtn) checkoutBtn.disabled = false;

  container.innerHTML = state.cart.map(item => `
    <div class="flex items-center gap-3 p-3 glass-panel rounded-xl border border-white/5">
      <img src="${item.image}" alt="${item.name}" class="w-16 h-12 object-cover rounded-lg">
      <div class="flex-1 min-w-0">
        <h5 class="text-xs font-bold text-white truncate">${item.name}</h5>
        <div class="text-xs font-semibold text-blue-400 mt-0.5">฿${item.price.toLocaleString()}</div>
        <div class="flex items-center gap-2 mt-2">
          <div class="flex items-center border border-white/10 rounded-lg bg-gray-900/60 overflow-hidden">
            <button onclick="updateCartQuantity('${item.id}', -1)" class="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 text-xs font-bold">-</button>
            <span class="w-6 text-center text-xs text-white font-mono">${item.quantity}</span>
            <button onclick="updateCartQuantity('${item.id}', 1)" class="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 text-xs font-bold">+</button>
          </div>
          <button onclick="removeFromCart('${item.id}')" class="text-xs text-red-400 hover:text-red-300 ml-auto flex items-center gap-1">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i> ลบ
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Calculate Subtotal & Discount
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discount = 0;

  if (state.appliedVoucher) {
    if (state.appliedVoucher === 'TVPRO2026' && subtotal >= 25000) {
      discount = 2500;
    } else if (state.appliedVoucher === 'OLED5000' && subtotal >= 50000) {
      discount = 5000;
    } else if (state.appliedVoucher === 'FREESHIP') {
      discount = 0; // Free shipping benefit
    }
  }

  const grandTotal = Math.max(0, subtotal - discount);

  if (subtotalDisplay) subtotalDisplay.textContent = `฿${subtotal.toLocaleString()}`;
  if (discountDisplay) discountDisplay.textContent = `-฿${discount.toLocaleString()}`;
  if (totalDisplay) totalDisplay.textContent = `฿${grandTotal.toLocaleString()}`;

  initIcons();
}

function applyVoucherCode() {
  const input = document.getElementById('voucher-code-input');
  if (!input) return;

  const code = input.value.trim().toUpperCase();
  if (!code) {
    showToast('กรุณากรอกรหัสคูปอง', 'warning');
    return;
  }

  if (code === 'TVPRO2026') {
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (subtotal < 25000) {
      showToast('โค้ด TVPRO2026 ใช้ได้กับยอดสั่งซื้อ 25,000 บาทขึ้นไปครับ', 'warning');
      return;
    }
    state.appliedVoucher = code;
    showToast('ใช้โค้ด TVPRO2026 สำเร็จ! ลดทันที 2,500 บาท 🎉');
  } else if (code === 'FREESHIP') {
    state.appliedVoucher = code;
    showToast('ใช้โค้ด FREESHIP สำเร็จ! รับสิทธิ์ส่งและติดตั้งฟรี 🚚');
  } else {
    showToast('รหัสคูปองไม่ถูกต้องหรือหมดอายุแล้วครับ', 'error');
    return;
  }

  renderCartDrawer();
}

function openCheckoutModal() {
  if (state.cart.length === 0) return;

  const modal = document.getElementById('checkout-modal');
  const summaryContainer = document.getElementById('checkout-summary-container');
  const totalDisplay = document.getElementById('checkout-final-total');

  if (!modal) return;

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discount = state.appliedVoucher === 'TVPRO2026' && subtotal >= 25000 ? 2500 : 0;
  const grandTotal = Math.max(0, subtotal - discount);

  if (summaryContainer) {
    summaryContainer.innerHTML = state.cart.map(item => `
      <div class="flex justify-between items-center text-xs py-1.5 border-b border-white/5">
        <span class="truncate max-w-[200px] text-gray-300">${item.name} x${item.quantity}</span>
        <span class="font-mono text-white">฿${(item.price * item.quantity).toLocaleString()}</span>
      </div>
    `).join('');
  }

  if (totalDisplay) {
    totalDisplay.textContent = `฿${grandTotal.toLocaleString()}`;
  }

  modal.classList.remove('hidden');
  initIcons();
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.add('hidden');
}

function confirmOrder(event) {
  event.preventDefault();
  const name = document.getElementById('checkout-name')?.value;
  const phone = document.getElementById('checkout-phone')?.value;

  if (!name || !phone) {
    showToast('กรุณากรอกชื่อและเบอร์โทรศัพท์สำหรับจัดส่ง', 'warning');
    return;
  }

  // Clear Cart
  state.cart = [];
  saveCart();
  updateCartBadge();
  closeCheckoutModal();

  const cartDrawer = document.getElementById('cart-drawer');
  if (cartDrawer) cartDrawer.classList.add('hidden');

  // Show Success Confirmation Modal
  const successModal = document.getElementById('order-success-modal');
  if (successModal) {
    document.getElementById('order-id-display').textContent = `VP-${Math.floor(100000 + Math.random() * 900000)}`;
    document.getElementById('order-customer-display').textContent = name;
    successModal.classList.remove('hidden');
  }
}

function closeOrderSuccessModal() {
  const successModal = document.getElementById('order-success-modal');
  if (successModal) successModal.classList.add('hidden');
  switchTab('home');
}

// -------------------------------------------------------------
// Wishlist System
// -------------------------------------------------------------
function toggleWishlist(productId) {
  const idx = state.wishlist.indexOf(productId);
  if (idx > -1) {
    state.wishlist.splice(idx, 1);
    showToast('นำออกจากรายการโปรดแล้ว');
  } else {
    state.wishlist.push(productId);
    showToast('บันทึกลงรายการโปรดแล้ว ❤️');
  }

  localStorage.setItem('tv_wishlist', JSON.stringify(state.wishlist));
  renderProductGrid();
}

// -------------------------------------------------------------
// Promotions Section
// -------------------------------------------------------------
function initPromotionsSection() {
  const promoGrid = document.getElementById('promotions-grid');
  if (!promoGrid) return;

  promoGrid.innerHTML = TV_DATA.promotions.map(promo => `
    <div class="glass-panel rounded-3xl p-6 lg:p-8 border ${promo.highlight ? 'border-blue-500/50 glow-box' : 'border-white/10'} flex flex-col justify-between relative overflow-hidden group">
      ${promo.highlight ? '<div class="absolute -right-12 -top-12 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl"></div>' : ''}
      
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs font-bold ${promo.highlight ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-300'} px-3 py-1 rounded-full">
            ${promo.badge}
          </span>
          <span class="text-xs text-amber-400 flex items-center gap-1 font-mono">
            <i data-lucide="clock" class="w-3.5 h-3.5"></i> ${promo.expiry}
          </span>
        </div>

        <h3 class="text-lg md:text-xl font-bold text-white mb-2">${promo.title}</h3>
        <p class="text-xs md:text-sm text-gray-300 mb-6">${promo.subtitle}</p>

        <!-- Voucher Box -->
        <div class="bg-gray-950/80 border border-dashed border-blue-500/40 p-4 rounded-2xl flex items-center justify-between mb-4">
          <div>
            <div class="text-[11px] text-gray-400">รหัสส่วนลด</div>
            <div class="text-base font-black text-blue-400 font-mono tracking-wider">${promo.code}</div>
            <div class="text-[11px] text-emerald-400 mt-0.5">${promo.discountText} (${promo.minSpend})</div>
          </div>
          <button onclick="copyPromoCode('${promo.code}')" 
                  class="px-4 py-2 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white rounded-xl text-xs font-semibold transition-all border border-blue-500/30 flex items-center gap-1.5">
            <i data-lucide="copy" class="w-3.5 h-3.5"></i> คัดลอกโค้ด
          </button>
        </div>
      </div>

      <button onclick="switchTab('products')" 
              class="w-full py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 border border-white/10">
        ช้อปสินค้าร่วมรายการ <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
      </button>
    </div>
  `).join('');

  initIcons();
}

function copyPromoCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    showToast(`คัดลอกรหัส "${code}" แล้ว นำไปใส่ในตะกร้าสินค้าได้เลยครับ! 📋`);
  }).catch(() => {
    showToast(`รหัสส่วนลดของคุณคือ: ${code}`);
  });
}

function initFlashSaleTimer() {
  const timerDisplay = document.getElementById('flash-sale-countdown');
  if (!timerDisplay) return;

  let totalSeconds = 2 * 24 * 3600 + 14 * 3600 + 35 * 60 + 20;

  setInterval(() => {
    if (totalSeconds <= 0) return;
    totalSeconds--;

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    timerDisplay.innerHTML = `
      <span class="bg-blue-600 text-white px-2 py-1 rounded font-mono font-bold">${String(days).padStart(2, '0')} วัน</span> :
      <span class="bg-blue-600 text-white px-2 py-1 rounded font-mono font-bold">${String(hours).padStart(2, '0')} ชม.</span> :
      <span class="bg-blue-600 text-white px-2 py-1 rounded font-mono font-bold">${String(minutes).padStart(2, '0')} น.</span> :
      <span class="bg-blue-600 text-white px-2 py-1 rounded font-mono font-bold">${String(seconds).padStart(2, '0')} วิ</span>
    `;
  }, 1000);
}

// -------------------------------------------------------------
// Articles Section
// -------------------------------------------------------------
function initArticlesSection() {
  const articlesGrid = document.getElementById('articles-grid');
  if (!articlesGrid) return;

  articlesGrid.innerHTML = TV_DATA.articles.map(art => `
    <div class="glass-panel rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group hover:border-blue-500/40 transition-all duration-300">
      <div class="relative aspect-video overflow-hidden bg-gray-950">
        <img src="${art.image}" alt="${art.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <span class="absolute top-3 left-3 bg-blue-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-lg">
          ${art.category}
        </span>
      </div>

      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-3 text-[11px] text-gray-400 mb-2">
            <span><i data-lucide="calendar" class="w-3 h-3 inline mr-1 text-blue-400"></i> ${art.date}</span>
            <span><i data-lucide="clock" class="w-3 h-3 inline mr-1 text-blue-400"></i> ${art.readTime}</span>
          </div>

          <h4 onclick="openArticleModal('${art.id}')" 
              class="font-bold text-white text-base leading-snug line-clamp-2 hover:text-blue-400 cursor-pointer transition-colors mb-2">
            ${art.title}
          </h4>

          <p class="text-xs text-gray-300 line-clamp-3 mb-4 leading-relaxed">${art.excerpt}</p>
        </div>

        <button onclick="openArticleModal('${art.id}')" 
                class="w-full py-2 bg-white/5 hover:bg-blue-600 text-gray-200 hover:text-white rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 border border-white/10">
          อ่านบทความฉบับเต็ม <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </div>
  `).join('');

  initIcons();
}

function openArticleModal(articleId) {
  const art = TV_DATA.articles.find(a => a.id === articleId);
  if (!art) return;

  const modal = document.getElementById('article-modal');
  const content = document.getElementById('article-modal-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="p-6 md:p-8 max-w-4xl mx-auto">
      <div class="relative rounded-2xl overflow-hidden aspect-[21/9] mb-6 border border-white/10">
        <img src="${art.image}" class="w-full h-full object-cover">
        <span class="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
          ${art.category}
        </span>
      </div>

      <div class="flex items-center gap-4 text-xs text-gray-400 mb-3">
        <span><i data-lucide="user" class="w-3.5 h-3.5 inline mr-1 text-blue-400"></i> ${art.author}</span>
        <span><i data-lucide="calendar" class="w-3.5 h-3.5 inline mr-1 text-blue-400"></i> ${art.date}</span>
        <span><i data-lucide="clock" class="w-3.5 h-3.5 inline mr-1 text-blue-400"></i> เวลาอ่าน ${art.readTime}</span>
      </div>

      <h2 class="text-xl md:text-3xl font-extrabold text-white mb-6 leading-tight">${art.title}</h2>

      <div class="prose prose-invert max-w-none text-gray-300 text-sm md:text-base leading-relaxed space-y-4">
        ${art.content}
      </div>

      <!-- Action Footer -->
      <div class="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
        <button onclick="closeArticleModal()" class="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-xl text-xs font-semibold">
          ← ปิดหน้าต่าง
        </button>
        <button onclick="closeArticleModal(); switchTab('products');" class="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold shadow-lg">
          ชมสินค้าทีวีรุ่นที่เกี่ยวข้อง →
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  initIcons();
}

function closeArticleModal() {
  const modal = document.getElementById('article-modal');
  if (modal) modal.classList.add('hidden');
}

// -------------------------------------------------------------
// Contact Section
// -------------------------------------------------------------
function initContactSection() {
  const branchesContainer = document.getElementById('branches-grid');
  if (branchesContainer) {
    branchesContainer.innerHTML = TV_DATA.branches.map(b => `
      <div class="glass-panel p-6 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between">
        <div>
          <div class="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center mb-3">
            <i data-lucide="map-pin" class="w-5 h-5"></i>
          </div>
          <h4 class="font-bold text-white text-base mb-1">${b.name}</h4>
          <p class="text-xs text-gray-300 mb-3">${b.address}</p>
          <div class="space-y-1 text-xs text-gray-400 mb-4">
            <div><i data-lucide="clock" class="w-3.5 h-3.5 inline mr-1 text-blue-400"></i> ${b.hours}</div>
            <div><i data-lucide="phone" class="w-3.5 h-3.5 inline mr-1 text-blue-400"></i> ${b.phone}</div>
          </div>
          <div class="text-xs text-amber-400 bg-amber-500/10 p-2.5 rounded-lg mb-4">
            ✨ ${b.highlight}
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <a href="tel:${b.phone.split(',')[0].trim()}" class="py-2 bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white rounded-xl text-xs font-semibold text-center transition-all">
            โทรติดต่อสาขา
          </a>
          <button onclick="openLiveChatWithMessage('สอบถามข้อมูล ${b.name}')" class="py-2 bg-white/5 hover:bg-white/10 text-gray-200 rounded-xl text-xs font-semibold text-center transition-all">
            แชทกับสาขานี้
          </button>
        </div>
      </div>
    `).join('');
  }

  // Handle Contact Form Submit
  const contactForm = document.getElementById('contact-us-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('ส่งข้อความเรียบร้อยแล้ว เจ้าหน้าที่ฝ่ายบริการลูกค้าจะติดต่อกลับภายใน 15 นาทีครับ 🙏');
      contactForm.reset();
    });
  }
}

// -------------------------------------------------------------
// Live Chat Widget System
// -------------------------------------------------------------
function initLiveChat() {
  const chatToggleBtn = document.getElementById('chat-toggle-btn');
  const chatWindow = document.getElementById('live-chat-window');
  const closeChatBtn = document.getElementById('close-chat-btn');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');

  if (chatToggleBtn && chatWindow) {
    chatToggleBtn.addEventListener('click', () => {
      chatWindow.classList.toggle('hidden');
      renderChatMessages();
    });
  }

  if (closeChatBtn && chatWindow) {
    closeChatBtn.addEventListener('click', () => {
      chatWindow.classList.add('hidden');
    });
  }

  if (chatForm && chatInput) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = chatInput.value.trim();
      if (!text) return;

      sendChatMessage(text);
      chatInput.value = '';
    });
  }

  renderChatMessages();
}

function openLiveChatWithMessage(initialText) {
  const chatWindow = document.getElementById('live-chat-window');
  if (chatWindow) {
    chatWindow.classList.remove('hidden');
  }
  if (initialText) {
    sendChatMessage(initialText);
  }
}

function sendChatMessage(text) {
  state.chatMessages.push({
    sender: 'user',
    time: 'เมื่อสักครู่',
    text: text
  });

  renderChatMessages();

  // Show typing indicator
  const messagesContainer = document.getElementById('chat-messages-container');
  if (messagesContainer) {
    const typingElem = document.createElement('div');
    typingElem.id = 'chat-typing-indicator';
    typingElem.className = 'flex items-center gap-2 text-xs text-gray-400 py-1';
    typingElem.innerHTML = `
      <div class="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">VP</div>
      <div class="glass-panel px-3 py-1.5 rounded-2xl rounded-tl-none animate-pulse text-gray-300">
        กำลังพิมพ์คำตอบ...
      </div>
    `;
    messagesContainer.appendChild(typingElem);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  setTimeout(() => {
    // Remove typing
    const typingElem = document.getElementById('chat-typing-indicator');
    if (typingElem) typingElem.remove();

    // Match bot response
    const lower = text.toLowerCase();
    let replyText = 'ขอบคุณที่ติดต่อสอบถามครับ! เจ้าหน้าที่ฝ่ายขายและทีมช่างเทคนิคได้รับข้อความแล้ว หรือโทรด่วน 02-123-4567 เพื่อรับบริการทันใจได้ตลอดเวลาครับ';

    for (const item of TV_DATA.botResponses) {
      if (item.keywords.some(k => lower.includes(k))) {
        replyText = item.reply;
        break;
      }
    }

    state.chatMessages.push({
      sender: 'bot',
      time: 'เมื่อสักครู่',
      text: replyText
    });

    renderChatMessages();
  }, 700);
}

function renderChatMessages() {
  const container = document.getElementById('chat-messages-container');
  if (!container) return;

  container.innerHTML = state.chatMessages.map(msg => {
    const isBot = msg.sender === 'bot';
    return `
      <div class="flex flex-col ${isBot ? 'items-start' : 'items-end'} mb-3">
        <div class="flex items-end gap-2 max-w-[85%] ${isBot ? '' : 'flex-row-reverse'}">
          ${isBot ? `
            <div class="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xs font-bold shrink-0 shadow">
              VP
            </div>
          ` : ''}
          <div class="p-3 rounded-2xl text-xs leading-relaxed ${isBot ? 'glass-panel text-gray-200 rounded-tl-none border border-white/10' : 'bg-blue-600 text-white rounded-tr-none shadow-md'}">
            ${msg.text.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
          </div>
        </div>
        <span class="text-[10px] text-gray-500 mt-1 px-9">${msg.time}</span>
      </div>
    `;
  }).join('');

  container.scrollTop = container.scrollHeight;
}

// -------------------------------------------------------------
// Toast Notification
// -------------------------------------------------------------
function showToast(message, type = 'success') {
  const toast = document.getElementById('app-toast');
  const msgElem = document.getElementById('toast-message');
  const iconElem = document.getElementById('toast-icon');

  if (!toast || !msgElem) return;

  msgElem.textContent = message;

  if (type === 'error') {
    toast.className = 'fixed bottom-6 right-6 z-50 glass-panel border border-red-500/50 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 transition-all duration-300 translate-y-0 opacity-100';
    if (iconElem) iconElem.innerHTML = '<i data-lucide="alert-circle" class="w-5 h-5 text-red-400"></i>';
  } else if (type === 'warning') {
    toast.className = 'fixed bottom-6 right-6 z-50 glass-panel border border-amber-500/50 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 transition-all duration-300 translate-y-0 opacity-100';
    if (iconElem) iconElem.innerHTML = '<i data-lucide="alert-triangle" class="w-5 h-5 text-amber-400"></i>';
  } else {
    toast.className = 'fixed bottom-6 right-6 z-50 glass-panel border border-blue-500/50 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 transition-all duration-300 translate-y-0 opacity-100';
    if (iconElem) iconElem.innerHTML = '<i data-lucide="check-circle" class="w-5 h-5 text-emerald-400"></i>';
  }

  initIcons();

  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3500);
}
