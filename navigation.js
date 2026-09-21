/**
 * BCA Department Portal - Navigation & Modal Component
 * Handles responsive drawer, scrollspy, universal modal controller, and spotlight quick search.
 */

const NavigationComponent = {
  init() {
    this.setupMobileDrawer();
    this.setupHeaderScroll();
    this.setupScrollSpy();
    this.setupModalSystem();
    this.setupSpotlightSearch();
  },

  setupMobileDrawer() {
    const toggleBtn = document.getElementById('mobileNavToggle');
    const drawer = document.getElementById('mobileNavDrawer');
    const backdrop = document.getElementById('mobileDrawerBackdrop');
    const closeBtn = document.getElementById('closeMobileNav');
    const drawerLinks = drawer ? drawer.querySelectorAll('a') : [];

    if (!toggleBtn || !drawer) return;

    const openDrawer = () => {
      drawer.classList.add('open');
      if (backdrop) backdrop.classList.add('open');
      toggleBtn.classList.add('active');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
      drawer.classList.remove('open');
      if (backdrop) backdrop.classList.remove('open');
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    toggleBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('open');
      if (isOpen) closeDrawer();
      else openDrawer();
    });

    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeDrawer();
      });
    });
  },

  setupHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  },

  setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link, .mobile-nav-links a');

    if (!sections.length || !navLinks.length) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activeId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${activeId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  },

  setupModalSystem() {
    // Backdrop click and Esc key handlers
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-backdrop')) {
        this.closeAllModals();
      }
      if (e.target.closest('[data-modal-close]')) {
        this.closeAllModals();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAllModals();
      }
    });
  },

  openModal(modalId, title, contentHtml, footerHtml = '') {
    const modal = document.getElementById(modalId) || document.getElementById('genericModal');
    if (!modal) return;

    const titleEl = modal.querySelector('.modal-title');
    const bodyEl = modal.querySelector('.modal-body');
    const footerEl = modal.querySelector('.modal-footer');

    if (titleEl) titleEl.textContent = title;
    if (bodyEl) bodyEl.innerHTML = contentHtml;
    if (footerEl) {
      footerEl.innerHTML = footerHtml || '<button class="btn btn-secondary btn-sm" data-modal-close>Close</button>';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  closeAllModals() {
    document.querySelectorAll('.modal-backdrop').forEach(modal => {
      modal.classList.remove('active');
    });
    document.body.style.overflow = '';
  },

  setupSpotlightSearch() {
    const triggerBtns = document.querySelectorAll('.btn-search-trigger');
    const spotlightModal = document.getElementById('spotlightModal');
    const spotlightInput = document.getElementById('spotlightSearchInput');
    const resultsContainer = document.getElementById('spotlightResults');

    if (!spotlightModal || !spotlightInput) return;

    const openSpotlight = () => {
      spotlightModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      spotlightInput.value = '';
      this.renderSpotlightResults('', resultsContainer);
      setTimeout(() => spotlightInput.focus(), 100);
    };

    triggerBtns.forEach(btn => btn.addEventListener('click', openSpotlight));

    // Keyboard shortcut Cmd/Ctrl + K
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSpotlight();
      }
    });

    spotlightInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      this.renderSpotlightResults(query, resultsContainer);
    });
  },

  renderSpotlightResults(query, container) {
    if (!container || !window.BCA_DATA) return;

    const results = [];
    const data = window.BCA_DATA;

    // Search Courses
    data.programs.forEach(prog => {
      if (!query || prog.name.toLowerCase().includes(query) || prog.description.toLowerCase().includes(query)) {
        results.push({
          title: prog.name,
          category: `Course / Degree (${prog.duration})`,
          target: '#courses'
        });
      }
    });

    // Search Curriculum Subjects
    data.curriculum.forEach(sem => {
      sem.courses.forEach(c => {
        if (!query || c.title.toLowerCase().includes(query) || c.code.toLowerCase().includes(query)) {
          results.push({
            title: `${c.code}: ${c.title}`,
            category: `Curriculum - Semester ${sem.semester} (${c.credits} Credits)`,
            target: '#curriculum'
          });
        }
      });
    });

    // Search Faculty
    data.faculty.forEach(f => {
      if (!query || f.name.toLowerCase().includes(query) || f.specialization.toLowerCase().includes(query)) {
        results.push({
          title: `${f.name} - ${f.title}`,
          category: `Faculty (${f.specialization})`,
          target: '#faculty'
        });
      }
    });

    // Search Notices
    data.notices.forEach(n => {
      if (!query || n.title.toLowerCase().includes(query) || n.summary.toLowerCase().includes(query)) {
        results.push({
          title: n.title,
          category: `Notice - ${n.category} (${n.date})`,
          target: '#notices'
        });
      }
    });

    if (results.length === 0) {
      container.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">
          No matching records found for "<strong>${query}</strong>".
        </div>
      `;
      return;
    }

    // Limit to top 8 items for fast clean UI
    const topResults = results.slice(0, 8);
    container.innerHTML = topResults.map(item => `
      <a href="${item.target}" class="spotlight-result-item" onclick="NavigationComponent.closeAllModals()">
        <div class="spotlight-result-info">
          <div class="spotlight-result-title">${item.title}</div>
          <div class="spotlight-result-category">${item.category}</div>
        </div>
        <span style="color: var(--primary-accent); font-size: 0.85rem; font-weight: 600;">Go &rarr;</span>
      </a>
    `).join('');
  }
};

window.NavigationComponent = NavigationComponent;
