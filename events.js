/**
 * BCA Department Portal - Events & Workshops Component
 * Handles Upcoming vs Past events toggling and interactive event registration modal.
 */

const EventsComponent = {
  activeType: "Upcoming",

  init() {
    if (!window.BCA_DATA || !window.BCA_DATA.events) return;
    this.setupTypeToggle();
    this.renderEvents();
  },

  setupTypeToggle() {
    const toggleBtns = document.querySelectorAll('.events-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-type');
        if (type !== this.activeType) {
          this.activeType = type;
          toggleBtns.forEach(b => {
            const isActive = b === btn;
            b.classList.toggle('active', isActive);
            b.setAttribute('aria-pressed', isActive);
          });
          this.renderEvents();
        }
      });
    });
  },

  renderEvents() {
    const grid = document.getElementById('eventsGrid');
    if (!grid) return;

    const list = window.BCA_DATA.events.filter(e => e.type.toLowerCase() === this.activeType.toLowerCase());

    if (list.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted); background: #ffffff; border-radius: var(--radius-lg); border: 1px dashed var(--border-medium);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📅</div>
          <h4 style="font-size: 1.15rem; color: var(--primary); margin-bottom: 0.25rem;">No ${this.activeType} Events Scheduled</h4>
          <p style="font-size: 0.9rem;">Check back soon for announcements on upcoming symposiums and bootcamps.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = list.map(evt => `
      <article class="event-card" aria-label="${evt.title}">
        <div class="event-card-header">
          <span class="event-category-badge">${evt.category}</span>
          <span class="event-status-badge ${evt.registrationStatus === 'Open' ? 'event-status-open' : 'event-status-completed'}">
            ${evt.registrationStatus === 'Open' ? '🟢 Registration Open' : '🏁 Concluded'}
          </span>
        </div>
        <h3 class="event-title">${evt.title}</h3>
        <div class="event-meta-info">
          <div class="event-meta-row">
            <span>📅</span>
            <strong>${evt.date}</strong> &bull; ${evt.time}
          </div>
          <div class="event-meta-row">
            <span>📍</span>
            <span>${evt.venue}</span>
          </div>
          <div class="event-meta-row">
            <span>🎙️</span>
            <span>${evt.speaker}</span>
          </div>
        </div>
        <p class="event-desc">${evt.description}</p>
        <div class="event-footer">
          <span style="font-size: 0.8rem; color: var(--text-muted);">Apex BCA Tech Series</span>
          <button 
            type="button" 
            class="btn ${evt.registrationStatus === 'Open' ? 'btn-primary' : 'btn-secondary'} btn-sm"
            onclick="EventsComponent.openEventModal('${evt.id}')"
            aria-label="View details and registration for ${evt.title}">
            ${evt.ctaLabel} &rarr;
          </button>
        </div>
      </article>
    `).join('');
  },

  openEventModal(id) {
    const evt = window.BCA_DATA.events.find(e => e.id === id);
    if (!evt) return;

    const isOpen = evt.registrationStatus === 'Open';

    const contentHtml = `
      <div>
        <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
          <span class="event-category-badge">${evt.category}</span>
          <span class="event-status-badge ${isOpen ? 'event-status-open' : 'event-status-completed'}">
            ${isOpen ? '🟢 Active Registrations' : 'Event Archive'}
          </span>
        </div>
        <h4 style="font-size: 1.35rem; font-weight: 800; color: var(--primary); margin-bottom: 0.75rem;">
          ${evt.title}
        </h4>
        <div class="event-meta-info" style="margin-bottom: 1.25rem;">
          <div class="event-meta-row">
            <strong>Date & Time:</strong> ${evt.date} (${evt.time})
          </div>
          <div class="event-meta-row">
            <strong>Venue:</strong> ${evt.venue}
          </div>
          <div class="event-meta-row">
            <strong>Keynote / Resource Person:</strong> ${evt.speaker}
          </div>
        </div>
        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.5rem;">
          ${evt.description}
        </p>

        ${isOpen ? `
          <div style="background: #eff6ff; border: 1px solid #bfdbfe; padding: 1.25rem; border-radius: var(--radius-md);">
            <h5 style="font-size: 0.95rem; font-weight: 700; color: var(--primary); margin-bottom: 0.5rem;">
              Instant Registration Desk
            </h5>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">
              Open to all current undergraduate and postgraduate computing students. Certificate of participation will be issued.
            </p>
            <div style="display: flex; gap: 0.5rem;">
              <input type="text" placeholder="Enter Roll Number / USN" style="flex: 1; padding: 0.5rem 0.75rem; border: 1px solid var(--border-medium); border-radius: var(--radius-sm); font-size: 0.9rem;" id="eventRegInput" />
              <button class="btn btn-primary btn-sm" onclick="
                const val = document.getElementById('eventRegInput').value;
                if(!val) { alert('Please enter your University Roll Number.'); return; }
                alert('Registration confirmed for ' + val + '! Confirmation sent to registered student email.');
                NavigationComponent.closeAllModals();
              ">
                Submit Registration
              </button>
            </div>
          </div>
        ` : `
          <div style="background: var(--bg-surface-secondary); padding: 1rem; border-radius: var(--radius-md); text-align: center;">
            <p style="font-size: 0.9rem; color: var(--text-muted);">
              This event concluded on ${evt.date}. Session recordings and slides are available on the student intranet.
            </p>
          </div>
        `}
      </div>
    `;

    NavigationComponent.openModal(
      'genericModal',
      'Event Showcase & Registration',
      contentHtml
    );
  }
};

window.EventsComponent = EventsComponent;
