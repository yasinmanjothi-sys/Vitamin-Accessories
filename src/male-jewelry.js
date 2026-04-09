/* ═══════════════════════════════════════════════════════════
   MALE JEWELRY PAGE — JAVASCRIPT
   Handles: collections view, category/filter view, product panel
   ═══════════════════════════════════════════════════════════ */

const BASE = '/Product Catalog/male jewelry';

/* ─────────────────────────────────────────────────────────
   PRODUCT DATA
───────────────────────────────────────────────────────── */
const COLLECTIONS = [
  {
    id: 'kaya',
    name: 'KAYA',
    coverImg: `${BASE}/KAYA NECKLACE/077e20100a8eff227f9f8f22880031e3.jpg`,
    pieces: [
      {
        name: 'KAYA RING',
        category: 'ring',
        style: 'Stone Ring',
        price: 2500,
        images: [`${BASE}/KAYA RING/328adc7ae0c73b2d17526be339a59b56.jpg`],
      },
      {
        name: 'KAYA NECKLACE',
        category: 'necklace',
        style: 'Pendant Necklace',
        price: 2500,
        images: [`${BASE}/KAYA NECKLACE/077e20100a8eff227f9f8f22880031e3.jpg`, `${BASE}/KAYA NECKLACE/c68ae375f80ad5f18656c8a0bee04f3b.jpg`],
      },
    ],
  },
  {
    id: 'ubuntu',
    name: 'UBUNTU',
    coverImg: `${BASE}/UBUNTU NECKLACE/7c015296118d2f1859b5449298120874.jpg`,
    pieces: [
      {
        name: 'UBUNTU BRACELET',
        category: 'bracelet',
        style: 'Bracelet',
        price: 2550,
        images: [`${BASE}/UBUNTU BRACELET/7cea12638728aa85afc8e3248582ca34.jpg`, `${BASE}/UBUNTU BRACELET/702367249f928863bc97d5b92a359e63.jpg`],
      },
      {
        name: 'UBUNTU NECKLACE',
        category: 'necklace',
        style: 'Pendant',
        price: 2200,
        images: [`${BASE}/UBUNTU NECKLACE/7c015296118d2f1859b5449298120874.jpg`, `${BASE}/UBUNTU NECKLACE/22f6db1d4c859392ba1ed7f13ddeb23a.jpg`],
      },
    ],
  },
  {
    id: 'oera',
    name: 'OERA',
    coverImg: `${BASE}/OERA NECKLACE/d3e7ec7bd755fd7c663bcc9a9645aece.jpg`,
    pieces: [
      {
        name: 'OERA BRACELET',
        category: 'bracelet',
        style: 'Bracelet',
        price: 2000,
        images: [`${BASE}/OERA BRACELET/19e4a5c70d264b8b041b748499c78f9b.jpg`],
      },
      {
        name: 'OERA NECKLACE',
        category: 'necklace',
        style: 'Necklace',
        price: 2500,
        images: [`${BASE}/OERA NECKLACE/d3e7ec7bd755fd7c663bcc9a9645aece.jpg`],
      },
    ],
  },
  {
    id: 'manor',
    name: 'MANOR',
    coverImg: `${BASE}/MANOR NECKLACE/c01edd4b3b1d25e9fc699a8b7570f67e.jpg`,
    pieces: [
      {
        name: 'MANOR RING',
        category: 'ring',
        style: 'Ring',
        price: 2000,
        images: [`${BASE}/MANOR RING/ce6758058389b3558233b2c7fb86a0f1.jpg`],
      },
      {
        name: 'MANOR NECKLACE',
        category: 'necklace',
        style: 'Necklace',
        price: 2500,
        images: [`${BASE}/MANOR NECKLACE/c01edd4b3b1d25e9fc699a8b7570f67e.jpg`],
      },
    ],
  },
  /* ── Single-piece collections ── */
  { id: 'wolf', name: 'WOLF NECKLACE', coverImg: `${BASE}/WOLF NECKLACE/0aa63980c483ab4b255906ec9d7580e1.jpg`, pieces: [{ name: 'WOLF NECKLACE', category: 'necklace', style: 'Pendant', price: 2200, images: [`${BASE}/WOLF NECKLACE/0aa63980c483ab4b255906ec9d7580e1.jpg`, `${BASE}/WOLF NECKLACE/f4ca34e96fce6140e443038a4e7bbae5.jpg`] }] },
  { id: 'cross', name: 'CROSS NECKLACE', coverImg: `${BASE}/CROSS NECKLACE/f0c50d6a70ff334b64b43a40c15d48cf.jpg`, pieces: [{ name: 'CROSS NECKLACE', category: 'necklace', style: 'Pendant', price: 2200, images: [`${BASE}/CROSS NECKLACE/f0c50d6a70ff334b64b43a40c15d48cf.jpg`] }] },
  { id: 'africa', name: 'AFRICA NECKLACE', coverImg: `${BASE}/AFRICA NECKLACE/20e4034f37c085b120b19286fcd818b2.jpg`, pieces: [{ name: 'AFRICA NECKLACE', category: 'necklace', style: 'Pendant', price: 2250, images: [`${BASE}/AFRICA NECKLACE/20e4034f37c085b120b19286fcd818b2.jpg`, `${BASE}/AFRICA NECKLACE/64e5a7697983476b90fd572dd0d678fc.jpg`] }] },
  { id: 'monti', name: 'MONTI RING', coverImg: `${BASE}/MONTI RING/80248e3f4bcd5e32256543053184e73f.jpg`, pieces: [{ name: 'MONTI RING', category: 'ring', style: 'Plated Gold Ring', price: 1500, images: [`${BASE}/MONTI RING/80248e3f4bcd5e32256543053184e73f.jpg`] }] },
  { id: 'heritage', name: 'HERITAGE NECKLACE', coverImg: `${BASE}/HERITAGE NECKLACE/005686673d512bdfa4f2424b42058893.jpg`, pieces: [{ name: 'HERITAGE NECKLACE', category: 'necklace', style: 'Necklace', price: 2500, images: [`${BASE}/HERITAGE NECKLACE/005686673d512bdfa4f2424b42058893.jpg`] }] },
  { id: 'retribullet', name: 'RETRIBULLET NECKLACE', coverImg: `${BASE}/RETRIBULLET NECKLACE/7c35cd9ac396ff193ee650e8fa98796c.jpg`, pieces: [{ name: 'RETRIBULLET NECKLACE', category: 'necklace', style: 'Necklace', price: 2500, images: [`${BASE}/RETRIBULLET NECKLACE/7c35cd9ac396ff193ee650e8fa98796c.jpg`, `${BASE}/RETRIBULLET NECKLACE/705b4072d4a51a9ec97d6414934e73e9.jpg`] }] },
  { id: 'sera', name: 'SERA NECKLACE', coverImg: `${BASE}/SERA NECKLACE/1fe3223c0371d1a2f6c186fadc70b83b.jpg`, pieces: [{ name: 'SERA NECKLACE', category: 'necklace', style: 'Necklace', price: 2500, images: [`${BASE}/SERA NECKLACE/1fe3223c0371d1a2f6c186fadc70b83b.jpg`] }] },
  { id: 'oracle', name: 'ORACLE NECKLACE', coverImg: `${BASE}/ORACLE NECKLACE/25a0cc1bc23a5632f15a82b8ff48b519.jpg`, pieces: [{ name: 'ORACLE NECKLACE', category: 'necklace', style: 'Necklace', price: 2500, images: [`${BASE}/ORACLE NECKLACE/25a0cc1bc23a5632f15a82b8ff48b519.jpg`] }] },
  { id: 'pound', name: 'POUND RING', coverImg: `${BASE}/POUND RING/46d5666c7e198eee160c9574aa3234fb.jpg`, pieces: [{ name: 'POUND RING', category: 'ring', style: 'Pound Ring', price: 2200, images: [`${BASE}/POUND RING/46d5666c7e198eee160c9574aa3234fb.jpg`] }] },
  { id: 'captain', name: 'CAPTAIN NECKLACE', coverImg: `${BASE}/CAPTAIN NECKLACE/c2319b882a0f827b691dbfbac231f420.jpg`, pieces: [{ name: 'CAPTAIN NECKLACE', category: 'necklace', style: 'Pendant Necklace', price: 2500, images: [`${BASE}/CAPTAIN NECKLACE/c2319b882a0f827b691dbfbac231f420.jpg`] }] },
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
