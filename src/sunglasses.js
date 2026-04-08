/* ═══════════════════════════════════════════════════════
   SUNGLASSES PAGE — JAVASCRIPT
   Handles: collection select, colour swatch, image gallery
   ═══════════════════════════════════════════════════════ */

/* ── Product Data ───────────────────────────────────── */
const COLLECTIONS = {
  vegas: {
    id: 'vegas',
    name: 'VEGAS',
    price: 'KSH 5,500',
    colours: [
      {
        name: 'Black',
        hex: '#1a1a1a',
        images: ['/Product Catalog/Sunglasses/VEGAS/Black .jpg'],
      },
      {
        name: 'Silver',
        hex: '#c0c0c0',
        images: ['/Product Catalog/Sunglasses/VEGAS/Silver.jpg'],
      },
      {
        name: 'Gold',
        hex: '#D4AF37',
        images: ['/Product Catalog/Sunglasses/VEGAS/Gold .jpg'],
      },
      {
        name: 'Rose Gold',
        hex: '#b76e79',
        images: [
          '/Product Catalog/Sunglasses/VEGAS/Rose Gold .jpg',
          '/Product Catalog/Sunglasses/VEGAS/Rose Gold 2 .jpg',
        ],
      },
    ],
  },

  'sin-city': {
    id: 'sin-city',
    name: 'SIN CITY',
    price: 'KSH 4,500',
    colours: [
      {
        name: 'Black',
        hex: '#1a1a1a',
        images: ['/Product Catalog/Sunglasses/SIN CITY /Black .jpg'],
      },
      {
        name: 'Coffee',
        hex: '#6f4e37',
        images: ['/Product Catalog/Sunglasses/SIN CITY /coffee.jpg'],
      },
      {
        name: 'Brown',
        hex: '#8B5E3C',
        images: ['/Product Catalog/Sunglasses/SIN CITY /Brown .jpg'],
      },
      {
        name: 'Orange',
        hex: '#e07030',
        images: ['/Product Catalog/Sunglasses/SIN CITY /Orange .jpg'],
      },
    ],
  },

  riot: {
    id: 'riot',
    name: 'RIOT',
    price: 'KSH 5,000',
    colours: [
      {
        name: 'Gold',
        hex: '#D4AF37',
        images: [
          '/Product Catalog/Sunglasses/RIOT/Gold.jpg',
          '/Product Catalog/Sunglasses/RIOT/Gold 2 .jpg',
        ],
      },
      {
        name: 'Silver',
        hex: '#c0c0c0',
        images: ['/Product Catalog/Sunglasses/RIOT/Silver .jpg'],
      },
      {
        name: 'Green',
        hex: '#4a7c59',
        images: ['/Product Catalog/Sunglasses/RIOT/Green.jpg'],
      },
      {
        name: 'Brown',
        hex: '#8B5E3C',
        images: ['/Product Catalog/Sunglasses/RIOT/Brown .jpg'],
      },
    ],
  },
};

/* ── State ──────────────────────────────────────────── */
let activeCollection = null;
let activeColourIdx = 0;
let activeImageIdx = 0;

/* ── DOM refs ───────────────────────────────────────── */
const panel        = document.getElementById('sg-panel');
const panelClose   = document.getElementById('sg-panel-close');
const panelName    = document.getElementById('panel-name');
const panelPrice   = document.getElementById('panel-price');
const swatchWrap   = document.getElementById('sg-swatches');
const colourLabel  = document.getElementById('active-colour-label');
const thumbsWrap   = document.getElementById('gallery-thumbs');
const mainImg      = document.getElementById('gallery-main-img');
const prevBtn      = document.getElementById('gallery-prev');
const nextBtn      = document.getElementById('gallery-next');
const buyBtn       = document.getElementById('sg-buy-btn');

/* ── Open panel ─────────────────────────────────────── */
function openPanel(collectionKey) {
  activeCollection = COLLECTIONS[collectionKey];
  activeColourIdx  = 0;
  activeImageIdx   = 0;

  // Populate text
  panelName.textContent  = activeCollection.name;
  panelPrice.textContent = activeCollection.price;

  // Build swatches
  renderSwatches();

  // Load first colour images
  renderGallery(activeColourIdx, 0);

  // Open panel
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');

  // Scroll to panel
  setTimeout(() => {
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

/* ── Close panel ────────────────────────────────────── */
function closePanel() {
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  // Scroll back to cards
  document.getElementById('collections').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── Swatches ───────────────────────────────────────── */
function renderSwatches() {
  swatchWrap.innerHTML = '';
  activeCollection.colours.forEach((colour, i) => {
    const btn = document.createElement('button');
    btn.className = 'sg-swatch' + (i === 0 ? ' active' : '');
    btn.style.background = colour.hex;
    btn.title = colour.name;
    btn.setAttribute('aria-label', colour.name);
    btn.addEventListener('click', () => selectColour(i));
    swatchWrap.appendChild(btn);
  });
  colourLabel.textContent = activeCollection.colours[0].name;
}

function selectColour(idx) {
  activeColourIdx = idx;
  activeImageIdx  = 0;

  // Update swatch active state
  const swatches = swatchWrap.querySelectorAll('.sg-swatch');
  swatches.forEach((s, i) => s.classList.toggle('active', i === idx));

  // Update label
  colourLabel.textContent = activeCollection.colours[idx].name;

  // Update WhatsApp link
  updateBuyLink();

  // Reload gallery
  renderGallery(idx, 0);
}

/* ── Gallery ────────────────────────────────────────── */
function renderGallery(colourIdx, imageIdx) {
  const images = activeCollection.colours[colourIdx].images;

  // Main image
  setMainImage(images[imageIdx]);

  // Thumbnails
  thumbsWrap.innerHTML = '';
  images.forEach((src, i) => {
    const thumb = document.createElement('img');
    thumb.src = src;
    thumb.alt = `${activeCollection.name} — view ${i + 1}`;
    thumb.className = 'sg-thumb' + (i === imageIdx ? ' active' : '');
    thumb.addEventListener('click', () => selectImage(i));
    thumbsWrap.appendChild(thumb);
  });

  // Nav arrows — hide if only one image
  const showNav = images.length > 1;
  prevBtn.style.display = showNav ? 'flex' : 'none';
  nextBtn.style.display = showNav ? 'flex' : 'none';

  updateBuyLink();
}

function setMainImage(src) {
  mainImg.classList.add('transitioning');
  setTimeout(() => {
    mainImg.src = src;
    mainImg.onload = () => mainImg.classList.remove('transitioning');
  }, 200);
}

function selectImage(idx) {
  activeImageIdx = idx;
  const images = activeCollection.colours[activeColourIdx].images;
  setMainImage(images[idx]);

  const thumbs = thumbsWrap.querySelectorAll('.sg-thumb');
  thumbs.forEach((t, i) => t.classList.toggle('active', i === idx));
}

/* ── Carousel nav ───────────────────────────────────── */
prevBtn.addEventListener('click', () => {
  const images = activeCollection.colours[activeColourIdx].images;
  activeImageIdx = (activeImageIdx - 1 + images.length) % images.length;
  selectImage(activeImageIdx);
});

nextBtn.addEventListener('click', () => {
  const images = activeCollection.colours[activeColourIdx].images;
  activeImageIdx = (activeImageIdx + 1) % images.length;
  selectImage(activeImageIdx);
});

/* ── WhatsApp link ──────────────────────────────────── */
function updateBuyLink() {
  const colour     = activeCollection.colours[activeColourIdx].name;
  const name       = activeCollection.name;
  const price      = activeCollection.price;
  const message    = encodeURIComponent(
    `Hi! I'd like to order the *${name}* sunglasses in *${colour}* — ${price}. Could you confirm availability and arrange delivery? 🙏`
  );
  buyBtn.href = `https://wa.me/254700000000?text=${message}`;
}

/* ── Card click listeners ───────────────────────────── */
document.querySelectorAll('.sg-card').forEach(card => {
  card.addEventListener('click', () => {
    const key = card.dataset.collection;
    // If same collection is already open, close it
    if (panel.classList.contains('open') && activeCollection && activeCollection.id === key) {
      closePanel();
    } else {
      openPanel(key);
    }
  });
});

/* ── Close button ───────────────────────────────────── */
panelClose.addEventListener('click', closePanel);

/* ── Keyboard: Escape to close ──────────────────────── */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && panel.classList.contains('open')) closePanel();
});

/* ── Fade-up observer (shared with main.js logic) ───── */
const fadeEls = document.querySelectorAll('.fade-up');
if (fadeEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  fadeEls.forEach(el => observer.observe(el));
}
