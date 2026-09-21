# BCA Department Portal - Modern Academic Website

A modern, responsive, accessible, and fast-loading website for the **Department of Computer Applications (BCA)**.

## Key Features & Architecture

- **Clean Academic Design**: Professional color palette, clear typography hierarchy, and subtle shadows aligned with modern university branding standards.
- **Strict Data-UI Separation**: All departmental data (curriculum, courses, faculty, circulars, events, facilities, contact info) is isolated in `assets/js/data.js` and `data/department.json`. Zero hardcoded duplicate content in HTML.
- **Interactive Semester Curriculum**: Dynamic semester switcher (Semesters 1 through 6), credit count calculation, live search filter for courses, and syllabus outline modals.
- **Searchable Faculty Directory**: Search by faculty name, specialization, or subjects taught; category filter buttons (Professors, Associate Professors, Assistant Professors, Technical Staff) and biography modals.
- **Categorized Notice Board**: Filter circulars by Examination, Placement, Academic, Events, or General; pinned and urgent tags; modal view with download actions.
- **Events & Hackathons Showcase**: Dynamic switcher between upcoming tech symposiums/hackathons and past event archives with interactive registration desk.
- **Department Facilities**: Technical breakdown of AI/ML workstation clusters, air-gapped cybersecurity sandboxes, IoT prototyping labs, and digital research libraries.
- **Admissions & Contact Desk**: Validated contact form, instant response simulation, campus location details, and accessible FAQ accordion.
- **Global Spotlight Search (Ctrl + K)**: Quick modal search allowing users to instantly jump to any course, curriculum subject, faculty member, or notice.
- **100% Zero-Dependency**: Pure semantic HTML5, CSS3 variables/flexbox/grid, and vanilla ES6+ JavaScript. No Node.js build step required. Works locally via `file://` or any web server.

---

## Directory Structure

```
bca_department/
├── index.html                   # Main semantic HTML5 single-page portal
├── README.md                    # Documentation and usage guide
├── data/
│   └── department.json          # Clean JSON export for API / external consumption
└── assets/
    ├── css/
    │   ├── variables.css        # Academic design tokens & color palette
    │   ├── main.css             # Base reset, typography, header, hero & footer
    │   ├── components.css       # Cards, tables, badges, modals, accordion, forms
    │   └── responsive.css       # Mobile drawer, media queries, print styles
    └── js/
        ├── data.js              # Single Source of Truth data object (window.BCA_DATA)
        ├── app.js               # Application bootstrap & data binding
        └── components/
            ├── navigation.js    # Mobile drawer, scrollspy, modal manager & spotlight
            ├── curriculum.js    # Semester switcher, credit counter & course modals
            ├── faculty.js       # Faculty search, category filter & bio modal
            ├── notices.js       # Categorized notice board & circular reader
            ├── events.js        # Upcoming/past events toggle & registration
            ├── facilities.js    # Lab hardware & software specification viewer
            └── contact.js       # Contact form validation & FAQ accordion
```

---

## How to Run the Website

### Option 1: Direct File Opening
Double click `index.html` or open it in any modern browser (Chrome, Edge, Firefox, Safari). Because `data.js` exposes data cleanly to the window, there are no local file protocol CORS errors!

### Option 2: Using Python HTTP Server (Recommended)
Open PowerShell or terminal in the project root:
```powershell
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

---

## Updating Department Information

To modify any departmental content, simply update `assets/js/data.js`:
- **Add or edit a notice**: Add an entry into `BCA_DATA.notices`
- **Update curriculum or subjects**: Modify the semester courses in `BCA_DATA.curriculum`
- **Add a new faculty member**: Append to `BCA_DATA.faculty`
- **Announce a hackathon or event**: Add to `BCA_DATA.events`
- **Change office hours or contact info**: Update `BCA_DATA.departmentInfo.contact`

Changes in `data.js` immediately reflect across the entire website without touching any HTML or CSS files.
