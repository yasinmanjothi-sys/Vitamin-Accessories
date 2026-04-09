/* ═══════════════════════════════════════════════════════════
   WATCHES PAGE — JAVASCRIPT
   Handles: collections view, category/filter view, product panel
   ═══════════════════════════════════════════════════════════ */

const BASE = '/Product Catalog/watches';

/* ─────────────────────────────────────────────────────────
   PRODUCT DATA
───────────────────────────────────────────────────────── */
const COLLECTIONS = [
  {
    id: 'dune',
    name: 'DUNE COLLECTION',
    coverImg: `${BASE}/MENS DUNE/GOLD.jpg`,
    pieces: [
      {
        name: 'MENS DUNE',
        category: 'mens watch',
        style: 'Octagonal Case',
        price: 12000,
        colours: [
          { name: 'Gold', hex: '#D4AF37', img: `${BASE}/MENS DUNE/GOLD.jpg` },
          { name: 'Silver', hex: '#C0C0C0', img: `${BASE}/MENS DUNE/Silver.jpg` }
        ]
      },
      {
        name: 'WOMENS DUNE',
        category: 'womens watch',
        style: 'Slim Elegance',
        price: 9500,
        colours: [
          { name: 'Gold', hex: '#D4AF37', img: `${BASE}/DUNE/Gold.jpg` }
        ],
        straps: [
          { name: 'Leather Black', img: `${BASE}/DUNE/black strap.jpg` },
          { name: 'Leather Brown', img: `${BASE}/DUNE/brown strap.jpg` },
          { name: 'Plated Gold', img: `${BASE}/DUNE/gold strap.jpg` }
        ]
      }
    ],
  },
  {
    id: 'coda',
    name: 'CODA COLLECTION',
    coverImg: `${BASE}/CODA /Gold.jpg`,
    pieces: [
      {
        name: 'MENS CODA',
        category: 'mens watch',
        style: 'Bold Minimalist',
        price: 10000,
        colours: [
          { name: 'Silver', hex: '#C0C0C0', img: `${BASE}/MENS CODA/2a2380eb8aa2b29e9247ebbaf45df467.jpg` }
        ]
      },
      {
        name: 'WOMENS CODA',
        category: 'womens watch',
        style: 'Rectangular Case',
        price: 9500,
        colours: [
          { name: 'Gold', hex: '#D4AF37', img: `${BASE}/CODA /Gold.jpg`, price: 9500 },
          { name: 'Black', hex: '#000000', img: `${BASE}/CODA /Black .jpg`, price: 9000 }
        ],
        straps: [
          { name: 'Leather Black', img: `${BASE}/CODA /Strap Only.jpg` }
        ]
      }
    ],
  }
];

/* Flatten all products for category view */
const ALL_PRODUCTS = COLLECTIONS.flatMap(c =>
  c.pieces.map(p => ({ ...p, collectionId: c.id, collectionName: c.name }))
);

/* ─────────────────────────────────────────────────────────
   STATE
───────────────────────────────────────────────────────── */
let currentView = 'collections';  // 'collections' | 'category'
let activeProduct = null;
let activeImageIdx = 0;
let activeColourIdx = 0;
let activeStrapIdx = -1;

/* ─────────────────────────────────────────────────────────
   DOM REFS
───────────────────────────────────────────────────────── */
const collectionGrid   = document.getElementById('fj-collection-grid');
const productGrid      = document.getElementById('fj-product-grid');
const collectionsView  = document.getElementById('fj-collections-view');
const categoryView     = document.getElementById('fj-category-view');
const resultsCount     = document.getElementById('fj-results-count');
const filterCategory   = document.getElementById('filter-category');
const filterPrice      = document.getElementById('filter-price');
const filterSearch     = document.getElementById('filter-search');
const filterGroup      = document.getElementById('fj-filter-group');
const clearBtn         = document.getElementById('fj-clear');
const panel            = document.getElementById('sg-panel');
const panelClose       = document.getElementById('sg-panel-close');
const panelName        = document.getElementById('panel-name');
const panelStyle       = document.getElementById('panel-style');
const panelPrice       = document.getElementById('panel-price');

const swatchesWrap     = document.getElementById('swatches-wrap');
const swatches         = document.getElementById('sg-swatches');
const colourLabel      = document.getElementById('active-colour-label');

const strapsWrap       = document.getElementById('straps-wrap');
const strapsList       = document.getElementById('sg-straps');
const strapLabel       = document.getElementById('active-strap-label');

const collectionPieces = document.getElementById('collection-pieces');
const piecesChips      = document.getElementById('pieces-chips');
const thumbsWrap       = document.getElementById('gallery-thumbs');
const mainImg          = document.getElementById('gallery-main-img');
const prevBtn          = document.getElementById('gallery-prev');
const nextBtn          = document.getElementById('gallery-next');
const buyBtn           = document.getElementById('sg-buy-btn');

/* ─────────────────────────────────────────────────────────
   FORMAT PRICE
───────────────────────────────────────────────────────── */
function fmt(price) {
  return `KSH ${price.toLocaleString()}`;
}

/* ─────────────────────────────────────────────────────────
   BUILD COLLECTIONS GRID
───────────────────────────────────────────────────────── */
function renderCollections(data = COLLECTIONS) {
  collectionGrid.innerHTML = '';
  const results = data.filter(c => c.coverImg);
  if (!results.length) {
    collectionGrid.innerHTML = '<p class="fj-no-results">No collections match your filters.</p>';
    return;
  }
  results.forEach((col, i) => {
    const delay = i % 3 === 0 ? '' : i % 3 === 1 ? ' delay-1' : ' delay-2';
    const minPrice = Math.min(...col.pieces.map(p => p.price));
    const maxPrice = Math.max(...col.pieces.map(p => p.price));
    const priceStr = minPrice === maxPrice ? fmt(minPrice) : `${fmt(minPrice)} – ${fmt(maxPrice)}`;
    
    // Check if it's mixed gender
    const genders = [...new Set(col.pieces.map(p => p.category.split(' ')[0]))];
    const genderLabel = genders.length > 1 ? 'Mens & Womens' : genders[0].charAt(0).toUpperCase() + genders[0].slice(1);

    const card = document.createElement('article');
    card.className = `sg-card fade-up${delay}`;
    card.dataset.collection = col.id;
    card.innerHTML = `
      <div class="sg-card-img-wrap">
        <img src="${col.coverImg}" alt="${col.name}" class="sg-card-img" loading="lazy" />
        <div class="sg-card-overlay"><span>View Collection</span></div>
      </div>
      <div class="sg-card-info">
        <div>
          <h3 class="sg-card-name">${col.name}</h3>
          <p class="sg-card-style">${genderLabel} Collection</p>
        </div>
        <p class="sg-card-price">${priceStr}</p>
      </div>`;
    card.addEventListener('click', () => openCollectionPanel(col.id));
    collectionGrid.appendChild(card);
  });
  observeFadeUps();
}

/* ─────────────────────────────────────────────────────────
   BUILD PRODUCT GRID (category view)
───────────────────────────────────────────────────────── */
function renderProducts(products) {
  productGrid.innerHTML = '';
  resultsCount.textContent = `${products.length} item${products.length !== 1 ? 's' : ''}`;
  if (!products.length) {
    productGrid.innerHTML = '<p class="fj-no-results">No products match your filters.</p>';
    return;
  }
  products.forEach(product => {
    const mainPhoto = product.colours ? product.colours[0].img : (product.images ? product.images[0] : '');
    const card = document.createElement('article');
    card.className = 'fj-product-card fade-up';
    card.innerHTML = `
      <div class="sg-card-img-wrap">
        <img src="${mainPhoto}" alt="${product.name}" class="sg-card-img" loading="lazy" />
        <div class="sg-card-overlay"><span>View Item</span></div>
      </div>
      <div class="sg-card-info">
        <div>
          <h3 class="sg-card-name">${product.name}</h3>
          <p class="sg-card-style">${product.style}</p>
        </div>
        <p class="sg-card-price">${fmt(product.price)}</p>
      </div>`;
    card.addEventListener('click', () => openProductPanel(product));
    productGrid.appendChild(card);
  });
  observeFadeUps();
}

/* ─────────────────────────────────────────────────────────
   APPLY FILTERS
───────────────────────────────────────────────────────── */
function applyFilters() {
  const cat    = filterCategory.value;
  const price  = filterPrice.value;
  const search = filterSearch.value.toLowerCase().trim();

  let filteredProducts = ALL_PRODUCTS;
  if (cat !== 'all') filteredProducts = filteredProducts.filter(p => p.category === cat);
  if (price === 'under10000') filteredProducts = filteredProducts.filter(p => p.price < 10000);
  else if (price === '10000to11000') filteredProducts = filteredProducts.filter(p => p.price >= 10000 && p.price <= 11000);
  else if (price === 'over11000') filteredProducts = filteredProducts.filter(p => p.price > 11000);

  if (search) {
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(search) ||
      p.style.toLowerCase().includes(search) ||
      p.collectionName?.toLowerCase().includes(search)
    );
  }

  const filteredCollections = COLLECTIONS.filter(col => {
    const colNameMatch = col.name.toLowerCase().includes(search);
    const hasMatchingPiece = col.pieces.some(p => {
      let m = true;
      if (cat !== 'all') m = m && p.category === cat;
      if (price === 'under10000') m = m && p.price < 10000;
      else if (price === '10000to11000') m = m && p.price >= 10000 && p.price <= 11000;
      else if (price === 'over11000') m = m && p.price > 11000;
      if (search) m = m && (p.name.toLowerCase().includes(search) || p.style.toLowerCase().includes(search));
      return m;
    });
    return colNameMatch || hasMatchingPiece;
  });

  if (currentView === 'collections') renderCollections(filteredCollections);
  else renderProducts(filteredProducts);
}

/* ─────────────────────────────────────────────────────────
   OPEN PANEL
───────────────────────────────────────────────────────── */
function openCollectionPanel(collectionId) {
  const col = COLLECTIONS.find(c => c.id === collectionId);
  if (!col) return;
  const piece = col.pieces[0];
  activeProduct = { ...piece, _collectionId: collectionId };
  activeImageIdx = 0; activeColourIdx = 0; activeStrapIdx = -1;

  panelName.textContent = col.name;
  panelStyle.textContent = piece.style;
  panelPrice.textContent = col.pieces.length > 1 ? `From ${fmt(Math.min(...col.pieces.map(p => p.price)))}` : fmt(piece.price);

  if (col.pieces.length > 1) {
    collectionPieces.style.display = 'block';
    piecesChips.innerHTML = '';
    col.pieces.forEach((p, i) => {
      const chip = document.createElement('button');
      chip.className = 'fj-piece-chip' + (i === 0 ? ' active' : '');
      chip.textContent = p.name.includes(col.name) ? p.name.replace(col.name, '').trim() : p.name;
      if (!chip.textContent) chip.textContent = p.category.split(' ')[0].toUpperCase();
      chip.addEventListener('click', () => selectPiece(col, i));
      piecesChips.appendChild(chip);
    });
  } else {
    collectionPieces.style.display = 'none';
  }

  renderColourSwatches(piece);
  renderStrapSwatches(piece);
  renderGallery(piece);
  openPanelAnimate();
}

function openProductPanel(product) {
  activeProduct = product; activeImageIdx = 0; activeColourIdx = 0; activeStrapIdx = -1;
  panelName.textContent = product.name;
  panelStyle.textContent = product.style;
  panelPrice.textContent = fmt(product.price);
  collectionPieces.style.display = 'none';
  renderColourSwatches(product);
  renderStrapSwatches(product);
  renderGallery(product);
  openPanelAnimate();
}

function openPanelAnimate() {
  updateBuyLink();
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
  setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
}

function selectPiece(col, idx) {
  const piece = col.pieces[idx];
  activeProduct = { ...piece, _collectionId: col.id };
  activeImageIdx = 0; activeColourIdx = 0; activeStrapIdx = -1;
  panelStyle.textContent = piece.style;
  panelPrice.textContent = fmt(piece.price);
  piecesChips.querySelectorAll('.fj-piece-chip').forEach((c, i) => c.classList.toggle('active', i === idx));
  renderColourSwatches(piece);
  renderStrapSwatches(piece);
  renderGallery(piece);
  updateBuyLink();
}

function renderGallery(piece) {
  let piecesImages = [];
  if (piece.colours) piecesImages = piece.colours.map(c => c.img);
  else if (piece.images) piecesImages = piece.images;
  else piecesImages = [];

  activeImageIdx = 0;
  if (piecesImages.length > 0) setMainImage(piecesImages[0]);

  thumbsWrap.innerHTML = '';
  piecesImages.forEach((src, i) => {
    const thumb = document.createElement('img');
    thumb.src = src; thumb.alt = `View ${i + 1}`;
    thumb.className = 'sg-thumb' + (i === 0 ? ' active' : '');
    thumb.addEventListener('click', () => selectImage(piecesImages, i));
    thumbsWrap.appendChild(thumb);
  });
  
  const showNav = piecesImages.length > 1;
  prevBtn.style.display = showNav ? 'flex' : 'none';
  nextBtn.style.display = showNav ? 'flex' : 'none';
}

function setMainImage(src) {
  mainImg.classList.add('transitioning');
  setTimeout(() => {
    mainImg.src = src;
    mainImg.onload = () => mainImg.classList.remove('transitioning');
  }, 200);
}

function selectImage(images, idx) {
  activeImageIdx = idx;
  setMainImage(images[idx]);
  thumbsWrap.querySelectorAll('.sg-thumb').forEach((t, i) => t.classList.toggle('active', i === idx));
}

prevBtn.addEventListener('click', () => {
  const images = activeProduct.colours ? activeProduct.colours.map(c => c.img) : activeProduct.images;
  activeImageIdx = (activeImageIdx - 1 + images.length) % images.length;
  selectImage(images, activeImageIdx);
});

nextBtn.addEventListener('click', () => {
  const images = activeProduct.colours ? activeProduct.colours.map(c => c.img) : activeProduct.images;
  activeImageIdx = (activeImageIdx + 1) % images.length;
  selectImage(images, activeImageIdx);
});

function renderColourSwatches(piece) {
  if (piece.colours && piece.colours.length > 1) {
    swatchesWrap.style.display = 'block';
    swatches.innerHTML = '';
    colourLabel.textContent = piece.colours[0].name;
    piece.colours.forEach((col, i) => {
      const btn = document.createElement('button');
      btn.className = 'sg-swatch' + (i === 0 ? ' active' : '');
      btn.style.background = col.hex; btn.title = col.name;
      btn.addEventListener('click', () => {
        swatches.querySelectorAll('.sg-swatch').forEach((s, j) => s.classList.toggle('active', i === j));
        colourLabel.textContent = col.name;
        activeColourIdx = i;
        if (col.img) setMainImage(col.img);
        if (col.price) panelPrice.textContent = fmt(col.price);
        updateBuyLink();
      });
      swatches.appendChild(btn);
    });
  } else {
    swatchesWrap.style.display = 'none';
    if (piece.colours) colourLabel.textContent = piece.colours[0].name;
  }
}

function renderStrapSwatches(piece) {
  if (piece.straps && piece.straps.length > 0) {
    strapsWrap.style.display = 'block';
    strapsList.innerHTML = '';
    strapLabel.textContent = 'Default';
    
    piece.straps.forEach((strap, i) => {
      const btn = document.createElement('button');
      btn.className = 'sg-strap-swatch';
      btn.innerHTML = `<img src="${strap.img}" alt="${strap.name}">`;
      btn.title = strap.name;
      btn.addEventListener('click', () => {
        const alreadyActive = btn.classList.contains('active');
        strapsList.querySelectorAll('.sg-strap-swatch').forEach(s => s.classList.remove('active'));
        
        if (alreadyActive) {
          activeStrapIdx = -1;
          strapLabel.textContent = 'Default';
          // Revert to colour image
          if (piece.colours) setMainImage(piece.colours[activeColourIdx].img);
        } else {
          btn.classList.add('active');
          activeStrapIdx = i;
          strapLabel.textContent = strap.name;
          setMainImage(strap.img);
        }
        updateBuyLink();
      });
      strapsList.appendChild(btn);
    });
  } else {
    strapsWrap.style.display = 'none';
  }
}

function updateBuyLink() {
  if (!activeProduct) return;
  const colourPart = activeProduct.colours ? ` in *${activeProduct.colours[activeColourIdx]?.name}*` : '';
  const strapPart = activeStrapIdx !== -1 ? ` with *${activeProduct.straps[activeStrapIdx]?.name}*` : '';
  
  let currentPrice = activeProduct.price;
  if (activeProduct.colours && activeProduct.colours[activeColourIdx].price) {
    currentPrice = activeProduct.colours[activeColourIdx].price;
  }

  const currentImage = activeProduct.colours?.[activeColourIdx]?.img
    || activeProduct.images?.[activeImageIdx]
    || activeProduct.images?.[0]
    || '';
  const imageUrl = currentImage ? `\n\n🖼️ Product image: ${window.location.origin}${currentImage}` : '';
  const message = encodeURIComponent(`Hello Vitamin Accessories! I'm interested in purchasing the *${activeProduct.name}*${colourPart}${strapPart} — ${fmt(currentPrice)}.${imageUrl}`);
  buyBtn.href = `https://wa.me/254794279132?text=${message}`;
}

function closePanel() {
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  document.getElementById('collections').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

panelClose.addEventListener('click', closePanel);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePanel(); });

document.querySelectorAll('.fj-view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const view = btn.dataset.view;
    document.querySelectorAll('.fj-view-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentView = view; closePanel();
    if (view === 'collections') { collectionsView.style.display = 'block'; categoryView.style.display = 'none'; }
    else { collectionsView.style.display = 'none'; categoryView.style.display = 'block'; }
    applyFilters();
  });
});

filterCategory.addEventListener('change', applyFilters);
filterPrice.addEventListener('change', applyFilters);
filterSearch.addEventListener('input', applyFilters);

clearBtn.addEventListener('click', () => {
  filterCategory.value = 'all'; filterPrice.value = 'all'; filterSearch.value = '';
  applyFilters();
});

function observeFadeUps() {
  const fadeEls = document.querySelectorAll('.fade-up:not(.visible)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => observer.observe(el));
}

// Deep Linking Logic
function handleDeepLink() {
  const urlParams = new URLSearchParams(window.location.search);
  const openId = urlParams.get('open');
  if (openId) {
    setTimeout(() => openCollectionPanel(openId), 500);
  }
}

renderCollections();
handleDeepLink();
