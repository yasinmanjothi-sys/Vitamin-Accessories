import './style.css'

// 1. Product Data from Canva Scrape
// 1. Full Product Data
// 1. Featured Highlights (The 8 Perfect Products)
const products = [
  { category: 'Sunglasses', name: 'SIN CITY - COFFEE', price: '4,500 KSH', image: '/Product Catalog/Sunglasses/SIN CITY /coffee.jpg', link: 'sunglasses.html' },
  { category: 'Sunglasses', name: 'VEGAS - SILVER', price: '5,000 KSH', image: '/Product Catalog/Sunglasses/VEGAS/Silver.jpg', link: 'sunglasses.html' },
  { category: 'Male Jewelry', name: 'CAPTAIN NECKLACE', price: '2,500 KSH', image: '/Product Catalog/male jewelry/CAPTAIN NECKLACE/c2319b882a0f827b691dbfbac231f420.jpg', link: 'male-jewelry.html' },
  { category: 'Male Jewelry', name: 'KAYA NECKLACE', price: '2,500 KSH', image: '/Product Catalog/male jewelry/KAYA NECKLACE/077e20100a8eff227f9f8f22880031e3.jpg', link: 'male-jewelry.html' },
  { category: 'Unisex', name: 'ARMORY BRACELET', price: '2,800 KSH', image: '/Product Catalog/unisex jewelry/ARMORY BRACELET/40c57ea409ef08bab18679d5c295413f.jpg', link: 'unisex-jewelry.html' },
  { category: 'Unisex', name: 'AZIZI CUFF', price: '2,200 KSH', image: '/Product Catalog/unisex jewelry/AZIZI CUFF/decf42d5e3c85cce0d4a3df4f53e4998.jpg', link: 'unisex-jewelry.html' },
  { category: 'Watches', name: 'MENS DUNE', price: '12,000 KSH', image: '/Product Catalog/watches/MENS DUNE/Silver.jpg', link: 'watches.html' },
  { category: 'Watches', name: 'WOMENS CODA', price: '9,500 KSH', image: '/Product Catalog/watches/CODA /Gold.jpg', link: 'watches.html' }
];

// Populate Featured Items
const featuredTrack = document.getElementById('featured-track');
if (featuredTrack) {
  products.forEach(product => {
    const item = document.createElement('a');
    item.href = product.link;
    item.className = 'lb-item magnetic-item';
    item.style.cssText = 'text-decoration: none; color: inherit; cursor: pointer; display: block;';
    item.innerHTML = `
      <div class="lb-img-container">
        <img src="${product.image}" alt="${product.name}" loading="lazy"/>
      </div>
      <div class="lb-info">
        <span class="lb-title">${product.name}</span>
        <span class="lb-price">${product.price}</span>
      </div>
    `;
    featuredTrack.appendChild(item);
  });
}


// 2. Hero Slideshow
const slides = document.querySelectorAll('.hero-slide');
if (slides.length > 0) {
  let currentSlide = 0;
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 5000);
}

// 3. Simple Parallax
const parallaxElements = document.querySelectorAll('.parallax-element');
window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;
  parallaxElements.forEach(el => {
    // move at half the scroll speed
    el.style.transform = `translateY(${scrollY * 0.5}px)`; 
  });
});

// 4. Fade Up Intersection Observer
const fadeElements = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Trigger once
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));

// Trigger initial visible state for elements already in viewport
setTimeout(() => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add('visible');
    }
  });
}, 100);
// 5. Mobile Menu Toggle
const hamburger = document.getElementById('hamburger-toggle');
const mobileNav = document.getElementById('mobile-nav');
const mobileOverlay = document.getElementById('mobile-overlay');
const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

if (hamburger && mobileNav && mobileOverlay) {
  const toggleMenu = () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  };

  hamburger.addEventListener('click', toggleMenu);
  mobileOverlay.addEventListener('click', toggleMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNav.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
}
