/**
 * BCA Department Portal - Main Application Orchestrator
 * Bootstraps data binding, hero, about, courses, footer, and initializes modular components.
 */

document.addEventListener('DOMContentLoaded', () => {
  if (!window.BCA_DATA) {
    console.error('BCA_DATA is not loaded. Please ensure data.js is included.');
    return;
  }

  const data = window.BCA_DATA;

  // 1. Initialize Header Branding & Ticker
  renderHeaderBranding(data);
  renderTicker(data);

  // 2. Initialize Hero Section & Key Performance Indicators
  renderHero(data);
  renderStatsStrip(data);

  // 3. Initialize About the Department
  renderAbout(data);

  // 4. Initialize Degree Programs / Courses Section
  renderCourses(data);

  // 5. Initialize Footer & Legal Badges
  renderFooter(data);

  // 6. Bootstrap Interactive Components
  if (window.NavigationComponent) window.NavigationComponent.init();
  if (window.CurriculumComponent) window.CurriculumComponent.init();
  if (window.FacultyComponent) window.FacultyComponent.init();
  if (window.NoticesComponent) window.NoticesComponent.init();
  if (window.EventsComponent) window.EventsComponent.init();
  if (window.FacilitiesComponent) window.FacilitiesComponent.init();
  if (window.ContactComponent) window.ContactComponent.init();
});

function renderHeaderBranding(data) {
  const brandTitle = document.getElementById('brandTitle');
  const brandSubtitle = document.getElementById('brandSubtitle');
  if (brandTitle) brandTitle.textContent = data.departmentInfo.name;
  if (brandSubtitle) brandSubtitle.textContent = `${data.departmentInfo.institution} • Estd. ${data.departmentInfo.establishedYear}`;
}

function renderTicker(data) {
  const tickerEl = document.getElementById('tickerMessage');
  if (!tickerEl) return;

  // Find first urgent notice, or first notice
  const activeNotice = data.notices.find(n => n.urgent) || data.notices[0];
  if (activeNotice) {
    tickerEl.innerHTML = `
      <span>[${activeNotice.category.toUpperCase()}] ${activeNotice.title}</span>
      <a href="#notices" onclick="NoticesComponent.openNoticeModal('${activeNotice.id}')">Read Circular &rarr;</a>
    `;
  }
}

function renderHero(data) {
  const heroTagline = document.getElementById('heroTagline');
  const hodMessage = document.getElementById('heroHodQuote');
  const hodName = document.getElementById('heroHodName');
  const hodRole = document.getElementById('heroHodRole');

  if (heroTagline) heroTagline.textContent = data.departmentInfo.tagline;
  if (hodMessage) hodMessage.textContent = `“${data.departmentInfo.hod.message}”`;
  if (hodName) hodName.textContent = data.departmentInfo.hod.name;
  if (hodRole) hodRole.textContent = data.departmentInfo.hod.designation;
}

function renderStatsStrip(data) {
  const container = document.getElementById('statsGridContainer');
  if (!container || !data.stats) return;

  container.innerHTML = data.stats.map(s => `
    <div class="stat-item">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
      <div class="stat-subtext">${s.subtext}</div>
    </div>
  `).join('');
}

function renderAbout(data) {
  const overviewEl = document.getElementById('aboutOverviewText');
  const visionEl = document.getElementById('aboutVisionText');
  const missionEl = document.getElementById('aboutMissionList');
  const peoEl = document.getElementById('aboutPeoGrid');
  const strengthsEl = document.getElementById('aboutStrengthsGrid');

  if (overviewEl) overviewEl.textContent = data.about.overview;
  if (visionEl) visionEl.textContent = data.about.vision;

  if (missionEl && data.about.mission) {
    missionEl.innerHTML = data.about.mission.map(m => `
      <li class="mission-item">
        <span class="mission-bullet">▶</span>
        <span>${m}</span>
      </li>
    `).join('');
  }

  if (peoEl && data.about.peos) {
    peoEl.innerHTML = data.about.peos.map(p => `
      <div class="peo-card">
        <div class="peo-badge">${p.id}</div>
        <h4 class="peo-title">${p.title}</h4>
        <p class="peo-desc">${p.desc}</p>
      </div>
    `).join('');
  }

  if (strengthsEl && data.about.strengths) {
    strengthsEl.innerHTML = data.about.strengths.map(s => `
      <div class="about-card" style="padding: 1.5rem;">
        <h4 style="font-size: 1.1rem; color: var(--primary); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <span style="color: var(--accent-emerald);">✔</span> ${s.title}
        </h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.55;">${s.desc}</p>
      </div>
    `).join('');
  }
}

function renderCourses(data) {
  const container = document.getElementById('coursesGrid');
  if (!container || !data.programs) return;

  container.innerHTML = data.programs.map(prog => `
    <article class="course-card" aria-label="${prog.name}">
      <span class="course-card-tag">${prog.degree}</span>
      <h3 class="course-card-title">${prog.name}</h3>
      
      <div class="course-meta-row">
        <div class="course-meta-item">
          <span>⏱</span>
          <span>${prog.duration}</span>
        </div>
        <div class="course-meta-item">
          <span>👥</span>
          <span>${prog.intake}</span>
        </div>
      </div>

      <p class="course-desc">${prog.description}</p>

      <div class="course-tracks-box">
        <div class="course-tracks-title">Specialization Tracks</div>
        <div class="track-pills">
          ${prog.tracks.map(t => `<span class="track-pill">${t}</span>`).join('')}
        </div>
      </div>

      <div style="background: #ffffff; border: 1px solid var(--border-subtle); padding: 0.75rem; border-radius: var(--radius-sm); margin-bottom: 1.25rem; font-size: 0.825rem;">
        <strong style="color: var(--primary);">Eligibility:</strong> 
        <span style="color: var(--text-secondary);">${prog.eligibility}</span>
      </div>

      <div class="course-footer">
        <a href="#curriculum" class="btn btn-secondary btn-sm" onclick="CurriculumComponent.activeSemester=1; CurriculumComponent.renderSemesterTabs(); CurriculumComponent.renderCurriculumTable();">
          Curriculum Scheme &rarr;
        </a>
        <button 
          type="button" 
          class="btn btn-primary btn-sm" 
          onclick="openCourseDetailsModal('${prog.id}')"
          aria-label="View career pathways for ${prog.name}">
          Career Pathways
        </button>
      </div>
    </article>
  `).join('');
}

window.openCourseDetailsModal = function(id) {
  const prog = window.BCA_DATA.programs.find(p => p.id === id);
  if (!prog) return;

  const contentHtml = `
    <div>
      <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
        <span class="course-card-tag">${prog.degree}</span>
        <span style="font-size: 0.8rem; background: var(--bg-surface-secondary); padding: 0.2rem 0.6rem; border-radius: var(--radius-xs); color: var(--text-secondary);">
          Duration: ${prog.duration}
        </span>
      </div>
      <h4 style="font-size: 1.35rem; font-weight: 800; color: var(--primary); margin-bottom: 0.75rem;">
        ${prog.name}
      </h4>
      <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
        ${prog.description}
      </p>

      <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.25rem;">
        <h5 style="font-size: 0.9rem; font-weight: 700; text-transform: uppercase; color: var(--primary); margin-bottom: 0.5rem;">
          💼 Targeted Industry Career Pathways
        </h5>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${prog.careers.map(c => `
            <span style="background: #ffffff; border: 1px solid #93c5fd; padding: 0.35rem 0.75rem; border-radius: var(--radius-xs); font-weight: 600; font-size: 0.85rem; color: #1e40af;">
              ${c}
            </span>
          `).join('')}
        </div>
      </div>

      <div style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6;">
        <strong>Admissions Requirement:</strong> ${prog.eligibility}
      </div>
    </div>
  `;

  NavigationComponent.openModal(
    'genericModal',
    'Degree Program Overview',
    contentHtml,
    `<a href="#contact" class="btn btn-primary btn-sm" onclick="NavigationComponent.closeAllModals()">Apply / Inquire Now</a>`
  );
};

function renderFooter(data) {
  const accredContainer = document.getElementById('footerAccreditations');
  const footerHod = document.getElementById('footerHodName');
  const footerAddress = document.getElementById('footerAddress');
  const footerPhone = document.getElementById('footerPhone');
  const footerEmail = document.getElementById('footerEmail');
  const footerYear = document.getElementById('footerCurrentYear');

  if (accredContainer && data.departmentInfo.accreditation) {
    accredContainer.innerHTML = data.departmentInfo.accreditation.map(a => `
      <span class="accred-badge">${a.body}: ${a.grade}</span>
    `).join('');
  }

  if (footerHod) footerHod.textContent = `${data.departmentInfo.hod.name} (${data.departmentInfo.hod.designation})`;
  if (footerAddress) footerAddress.textContent = data.departmentInfo.contact.address;
  if (footerPhone) footerPhone.textContent = data.departmentInfo.contact.phone;
  if (footerEmail) footerEmail.textContent = data.departmentInfo.contact.email;
  if (footerYear) footerYear.textContent = new Date().getFullYear();
}
