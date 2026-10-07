/* Saini Supermarket — shared interactions and product showcase data.
   This is a brand + store-information site. No prices, cart, checkout, or purchase flow. */

const categories = [
  { id: 'groceries', number: '01', name: 'Groceries', short: 'Atta, rice, dals & pantry staples', image: 'assets/rice.jpg', alt: 'Basmati rice displayed as an everyday grocery staple' },
  { id: 'fruits-vegetables', number: '02', name: 'Fruits & Vegetables', short: 'Fresh picks for everyday cooking', image: 'assets/produce.jpg', alt: 'Fresh produce at a supermarket fruit and vegetable section' },
  { id: 'dairy-beverages', number: '03', name: 'Dairy & Beverages', short: 'Milk, paneer, juices and more', image: 'assets/dairy.jpg', alt: 'Dairy products available in the supermarket' },
  { id: 'snacks-biscuits', number: '04', name: 'Snacks & Biscuits', short: 'Namkeen, cookies and teatime favourites', image: 'assets/snacks.jpg', alt: 'Biscuits and snack foods in a supermarket' },
  { id: 'packaged-foods', number: '05', name: 'Packaged Foods', short: 'Easy additions for busy days', image: 'assets/packaged-foods.jpg', alt: 'Packaged foods and pantry items on a supermarket shelf' },
  { id: 'personal-care', number: '06', name: 'Personal Care', short: 'Daily care for the whole family', image: 'assets/personal-care.jpg', alt: 'Personal care essentials' },
  { id: 'home-care', number: '07', name: 'Home Care', short: 'Cleaning and laundry essentials', image: 'assets/home-care.jpg', alt: 'Home cleaning products on a supermarket shelf' },
  { id: 'household-essentials', number: '08', name: 'Household Essentials', short: 'Useful little things for home', image: 'assets/aisle.jpg', alt: 'Organised supermarket aisle with household essentials' },
];

const products = [
  { id: 'basmati-rice', name: 'Premium Basmati Rice', category: 'Groceries', categoryId: 'groceries', size: '5 kg', image: 'assets/rice.jpg', alt: 'Premium basmati rice in a natural jute sack', description: 'Long-grain basmati rice for everyday meals and special family recipes.' },
  { id: 'whole-wheat-atta', name: 'Whole Wheat Chakki Atta', category: 'Groceries', categoryId: 'groceries', size: '10 kg', image: 'assets/packaged-foods.jpg', alt: 'Whole wheat atta stocked on a grocery shelf', description: 'A pantry staple for rotis, parathas and home-style cooking.' },
  { id: 'desi-ghee', name: 'Pure Desi Ghee', category: 'Groceries', categoryId: 'groceries', size: '1 L', image: 'assets/ghee.jpg', alt: 'Desi ghee available in the grocery range', description: 'A familiar kitchen essential for everyday cooking and festive recipes.' },
  { id: 'spice-collection', name: 'Kitchen Spice Collection', category: 'Groceries', categoryId: 'groceries', size: 'Pack of 4', image: 'assets/spices.jpg', alt: 'A selection of spices and seasonings', description: 'A useful selection of everyday spices for a well-stocked kitchen.' },
  { id: 'seasonal-produce', name: 'Seasonal Fresh Produce', category: 'Fruits & Vegetables', categoryId: 'fruits-vegetables', size: 'Selection varies', image: 'assets/produce.jpg', alt: 'Seasonal fruits and vegetables at the produce section', description: 'A seasonal mix of fruits and vegetables. The selection changes through the year.' },
  { id: 'toned-milk', name: 'Fresh Toned Milk', category: 'Dairy & Beverages', categoryId: 'dairy-beverages', size: '1 L', image: 'assets/dairy.jpg', alt: 'Milk and dairy products in the chilled section', description: 'Everyday dairy essentials for tea, breakfast and home cooking.' },
  { id: 'malai-paneer', name: 'Fresh Malai Paneer', category: 'Dairy & Beverages', categoryId: 'dairy-beverages', size: '200 g', image: 'assets/dairy.jpg', alt: 'Dairy products including paneer', description: 'A handy dairy favourite for quick meals and family recipes.' },
  { id: 'punjabi-namkeen', name: 'Classic Punjabi Namkeen', category: 'Snacks & Biscuits', categoryId: 'snacks-biscuits', size: '400 g', image: 'assets/snacks.jpg', alt: 'Punjabi savoury snacks on a supermarket shelf', description: 'A savoury teatime snack from the store’s range of familiar favourites.' },
  { id: 'butter-cookies', name: 'Butter Cookies Tin', category: 'Snacks & Biscuits', categoryId: 'snacks-biscuits', size: '300 g', image: 'assets/snacks.jpg', alt: 'Cookies and biscuits available in-store', description: 'A sweet companion for tea breaks, sharing and everyday treats.' },
  { id: 'herbal-bath-soap', name: 'Herbal Bath Soap', category: 'Personal Care', categoryId: 'personal-care', size: 'Pack of 4', image: 'assets/personal-care.jpg', alt: 'Personal care products including bathing essentials', description: 'A simple everyday personal-care essential for the family.' },
  { id: 'liquid-detergent', name: 'Liquid Detergent', category: 'Home Care', categoryId: 'home-care', size: '2 L', image: 'assets/home-care.jpg', alt: 'Home care and laundry products', description: 'A household laundry essential from the home-care range.' },
  { id: 'instant-noodles', name: 'Instant Masala Noodles', category: 'Packaged Foods', categoryId: 'packaged-foods', size: 'Pack of 12', image: 'assets/packaged-foods.jpg', alt: 'Packaged foods and convenient meal options', description: 'A quick pantry option for easy meals and snack breaks.' },
  { id: 'floor-cleaner', name: 'Disinfectant Floor Cleaner', category: 'Household Essentials', categoryId: 'household-essentials', size: '1 L', image: 'assets/home-care.jpg', alt: 'Household cleaning products available in-store', description: 'A practical home-cleaning essential for regular household care.' },
  { id: 'mustard-oil', name: 'Kachi Ghani Mustard Oil', category: 'Groceries', categoryId: 'groceries', size: '1 L', image: 'assets/ghee.jpg', alt: 'Cooking essentials in the supermarket grocery range', description: 'A familiar cooking oil for everyday North Indian meals.' },
];

const icon = (name, size = 18) => {
  const paths = {
    search: '<circle cx="11" cy="11" r="6.8"></circle><path d="m16 16 4.5 4.5"></path>',
    arrow: '<path d="M4 12h15"></path><path d="m13 5 7 7-7 7"></path>',
    pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"></path><circle cx="12" cy="10" r="2.5"></circle>',
    phone: '<path d="M7.5 3.5h9l1 4-5.5 3.4-3.5-1.7-1 2.8a13 13 0 0 0 6 6l2.8-1 1.7 3.5-3.4 5.5-4-1A20 20 0 0 1 3.5 7.5l4-4Z"></path>',
    leaf: '<path d="M20.8 3.2C11.4 3.2 5 6.4 5 12.3c0 3 2.3 5.1 5.1 5.1 6.2 0 9.3-6.2 10.7-14.2Z"></path><path d="M3.5 21c4.2-5.3 7.5-7.8 13.8-11.4"></path>',
    check: '<path d="m5 12 4.2 4.2L19.5 6"></path>',
    close: '<path d="m6 6 12 12M18 6 6 18"></path>',
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
};

function logoMarkup() {
  return `<a class="brand" href="index.html" aria-label="Saini Supermarket home">
    <span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><rect x="2" y="2" width="44" height="44" rx="15" fill="#174b3c"/><path d="M14 29.8c0-7.7 5.8-13.3 18.2-16.3-.9 10.5-5.3 18.1-13 18.1-2.9 0-5.2-.6-5.2-1.8Z" fill="#f1b968"/><path d="M12 36c5.4-7.3 10.7-11.4 19.5-17" stroke="#fff9ec" stroke-width="2.3" stroke-linecap="round"/><path d="M17 37.7h14" stroke="#fff9ec" stroke-width="2.3" stroke-linecap="round"/></svg></span>
    <span class="brand-type"><strong>SAINI</strong><span>SUPERMARKET</span></span>
  </a>`;
}

function renderHeader() {
  const mount = document.getElementById('site-header');
  if (!mount) return;
  mount.innerHTML = `
    <header class="site-header" id="page-header">
      <div class="header-topline"><div class="container topline-inner"><span>${icon('pin', 15)} A neighbourhood supermarket in Baltana, Zirakpur</span><a href="visit.html">Find your way here <span aria-hidden="true">↗</span></a></div></div>
      <div class="header-main"><div class="container header-inner">
        ${logoMarkup()}
        <nav class="main-nav" aria-label="Main navigation">
          <a href="index.html" data-nav="index.html">Home</a>
          <a href="categories.html" data-nav="categories.html">Categories</a>
          <a href="products.html" data-nav="products.html">Products</a>
          <a href="offers.html" data-nav="offers.html">Offers</a>
          <a href="about.html" data-nav="about.html">About us</a>
          <a href="contact.html" data-nav="contact.html">Contact</a>
        </nav>
        <div class="header-actions">
          <button class="search-toggle" type="button" data-search-toggle aria-label="Search products">${icon('search', 19)}<span>Search</span></button>
          <a class="header-contact" href="contact.html#contact-details">Call / WhatsApp</a>
          <a class="button button-dark button-small" href="visit.html">Visit store <span class="button-arrow">↗</span></a>
        </div>
        <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav" data-menu-toggle><span></span><span></span></button>
      </div></div>
      <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation" hidden>
        <a href="index.html" data-nav="index.html">Home</a><a href="categories.html" data-nav="categories.html">Categories</a><a href="products.html" data-nav="products.html">Products</a><a href="offers.html" data-nav="offers.html">Offers</a><a href="about.html" data-nav="about.html">About us</a><a href="contact.html" data-nav="contact.html">Contact</a>
        <a href="visit.html" class="button button-dark mobile-visit">Visit store ${icon('arrow', 17)}</a>
      </nav>
      <div class="search-panel" data-search-panel hidden>
        <div class="container search-panel-inner">
          <label class="search-label" for="global-search">Looking for something?</label>
          <div class="global-search-field">${icon('search', 19)}<input id="global-search" type="search" placeholder="Search groceries, dairy, home care…" autocomplete="off" data-global-search><button type="button" data-search-close aria-label="Close search">${icon('close', 19)}</button></div>
          <div class="search-results" data-global-results aria-live="polite"></div>
          <a class="search-all-link" href="products.html">Browse all products <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </header>`;
  const current = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  mount.querySelectorAll('[data-nav]').forEach(link => {
    if (link.dataset.nav === current) link.setAttribute('aria-current', 'page');
  });
}

function renderFooter() {
  const mount = document.getElementById('site-footer');
  if (!mount) return;
  mount.innerHTML = `
    <footer class="site-footer">
      <div class="footer-main"><div class="container footer-grid">
        <div class="footer-brand-col">${logoMarkup()}<p>Your neighbourhood supermarket in Baltana, Zirakpur. Everyday groceries and household essentials, all close to home.</p><a class="footer-direction-link" href="visit.html">Plan a visit ${icon('arrow', 16)}</a></div>
        <div class="footer-link-col"><h3>Explore</h3><a href="index.html">Home</a><a href="categories.html">Categories</a><a href="products.html">Products</a><a href="offers.html">Offers</a><a href="about.html">About Saini</a><a href="contact.html">Contact</a></div>
        <div class="footer-link-col"><h3>Popular aisles</h3><a href="products.html?category=groceries">Groceries</a><a href="products.html?category=fruits-vegetables">Fruits & Vegetables</a><a href="products.html?category=dairy-beverages">Dairy & Beverages</a><a href="products.html?category=snacks-biscuits">Snacks & Biscuits</a><a href="products.html?category=personal-care">Personal Care</a><a href="products.html?category=home-care">Home Care</a></div>
        <div class="footer-contact-col"><h3>Come by</h3><p class="footer-address">${icon('pin', 17)} <span>Baltana, Zirakpur,<br>Punjab, India</span></p><p><strong>Phone & WhatsApp</strong><br><span class="muted">Details to be confirmed</span></p><p><strong>Opening hours</strong><br><span class="muted">Please confirm before visiting</span></p><a class="footer-contact-link" href="contact.html">Contact information ${icon('arrow', 16)}</a>
          <div class="social-note"><span>Social</span><span>Instagram · Facebook<br><small>Profiles to be added</small></span></div>
        </div>
      </div></div>
      <div class="footer-bottom"><div class="container footer-bottom-inner"><span>© <span data-year></span> Saini Supermarket</span><span>Local shopping, made a little easier.</span><a href="#top" class="back-to-top">Back to top ↑</a></div></div>
    </footer>`;
  const year = mount.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
}

function productCard(product, index = 0) {
  return `<article class="product-card reveal" style="--card-delay:${(index % 4) * 70}ms">
    <a class="product-image-link" href="product.html?id=${encodeURIComponent(product.id)}" aria-label="View details for ${product.name}">
      <div class="product-image"><img src="${product.image}" alt="${product.alt}" loading="lazy" decoding="async"><span class="image-index">${String(index + 1).padStart(2, '0')}</span></div>
    </a>
    <div class="product-info"><p class="product-category">${product.category}</p><h3><a href="product.html?id=${encodeURIComponent(product.id)}">${product.name}</a></h3><div class="product-meta"><span>${product.size}</span><a class="product-link" href="product.html?id=${encodeURIComponent(product.id)}">View details ${icon('arrow', 15)}</a></div></div>
  </article>`;
}

function categoryCard(category, index = 0, variant = '') {
  return `<a class="category-card ${variant} reveal" href="products.html?category=${encodeURIComponent(category.id)}" style="--card-delay:${(index % 4) * 70}ms">
    <div class="category-card-image"><img src="${category.image}" alt="${category.alt}" loading="lazy" decoding="async"></div>
    <div class="category-card-content"><span class="category-number">${category.number}</span><div><h3>${category.name}</h3><p>${category.short}</p></div><span class="category-explore">Explore <b aria-hidden="true">↗</b></span></div>
  </a>`;
}

function setActiveNavAndShell() {
  renderHeader();
  renderFooter();
}

function setupMobileMenu() {
  const toggle = document.querySelector('[data-menu-toggle]');
  const panel = document.getElementById('mobile-nav');
  if (!toggle || !panel) return;
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    panel.hidden = !open;
    document.body.classList.toggle('menu-open', open);
  });
  panel.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    document.body.classList.remove('menu-open');
  }));
}

function setupSearch() {
  const panel = document.querySelector('[data-search-panel]');
  const toggle = document.querySelector('[data-search-toggle]');
  const input = document.querySelector('[data-global-search]');
  const results = document.querySelector('[data-global-results]');
  const close = document.querySelector('[data-search-close]');
  if (!panel || !toggle || !input || !results) return;
  const show = () => { panel.hidden = false; setTimeout(() => input.focus(), 25); };
  const hide = () => { panel.hidden = true; input.value = ''; results.innerHTML = ''; toggle.focus(); };
  toggle.addEventListener('click', () => panel.hidden ? show() : hide());
  close?.addEventListener('click', hide);
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !panel.hidden) hide(); });
  const render = value => {
    const term = value.trim().toLowerCase();
    if (!term) { results.innerHTML = '<p class="search-hint">Try rice, snacks, milk or home care.</p>'; return; }
    const matches = products.filter(p => `${p.name} ${p.category} ${p.size}`.toLowerCase().includes(term)).slice(0, 5);
    results.innerHTML = matches.length ? matches.map(p => `<a class="search-result" href="product.html?id=${encodeURIComponent(p.id)}"><img src="${p.image}" alt="" loading="lazy"><span><strong>${p.name}</strong><small>${p.category} · ${p.size}</small></span><span class="search-result-arrow">↗</span></a>`).join('') : '<p class="search-hint">No matching items in this showcase. Try another search or browse the categories.</p>';
    if (matches.length) results.innerHTML += `<a class="search-view-all" href="products.html?q=${encodeURIComponent(value.trim())}">See matching products →</a>`;
  };
  input.addEventListener('input', () => render(input.value));
  render('');
}

function setupStickyHeader() {
  const header = document.getElementById('page-header');
  if (!header) return;
  const update = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

function setupReveals() {
  if (!('IntersectionObserver' in window)) { document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible')); return; }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function renderCatalogPage() {
  const grid = document.querySelector('[data-catalog-grid]');
  if (!grid) return;
  const chips = [...document.querySelectorAll('[data-category-filter]')];
  const count = document.querySelector('[data-catalog-count]');
  const empty = document.querySelector('[data-catalog-empty]');
  const search = document.querySelector('[data-catalog-search]');
  const params = new URLSearchParams(window.location.search);
  const initial = params.get('category') || params.get('cat') || 'all';
  let activeCategory = categories.some(cat => cat.id === initial) ? initial : 'all';
  let term = params.get('q') || '';
  if (search) search.value = term;
  const update = () => {
    const filtered = products.filter(p => {
      const categoryOk = activeCategory === 'all' || p.categoryId === activeCategory;
      const text = `${p.name} ${p.category} ${p.size} ${p.description}`.toLowerCase();
      return categoryOk && text.includes(term.trim().toLowerCase());
    });
    grid.innerHTML = filtered.map((p, i) => productCard(p, i)).join('');
    if (count) count.textContent = `${filtered.length} ${filtered.length === 1 ? 'product' : 'products'} to explore`;
    if (empty) empty.hidden = filtered.length > 0;
    chips.forEach(button => {
      const isCurrent = button.dataset.categoryFilter === activeCategory;
      button.classList.toggle('is-active', isCurrent);
      button.setAttribute('aria-pressed', String(isCurrent));
    });
    setupReveals();
  };
  chips.forEach(button => button.addEventListener('click', () => {
    activeCategory = button.dataset.categoryFilter;
    const next = new URL(window.location.href);
    next.searchParams.delete('cat'); next.searchParams.delete('category');
    if (activeCategory !== 'all') next.searchParams.set('category', activeCategory);
    history.replaceState({}, '', next);
    update();
  }));
  search?.addEventListener('input', () => { term = search.value; update(); });
  update();
}

function renderDetailPage() {
  const mount = document.querySelector('[data-product-detail]');
  if (!mount) return;
  const params = new URLSearchParams(window.location.search);
  const selected = products.find(p => p.id === params.get('id')) || products[0];
  const category = categories.find(c => c.id === selected.categoryId);
  mount.innerHTML = `<div class="product-detail-layout">
    <div class="detail-image-wrap"><span class="detail-image-kicker">ON THE SHELVES</span><img src="${selected.image}" alt="${selected.alt}"></div>
    <div class="detail-copy"><div class="breadcrumbs"><a href="index.html">Home</a><span> / </span><a href="products.html">Products</a><span> / </span><span>${selected.category}</span></div>
      <span class="eyebrow"><span class="eyebrow-dot"></span>${selected.category}</span><h1>${selected.name}</h1><p class="detail-size">${selected.size}</p><p class="detail-description">${selected.description}</p>
      <div class="detail-note"><span class="detail-note-icon">${icon('leaf', 20)}</span><p><strong>A shelf-side showcase</strong><br>This page is here to help you browse. Product selection and pack sizes can change; please check in-store for current availability.</p></div>
      <div class="detail-actions"><a class="button button-dark" href="visit.html">Get directions <span class="button-arrow">↗</span></a><a class="text-link" href="products.html?category=${encodeURIComponent(selected.categoryId)}">More in ${selected.category} ${icon('arrow', 15)}</a></div>
      ${category ? `<a class="detail-category-link" href="products.html?category=${encodeURIComponent(category.id)}"><span>Browse this aisle</span><strong>${category.name}</strong><span class="detail-circle-arrow">↗</span></a>` : ''}
    </div>
  </div>`;
  document.title = `${selected.name} | Saini Supermarket`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = `${selected.name} (${selected.size}) from the ${selected.category} range at Saini Supermarket in Baltana, Zirakpur. Browse the product showcase and visit the store.`;
  const related = document.querySelector('[data-related-products]');
  if (related) related.innerHTML = products.filter(p => p.categoryId === selected.categoryId && p.id !== selected.id).slice(0, 4).map(productCard).join('');
}

function setupContactForm() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    const status = form.querySelector('[data-form-status]');
    if (status) status.textContent = 'This demo form is not connected to a store inbox yet. Please use the directions link or confirm contact details with the store before publishing.';
  });
}

function renderHomeContent() {
  const homeCategories = document.querySelector('[data-home-categories]');
  if (homeCategories) homeCategories.innerHTML = categories.map((category, index) => categoryCard(category, index)).join('');
  const homeProducts = document.querySelector('[data-home-products]');
  if (homeProducts) homeProducts.innerHTML = products.slice(0, 8).map(productCard).join('');
  const categoryPageGrid = document.querySelector('[data-category-page-grid]');
  if (categoryPageGrid) categoryPageGrid.innerHTML = categories.map((category, index) => categoryCard(category, index)).join('');
}

function mapMarkup(extraClass = '') {
  const directions = 'https://www.google.com/maps/search/?api=1&query=Saini+Supermarket%2C+Baltana%2C+Zirakpur%2C+Punjab';
  return `<div class="local-map ${extraClass}">
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustrated neighbourhood map for Baltana, Zirakpur">
      <rect width="800" height="500" fill="#e8ede2"/>
      <path d="M-40 90 C150 120 270 46 460 78S700 126 845 72" fill="none" stroke="#f8f7f0" stroke-width="39"/>
      <path d="M-40 90 C150 120 270 46 460 78S700 126 845 72" fill="none" stroke="#d7dfd1" stroke-width="2" stroke-dasharray="7 12"/>
      <path d="M52 530 C135 380 187 328 206 226S225 75 268 -25" fill="none" stroke="#fffdf7" stroke-width="32"/>
      <path d="M52 530 C135 380 187 328 206 226S225 75 268 -25" fill="none" stroke="#d7dfd1" stroke-width="2" stroke-dasharray="7 12"/>
      <path d="M-35 337 C150 312 245 353 376 314S601 228 832 267" fill="none" stroke="#fffdf7" stroke-width="27"/>
      <path d="M-35 337 C150 312 245 353 376 314S601 228 832 267" fill="none" stroke="#d7dfd1" stroke-width="2" stroke-dasharray="7 12"/>
      <path d="M487 -24 C453 93 481 182 526 261S611 398 623 536" fill="none" stroke="#fcfbf5" stroke-width="34"/>
      <path d="M487 -24 C453 93 481 182 526 261S611 398 623 536" fill="none" stroke="#d7dfd1" stroke-width="2" stroke-dasharray="7 12"/>
      <path d="M333 32h93v66h-93zM304 116h116v65H304zM299 200h99v79h-99zM418 109h48v84h-48zM559 109h96v67h-96zM671 132h88v82h-88zM651 299h113v76H651zM418 355h92v77h-92zM204 372h92v87h-92zM83 206h83v86H83zM340 380h57v68h-57z" fill="#dce6d5" opacity=".86"/>
      <path d="M330 307c18-29 45-36 66-20 19 15 16 43-6 60-19 14-54 11-67-9-7-10-2-22 7-31Z" fill="#d1e1c9"/>
      <circle cx="365" cy="322" r="4" fill="#9eb890"/><circle cx="385" cy="337" r="3" fill="#9eb890"/><circle cx="350" cy="339" r="3" fill="#9eb890"/>
      <text x="86" y="166" fill="#8a9889" font-size="11" font-family="Arial,sans-serif" letter-spacing="2">BALTANA</text>
      <text x="600" y="421" fill="#8a9889" font-size="11" font-family="Arial,sans-serif" letter-spacing="2">ZIRAKPUR</text>
      <text x="512" y="214" fill="#a0aa9c" font-size="8" font-family="Arial,sans-serif" letter-spacing="1.6">LOCAL ROADS</text>
    </svg>
    <div class="map-label"><span>Find us in</span><strong>Baltana, Zirakpur</strong></div>
    <div class="map-pin" aria-hidden="true">${icon('pin', 21)}</div>
    <span class="map-small-note">Illustrated locality preview · confirm route on maps</span>
    <a class="map-route-link" href="${directions}" target="_blank" rel="noopener">Open directions <span>↗</span></a>
  </div>`;
}

function renderMapPreviews() {
  document.querySelectorAll('[data-local-map]').forEach(element => {
    element.outerHTML = mapMarkup(element.dataset.mapClass || '');
  });
}

function setupGlobal() {
  document.documentElement.classList.add('js');
  setActiveNavAndShell();
  renderHomeContent();
  renderMapPreviews();
  setupMobileMenu();
  setupSearch();
  setupStickyHeader();
  renderCatalogPage();
  renderDetailPage();
  setupContactForm();
  setupReveals();
}

document.addEventListener('DOMContentLoaded', setupGlobal);
