/**
 * BCA Department Portal - Faculty Members Component
 * Real-time filter by category, keyword search, and detailed profile modal.
 */

const FacultyComponent = {
  activeCategory: "All",
  currentSearch: "",

  init() {
    if (!window.BCA_DATA || !window.BCA_DATA.faculty) return;
    this.renderCategoryPills();
    this.setupSearch();
    this.renderFacultyGrid();
  },

  renderCategoryPills() {
    const container = document.getElementById('facultyFilterPills');
    if (!container) return;

    const categories = ["All", "Professors", "Associate Professors", "Assistant Professors", "Technical Staff"];

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
        this.renderFacultyGrid();
      }
    });
  },

  setupSearch() {
    const searchInput = document.getElementById('facultySearchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      this.currentSearch = e.target.value.trim().toLowerCase();
      this.renderFacultyGrid();
    });
  },

  renderFacultyGrid() {
    const grid = document.getElementById('facultyGrid');
    const countDisplay = document.getElementById('facultyCountDisplay');
    if (!grid) return;

    let list = window.BCA_DATA.faculty;

    // Filter by category
    if (this.activeCategory !== "All") {
      list = list.filter(f => f.category === this.activeCategory);
    }

    // Filter by text search
    if (this.currentSearch) {
      list = list.filter(f => 
        f.name.toLowerCase().includes(this.currentSearch) ||
        f.specialization.toLowerCase().includes(this.currentSearch) ||
        f.title.toLowerCase().includes(this.currentSearch) ||
        f.subjects.some(s => s.toLowerCase().includes(this.currentSearch))
      );
    }

    if (countDisplay) {
      countDisplay.textContent = `Showing ${list.length} faculty member${list.length === 1 ? '' : 's'}`;
    }

    if (list.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted); background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px dashed var(--border-medium);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
          <h4 style="font-size: 1.15rem; color: var(--primary); margin-bottom: 0.25rem;">No Faculty Members Found</h4>
          <p style="font-size: 0.9rem;">Try adjusting your search criteria or resetting filters.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = list.map(f => `
      <article class="faculty-card" aria-label="Faculty profile of ${f.name}">
        <div class="faculty-avatar-box" aria-hidden="true">${f.avatar}</div>
        <h3 class="faculty-name">${f.name}</h3>
        <div class="faculty-title">${f.title}</div>
        <div class="faculty-qual">${f.qualification}</div>
        <div class="faculty-specialization">
          <strong>Domain:</strong> ${f.specialization}
        </div>
        <div class="faculty-card-footer">
          <a href="mailto:${f.email}" class="btn btn-secondary btn-sm" style="flex: 1;" title="Email ${f.name}">
            ✉ Email
          </a>
          <button 
            type="button"
            class="btn btn-primary btn-sm" 
            style="flex: 1;" 
            onclick="FacultyComponent.openFacultyModal('${f.id}')"
            aria-label="View biography and research credentials of ${f.name}">
            Profile
          </button>
        </div>
      </article>
    `).join('');
  },

  openFacultyModal(id) {
    const f = window.BCA_DATA.faculty.find(item => item.id === id);
    if (!f) return;

    const contentHtml = `
      <div>
        <div style="display: flex; gap: 1.25rem; align-items: center; margin-bottom: 1.5rem; padding-bottom: 1.25rem; border-bottom: 1px solid var(--border-subtle);">
          <div class="faculty-avatar-box" style="width: 72px; height: 72px; font-size: 2.25rem; margin-bottom: 0;">${f.avatar}</div>
          <div>
            <h4 style="font-size: 1.35rem; font-weight: 800; color: var(--primary); margin-bottom: 0.25rem;">${f.name}</h4>
            <div style="font-weight: 600; color: var(--primary-accent); font-size: 0.9rem;">${f.title}</div>
            <div style="font-size: 0.825rem; color: var(--text-muted);">${f.qualification} &bull; ${f.experience} Academic Experience</div>
          </div>
        </div>

        <div style="margin-bottom: 1.25rem;">
          <h5 style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.35rem;">
            Biographical Sketch
          </h5>
          <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.65;">
            ${f.bio}
          </p>
        </div>

        <div style="background: var(--bg-surface-secondary); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1.25rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
          <div>
            <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); display: block;">Research Domain</span>
            <span style="font-size: 0.9rem; font-weight: 600; color: var(--primary);">${f.specialization}</span>
          </div>
          <div>
            <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); display: block;">Published Papers</span>
            <span style="font-size: 0.9rem; font-weight: 600; color: var(--primary);">${f.publications} Peer-Reviewed Articles</span>
          </div>
        </div>

        <div style="margin-bottom: 1.25rem;">
          <h5 style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.5rem;">
            Subjects & Laboratories Handled
          </h5>
          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
            ${f.subjects.map(s => `
              <span class="track-pill" style="font-size: 0.825rem; padding: 0.3rem 0.65rem; background: #ffffff;">
                ${s}
              </span>
            `).join('')}
          </div>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.9rem; padding-top: 0.75rem; border-top: 1px solid var(--border-subtle);">
          <span style="color: var(--text-muted);">Official Correspondence:</span>
          <a href="mailto:${f.email}" style="font-weight: 600;">${f.email}</a>
        </div>
      </div>
    `;

    NavigationComponent.openModal(
      'genericModal',
      `Faculty Profile - ${f.name}`,
      contentHtml
    );
  }
};

window.FacultyComponent = FacultyComponent;
