/* ═══════════════════════════════════════════════════════════
   MALE JEWELRY PAGE — JAVASCRIPT
   Handles: collections view, category/filter view, product panel
   ═══════════════════════════════════════════════════════════ */

const BASE = '/Product Catalog/unisex jewelry';

/* ─────────────────────────────────────────────────────────
   PRODUCT DATA
───────────────────────────────────────────────────────── */
const COLLECTIONS = [
  {
    id: 'lumi',
    name: 'LUMI COLLECTION',
    coverImg: `${BASE}/LUMI NECKLACE/327b1a81ae6afd6d31f909fb722d9588.jpg`,
    pieces: [
      {
        name: 'LUMI NECKLACE',
        category: 'necklace',
        style: 'Pendant Necklace',
        price: 2000,
        images: [`${BASE}/LUMI NECKLACE/327b1a81ae6afd6d31f909fb722d9588.jpg`, `${BASE}/LUMI NECKLACE/32b15945933734821c16da46e53aae64.jpg`],
      },
      {
        name: 'LUMI RING',
        category: 'ring',
        style: 'Signet Ring',
        price: 1550,
        images: [`${BASE}/LUMI RING/e15a805478246dd42496c435a525d933.jpg`, `${BASE}/LUMI RING/a32dededd2eabd3a83cc107b2477fe79.jpg`],
      },
    ],
  },
  {
    id: 'armory',
    name: 'ARMORY BRACELET',
    coverImg: `${BASE}/ARMORY BRACELET/40c57ea409ef08bab18679d5c295413f.jpg`,
    pieces: [
      {
        name: 'ARMORY BRACELET',
        category: 'bracelet',
        style: 'Gold Plated Bracelet',
        price: 2800,
        images: [`${BASE}/ARMORY BRACELET/40c57ea409ef08bab18679d5c295413f.jpg`, `${BASE}/ARMORY BRACELET/af48c5ad3dd2d663d0b969c96f900c3e.jpg`],
      },
    ],
  },
  {
    id: 'azizi',
    name: 'AZIZI CUFF',
    coverImg: `${BASE}/AZIZI CUFF/decf42d5e3c85cce0d4a3df4f53e4998.jpg`,
    pieces: [
      {
        name: 'AZIZI CUFF',
        category: 'bracelet',
        style: 'Gold Plated Cuff',
        price: 2200,
        images: [`${BASE}/AZIZI CUFF/decf42d5e3c85cce0d4a3df4f53e4998.jpg`, `${BASE}/AZIZI CUFF/d11c4f3baeb37342f419ee41772801aa.jpg`],
      },
    ],
  },
  {
    id: 'rza',
    name: 'RZA NECKLACE',
    coverImg: `${BASE}/RZA NECKLACE/5b8a34ab73fdc9fbdaddbe43429ecf53.jpg`,
    pieces: [
      {
        name: 'RZA NECKLACE',
        category: 'necklace',
        style: 'Chain Necklace',
        price: 2500,
        images: [`${BASE}/RZA NECKLACE/5b8a34ab73fdc9fbdaddbe43429ecf53.jpg`],
      },
    ],
  },
  {
    id: 'varyn',
    name: 'VARYN BAND RING',
    coverImg: `${BASE}/VARYN BAND RING/03887e871ec2c27f874b6ed80956430b.jpg`,
    pieces: [
      {
        name: 'VARYN BAND RING',
        category: 'ring',
        style: 'Gold Plated Band',
        price: 2000,
        images: [`${BASE}/VARYN BAND RING/03887e871ec2c27f874b6ed80956430b.jpg`, `${BASE}/VARYN BAND RING/942a21c8e58d70f5dd9e9872f4264bc6.jpg`],
      },
    ],
  },
];

/* Flatten all products for category view */
const ALL_PRODUCTS = COLLECTIONS.flatMap(c =>
  c.pieces.map(p => ({ ...p, collectionId: c.id, collectionName: c.name }))
).filter(p => p.images.length > 0);

/* ─────────────────────────────────────────────────────────
   STATE
───────────────────────────────────────────────────────── */
let currentView = 'collections';  // 'collections' | 'category'
let activeProduct = null;
let activeImageIdx = 0;
let activeColourIdx = 0;

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
    const piecesLabel = col.pieces.length > 1 ? `${col.pieces.length} pieces` : col.pieces[0].style;
    const isCaptain = col.id === 'captain';
    const card = document.createElement('article');
    card.className = `sg-card fade-up${delay}` + (isCaptain ? ' captain-necklace-card' : '');
    card.dataset.collection = col.id;
    card.innerHTML = `
      <div class="sg-card-img-wrap">
        <img src="${col.coverImg}" alt="${col.name}" class="sg-card-img" ${isCaptain ? 'style="object-position: center 100%;"' : ''} loading="lazy" />
        <div class="sg-card-overlay"><span>View Collection</span></div>
      </div>
      <div class="sg-card-info">
        <div>
          <h3 class="sg-card-name">${col.name}</h3>
          <p class="sg-card-style">${piecesLabel}</p>
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
    const isCaptain = product.name === 'CAPTAIN NECKLACE';
    const card = document.createElement('article');
    card.className = 'fj-product-card fade-up' + (isCaptain ? ' captain-necklace-card' : '');
    card.innerHTML = `
      <div class="sg-card-img-wrap">
        <img src="${product.images[0]}" alt="${product.name}" class="sg-card-img" ${isCaptain ? 'style="object-position: center 100%;"' : ''} loading="lazy" />
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
  if (price === 'under2000') filteredProducts = filteredProducts.filter(p => p.price < 2000);
  else if (price === '2000to2500') filteredProducts = filteredProducts.filter(p => p.price >= 2000 && p.price <= 2500);
  else if (price === 'over2500') filteredProducts = filteredProducts.filter(p => p.price > 2500);

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
      if (price === 'under2000') m = m && p.price < 2000;
      else if (price === '2000to2500') m = m && p.price >= 2000 && p.price <= 2500;
      else if (price === 'over2500') m = m && p.price > 2500;
      if (search) m = m && (p.name.toLowerCase().includes(search) || p.style.toLowerCase().includes(search));
      return m;
    });
    return colNameMatch || hasMatchingPiece;
  });

  if (currentView === 'collections') renderCollections(filteredCollections);
  else renderProducts(filteredProducts);
}

/* ─────────────────────────────────────────────────────────
   OPEN PANEL: full collection
───────────────────────────────────────────────────────── */
function openCollectionPanel(collectionId) {
  const col = COLLECTIONS.find(c => c.id === collectionId);
  if (!col) return;
  if (panel.classList.contains('open') && activeProduct && activeProduct._collectionId === collectionId) {
    closePanel(); return;
  }
  const piece = col.pieces.find(p => p.images.length > 0) || col.pieces[0];
  activeProduct = { ...piece, _collectionId: collectionId };
  activeImageIdx = 0; activeColourIdx = 0;

  panelName.textContent = col.name;
  panelStyle.textContent = piece.style;
  panelPrice.textContent = col.pieces.length > 1 ? `From ${fmt(Math.min(...col.pieces.map(p => p.price)))}` : fmt(piece.price);

  if (col.pieces.length > 1) {
    collectionPieces.style.display = 'block';
    piecesChips.innerHTML = '';
    col.pieces.forEach((p, i) => {
      const chip = document.createElement('button');
      chip.className = 'fj-piece-chip' + (i === 0 ? ' active' : '');
      chip.textContent = p.name.replace(col.name + ' ', '').trim() || p.name;
      chip.addEventListener('click', () => selectPiece(col, i));
      piecesChips.appendChild(chip);
    });
  } else {
    collectionPieces.style.display = 'none';
  }

  renderColourSwatches(piece);
  renderGallery(piece.images, 0);
  openPanelAnimate();
}

function openProductPanel(product) {
  activeProduct = product; activeImageIdx = 0; activeColourIdx = 0;
  panelName.textContent = product.name;
  panelStyle.textContent = product.style;
  panelPrice.textContent = fmt(product.price);
  collectionPieces.style.display = 'none';
  renderColourSwatches(product);
  renderGallery(product.images, 0);
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
  activeImageIdx = 0; activeColourIdx = 0;
  panelStyle.textContent = piece.style;
  panelPrice.textContent = fmt(piece.price);
  piecesChips.querySelectorAll('.fj-piece-chip').forEach((c, i) => c.classList.toggle('active', i === idx));
  renderColourSwatches(piece);
  renderGallery(piece.images, 0);
  updateBuyLink();
}

function renderGallery(images, startIdx) {
  activeImageIdx = startIdx;
  setMainImage(images[startIdx] || '');
  thumbsWrap.innerHTML = '';
  images.forEach((src, i) => {
    const thumb = document.createElement('img');
    thumb.src = src; thumb.alt = `View ${i + 1}`;
    thumb.className = 'sg-thumb' + (i === startIdx ? ' active' : '');
    thumb.addEventListener('click', () => selectImage(images, i));
    thumbsWrap.appendChild(thumb);
  });
  const showNav = images.length > 1;
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
  const images = activeProduct.images;
  activeImageIdx = (activeImageIdx - 1 + images.length) % images.length;
  selectImage(images, activeImageIdx);
});

nextBtn.addEventListener('click', () => {
  const images = activeProduct.images;
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
      btn.setAttribute('aria-label', col.name);
      btn.addEventListener('click', () => {
        swatches.querySelectorAll('.sg-swatch').forEach((s, j) => s.classList.toggle('active', i === j));
        colourLabel.textContent = col.name;
        activeColourIdx = i;
        if (col.img) setMainImage(col.img);
        updateBuyLink();
      });
      swatches.appendChild(btn);
    });
  } else {
    swatchesWrap.style.display = 'none';
  }
}

function updateBuyLink() {
  if (!activeProduct) return;
  const colourPart = activeProduct.colours ? ` in *${activeProduct.colours[activeColourIdx]?.name}*` : '';
  const currentImage = activeProduct.colours?.[activeColourIdx]?.img
    || activeProduct.images?.[activeImageIdx]
    || activeProduct.images?.[0]
    || '';
  const imageUrl = currentImage ? `\n\n🖼️ Product image: ${window.location.origin}${currentImage}` : '';
  const message = encodeURIComponent(`Hello Vitamin Accessories! I'm interested in purchasing the *${activeProduct.name}*${colourPart} — ${fmt(activeProduct.price)}.${imageUrl}`);
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

renderCollections();
