/**
 * BCA Department Portal - Notices & Announcements Component
 * Real-time filter by category, keyword search, pinned/urgent alerts, and full notice reader modal.
 */

const NoticesComponent = {
  activeCategory: "All",
  searchQuery: "",

  init() {
    if (!window.BCA_DATA || !window.BCA_DATA.notices) return;
    this.renderCategoryTabs();
    this.setupSearch();
    this.renderNotices();
  },

  renderCategoryTabs() {
    const container = document.getElementById('noticesCategoryTabs');
    if (!container) return;

    const categories = ["All", "Examinations", "Placements", "Academic", "Events", "General"];

    container.innerHTML = categories.map(cat => `
      <button 
        type="button" 
        class="filter-pill-btn ${cat === this.activeCategory ? 'active' : ''}"
        data-cat="${cat}"
        aria-pressed="${cat === this.activeCategory}">
        ${cat}
      </button>
    `).join('');

    container.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-pill-btn');
      if (!btn) return;

      const cat = btn.getAttribute('data-cat');
      if (cat !== this.activeCategory) {
        this.activeCategory = cat;
        container.querySelectorAll('.filter-pill-btn').forEach(b => {
          b.classList.toggle('active', b === btn);
          b.setAttribute('aria-pressed', b === btn);
        });
        this.renderNotices();
      }
    });
  },

  setupSearch() {
    const searchInput = document.getElementById('noticesSearchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.trim().toLowerCase();
      this.renderNotices();
    });
  },

  formatDate(dateStr) {
    const d = new Date(dateStr);
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    return {
      day: d.getDate(),
      month: months[d.getMonth()] || "NOT",
      year: d.getFullYear()
    };
  },

  renderNotices() {
    const container = document.getElementById('noticesList');
    if (!container) return;

    let notices = window.BCA_DATA.notices;

    // Filter by category
    if (this.activeCategory !== "All") {
      notices = notices.filter(n => n.category.toLowerCase() === this.activeCategory.toLowerCase());
    }

    // Filter by search
    if (this.searchQuery) {
      notices = notices.filter(n => 
        n.title.toLowerCase().includes(this.searchQuery) ||
        n.summary.toLowerCase().includes(this.searchQuery) ||
        n.category.toLowerCase().includes(this.searchQuery)
      );
    }

    if (notices.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted); background: #ffffff; border-radius: var(--radius-md); border: 1px dashed var(--border-medium);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">📋</div>
          <h4 style="font-size: 1.1rem; color: var(--primary); margin-bottom: 0.25rem;">No Notices Found</h4>
          <p style="font-size: 0.875rem;">There are no circulars matching your active filter.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = notices.map(n => {
      const date = this.formatDate(n.date);
      const cardClasses = ['notice-card'];
      if (n.urgent) cardClasses.push('urgent');
      if (n.pinned) cardClasses.push('pinned');

      return `
        <article class="${cardClasses.join(' ')}" aria-label="${n.title}">
          <div class="notice-date-box" aria-label="Dated ${n.date}">
            <div class="notice-date-day">${date.day}</div>
            <div class="notice-date-month">${date.month}</div>
            <div class="notice-date-year">${date.year}</div>
          </div>
          <div class="notice-content-area">
            <div class="notice-header-tags">
              <span class="notice-category-tag">${n.category}</span>
              ${n.urgent ? '<span class="notice-badge-urgent">Urgent Circular</span>' : ''}
              ${n.pinned ? '<span class="notice-badge-pinned">📌 Pinned</span>' : ''}
            </div>
            <h3 class="notice-title">${n.title}</h3>
            <p class="notice-summary">${n.summary}</p>
          </div>
          <div>
            <button 
              type="button"
              class="btn btn-secondary btn-sm" 
              onclick="NoticesComponent.openNoticeModal('${n.id}')"
              aria-label="Read complete notice for ${n.title}">
              Read Circular &rarr;
            </button>
          </div>
        </article>
      `;
    }).join('');
  },

  openNoticeModal(id) {
    const n = window.BCA_DATA.notices.find(item => item.id === id);
    if (!n) return;

    const contentHtml = `
      <div>
        <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem; flex-wrap: wrap;">
          <span class="notice-category-tag">${n.category}</span>
          <span style="font-size: 0.8rem; color: var(--text-muted); padding: 0.2rem 0.5rem; background: var(--bg-surface-secondary); border-radius: var(--radius-xs);">
            Official Notice Ref: NOT-BCA-${n.id.toUpperCase()}
          </span>
          <span style="font-size: 0.8rem; color: var(--text-muted); padding: 0.2rem 0.5rem; background: var(--bg-surface-secondary); border-radius: var(--radius-xs);">
            Date: ${n.date}
          </span>
        </div>
        <h4 style="font-size: 1.3rem; font-weight: 800; color: var(--primary); margin-bottom: 1rem; line-height: 1.35;">
          ${n.title}
        </h4>
        <div style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">
          ${n.content}
        </div>
        <div style="background: var(--bg-surface-secondary); padding: 1rem 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
          <div>
            <span style="font-weight: 700; font-size: 0.875rem; color: var(--primary); display: block;">Official Attachment</span>
            <span style="font-size: 0.8rem; color: var(--text-muted);">${n.fileLabel}</span>
          </div>
          <button class="btn btn-primary btn-sm" onclick="alert('Downloading attachment: ${n.fileLabel}...');">
            Download Attachment
          </button>
        </div>
      </div>
    `;

    NavigationComponent.openModal(
      'genericModal',
      'Department Circular / Notice',
      contentHtml
    );
  }
};

window.NoticesComponent = NoticesComponent;
