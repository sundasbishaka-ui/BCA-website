/**
 * BCA Department Portal - Semester-wise Curriculum Component
 * Renders interactive semester switcher, dynamic course table, live course search, and detail modal.
 */

const CurriculumComponent = {
  activeSemester: 1,
  currentQuery: "",

  init() {
    if (!window.BCA_DATA || !window.BCA_DATA.curriculum) return;
    this.renderSemesterTabs();
    this.renderCurriculumTable();
    this.setupSearch();
    this.setupDownloadButton();
  },

  renderSemesterTabs() {
    const tabsContainer = document.getElementById('semesterTabs');
    if (!tabsContainer) return;

    const semesters = window.BCA_DATA.curriculum;
    tabsContainer.innerHTML = semesters.map(s => `
      <button 
        type="button" 
        class="semester-btn ${s.semester === this.activeSemester ? 'active' : ''}" 
        data-sem="${s.semester}"
        aria-pressed="${s.semester === this.activeSemester}">
        Semester ${s.semester}
      </button>
    `).join('');

    tabsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.semester-btn');
      if (!btn) return;

      const semNumber = parseInt(btn.getAttribute('data-sem'), 10);
      if (semNumber !== this.activeSemester) {
        this.activeSemester = semNumber;

        // Update active class
        tabsContainer.querySelectorAll('.semester-btn').forEach(b => {
          b.classList.toggle('active', b === btn);
          b.setAttribute('aria-pressed', b === btn);
        });

        this.renderCurriculumTable();
      }
    });
  },

  setupSearch() {
    const searchInput = document.getElementById('curriculumSearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      this.currentQuery = e.target.value.trim().toLowerCase();
      this.renderCurriculumTable();
    });
  },

  setupDownloadButton() {
    const downloadBtn = document.getElementById('downloadSyllabusBtn');
    if (!downloadBtn) return;

    downloadBtn.addEventListener('click', () => {
      NavigationComponent.openModal(
        'genericModal',
        `Download Curriculum - Semester ${this.activeSemester}`,
        `
          <div style="text-align: center; padding: 1.5rem 0;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">📄</div>
            <h4 style="font-size: 1.2rem; color: var(--primary); margin-bottom: 0.5rem;">
              BCA NEP-2020 Scheme Syllabus (Semester ${this.activeSemester})
            </h4>
            <p style="color: var(--text-secondary); margin-bottom: 1.5rem; max-width: 440px; margin-left: auto; margin-right: auto;">
              Complete course outcomes, detailed unit breakdown (Units I - V), textbook references, and laboratory evaluation matrices.
            </p>
            <div style="background: var(--bg-surface-secondary); padding: 1rem; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.85rem; margin-bottom: 1.5rem;">
              File: BCA_Syllabus_Sem_${this.activeSemester}_ApexInstitute.pdf [1.8 MB]
            </div>
            <button class="btn btn-primary" onclick="alert('Downloading officially signed syllabus PDF for Semester ${this.activeSemester}...'); NavigationComponent.closeAllModals();">
              Confirm & Download PDF
            </button>
          </div>
        `
      );
    });
  },

  getTypeBadgeClass(type) {
    if (type.includes('Core')) return 'badge-type-core';
    if (type.includes('Practical')) return 'badge-type-practical';
    if (type.includes('Elective')) return 'badge-type-elective';
    if (type.includes('Ability') || type.includes('Value')) return 'badge-type-ability';
    if (type.includes('Capstone') || type.includes('Project')) return 'badge-type-capstone';
    return 'badge-type-core';
  },

  renderCurriculumTable() {
    const container = document.getElementById('curriculumContainer');
    const metaContainer = document.getElementById('curriculumMeta');
    if (!container) return;

    const semData = window.BCA_DATA.curriculum.find(s => s.semester === this.activeSemester);
    if (!semData) return;

    let courses = semData.courses;

    if (this.currentQuery) {
      courses = courses.filter(c => 
        c.title.toLowerCase().includes(this.currentQuery) ||
        c.code.toLowerCase().includes(this.currentQuery) ||
        c.type.toLowerCase().includes(this.currentQuery)
      );
    }

    // Update Meta Summary
    if (metaContainer) {
      metaContainer.innerHTML = `
        <div>
          <div class="semester-heading-title">Semester ${semData.semester} Curriculum Scheme</div>
          <div style="font-size: 0.875rem; color: var(--text-muted); margin-top: 0.2rem;">
            Showing ${courses.length} of ${semData.courses.length} courses | Degree: BCA / BCA (Honors)
          </div>
        </div>
        <div class="semester-credits-badge">
          <span>⚡ Total Semester Credits:</span>
          <strong>${semData.totalCredits}</strong>
        </div>
      `;
    }

    if (courses.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted); background: var(--bg-surface); border-radius: var(--radius-md); border: 1px dashed var(--border-medium);">
          <p style="font-size: 1.1rem; font-weight: 600; color: var(--primary); margin-bottom: 0.5rem;">No courses match your search</p>
          <p style="font-size: 0.9rem;">Try clearing the search query to see all Semester ${this.activeSemester} courses.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="curriculum-table-container">
        <table class="curriculum-table" aria-label="Semester ${semData.semester} Courses">
          <thead>
            <tr>
              <th scope="col" style="width: 15%;">Course Code</th>
              <th scope="col" style="width: 45%;">Course Title & Highlights</th>
              <th scope="col" style="width: 18%;">Category</th>
              <th scope="col" style="width: 10%;">Credits</th>
              <th scope="col" style="width: 12%; text-align: right;">Details</th>
            </tr>
          </thead>
          <tbody>
            ${courses.map(c => `
              <tr>
                <td class="course-code-cell">${c.code}</td>
                <td class="course-title-cell">
                  <div>${c.title}</div>
                  <div class="course-desc-snippet">${c.description}</div>
                </td>
                <td>
                  <span class="badge-type ${this.getTypeBadgeClass(c.type)}">${c.type}</span>
                </td>
                <td>
                  <span style="font-weight: 700; color: var(--primary);">${c.credits}</span>
                  <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">${c.hours}</span>
                </td>
                <td style="text-align: right;">
                  <button 
                    type="button"
                    class="btn btn-secondary btn-sm" 
                    onclick="CurriculumComponent.showCourseModal('${c.code}')"
                    aria-label="View syllabus outline for ${c.code}">
                    Outline
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  },

  showCourseModal(code) {
    let foundCourse = null;
    let semNum = null;

    for (const sem of window.BCA_DATA.curriculum) {
      const match = sem.courses.find(c => c.code === code);
      if (match) {
        foundCourse = match;
        semNum = sem.semester;
        break;
      }
    }

    if (!foundCourse) return;

    const contentHtml = `
      <div>
        <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem; flex-wrap: wrap;">
          <span class="badge-type ${this.getTypeBadgeClass(foundCourse.type)}">${foundCourse.type}</span>
          <span class="badge-type badge-type-core">Semester ${semNum}</span>
          <span class="badge-type badge-type-ability">${foundCourse.credits} Credits (${foundCourse.hours})</span>
        </div>
        <h4 style="font-size: 1.25rem; font-weight: 800; color: var(--primary); margin-bottom: 0.75rem;">
          ${foundCourse.code}: ${foundCourse.title}
        </h4>
        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem;">
          ${foundCourse.description}
        </p>

        <div style="background: var(--bg-surface-secondary); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1.25rem;">
          <h5 style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.5rem;">
            Course Learning Outcomes (CLOs)
          </h5>
          <ul style="list-style: disc; padding-left: 1.25rem; font-size: 0.875rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.35rem;">
            <li>Formulate logical abstractions and algorithmic decompositions for computational challenges.</li>
            <li>Implement industry-grade code conforming to strict memory and performance profiles.</li>
            <li>Analyze complexity parameters and validate test suites using modern debugging toolchains.</li>
          </ul>
        </div>

        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--text-muted); border-top: 1px solid var(--border-subtle); padding-top: 0.75rem;">
          <span>Internal Assessment: 40 Marks</span>
          <span>Semester End Examination: 60 Marks</span>
        </div>
      </div>
    `;

    NavigationComponent.openModal(
      'genericModal',
      `Course Syllabus Outline - ${foundCourse.code}`,
      contentHtml
    );
  }
};

window.CurriculumComponent = CurriculumComponent;
