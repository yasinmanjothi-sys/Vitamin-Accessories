import './style.css'

// 1. Product Data from Canva Scrape
// 1. Full Product Data
// 1. Featured Highlights (The 8 Perfect Products)
const products = [
  { category: 'Sunglasses', name: 'SIN CITY - COFFEE', price: '4,500 KSH', image: 'https://lucykinuthia.my.canva.site/vitamin-accessories-product-catalog/_assets/media/0666c6a8188c5545ffdbb03344a7312b.jpg' },
  { category: 'Sunglasses', name: 'VEGAS - SILVER', price: '5,000 KSH', image: 'https://lucykinuthia.my.canva.site/vitamin-accessories-product-catalog/_assets/media/87f11d8bcd5becec4d0afa062b032bab.jpg' },
  { category: 'Necklaces', name: 'PINK JUA NECKLACE', price: '2,500 KSH', image: 'https://lucykinuthia.my.canva.site/vitamin-accessories-product-catalog/_assets/media/049f6b054b9935c62cd53f4f2e39ff73.jpg' },
  { category: 'Female Jewelry', name: 'NIA EARRING', price: '2,500 KSH', image: 'https://lucykinuthia.my.canva.site/vitamin-accessories-product-catalog/_assets/media/8b8e0e0a8aa2b29e9247ebbaf45df467.jpg' },
  { category: 'Female Jewelry', name: 'MARINI RING', price: '2,000 KSH', image: 'https://lucykinuthia.my.canva.site/vitamin-accessories-product-catalog/_assets/media/b9e2ef910767094784f69cad26e81786.jpg' },
  { category: 'Female Jewelry', name: 'AMANI BANGLE SET', price: '2,500 KSH', image: 'https://lucykinuthia.my.canva.site/vitamin-accessories-product-catalog/_assets/media/e9e2ef910767094784f69cad26e81786.jpg' },
  { category: 'Watches', name: 'CODA WATCH', price: '10,000 KSH', image: 'https://lucykinuthia.my.canva.site/vitamin-accessories-product-catalog/_assets/media/2a2380eb8aa2b29e9247ebbaf45df467.jpg' },
  { category: 'Watches', name: 'DUNE WATCH BROWN', price: '12,000 KSH', image: 'https://lucykinuthia.my.canva.site/vitamin-accessories-product-catalog/_assets/media/9b2473bd4167d76670bb7711f90da5fb.jpg' }
];

// Populate Featured Items
const featuredTrack = document.getElementById('featured-track');
if (featuredTrack) {
  products.forEach(product => {
    const item = document.createElement('div');
    item.className = 'lb-item magnetic-item';
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
