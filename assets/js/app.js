/* ==========================================================================
   Radius Data Systems, LLC — Interactive Logo Node Network Engine
   Zero external dependencies • Pure ES6 • Desktop & Mobile responsive
   ========================================================================== */
(function () {
  'use strict';

  // Exact 347 coordinates sampled directly from the original Radius tri-ring logo
  const RING_PTS = [[0.314,-0.924],[0.371,-0.924],[0.429,-0.924],[0.486,-0.924],[0.543,-0.924],[0.238,-0.905],[0.6,-0.905],[0.181,-0.886],[0.276,-0.867],[0.333,-0.867],[0.39,-0.867],[0.448,-0.867],[0.505,-0.867],[0.562,-0.867],[0.638,-0.867],[0.105,-0.848],[0.219,-0.848],[0.695,-0.848],[0.162,-0.829],[0.6,-0.829],[0.029,-0.81],[0.257,-0.81],[0.314,-0.81],[0.371,-0.81],[0.429,-0.81],[0.486,-0.81],[0.543,-0.81],[0.657,-0.81],[0.086,-0.79],[0.2,-0.79],[0.714,-0.79],[-0.048,-0.771],[0.143,-0.771],[0.6,-0.771],[0.01,-0.752],[0.657,-0.752],[0.752,-0.752],[-0.105,-0.733],[0.067,-0.733],[-0.048,-0.714],[0.695,-0.714],[-0.143,-0.695],[0.01,-0.695],[0.105,-0.695],[0.162,-0.695],[0.219,-0.695],[0.276,-0.695],[0.752,-0.695],[-0.086,-0.676],[0.333,-0.676],[-0.2,-0.657],[-0.029,-0.657],[0.39,-0.657],[0.79,-0.657],[-0.143,-0.638],[0.448,-0.638],[0.733,-0.638],[-0.238,-0.619],[-0.086,-0.619],[-0.181,-0.6],[0.486,-0.6],[0.771,-0.6],[-0.333,-0.581],[-0.276,-0.581],[-0.124,-0.581],[0.829,-0.581],[-0.219,-0.562],[0.124,-0.562],[0.181,-0.562],[0.238,-0.562],[0.295,-0.562],[0.352,-0.562],[0.41,-0.562],[0.524,-0.562],[-0.41,-0.543],[0.029,-0.543],[0.467,-0.543],[0.771,-0.543],[-0.467,-0.524],[-0.333,-0.524],[-0.276,-0.524],[-0.048,-0.524],[0.086,-0.524],[0.562,-0.524],[0.829,-0.524],[-0.219,-0.505],[-0.105,-0.505],[0.371,-0.505],[0.429,-0.505],[0.505,-0.505],[-0.543,-0.486],[-0.371,-0.486],[-0.162,-0.486],[0.6,-0.486],[0.79,-0.486],[-0.314,-0.467],[-0.257,-0.467],[0.467,-0.467],[0.543,-0.467],[-0.619,-0.448],[-0.41,-0.448],[-0.2,-0.448],[0.829,-0.448],[-0.562,-0.429],[-0.352,-0.429],[0.505,-0.429],[0.581,-0.429],[-0.676,-0.41],[-0.295,-0.41],[0.638,-0.41],[0.79,-0.41],[-0.619,-0.39],[-0.448,-0.39],[-0.39,-0.39],[0.543,-0.39],[-0.733,-0.371],[-0.333,-0.371],[0.6,-0.371],[0.829,-0.371],[-0.676,-0.352],[0.657,-0.352],[-0.771,-0.333],[-0.467,-0.333],[-0.41,-0.333],[0.562,-0.333],[-0.714,-0.314],[0.619,-0.314],[0.695,-0.314],[0.81,-0.314],[-0.81,-0.295],[-0.752,-0.276],[-0.505,-0.276],[-0.448,-0.276],[0.657,-0.276],[-0.848,-0.257],[0.714,-0.257],[0.81,-0.257],[-0.79,-0.238],[-0.543,-0.238],[0.619,-0.238],[-0.486,-0.219],[-0.429,-0.219],[0.676,-0.219],[-0.886,-0.2],[-0.829,-0.2],[0.733,-0.2],[0.79,-0.2],[-0.581,-0.181],[-0.524,-0.181],[0.638,-0.181],[-0.467,-0.162],[0.695,-0.162],[-0.905,-0.143],[-0.848,-0.143],[0.752,-0.143],[0.81,-0.143],[-0.6,-0.124],[-0.543,-0.124],[0.638,-0.124],[-0.81,-0.105],[-0.486,-0.105],[0.695,-0.105],[-0.924,-0.086],[-0.867,-0.086],[0.752,-0.086],[0.81,-0.086],[-0.619,-0.067],[-0.543,-0.067],[0.638,-0.067],[-0.829,-0.048],[-0.486,-0.048],[0.695,-0.048],[-0.924,-0.029],[0.752,-0.029],[-0.867,-0.01],[-0.619,-0.01],[-0.543,-0.01],[0.619,-0.01],[-0.81,0.01],[-0.486,0.01],[0.714,0.01],[0.79,0.01],[-0.924,0.029],[-0.867,0.048],[-0.619,0.048],[-0.524,0.048],[0.619,0.048],[0.752,0.048],[-0.81,0.067],[-0.467,0.067],[0.81,0.067],[-0.905,0.086],[0.714,0.086],[-0.848,0.105],[-0.771,0.105],[-0.6,0.105],[0.6,0.105],[0.771,0.105],[-0.467,0.124],[0.829,0.124],[-0.886,0.143],[-0.81,0.143],[-0.733,0.143],[-0.41,0.143],[0.733,0.143],[-0.581,0.162],[0.581,0.162],[0.79,0.162],[-0.848,0.181],[-0.771,0.181],[-0.714,0.2],[-0.41,0.2],[0.733,0.2],[0.829,0.2],[-0.81,0.219],[-0.562,0.219],[0.562,0.219],[-0.752,0.238],[-0.676,0.238],[-0.371,0.238],[0.771,0.238],[-0.524,0.257],[0.714,0.257],[0.829,0.257],[-0.79,0.276],[-0.714,0.276],[-0.638,0.276],[-0.333,0.276],[0.543,0.276],[0.752,0.295],[-0.752,0.314],[-0.676,0.314],[-0.6,0.314],[-0.505,0.314],[-0.295,0.314],[0.676,0.314],[0.81,0.314],[0.505,0.333],[-0.638,0.352],[-0.562,0.352],[-0.467,0.352],[-0.257,0.352],[0.733,0.352],[0.657,0.371],[0.79,0.371],[-0.6,0.39],[-0.524,0.39],[-0.429,0.39],[-0.219,0.39],[0.486,0.39],[0.714,0.41],[0.829,0.41],[-0.562,0.429],[-0.486,0.429],[-0.39,0.429],[-0.181,0.429],[0.448,0.429],[0.619,0.429],[0.771,0.429],[-0.333,0.448],[-0.524,0.467],[-0.448,0.467],[-0.143,0.467],[0.41,0.467],[0.486,0.467],[0.714,0.467],[0.81,0.467],[-0.39,0.486],[-0.295,0.486],[-0.238,0.486],[0.581,0.486],[-0.181,0.505],[-0.105,0.505],[0.352,0.505],[0.448,0.505],[0.752,0.505],[-0.429,0.524],[-0.352,0.524],[-0.048,0.524],[0.295,0.524],[0.695,0.524],[0.81,0.524],[-0.295,0.543],[-0.238,0.543],[-0.143,0.543],[0.219,0.543],[0.39,0.543],[0.543,0.543],[-0.086,0.562],[-0.01,0.562],[0.048,0.562],[0.105,0.562],[0.162,0.562],[0.333,0.562],[0.733,0.562],[-0.2,0.581],[0.257,0.581],[0.486,0.581],[0.676,0.581],[0.79,0.581],[-0.143,0.6],[-0.048,0.6],[0.2,0.6],[0.01,0.619],[0.067,0.619],[0.124,0.619],[0.295,0.619],[0.41,0.619],[0.714,0.619],[-0.181,0.638],[-0.086,0.638],[0.238,0.638],[0.352,0.638],[0.657,0.638],[0.771,0.638],[-0.143,0.676],[0.695,0.676],[-0.086,0.695],[0.619,0.695],[0.752,0.695],[-0.029,0.714],[0.657,0.733],[0.714,0.733],[0.01,0.752],[0.581,0.752],[0.067,0.771],[0.124,0.79],[0.524,0.79],[0.619,0.79],[0.676,0.79],[0.086,0.829],[0.162,0.829],[0.219,0.829],[0.448,0.829],[0.562,0.829],[0.276,0.848],[0.333,0.848],[0.39,0.848],[0.505,0.848],[0.619,0.848],[0.2,0.886],[0.429,0.886],[0.543,0.886],[0.257,0.905],[0.314,0.905],[0.371,0.905],[0.486,0.905]];

  const LEGAL_LINKS = {
    privacy: 'https://github.com/RadiusDataSystemsLLC/Legal/blob/main/Corporate%20Website/PrivacyPolicy.md',
    terms: 'https://github.com/RadiusDataSystemsLLC/Legal/blob/main/Corporate%20Website/TermsOfService.md',
    cookies: 'https://github.com/RadiusDataSystemsLLC/Legal/blob/main/Corporate%20Website/CookiePolicy.md',
    deletion: 'https://github.com/RadiusDataSystemsLLC/Legal/blob/main/Corporate%20Website/DataDeletionPolicy.md'
  };

  const SECTIONS = [
    { id: 'about',      label: 'About Us',              shortLabel: 'About',      navLabel: 'About',      anchor: [0.371, -0.924], side: 'top' },
    { id: 'approach',   label: 'How We Work',           shortLabel: 'Approach',   navLabel: 'Approach',   anchor: [-0.676, -0.41], side: 'left' },
    { id: 'consulting', label: 'Consulting & Services', shortLabel: 'Services',   navLabel: 'Consulting', anchor: [-0.752, 0.314], side: 'left' },
    { id: 'link',       label: 'LiNK Technology',       shortLabel: 'LiNK',       navLabel: 'LiNK',       anchor: [0.81, -0.086],  side: 'right' },
    { id: 'contact',    label: 'Contact',               shortLabel: 'Contact',    navLabel: 'Contact',    anchor: [0.371, 0.905],  side: 'bottom' }
  ];

  const LINK_MODULES = [
    {
      id: 'link',
      name: 'LiNK',
      tagline: 'Compositional Infrastructure',
      wiki: 'https://github.com/RadiusDataSystemsLLC/LiNK/wiki/LiNK',
      desc: 'A cross-platform, modular technological infrastructure built for rapid development. LiNK is compositionally designed to support both simple and complex enterprise solutions without requiring the overhead of an entire monolithic framework — we select only the components needed to move a solution from concept to reality.'
    },
    {
      id: 'distributed',
      name: 'LiNK Distributed Network',
      tagline: 'Large-Scale Data, AI & Analytics',
      wiki: 'https://github.com/RadiusDataSystemsLLC/LiNK/wiki/LiNK-Distributed-Network',
      desc: 'Engineered for high-volume data processing, AI, and analytics. A complete data-document and metadata-driven distributed processing infrastructure that remains modular across every level of customization.'
    },
    {
      id: 'blocklink',
      name: 'BlockLiNK',
      tagline: 'Integration-First Blockchain Foundation',
      wiki: 'https://github.com/RadiusDataSystemsLLC/LiNK/wiki/BlockLiNK',
      desc: 'Provides an integration-first foundation for blockchain-enabled systems across more than 20 blockchain technologies — integrating with existing networks or building private and public implementations as needed.'
    },
    {
      id: 'services',
      name: 'LiNK Simple Services',
      tagline: 'Service Hosts & Enterprise AI Modules',
      wiki: 'https://github.com/RadiusDataSystemsLLC/LiNK/wiki/LiNK-Simple-Services',
      desc: 'Modular web and service host controllers paired with enterprise processing modules for system integration, natural language processing, image analytics, conversational tools, and targeted AI workloads.'
    },
    {
      id: 'ui',
      name: 'LiNK UI',
      tagline: 'TypeScript UI for Systems Engineers',
      wiki: 'https://github.com/RadiusDataSystemsLLC/LiNK/wiki/LiNK-UI',
      desc: 'A lightweight JavaScript UI toolset written in TypeScript and modeled after C# and Java conventions, allowing engineers familiar with strongly typed backend stacks to deliver clean interfaces rapidly.'
    },
    {
      id: 'core',
      name: 'LiNK Core',
      tagline: 'Shared Interoperability Primitives',
      wiki: 'https://github.com/RadiusDataSystemsLLC/LiNK/wiki/LiNK-Core',
      desc: 'Generalized tools for everyday and complex engineering work — covering email, tracing, messaging, networking, and end-to-end data acquisition, identification, processing, validation, and delivery.'
    }
  ];

  const YEAR = new Date().getFullYear();

  // DOM References
  const stage = document.getElementById('site-stage');
  const canvas = document.getElementById('network-canvas');
  const ctx = canvas.getContext('2d');
  const dotsLayer = document.getElementById('dots-layer');
  const desktopNav = document.getElementById('desktop-nav');
  const contentLayer = document.getElementById('content-layer');
  const bottomBar = document.getElementById('bottom-bar');
  const homeLogoBtn = document.getElementById('home-logo-btn');

  // State
  let isMobile = window.innerWidth <= 768;
  let activeSection = null;
  let hoveredSection = null;
  let activeLinkId = 'link';
  let copiedEmail = '';

  let tiltX = 0.06, tiltY = -0.10;
  let dragTiltX = 0, dragTiltY = 0;
  let isDragging = false;
  let dragStart = { x: 0, y: 0 };
  let pointer = { x: -9999, y: -9999, active: false };
  let offsetX = 0, offsetY = 0;
  let pulseWave = { x: 0, y: 0, radius: 99, strength: 0 };
  let swipeStartX = 0;

  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Build 347-node graph directly from original Radius logo geometry
  const NODES = RING_PTS.map(([x, y], idx) => {
    const ang = Math.atan2(y, x);
    const rad = Math.hypot(x, y);
    const z = Math.sin(ang * 3 + rad * 4.5) * 0.19;
    return { x, y, z, phase: (idx * 0.67) % (Math.PI * 2), r: (idx % 6 === 0) ? 2.35 : 1.5 };
  });

  const EDGES = [];
  const maxEdgeSq = 0.128 * 0.128;
  for (let i = 0; i < NODES.length; i++) {
    const nbs = [];
    for (let j = i + 1; j < NODES.length; j++) {
      const dx = NODES[i].x - NODES[j].x;
      const dy = NODES[i].y - NODES[j].y;
      const d2 = dx * dx + dy * dy;
      if (d2 < maxEdgeSq) nbs.push({ j, d2 });
    }
    nbs.sort((a, b) => a.d2 - b.d2);
    const limit = Math.min(nbs.length, 3);
    for (let k = 0; k < limit; k++) EDGES.push({ a: i, b: nbs[k].j });
  }

  const ADJ = Array.from({ length: NODES.length }, () => []);
  EDGES.forEach(e => { ADJ[e.a].push(e.b); ADJ[e.b].push(e.a); });

  const SIGNALS = Array.from({ length: 16 }, (_, i) => {
    const s = Math.floor((i / 16) * NODES.length);
    return { from: s, to: ADJ[s][0] ?? ((s + 1) % NODES.length), prev: -1, t: Math.random(), speed: 0.018 + Math.random() * 0.018 };
  });

  const AMBIENT = Array.from({ length: 34 }, () => ({
    x: Math.random(), y: Math.random(), r: 0.6 + Math.random() * 1.1, a: 0.08 + Math.random() * 0.16, p: Math.random() * Math.PI * 2
  }));

  // =========================================================================
  // Hotspots & Navigation
  // =========================================================================
  let hotspots = [];

  function buildDesktopNav() {
    desktopNav.innerHTML = SECTIONS.map(s => (
      `<button type="button" data-sec="${s.id}" class="dnav-btn">${s.navLabel}</button>`
    )).join('');

    desktopNav.querySelectorAll('.dnav-btn').forEach(btn => {
      btn.addEventListener('mouseenter', () => { hoveredSection = btn.dataset.sec; syncHighlights(); });
      btn.addEventListener('mouseleave', () => { if (hoveredSection === btn.dataset.sec) hoveredSection = null; syncHighlights(); });
      btn.addEventListener('click', () => selectSection(btn.dataset.sec));
    });
  }

  function buildHotspots() {
    dotsLayer.innerHTML = '';
    hotspots = SECTIONS.map(sec => {
      const dotBtn = document.createElement('button');
      dotBtn.type = 'button';
      dotBtn.className = 'node-hotspot';
      dotBtn.setAttribute('aria-label', sec.label);
      dotBtn.innerHTML = '<span class="dot-core"></span>';

      const lblBtn = document.createElement('button');
      lblBtn.type = 'button';
      lblBtn.className = 'node-label';
      lblBtn.textContent = isMobile ? sec.shortLabel : sec.label;

      const onEnter = () => { hoveredSection = sec.id; syncHighlights(); };
      const onLeave = () => { if (hoveredSection === sec.id) hoveredSection = null; syncHighlights(); };
      const onSelect = (e) => { e.stopPropagation(); selectSection(sec.id); };

      dotBtn.addEventListener('mouseenter', onEnter);
      dotBtn.addEventListener('mouseleave', onLeave);
      dotBtn.addEventListener('click', onSelect);
      lblBtn.addEventListener('mouseenter', onEnter);
      lblBtn.addEventListener('mouseleave', onLeave);
      lblBtn.addEventListener('click', onSelect);

      dotsLayer.appendChild(dotBtn);
      dotsLayer.appendChild(lblBtn);

      const ang = Math.atan2(sec.anchor[1], sec.anchor[0]);
      const rad = Math.hypot(sec.anchor[0], sec.anchor[1]);
      const az = Math.sin(ang * 3 + rad * 4.5) * 0.19 + 0.08;
      return { sec, dotBtn, lblBtn, x: sec.anchor[0], y: sec.anchor[1], z: az };
    });
    syncHighlights();
  }

  function syncHighlights() {
    hotspots.forEach(spot => {
      const isAct = activeSection === spot.sec.id;
      const isHov = hoveredSection === spot.sec.id;
      spot.dotBtn.classList.toggle('is-active', isAct);
      spot.dotBtn.classList.toggle('is-hovered', isHov);
      spot.dotBtn.setAttribute('aria-expanded', isAct ? 'true' : 'false');
      spot.lblBtn.classList.toggle('is-active', isAct);
      spot.lblBtn.classList.toggle('is-hovered', isHov);
    });
    desktopNav.querySelectorAll('.dnav-btn').forEach(btn => {
      const isAct = activeSection === btn.dataset.sec;
      const isHov = hoveredSection === btn.dataset.sec;
      btn.classList.toggle('is-active', isAct);
      btn.classList.toggle('is-hovered', isHov);
      btn.setAttribute('aria-current', isAct ? 'page' : 'false');
    });
  }

  function selectSection(id, updateHash = true) {
    if (id === null || activeSection === id) {
      activeSection = null;
      pulseWave = { x: 0, y: 0, radius: 0.02, strength: 0.75 };
      if (updateHash && window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    } else {
      const sec = SECTIONS.find(s => s.id === id);
      if (!sec) return;
      activeSection = id;
      pulseWave = { x: sec.anchor[0], y: sec.anchor[1], radius: 0.02, strength: 1.0 };
      if (updateHash && window.location.hash !== `#${id}`) {
        history.replaceState(null, '', `#${id}`);
      }
    }
    syncHighlights();
    renderContent();
    renderBottomBar();
  }

  function stepSection(dir) {
    const idx = activeSection ? SECTIONS.findIndex(s => s.id === activeSection) : (dir > 0 ? -1 : 0);
    const next = (idx + dir + SECTIONS.length) % SECTIONS.length;
    selectSection(SECTIONS[next].id);
  }

  // =========================================================================
  // Bottom Bar & Section Content Rendering
  // =========================================================================
  function renderBottomBar() {
    if (isMobile) {
      if (activeSection !== null) {
        bottomBar.innerHTML = '';
        return;
      }
      bottomBar.innerHTML = `
        <div class="mobile-dock-wrap">
          <nav class="mobile-dock" aria-label="Sections">
            ${SECTIONS.map(s => `<button type="button" data-sec="${s.id}" class="mob-nav-btn">${s.shortLabel}</button>`).join('')}
          </nav>
        </div>
      `;
      bottomBar.querySelectorAll('.mob-nav-btn').forEach(btn => {
        btn.addEventListener('click', () => selectSection(btn.dataset.sec));
      });
    } else {
      bottomBar.innerHTML = `
        <footer class="desktop-footer">
          <div>&copy; ${YEAR} Radius Data Systems, LLC</div>
          <div class="desktop-footer-links">
            <a href="${LEGAL_LINKS.privacy}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="${LEGAL_LINKS.terms}" target="_blank" rel="noopener noreferrer">Terms of Service</a>
            <a href="${LEGAL_LINKS.cookies}" target="_blank" rel="noopener noreferrer">Cookie Policy</a>
            <a href="${LEGAL_LINKS.deletion}" target="_blank" rel="noopener noreferrer">Data Deletion Policy</a>
          </div>
        </footer>
      `;
    }
  }

  function getSectionInnerHTML() {
    if (activeSection === 'about') {
      return `
        <h2 class="sec-heading">Data Engineering &amp; Software Consulting</h2>
        <div class="sec-prose">
          <p>Radius Data Systems specializes in data collection and analysis using Microsoft and open-source technologies.</p>
          <p>We have several data services readily available, along with the engineering depth to integrate cleanly with existing applications or build entirely new ones rapidly and effectively.</p>
          <p>From the insights our data analysis infrastructure produces, we also develop focused software prototypes demoed to select audiences.</p>
        </div>
        <div class="pillar-grid">
          <div class="pillar-item">Intelligent</div>
          <div class="pillar-item">Innovative</div>
          <div class="pillar-item">Creative</div>
        </div>
      `;
    }

    if (activeSection === 'consulting') {
      return `
        <h2 class="sec-heading">Core Consulting Capabilities</h2>
        <p class="sec-lead">Practical engineering services built to clean, unify, and operationalize complex data for your applications.</p>
        <div class="card-stack">
          <div class="subcard">
            <div class="subcard-title">Intelligent Data Collection</div>
            <p class="subcard-text">Automated ingestion structured around easily defined, reusable data profiles tailored to your domain.</p>
          </div>
          <div class="subcard">
            <div class="subcard-title">Multi-Source Merge, NLP &amp; Discovery</div>
            <p class="subcard-text">Multi-source data merging, pattern and relationship discovery, natural language processing, and dataset cleaning.</p>
          </div>
          <div class="subcard">
            <div class="subcard-title">Application Integration &amp; Custom Systems</div>
            <p class="subcard-text">End-to-end delivery across Microsoft and open-source technologies — extending existing platforms or shipping new software rapidly.</p>
          </div>
        </div>
      `;
    }

    if (activeSection === 'link') {
      const mod = LINK_MODULES.find(x => x.id === activeLinkId) || LINK_MODULES[0];
      return `
        <h2 class="sec-heading">LiNK Architecture</h2>
        <p class="sec-lead">Our modular internal engineering infrastructure used to assemble custom solutions quickly without unnecessary framework overhead.</p>
        <div class="link-tabs" role="tablist" aria-label="LiNK Modules">
          ${LINK_MODULES.map(item => (
            `<button type="button" role="tab" aria-selected="${item.id === activeLinkId}" data-lid="${item.id}" class="link-tab${item.id === activeLinkId ? ' is-selected' : ''}">${item.name}</button>`
          )).join('')}
        </div>
        <div class="link-detail" role="tabpanel">
          <div class="link-detail-title">${mod.name}</div>
          <div class="link-detail-tag">${mod.tagline}</div>
          <p class="link-detail-desc">${mod.desc}</p>
          <a href="${mod.wiki}" target="_blank" rel="noopener noreferrer" class="external-link">View Technical Documentation on GitHub &#8599;</a>
        </div>
      `;
    }

    if (activeSection === 'approach') {
      return `
        <h2 class="sec-heading">How We Work</h2>
        <p class="sec-lead">Radius Data Systems is a virtual business headquartered in Orlando, Florida, with a strong focus on collaboration and engineers located throughout the United States.</p>
        <div class="card-stack">
          <div class="subcard">
            <div class="subcard-title">100% U.S. Citizen Team</div>
            <p class="subcard-text">All Radius Data Systems employees and contractors are U.S. Citizens, collaborating across the United States.</p>
          </div>
          <div class="subcard">
            <div class="subcard-title">Compositional Delivery</div>
            <p class="subcard-text">We pick only the LiNK and open-source building blocks needed for each engagement — keeping systems lean, maintainable, and fast to ship.</p>
          </div>
        </div>
      `;
    }

    if (activeSection === 'contact') {
      return `
        <h2 class="sec-heading">Want to work with us?</h2>
        <p class="sec-lead">Have an engineering initiative, business need, or wish to be added to our demo list? Reach out directly.</p>
        <div class="card-stack">
          <div class="contact-row">
            <div class="contact-meta">
              <div class="contact-label">General Inquiries</div>
              <a href="mailto:info@radiusdatasystems.com" class="contact-email">info@radiusdatasystems.com</a>
            </div>
            <button type="button" data-copy="info@radiusdatasystems.com" class="copy-btn">${copiedEmail === 'info@radiusdatasystems.com' ? 'Copied' : 'Copy'}</button>
          </div>
          <div class="contact-row">
            <div class="contact-meta">
              <div class="contact-label">Client Support</div>
              <a href="mailto:support@radiusdatasystems.com" class="contact-email">support@radiusdatasystems.com</a>
            </div>
            <button type="button" data-copy="support@radiusdatasystems.com" class="copy-btn">${copiedEmail === 'support@radiusdatasystems.com' ? 'Copied' : 'Copy'}</button>
          </div>
        </div>
        <div class="social-row">
          <div class="social-links">
            <a href="https://www.linkedin.com/company/radiusdatasystems" target="_blank" rel="noopener noreferrer" class="social-pill">LinkedIn</a>
            <a href="https://www.facebook.com/RadiusDataSystemsLLC" target="_blank" rel="noopener noreferrer" class="social-pill">Facebook</a>
          </div>
          <span class="location-note">Orlando, FL &middot; United States</span>
        </div>
        ${isMobile ? `
          <div class="mobile-legal-links">
            <a href="${LEGAL_LINKS.privacy}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="${LEGAL_LINKS.terms}" target="_blank" rel="noopener noreferrer">Terms of Service</a>
            <a href="${LEGAL_LINKS.cookies}" target="_blank" rel="noopener noreferrer">Cookie Policy</a>
            <a href="${LEGAL_LINKS.deletion}" target="_blank" rel="noopener noreferrer">Data Deletion</a>
          </div>
        ` : ''}
      `;
    }
    return '';
  }

  function renderContent() {
    if (activeSection === null) {
      contentLayer.className = 'content-layer content-layer--overview';
      contentLayer.innerHTML = `
        <div class="overview-intro">
          <h1 class="overview-title">Data-driven intelligent products and services.</h1>
          <p class="overview-sub">Software engineering and data consulting on Microsoft and open-source stacks. ${isMobile ? 'Tap any node to explore.' : 'Select a node on the logo to explore.'}</p>
        </div>
      `;
      return;
    }

    const curIdx = SECTIONS.findIndex(s => s.id === activeSection);
    const curSec = SECTIONS[curIdx];
    const prevSec = SECTIONS[(curIdx - 1 + SECTIONS.length) % SECTIONS.length];
    const nextSec = SECTIONS[(curIdx + 1) % SECTIONS.length];
    const innerHTML = getSectionInnerHTML();

    if (isMobile) {
      contentLayer.className = 'content-layer content-layer--mobile-sheet';
      contentLayer.innerHTML = `
        <section id="active-panel" class="rds-sheet" aria-label="${curSec.label}">
          <div id="sheet-header" class="sheet-header">
            <div class="sheet-grab" aria-hidden="true"></div>
            <div class="sheet-header-row">
              <span class="panel-eyebrow">${curSec.label}</span>
              <button type="button" id="panel-close-btn" class="panel-close" aria-label="Close section">&#10005;</button>
            </div>
          </div>
          <div class="sheet-body">${innerHTML}</div>
          <div class="sheet-footer">
            <button type="button" id="step-prev" class="step-btn">&larr; ${prevSec.shortLabel}</button>
            <span class="sheet-counter">${curIdx + 1} of ${SECTIONS.length}</span>
            <button type="button" id="step-next" class="step-btn step-btn--next">${nextSec.shortLabel} &rarr;</button>
          </div>
        </section>
      `;

      const sh = document.getElementById('sheet-header');
      sh.addEventListener('touchstart', (e) => { swipeStartX = e.touches[0].clientX; }, { passive: true });
      sh.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - swipeStartX;
        if (Math.abs(dx) > 45) stepSection(dx < 0 ? 1 : -1);
      }, { passive: true });
    } else {
      contentLayer.className = 'content-layer content-layer--desktop-panel';
      contentLayer.innerHTML = `
        <section id="active-panel" class="rds-panel" aria-label="${curSec.label}">
          <div class="panel-header">
            <span class="panel-eyebrow">${curSec.label}</span>
            <button type="button" id="panel-close-btn" class="panel-close" title="Close (Esc)" aria-label="Close section">&#10005;</button>
          </div>
          <div class="panel-body">${innerHTML}</div>
          <div class="panel-footer">
            <button type="button" id="step-prev" class="step-btn">&larr; ${prevSec.label}</button>
            <button type="button" id="step-next" class="step-btn step-btn--next">${nextSec.label} &rarr;</button>
          </div>
        </section>
      `;
    }

    document.getElementById('panel-close-btn').addEventListener('click', () => selectSection(null));
    document.getElementById('step-prev').addEventListener('click', () => stepSection(-1));
    document.getElementById('step-next').addEventListener('click', () => stepSection(1));

    contentLayer.querySelectorAll('.link-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        activeLinkId = btn.dataset.lid;
        const sec = SECTIONS.find(s => s.id === 'link');
        pulseWave = { x: sec.anchor[0], y: sec.anchor[1], radius: 0.02, strength: 0.85 };
        renderContent();
      });
    });

    contentLayer.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        copiedEmail = btn.dataset.copy;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(copiedEmail).catch(() => {});
        }
        renderContent();
      });
    });
  }

  // =========================================================================
  // Canvas Setup & Responsive Sizing
  // =========================================================================
  function resizeCanvas() {
    const r = stage.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(r.width * dpr));
    canvas.height = Math.max(1, Math.floor(r.height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const nowMobile = window.innerWidth <= 768;
    if (nowMobile !== isMobile) {
      isMobile = nowMobile;
      buildHotspots();
      renderContent();
      renderBottomBar();
    }
  }

  window.addEventListener('resize', resizeCanvas);
  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(resizeCanvas).observe(stage);
  }
  resizeCanvas();

  // Pointer & Touch Interactions
  function localPos(e) {
    const r = stage.getBoundingClientRect();
    const cx = e.touches ? e.touches[0].clientX : e.clientX;
    const cy = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: cx - r.left, y: cy - r.top };
  }

  canvas.addEventListener('mousedown', (e) => { isDragging = true; dragStart = localPos(e); });
  window.addEventListener('mouseup', () => { isDragging = false; });
  stage.addEventListener('mousemove', (e) => {
    const p = localPos(e);
    pointer.x = p.x; pointer.y = p.y; pointer.active = true;
    if (isDragging) {
      dragTiltY = Math.max(-0.5, Math.min(0.5, dragTiltY + (p.x - dragStart.x) * 0.0042));
      dragTiltX = Math.max(-0.42, Math.min(0.42, dragTiltX - (p.y - dragStart.y) * 0.0042));
      dragStart = p;
    }
  });
  stage.addEventListener('mouseleave', () => { pointer.active = false; pointer.x = -9999; pointer.y = -9999; });

  canvas.addEventListener('touchstart', (e) => { isDragging = true; dragStart = localPos(e); }, { passive: true });
  canvas.addEventListener('touchmove', (e) => {
    const p = localPos(e);
    if (isDragging) {
      dragTiltY = Math.max(-0.5, Math.min(0.5, dragTiltY + (p.x - dragStart.x) * 0.006));
      dragTiltX = Math.max(-0.42, Math.min(0.42, dragTiltX - (p.y - dragStart.y) * 0.006));
      dragStart = p;
    }
  }, { passive: true });
  canvas.addEventListener('touchend', () => { isDragging = false; });

  // Keyboard Navigation
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && activeSection !== null) selectSection(null);
    else if (e.key === 'ArrowRight') stepSection(1);
    else if (e.key === 'ArrowLeft') stepSection(-1);
  });

  // URL Hash Deep-Linking (#about, #consulting, #link, #approach, #contact)
  function syncFromHash() {
    const hash = window.location.hash.replace(/^#/, '').toLowerCase();
    const match = SECTIONS.find(s => s.id === hash);
    if (match) selectSection(match.id, false);
    else if (!hash && activeSection !== null) selectSection(null, false);
  }
  window.addEventListener('hashchange', syncFromHash);

  homeLogoBtn.addEventListener('click', () => selectSection(null));

  // =========================================================================
  // 3D Projection & Animation Loop
  // =========================================================================
  function project3D(nx, ny, nz, cosY, sinY, cosX, sinX, cx, cy, rPx) {
    const x0 = nx * rPx, y0 = ny * rPx, z0 = nz * rPx;
    const x1 = x0 * cosY - z0 * sinY;
    const z1 = x0 * sinY + z0 * cosY;
    const y2 = y0 * cosX - z1 * sinX;
    const z2 = y0 * sinX + z1 * cosX;
    const fov = 740;
    const persp = fov / (fov + z2 + 120);
    return { x: cx + x1 * persp, y: cy + y2 * persp, z: z2, persp };
  }

  let t = 0;

  function animate() {
    const w = stage.clientWidth;
    const stageH = stage.clientHeight;
    ctx.clearRect(0, 0, w, stageH);
    if (!reducedMotion) t += 0.014;

    // Subtle atmospheric depth particles
    for (let i = 0; i < AMBIENT.length; i++) {
      const a = AMBIENT[i];
      const alpha = a.a * (0.6 + 0.4 * Math.sin(t * 0.8 + a.p));
      ctx.fillStyle = `rgba(148, 197, 240, ${alpha})`;
      ctx.beginPath();
      ctx.arc(a.x * w, a.y * stageH, a.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Gentle refined 3D breathing + cursor/drag tilt
    let tgtY = Math.sin(t * 0.40) * 0.13 + dragTiltY;
    let tgtX = Math.cos(t * 0.32) * 0.08 + dragTiltX;
    if (pointer.active && !isDragging && !reducedMotion) {
      tgtY += ((pointer.x / w) - 0.5) * 0.22;
      tgtX += -((pointer.y / stageH) - 0.5) * 0.16;
    }
    if (!isDragging) { dragTiltX *= 0.955; dragTiltY *= 0.955; }
    tiltY += (tgtY - tiltY) * 0.06;
    tiltX += (tgtX - tiltX) * 0.06;

    const headerSafeTop = isMobile ? 76 : 80;
    let mobileSheetTop = stageH;
    if (isMobile && activeSection !== null) {
      const panelEl = document.getElementById('active-panel');
      if (panelEl) {
        const stRect = stage.getBoundingClientRect();
        const pRect = panelEl.getBoundingClientRect();
        mobileSheetTop = Math.max(headerSafeTop + 140, pRect.top - stRect.top);
      } else {
        mobileSheetTop = stageH * 0.46;
      }
    }

    // Constrain desktop spatial layout to the centered 1440px composition frame
    // so large/4K/ultrawide displays stay tightly balanced with no wide empty gap
    const effW = Math.min(w, 1440);
    const effH = Math.min(stageH, 1020);
    const frameLeft = (w - effW) * 0.5;

    const wantX = (!isMobile && activeSection !== null) ? -effW * 0.215 : 0;
    let wantY = -stageH * 0.01;
    if (isMobile) {
      if (activeSection !== null) {
        const idealCy = headerSafeTop + (mobileSheetTop - headerSafeTop) * 0.50;
        wantY = idealCy - stageH * 0.5;
      } else {
        wantY = -stageH * 0.06;
      }
    }
    offsetX += (wantX - offsetX) * 0.09;
    offsetY += (wantY - offsetY) * 0.09;

    const cx = w * 0.5 + offsetX;
    const cy = stageH * 0.5 + offsetY;
    let baseR;
    if (isMobile) {
      if (activeSection !== null) {
        const availH = Math.max(150, mobileSheetTop - headerSafeTop);
        baseR = Math.min(w * 0.36, availH * 0.39, 134);
      } else {
        baseR = Math.min(w * 0.41, stageH * 0.25, 156);
      }
    } else {
      baseR = Math.min(effW * 0.24, effH * 0.36, activeSection ? 285 : 325);
    }
    const visualScale = isMobile ? 1 : Math.max(1, baseR / 235);

    const cosY = Math.cos(tiltY), sinY = Math.sin(tiltY);
    const cosX = Math.cos(tiltX), sinX = Math.sin(tiltX);

    if (pulseWave.strength > 0.01) {
      pulseWave.radius += 0.048;
      pulseWave.strength *= 0.96;
    }

    const focusId = hoveredSection || activeSection;
    const focusSec = focusId ? SECTIONS.find(s => s.id === focusId) : null;

    const proj = new Array(NODES.length);
    for (let i = 0; i < NODES.length; i++) {
      const n = NODES[i];
      const dx0 = reducedMotion ? 0 : Math.sin(t * 1.05 + n.phase) * 0.007;
      const dy0 = reducedMotion ? 0 : Math.cos(t * 0.92 + n.phase) * 0.007;
      const pr = project3D(n.x + dx0, n.y + dy0, n.z, cosY, sinY, cosX, sinX, cx, cy, baseR);

      let energy = 0;
      if (pointer.active && !isDragging) {
        const dx = pr.x - pointer.x, dy = pr.y - pointer.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 90 && dist > 1) {
          energy = 1 - dist / 90;
          pr.x += (dx / dist) * energy * 5.5;
          pr.y += (dy / dist) * energy * 5.5;
        }
      }
      if (focusSec) {
        const fd = Math.hypot(n.x - focusSec.anchor[0], n.y - focusSec.anchor[1]);
        if (fd < 0.42) energy = Math.max(energy, (1 - fd / 0.42) * 0.85);
      }
      if (pulseWave.strength > 0.02) {
        const pd = Math.hypot(n.x - pulseWave.x, n.y - pulseWave.y);
        const ring = Math.max(0, 1 - Math.abs(pd - pulseWave.radius) / 0.25);
        energy = Math.max(energy, ring * pulseWave.strength);
      }

      proj[i] = { x: pr.x, y: pr.y, z: pr.z, persp: pr.persp, energy, r: n.r };
    }

    // Draw depth-shaded network edges
    for (let i = 0; i < EDGES.length; i++) {
      const e = EDGES[i];
      const pa = proj[e.a], pb = proj[e.b];
      const en = Math.max(pa.energy, pb.energy);
      const depth = Math.max(0.18, Math.min(1, ((pa.persp + pb.persp) * 0.5 - 0.68) * 2.6));
      const alpha = Math.min(0.86, 0.16 + depth * 0.26 + en * 0.48);

      ctx.strokeStyle = en > 0.24
        ? `rgba(116, 188, 245, ${alpha})`
        : `rgba(48, 120, 179, ${alpha})`;
      ctx.lineWidth = (0.75 + depth * 0.45 + en * 0.85) * visualScale;
      ctx.beginPath();
      ctx.moveTo(pa.x, pa.y);
      ctx.lineTo(pb.x, pb.y);
      ctx.stroke();
    }

    // Traveling light signals gliding along the woven logo edges
    if (!reducedMotion) {
      for (let i = 0; i < SIGNALS.length; i++) {
        const sig = SIGNALS[i];
        sig.t += sig.speed;
        if (sig.t >= 1) {
          sig.t = 0;
          const cur = sig.to;
          const opts = ADJ[cur].filter(nb => nb !== sig.prev);
          sig.prev = sig.from;
          sig.from = cur;
          sig.to = opts.length
            ? opts[Math.floor(Math.random() * opts.length)]
            : (ADJ[cur][0] ?? ((cur + 1) % NODES.length));
        }
        const a = proj[sig.from], b = proj[sig.to];
        const sx = a.x + (b.x - a.x) * sig.t;
        const sy = a.y + (b.y - a.y) * sig.t;
        ctx.fillStyle = '#dbeafe';
        ctx.shadowColor = '#5aa7e6';
        ctx.shadowBlur = 9 * visualScale;
        ctx.beginPath();
        ctx.arc(sx, sy, 2.0 * visualScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Draw all 347 logo nodes
    for (let i = 0; i < proj.length; i++) {
      const p = proj[i];
      const depth = Math.max(0.22, Math.min(1, (p.persp - 0.68) * 2.5));
      const rad = p.r * p.persp * (1 + p.energy * 0.85) * visualScale;
      if (p.energy > 0.22) {
        ctx.fillStyle = `rgba(224, 242, 254, ${Math.min(1, 0.58 + p.energy * 0.42)})`;
        ctx.shadowColor = '#6eb5f0';
        ctx.shadowBlur = 10;
      } else {
        ctx.fillStyle = depth > 0.65
          ? `rgba(116, 184, 240, ${0.55 + depth * 0.35})`
          : `rgba(48, 120, 179, ${0.35 + depth * 0.45})`;
        ctx.shadowBlur = 0;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, rad, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.shadowBlur = 0;

    // Position the 5 section dots & collision-free clamped labels
    let activeDotPos = null;
    hotspots.forEach(spot => {
      const pr = project3D(spot.x, spot.y, spot.z, cosY, sinY, cosX, sinX, cx, cy, baseR);
      spot.dotBtn.style.left = `${pr.x}px`;
      spot.dotBtn.style.top = `${pr.y}px`;

      if (activeSection === spot.sec.id) activeDotPos = { x: pr.x, y: pr.y };

      const lbl = spot.lblBtn;
      if (isMobile && activeSection !== null && activeSection !== spot.sec.id) {
        lbl.style.opacity = '0';
        lbl.style.pointerEvents = 'none';
        return;
      }
      lbl.style.opacity = '1';
      lbl.style.pointerEvents = 'auto';

      const lw = lbl.offsetWidth || 84;
      const lh = lbl.offsetHeight || 28;
      let lx = pr.x;
      let ly = pr.y;

      if (isMobile) {
        const vx = pr.x - cx, vy = pr.y - cy;
        const vlen = Math.hypot(vx, vy) || 1;
        lx = pr.x + (vx / vlen) * 32;
        ly = pr.y + (vy / vlen) * 28;

        const halfW = lw / 2;
        const halfH = lh / 2;
        const minY = headerSafeTop + halfH + 8;
        const maxY = (activeSection !== null ? mobileSheetTop : stageH - 155) - halfH - 8;

        lx = Math.max(halfW + 12, Math.min(w - halfW - 12, lx));
        ly = Math.max(minY, Math.min(Math.max(minY, maxY), ly));
        lbl.style.left = `${lx}px`;
        lbl.style.top = `${ly}px`;
        lbl.style.transform = 'translate(-50%, -50%)';
      } else {
        const shifted = activeSection !== null;
        if (spot.sec.side === 'top') {
          lx = pr.x; ly = pr.y - 26;
          lbl.style.transform = 'translate(-50%, -50%)';
        } else if (spot.sec.side === 'bottom') {
          lx = pr.x; ly = pr.y + 28;
          lbl.style.transform = 'translate(-50%, -50%)';
        } else if (spot.sec.side === 'right') {
          lx = pr.x + 18; ly = pr.y;
          lbl.style.transform = 'translate(0, -50%)';
        } else {
          if (shifted && pr.x - lw - 24 < frameLeft + 16) {
            lx = pr.x + 18; ly = pr.y;
            lbl.style.transform = 'translate(0, -50%)';
          } else {
            lx = pr.x - 18; ly = pr.y;
            lbl.style.transform = 'translate(-100%, -50%)';
          }
        }
        lbl.style.left = `${lx}px`;
        lbl.style.top = `${ly}px`;
      }
    });

    // Live curved connector tether on Desktop linking active dot -> open panel
    if (!isMobile && activeDotPos) {
      const panelEl = document.getElementById('active-panel');
      if (panelEl) {
        const stRect = stage.getBoundingClientRect();
        const pRect = panelEl.getBoundingClientRect();
        const targetX = pRect.left - stRect.left;
        const targetY = Math.max(pRect.top - stRect.top + 48, Math.min(pRect.bottom - stRect.top - 48, activeDotPos.y));

        const cpX = (activeDotPos.x + targetX) * 0.5;
        const grad = ctx.createLinearGradient(activeDotPos.x, activeDotPos.y, targetX, targetY);
        grad.addColorStop(0, 'rgba(110, 181, 240, 0.72)');
        grad.addColorStop(1, 'rgba(48, 120, 179, 0.25)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.25;
        ctx.setLineDash([4, 4]);
        ctx.lineDashOffset = -t * 22;
        ctx.beginPath();
        ctx.moveTo(activeDotPos.x, activeDotPos.y);
        ctx.bezierCurveTo(cpX, activeDotPos.y, cpX, targetY, targetX, targetY);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = '#6eb5f0';
        ctx.beginPath();
        ctx.arc(targetX, targetY, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    requestAnimationFrame(animate);
  }

  // Initialize
  buildDesktopNav();
  buildHotspots();
  renderContent();
  renderBottomBar();
  syncFromHash();
  animate();
})();

