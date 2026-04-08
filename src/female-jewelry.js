/* ═══════════════════════════════════════════════════════════
   FEMALE JEWELRY PAGE — JAVASCRIPT
   Handles: collections view, category/filter view, product panel
   ═══════════════════════════════════════════════════════════ */

const BASE = '/Product Catalog/female jewelry';

/* ─────────────────────────────────────────────────────────
   PRODUCT DATA
   Collections are grouped by the first word of the folder name.
   Single-piece collections have one item under 'pieces'.
   Multi-piece collections list all items.
───────────────────────────────────────────────────────── */
const COLLECTIONS = [
  {
    id: 'aiko',
    name: 'AIKO',
    coverImg: `${BASE}/AIKO EARRINGS/bcfa90ae8f83e2065121abcdb37978c8.jpg`,
    pieces: [
      {
        name: 'AIKO EARRINGS',
        category: 'earrings',
        style: 'Huge Hoop Earrings',
        price: 2000,
        images: [
          `${BASE}/AIKO EARRINGS/bcfa90ae8f83e2065121abcdb37978c8.jpg`,
          `${BASE}/AIKO EARRINGS/cc2c2bb88b9ff7133d06c0a5eb2f6c56.jpg`,
        ],
      },
      {
        name: 'AIKO NECKLACE',
        category: 'necklace',
        style: 'Pendant',
        price: 2500,
        images: [`${BASE}/AIKO NECKLACE/11e17a266e142e8cd0f97c643fcf2ef5.jpg`],
      },
    ],
  },
  {
    id: 'amara',
    name: 'AMARA',
    coverImg: `${BASE}/AMARA EARRINGS/970c440722c5c2ba459ab13b6d1b3127.jpg`,
    pieces: [
      {
        name: 'AMARA BRACELET',
        category: 'bracelet',
        style: 'Chunky Bracelet',
        price: 2300,
        images: [`${BASE}/AMARA BRACELET/3453abcf4932f8c1fc480574199d45cb.jpg`],
      },
      {
        name: 'AMARA EARRINGS',
        category: 'earrings',
        style: 'Hoop',
        price: 2500,
        images: [
          `${BASE}/AMARA EARRINGS/970c440722c5c2ba459ab13b6d1b3127.jpg`,
          `${BASE}/AMARA EARRINGS/a0772a2f08a1ffd66d2a74550f06696b.jpg`,
        ],
      },
      {
        name: 'AMARA RING',
        category: 'ring',
        style: 'Adjustable 3 Balls',
        price: 2500,
        images: [
          `${BASE}/AMARA RING/3ece22a58e017c19364b43573fc5f1ac.jpg`,
          `${BASE}/AMARA RING/782940a5ee52d9b4e94944dd6d474927.jpg`,
        ],
      },
    ],
  },
  {
    id: 'bella',
    name: 'BELLA',
    coverImg: `${BASE}/BELLA RING/706ccc9bc3df5d3270ceb90f22a5e9f5.jpg`,
    pieces: [
      {
        name: 'BELLA BRACELET',
        category: 'bracelet',
        style: 'Bracelet',
        price: 2000,
        images: [`${BASE}/BELLA BRACELET/61f24648eccbd1cf16cd605e352bf554.jpg`],
      },
      {
        name: 'BELLA RING',
        category: 'ring',
        style: 'Adjustable',
        price: 2000,
        images: [
          `${BASE}/BELLA RING/706ccc9bc3df5d3270ceb90f22a5e9f5.jpg`,
          `${BASE}/BELLA RING/9e9a33b8a88511b40528dc7e999a721f.jpg`,
        ],
      },
    ],
  },
  {
    id: 'bijou',
    name: 'BIJOU',
    coverImg: `${BASE}/BIJOU DORE/fe19d55115c4023e6db75030f6256bea.jpg`,
    pieces: [
      {
        name: 'BIJOU CLAIR',
        category: 'earrings',
        style: 'Hoop',
        price: 2500,
        images: [`${BASE}/BIJOU CLAIR/18caa2a7276f65972e0f4328801d27f9.jpg`],
      },
      {
        name: 'BIJOU DORE',
        category: 'earrings',
        style: 'Hoop',
        price: 2500,
        images: [`${BASE}/BIJOU DORE/fe19d55115c4023e6db75030f6256bea.jpg`],
      },
      {
        name: 'BIJOU NOIR',
        category: 'earrings',
        style: 'Hoop',
        price: 2500,
        images: [`${BASE}/BIJOU NOIR/4520b47ea587074d5e519a8a0ef7e50e.jpg`],
      },
    ],
  },
  {
    id: 'karma',
    name: 'KARMA',
    coverImg: `${BASE}/KARMA NECKLACE/50cd62485858d4885d69ddd9bcd52874.jpg`,
    pieces: [
      {
        name: 'KARMA BRACELET',
        category: 'bracelet',
        style: 'Bracelet',
        price: 2800,
        images: [
          `${BASE}/KARMA BRACELET/95b5488233d4500d29df4916a3fc521c.jpg`,
          `${BASE}/KARMA BRACELET/e6821c6a4212e27745cf2ec44df74db7.jpg`,
        ],
      },
      {
        name: 'KARMA NECKLACE',
        category: 'necklace',
        style: 'Pendant Necklace',
        price: 2500,
        images: [
          `${BASE}/KARMA NECKLACE/50cd62485858d4885d69ddd9bcd52874.jpg`,
          `${BASE}/KARMA NECKLACE/72a8c6775c1fb4fd32fb6bc5b07cb11c.jpg`,
        ],
      },
    ],
  },
  {
    id: 'marini',
    name: 'MARINI',
    coverImg: `${BASE}/MARINI NECKLACE/41ebae1e309ac75ea609060e9fb9a2da.jpg`,
    pieces: [
      {
        name: 'MARINI EARRINGS',
        category: 'earrings',
        style: 'Huggies',
        price: 2500,
        images: [`${BASE}/MARINI EARRINGS/8707ba52972ad3b86b0664f7b3907b03.jpg`],
      },
      {
        name: 'MARINI HOOK',
        category: 'earrings',
        style: 'Hook Earrings',
        price: 2000,
        images: [
          `${BASE}/MARINI HOOK/33c9ee2b656c2cb07e95f2b2ac0221bf.jpg`,
          `${BASE}/MARINI HOOK/c4f8c16f22f0aacc2df1c22586620dfc.jpg`,
        ],
      },
      {
        name: 'MARINI NECKLACE',
        category: 'necklace',
        style: 'Pendant Necklace',
        price: 2500,
        images: [`${BASE}/MARINI NECKLACE/41ebae1e309ac75ea609060e9fb9a2da.jpg`],
      },
      {
        name: 'MARINI RING',
        category: 'ring',
        style: 'Stone Ring',
        price: 2000,
        images: [`${BASE}/MARINI RING/badec0bc6f29020cb35606d67a60c06a.jpg`],
      },
    ],
  },
  {
    id: 'sahara',
    name: 'SAHARA',
    coverImg: `${BASE}/SAHARA EARRING/f3232b395ef9b7bb21e7dceb61a283a0.jpg`,
    pieces: [
      {
        name: 'SAHARA EARRING',
        category: 'earrings',
        style: 'Metallic Style Hoop',
        price: 2000,
        images: [`${BASE}/SAHARA EARRING/f3232b395ef9b7bb21e7dceb61a283a0.jpg`],
      },
      {
        name: 'SAHARA RING',
        category: 'ring',
        style: 'Circular Adjustable Ring',
        price: 2000,
        images: [`${BASE}/SAHARA RING/8f34cd284a1fc2ba5e050025b7805352.jpg`],
      },
    ],
  },
  {
    id: 'volga',
    name: 'VOLGA',
    coverImg: `${BASE}/VOLGA EARRINGS/e10f4c6351438641726d455f576bb644.jpg`,
    pieces: [
      {
        name: 'VOLGA EARRINGS',
        category: 'earrings',
        style: 'Earrings',
        price: 2000,
        images: [`${BASE}/VOLGA EARRINGS/e10f4c6351438641726d455f576bb644.jpg`],
      },
      {
        name: 'VOLGA RING',
        category: 'ring',
        style: 'Ring',
        price: 2000,
        images: [`${BASE}/VOLGA RING/2809a4bef89757df28272965cd9d4859.jpg`],
      },
    ],
  },
  /* ── Single-piece collections ── */
  { id: 'velora', name: 'VELORA RING', coverImg: `${BASE}/ VELORA RING/3 STACK/6a922377ab62e9133c52bf3b229aaf66.jpg`, pieces: [{ name: 'VELORA RING', category: 'ring', style: 'Stacked Ring', price: 4250, colours: [{name:'3 Stack',hex:'#D4AF37',img:`${BASE}/ VELORA RING/3 STACK/6a922377ab62e9133c52bf3b229aaf66.jpg`},{name:'4 Stack',hex:'#c0c0c0',img:`${BASE}/ VELORA RING/4 STACK /138bf27b2352b0232a1149185580e0e8.jpg`}], images: [`${BASE}/ VELORA RING/3 STACK/6a922377ab62e9133c52bf3b229aaf66.jpg`, `${BASE}/ VELORA RING/4 STACK /138bf27b2352b0232a1149185580e0e8.jpg`] }] },
  { id: 'amani', name: 'AMANI BANGLE SET', coverImg: `${BASE}/AMANI BANGLE SET /6cf823dd952ebebd680c28cbfd4b0257.jpg`, pieces: [{ name: 'AMANI BANGLE SET', category: 'bangle', style: 'Bangle Set', price: 2500, images: [`${BASE}/AMANI BANGLE SET /6cf823dd952ebebd680c28cbfd4b0257.jpg`] }] },
  { id: 'amaya', name: 'AMAYA RING', coverImg: `${BASE}/AMAYA RING/5ab9f97c31692ef62fd0bf25b855c619.jpg`, pieces: [{ name: 'AMAYA RING', category: 'ring', style: 'Adjustable Ring', price: 1700, images: [`${BASE}/AMAYA RING/5ab9f97c31692ef62fd0bf25b855c619.jpg`, `${BASE}/AMAYA RING/9577e7843388fc1d9be3d8bbd0e27e35.jpg`] }] },
  { id: 'amora', name: 'AMORA NECKLACE', coverImg: `${BASE}/AMORA NECKLACE/9bb99057fd4f29f52e8a9d324fe725c2.jpg`, pieces: [{ name: 'AMORA NECKLACE', category: 'necklace', style: 'Pendant', price: 2500, images: [`${BASE}/AMORA NECKLACE/9bb99057fd4f29f52e8a9d324fe725c2.jpg`, `${BASE}/AMORA NECKLACE/dd4bccfd24218aa0f3bd8a0caef4365a.jpg`] }] },
  { id: 'amari', name: 'AMARI RING', coverImg: `${BASE}/AMARI RING/77914f219cf7c7d3c42cbb5bdf400f11.jpg`, pieces: [{ name: 'AMARI RING', category: 'ring', style: 'Ring', price: 2000, images: [`${BASE}/AMARI RING/77914f219cf7c7d3c42cbb5bdf400f11.jpg`, `${BASE}/AMARI RING/93a6e4cb31ca257591a0eee6ef2f31c5.jpg`] }] },
  { id: 'aurora', name: 'AURORA BRACELET', coverImg: `${BASE}/AURORA BRACELET/6781a2edef8a7e8fbe7e8aed97b0f1ca.jpg`, pieces: [{ name: 'AURORA BRACELET', category: 'bracelet', style: 'Chunky Bracelet', price: 2000, images: [`${BASE}/AURORA BRACELET/6781a2edef8a7e8fbe7e8aed97b0f1ca.jpg`, `${BASE}/AURORA BRACELET/780ab6fcf3f1cf2f80878e4822b7814f.jpg`] }] },
  { id: 'ayana', name: 'AYANA RING', coverImg: `${BASE}/AYANA RING/38376f19d6b1f5ed6b45f7ee273f7f99.jpg`, pieces: [{ name: 'AYANA RING', category: 'ring', style: 'Heart Shaped Ring', price: 1500, images: [`${BASE}/AYANA RING/38376f19d6b1f5ed6b45f7ee273f7f99.jpg`, `${BASE}/AYANA RING/a628b467be84df41b48806a7e2a688e0.jpg`] }] },
  { id: 'crucifix', name: 'CRUCIFIX NECKLACE', coverImg: `${BASE}/CRUCIFIX NECKLACE/76e26e194dded213231477bd7313916e.jpg`, pieces: [{ name: 'CRUCIFIX NECKLACE', category: 'necklace', style: 'Pendant', price: 3000, images: [`${BASE}/CRUCIFIX NECKLACE/76e26e194dded213231477bd7313916e.jpg`, `${BASE}/CRUCIFIX NECKLACE/fa5e967deb85b34cf4468a0f5f06149f.jpg`] }] },
  { id: 'dahlia', name: 'DAHLIA EARRINGS', coverImg: `${BASE}/DAHLIA EARRINGS/8d39d8ba4fcb46ed974f005528a70f93.jpg`, pieces: [{ name: 'DAHLIA EARRINGS', category: 'earrings', style: 'Earrings', price: 2500, images: [`${BASE}/DAHLIA EARRINGS/8d39d8ba4fcb46ed974f005528a70f93.jpg`] }] },
  { id: 'halo', name: 'HALO EARRING', coverImg: `${BASE}/HALO EARRING/3d0c1c72383a7c118c05491692ea9952.jpg`, pieces: [{ name: 'HALO EARRING', category: 'earrings', style: 'Bar Earrings', price: 2500, images: [`${BASE}/HALO EARRING/3d0c1c72383a7c118c05491692ea9952.jpg`] }] },
  { id: 'imara', name: 'IMARA EARRING', coverImg: `${BASE}/IMARA EARRING/Plated Gold 1 .jpg`, pieces: [{ name: 'IMARA EARRING', category: 'earrings', style: 'Statement Earring', price: 2150, images: [`${BASE}/IMARA EARRING/Plated Gold 1 .jpg`, `${BASE}/IMARA EARRING/Plated Gold 2 .jpg`] }] },
  { id: 'infinity', name: 'INFINITY PROMISE NECKLACE', coverImg: `${BASE}/INFINITY PROMISE NECKLACE/a5d6f7609218c34bd58e8b9b866a1d4c.jpg`, pieces: [{ name: 'INFINITY PROMISE NECKLACE', category: 'necklace', style: 'Promise Necklace', price: 2500, images: [`${BASE}/INFINITY PROMISE NECKLACE/a5d6f7609218c34bd58e8b9b866a1d4c.jpg`] }] },
  { id: 'jua', name: 'JUA NECKLACE', coverImg: `${BASE}/JUA NECKLACE/PINK.jpg`, pieces: [{ name: 'JUA NECKLACE', category: 'necklace', style: 'Pendant Necklace', price: 2500, colours: [{name:'Pink',hex:'#f4a7b9',img:`${BASE}/JUA NECKLACE/PINK.jpg`},{name:'Blue',hex:'#5b8fc4',img:`${BASE}/JUA NECKLACE/BLUE.jpg`},{name:'Green',hex:'#4a7c59',img:`${BASE}/JUA NECKLACE/GREEN.jpg`},{name:'Yellow',hex:'#e5c84c',img:`${BASE}/JUA NECKLACE/YELLOW.jpg`}], images: [`${BASE}/JUA NECKLACE/PINK.jpg`,`${BASE}/JUA NECKLACE/BLUE.jpg`,`${BASE}/JUA NECKLACE/GREEN.jpg`,`${BASE}/JUA NECKLACE/YELLOW.jpg`] }] },
  { id: 'katarina', name: 'KATARINA EARRINGS', coverImg: `${BASE}/KATARINA EARRINGS/a3ad1e3a86c4b1f15c45b237b8c01fb4.jpg`, pieces: [{ name: 'KATARINA EARRINGS', category: 'earrings', style: 'Earrings', price: 2500, images: [`${BASE}/KATARINA EARRINGS/a3ad1e3a86c4b1f15c45b237b8c01fb4.jpg`] }] },
  { id: 'kito', name: 'KITO RINGS', coverImg: `${BASE}/KITO RINGS/534debacd8e9e575067a25ae7cccf3f0.jpg`, pieces: [{ name: 'KITO RINGS', category: 'ring', style: 'Branch Design Ring', price: 2000, images: [`${BASE}/KITO RINGS/534debacd8e9e575067a25ae7cccf3f0.jpg`] }] },
  { id: 'luna', name: 'LUNA EARRINGS', coverImg: `${BASE}/LUNA EARRINGS/56b4be21c8345551ad89a847edc21a66.jpg`, pieces: [{ name: 'LUNA EARRINGS', category: 'earrings', style: 'Hoop', price: 2500, images: [`${BASE}/LUNA EARRINGS/56b4be21c8345551ad89a847edc21a66.jpg`] }] },
  { id: 'mirza', name: 'MIRZA EARRINGS', coverImg: `${BASE}/MIRZA EARRINGS/d874e5b5f939358113a7673f6987dcb4.jpg`, pieces: [{ name: 'MIRZA EARRINGS', category: 'earrings', style: 'Earrings', price: 2500, images: [`${BASE}/MIRZA EARRINGS/d874e5b5f939358113a7673f6987dcb4.jpg`] }] },
  { id: 'minimirza', name: 'MINI MIRZA EARRINGS', coverImg: null, pieces: [{ name: 'MINI MIRZA EARRINGS', category: 'earrings', style: 'Earrings', price: 2000, images: [] }] },
  { id: 'monateo', name: 'MONATEO NECKLACE', coverImg: `${BASE}/MONATEO NECKLACE/7e8740b8f5d90d8ecece2f4382d4e5b9.jpg`, pieces: [{ name: 'MONATEO NECKLACE', category: 'necklace', style: 'Tennis Necklace', price: 2800, images: [`${BASE}/MONATEO NECKLACE/7e8740b8f5d90d8ecece2f4382d4e5b9.jpg`, `${BASE}/MONATEO NECKLACE/ae4a3fb9ee137b7d6fce86664a20c413.jpg`] }] },
  { id: 'moscow', name: 'MOSCOW EARRINGS', coverImg: `${BASE}/MOSCOW EARRINGS/0a7d51c427f0d34d509e4844e353ba60.jpg`, pieces: [{ name: 'MOSCOW EARRINGS', category: 'earrings', style: 'Earrings', price: 2500, images: [`${BASE}/MOSCOW EARRINGS/0a7d51c427f0d34d509e4844e353ba60.jpg`] }] },
  { id: 'nala', name: 'NALA RING', coverImg: `${BASE}/NALA RING/111a323cbd092f4e2f06aab6f53c2b6a.jpg`, pieces: [{ name: 'NALA RING', category: 'ring', style: 'Cubic Zirconia Adjustable', price: 2000, images: [`${BASE}/NALA RING/111a323cbd092f4e2f06aab6f53c2b6a.jpg`] }] },
  { id: 'nesa', name: 'NESA EARRINGS', coverImg: `${BASE}/NESA EARRINGS/7a3508f91ee818da963c9cdf7f41c016.jpg`, pieces: [{ name: 'NESA EARRINGS', category: 'earrings', style: 'Hoop', price: 2500, images: [`${BASE}/NESA EARRINGS/7a3508f91ee818da963c9cdf7f41c016.jpg`] }] },
  { id: 'nia', name: 'NIA EARRING', coverImg: `${BASE}/NIA EARRING/11f85be31f2d7ee1b5d528be4e5caf27.jpg`, pieces: [{ name: 'NIA EARRING', category: 'earrings', style: 'Heavy Metallic Earring', price: 2500, images: [`${BASE}/NIA EARRING/11f85be31f2d7ee1b5d528be4e5caf27.jpg`, `${BASE}/NIA EARRING/f92f5411f9318ab45fd670d884dd5106.jpg`] }] },
  { id: 'novya', name: 'NOVYA EARRINGS', coverImg: `${BASE}/NOVYA EARRINGS/4bb182a93b408862d8ae6e696c819806.jpg`, pieces: [{ name: 'NOVYA EARRINGS', category: 'earrings', style: 'Earrings', price: 2500, images: [`${BASE}/NOVYA EARRINGS/4bb182a93b408862d8ae6e696c819806.jpg`, `${BASE}/NOVYA EARRINGS/b357b23191ff8b7693fbf9ef31d145dc.jpg`] }] },
  { id: 'obsidian', name: 'OBSIDIAN EARRINGS', coverImg: `${BASE}/OBSIDIAN EARRINGS/1dee45286db9ea5e11a57bf5aca77ee9.jpg`, pieces: [{ name: 'OBSIDIAN EARRINGS', category: 'earrings', style: 'Rectangular Earrings', price: 2500, images: [`${BASE}/OBSIDIAN EARRINGS/1dee45286db9ea5e11a57bf5aca77ee9.jpg`] }] },
  { id: 'oraya', name: 'ORAYA EARRINGS', coverImg: `${BASE}/ORAYA EARRINGS/c641a20f9bb07d1c50898c8ac3747fc8.jpg`, pieces: [{ name: 'ORAYA EARRINGS', category: 'earrings', style: 'Earrings', price: 2500, images: [`${BASE}/ORAYA EARRINGS/c641a20f9bb07d1c50898c8ac3747fc8.jpg`] }] },
  { id: 'orisha', name: 'ORISHA EARRING', coverImg: `${BASE}/ORISHA EARRING/db5ee1bb65c057823a46d4a1407aad28.jpg`, pieces: [{ name: 'ORISHA EARRING', category: 'earrings', style: 'Knot Design Earring', price: 2300, images: [`${BASE}/ORISHA EARRING/db5ee1bb65c057823a46d4a1407aad28.jpg`, `${BASE}/ORISHA EARRING/b8e79d7f0d240224feae35d1209a729b.jpg`] }] },
  { id: 'osea', name: 'OSEA RING', coverImg: `${BASE}/OSEA RING/a692893b956f56da7f97166c88a222f3.jpg`, pieces: [{ name: 'OSEA RING', category: 'ring', style: 'Ring', price: 2000, images: [`${BASE}/OSEA RING/a692893b956f56da7f97166c88a222f3.jpg`, `${BASE}/OSEA RING/e97aa67ca13bf290780e0e1bbac0d8fb.jpg`] }] },
  { id: 'shaba', name: 'SHABA RING', coverImg: `${BASE}/SHABA RING/c4c6872504d8922a4a63681710b8c8a0.jpg`, pieces: [{ name: 'SHABA RING', category: 'ring', style: 'Hoop Design Ring', price: 1500, images: [`${BASE}/SHABA RING/c4c6872504d8922a4a63681710b8c8a0.jpg`] }] },
  { id: 'siberai', name: 'SIBERAI CUFF', coverImg: `${BASE}/SIBERAI CUFF/f5d6adc9bdd69f0edd1d018972ecb5eb.jpg`, pieces: [{ name: 'SIBERAI CUFF', category: 'cuff', style: 'Cuff', price: 2500, images: [`${BASE}/SIBERAI CUFF/f5d6adc9bdd69f0edd1d018972ecb5eb.jpg`] }] },
  { id: 'siberia', name: 'SIBERIA EARRINGS', coverImg: `${BASE}/SIBERIA EARRINGS/7198f300a10e90313e537a9cda5d592a.jpg`, pieces: [{ name: 'SIBERIA EARRINGS', category: 'earrings', style: 'Earrings', price: 2500, images: [`${BASE}/SIBERIA EARRINGS/7198f300a10e90313e537a9cda5d592a.jpg`] }] },
  { id: 'siombo', name: 'SIOMBO NECKLACE', coverImg: `${BASE}/SIOMBO NECKLACE/edeaabc0eaa884101d850f2423f63e34.jpg`, pieces: [{ name: 'SIOMBO NECKLACE', category: 'necklace', style: 'Water Droplet Necklace', price: 2800, images: [`${BASE}/SIOMBO NECKLACE/edeaabc0eaa884101d850f2423f63e34.jpg`] }] },
  { id: 'siren', name: 'SIREN EARRINGS', coverImg: `${BASE}/SIREN EARRINGS/203c1a6028cb39225ef968320583fc47.jpg`, pieces: [{ name: 'SIREN EARRINGS', category: 'earrings', style: 'Earrings', price: 2500, images: [`${BASE}/SIREN EARRINGS/203c1a6028cb39225ef968320583fc47.jpg`] }] },
  { id: 'thalia', name: 'THALIA EARRINGS', coverImg: `${BASE}/THALIA EARRINGS/fa677b505dfc1c6f2083a6d9ae22c666.jpg`, pieces: [{ name: 'THALIA EARRINGS', category: 'earrings', style: 'Triangular Earring', price: 2500, images: [`${BASE}/THALIA EARRINGS/fa677b505dfc1c6f2083a6d9ae22c666.jpg`] }] },
  { id: 'vira', name: 'VIRA RING', coverImg: `${BASE}/VIRA RING/818bea57a25bd477cb822b86ecfa51d5.jpg`, pieces: [{ name: 'VIRA RING', category: 'ring', style: 'Ring', price: 2000, images: [`${BASE}/VIRA RING/818bea57a25bd477cb822b86ecfa51d5.jpg`, `${BASE}/VIRA RING/87cef98a48f8ada9d27ee1aa74c78894.jpg`] }] },
  { id: 'yin', name: 'YIN & YANG RINGS', coverImg: `${BASE}/YIN & YANG RINGS/ff33b8b9e0d467434aa668d667887b33.jpg`, pieces: [{ name: 'YIN & YANG RINGS', category: 'ring', style: 'Couple / Best Friend Rings', price: 2000, images: [`${BASE}/YIN & YANG RINGS/ff33b8b9e0d467434aa668d667887b33.jpg`] }] },
  { id: 'zuri', name: 'ZURI RING', coverImg: `${BASE}/ZURI RING/02024163457bd7ba1f43552b9841c5e2.jpg`, pieces: [{ name: 'ZURI RING', category: 'ring', style: 'Heavy Metallic Ring', price: 2300, images: [`${BASE}/ZURI RING/02024163457bd7ba1f43552b9841c5e2.jpg`] }] },
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
    const card = document.createElement('article');
    card.className = 'fj-product-card fade-up';
    card.innerHTML = `
      <div class="sg-card-img-wrap">
        <img src="${product.images[0]}" alt="${product.name}" class="sg-card-img" loading="lazy" />
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

  // 1. Filter Products (Category View)
  let filteredProducts = ALL_PRODUCTS;

  if (cat !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.category === cat);
  }

  if (price === 'under2000') {
    filteredProducts = filteredProducts.filter(p => p.price < 2000);
  } else if (price === '2000to2500') {
    filteredProducts = filteredProducts.filter(p => p.price >= 2000 && p.price <= 2500);
  } else if (price === 'over2500') {
    filteredProducts = filteredProducts.filter(p => p.price > 2500);
  }

  if (search) {
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(search) || 
      p.style.toLowerCase().includes(search) ||
      p.collectionName?.toLowerCase().includes(search)
    );
  }

  // 2. Filter Collections (Collection View)
  // A collection matches if its name matches OR any of its pieces match current filters
  const filteredCollections = COLLECTIONS.filter(col => {
    const colNameMatch = col.name.toLowerCase().includes(search);
    
    const hasMatchingPiece = col.pieces.some(p => {
      // Piece must match Category + Price + Search
      let m = true;
      if (cat !== 'all') m = m && p.category === cat;
      if (price === 'under2000') m = m && p.price < 2000;
      else if (price === '2000to2500') m = m && p.price >= 2000 && p.price <= 2500;
      else if (price === 'over2500') m = m && p.price > 2500;
      
      if (search) {
        m = m && (p.name.toLowerCase().includes(search) || p.style.toLowerCase().includes(search));
      }
      return m;
    });

    return colNameMatch || hasMatchingPiece;
  });

  if (currentView === 'collections') {
    renderCollections(filteredCollections);
  } else {
    renderProducts(filteredProducts);
  }
}

/* ─────────────────────────────────────────────────────────
   OPEN PANEL: full collection
───────────────────────────────────────────────────────── */
function openCollectionPanel(collectionId) {
  const col = COLLECTIONS.find(c => c.id === collectionId);
  if (!col) return;

  // If same already open, close
  if (panel.classList.contains('open') && activeProduct && activeProduct._collectionId === collectionId) {
    closePanel(); return;
  }

  // Default to first piece
  const piece = col.pieces.find(p => p.images.length > 0) || col.pieces[0];
  activeProduct = { ...piece, _collectionId: collectionId };
  activeImageIdx = 0;
  activeColourIdx = 0;

  // Populate info
  panelName.textContent  = col.name;
  panelStyle.textContent = piece.style;
  panelPrice.textContent = col.pieces.length > 1
    ? `From ${fmt(Math.min(...col.pieces.map(p => p.price)))}`
    : fmt(piece.price);

  // Show collection piece chips
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

  // Colours
  renderColourSwatches(piece);

  // Gallery
  renderGallery(piece.images, 0);

  openPanelAnimate();
}

/* ─────────────────────────────────────────────────────────
   OPEN PANEL: single product (category view)
───────────────────────────────────────────────────────── */
function openProductPanel(product) {
  activeProduct = product;
  activeImageIdx = 0;
  activeColourIdx = 0;

  panelName.textContent  = product.name;
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

/* ─────────────────────────────────────────────────────────
   SELECT PIECE (from chip)
───────────────────────────────────────────────────────── */
function selectPiece(col, idx) {
  const piece = col.pieces[idx];
  activeProduct = { ...piece, _collectionId: col.id };
  activeImageIdx = 0;
  activeColourIdx = 0;

  panelStyle.textContent = piece.style;
  panelPrice.textContent = fmt(piece.price);

  // Update chips
  piecesChips.querySelectorAll('.fj-piece-chip').forEach((c, i) => c.classList.toggle('active', i === idx));

  renderColourSwatches(piece);
  renderGallery(piece.images, 0);
  updateBuyLink();
}

/* ─────────────────────────────────────────────────────────
   GALLERY
───────────────────────────────────────────────────────── */
function renderGallery(images, startIdx) {
  activeImageIdx = startIdx;

  setMainImage(images[startIdx] || '');

  thumbsWrap.innerHTML = '';
  images.forEach((src, i) => {
    const thumb = document.createElement('img');
    thumb.src = src;
    thumb.alt = `View ${i + 1}`;
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

/* ─────────────────────────────────────────────────────────
   COLOUR SWATCHES
───────────────────────────────────────────────────────── */
function renderColourSwatches(piece) {
  if (piece.colours && piece.colours.length > 1) {
    swatchesWrap.style.display = 'block';
    swatches.innerHTML = '';
    colourLabel.textContent = piece.colours[0].name;

    piece.colours.forEach((col, i) => {
      const btn = document.createElement('button');
      btn.className = 'sg-swatch' + (i === 0 ? ' active' : '');
      btn.style.background = col.hex;
      btn.title = col.name;
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

/* ─────────────────────────────────────────────────────────
   WHATSAPP LINK
───────────────────────────────────────────────────────── */
function updateBuyLink() {
  if (!activeProduct) return;
  const colourPart = activeProduct.colours
    ? ` in *${activeProduct.colours[activeColourIdx]?.name}*`
    : '';
  const message = encodeURIComponent(
    `Hi! I'd like to order the *${activeProduct.name}*${colourPart} — ${fmt(activeProduct.price)}. Could you confirm availability and arrange delivery? 🙏`
  );
  buyBtn.href = `https://wa.me/254700000000?text=${message}`;
}

/* ─────────────────────────────────────────────────────────
   CLOSE PANEL
───────────────────────────────────────────────────────── */
function closePanel() {
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  document.getElementById('collections').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

panelClose.addEventListener('click', closePanel);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePanel(); });

/* ─────────────────────────────────────────────────────────
   VIEW TOGGLE
───────────────────────────────────────────────────────── */
document.querySelectorAll('.fj-view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const view = btn.dataset.view;
    document.querySelectorAll('.fj-view-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentView = view;
    closePanel();

    if (view === 'collections') {
      collectionsView.style.display = 'block';
      categoryView.style.display = 'none';
    } else {
      collectionsView.style.display = 'none';
      categoryView.style.display = 'block';
    }
    
    applyFilters(); // Re-render whichever view is now active with current filters
  });
});

filterCategory.addEventListener('change', applyFilters);
filterPrice.addEventListener('change', applyFilters);
filterSearch.addEventListener('input', applyFilters);

clearBtn.addEventListener('click', () => {
  filterCategory.value = 'all';
  filterPrice.value = 'all';
  filterSearch.value = '';
  applyFilters();
});

/* Filters are now permanent */
// filterGroup.style.display = 'none'; 


/* ─────────────────────────────────────────────────────────
   INTERSECTION OBSERVER (fade-ups)
───────────────────────────────────────────────────────── */
function observeFadeUps() {
  const fadeEls = document.querySelectorAll('.fade-up:not(.visible)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────────────────────
   INIT
───────────────────────────────────────────────────────── */
renderCollections();
