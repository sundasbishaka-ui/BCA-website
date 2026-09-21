/**
 * BCA Department Portal - Facilities & Infrastructure Component
 * Renders lab terminals, hardware specs, digital library, and smart classroom features.
 */

const FacilitiesComponent = {
  init() {
    if (!window.BCA_DATA || !window.BCA_DATA.facilities) return;
    this.renderFacilities();
  },

  getIconEmoji(iconName) {
    switch(iconName) {
      case 'cpu': return '⚡';
      case 'code': return '💻';
      case 'shield': return '🛡️';
      case 'activity': return '🤖';
      case 'book-open': return '📚';
      case 'monitor': return '🖥️';
      default: return '🏢';
    }
  },

  renderFacilities() {
    const grid = document.getElementById('facilitiesGrid');
    if (!grid) return;

    const list = window.BCA_DATA.facilities;

    grid.innerHTML = list.map(f => `
      <article class="facility-card" aria-label="${f.name}">
        <div class="facility-top-bar">
          <div class="facility-icon-wrap" aria-hidden="true">
            ${this.getIconEmoji(f.icon)}
          </div>
          <span class="facility-capacity-badge">👥 ${f.capacity}</span>
        </div>
        <h3 class="facility-name">${f.name}</h3>
        <div class="facility-tagline">${f.tag} &bull; ${f.category}</div>
        <p class="facility-desc">${f.description}</p>
        <div class="facility-specs-box">
          <div class="facility-specs-title">Hardware & Architecture Highlights</div>
          <ul class="facility-specs-list">
            ${f.specs.slice(0, 3).map(spec => `
              <li class="facility-specs-item">
                <span class="facility-specs-bullet">✓</span>
                <span>${spec}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <div style="margin-top: 1rem;">
          <button 
            type="button" 
            class="btn btn-secondary btn-sm" 
            style="width: 100%;" 
            onclick="FacilitiesComponent.openFacilityModal('${f.id}')"
            aria-label="View complete hardware and software inventory for ${f.name}">
            View Full Specifications &rarr;
          </button>
        </div>
      </article>
    `).join('');
  },

  openFacilityModal(id) {
    const f = window.BCA_DATA.facilities.find(item => item.id === id);
    if (!f) return;

    const contentHtml = `
      <div>
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-subtle);">
          <div class="facility-icon-wrap" style="width: 60px; height: 60px; font-size: 2rem;">
            ${this.getIconEmoji(f.icon)}
          </div>
          <div>
            <h4 style="font-size: 1.3rem; font-weight: 800; color: var(--primary); margin-bottom: 0.2rem;">${f.name}</h4>
            <div style="font-size: 0.85rem; color: var(--primary-accent); font-weight: 600;">
              ${f.tag} &bull; Capacity: ${f.capacity}
            </div>
          </div>
        </div>

        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
          ${f.description}
        </p>

        <h5 style="font-size: 0.875rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.75rem;">
          Detailed Specifications & Infrastructure Breakdown
        </h5>

        <div style="background: var(--bg-surface-secondary); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
          <ul class="facility-specs-list" style="gap: 0.75rem;">
            ${f.specs.map(spec => `
              <li class="facility-specs-item" style="font-size: 0.9rem;">
                <span class="facility-specs-bullet">✓</span>
                <span style="color: var(--text-primary); font-weight: 500;">${spec}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div style="border-top: 1px solid var(--border-subtle); padding-top: 1rem; display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; color: var(--text-muted);">
          <span>Lab Hours: 8:30 AM – 6:00 PM</span>
          <span style="color: var(--accent-emerald); font-weight: 600;">● Active & Calibrated</span>
        </div>
      </div>
    `;

    NavigationComponent.openModal(
      'genericModal',
      'Facility & Lab Infrastructure Details',
      contentHtml
    );
  }
};

window.FacilitiesComponent = FacilitiesComponent;
