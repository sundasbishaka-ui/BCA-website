/**
 * BCA Department Portal - Contact & FAQ Component
 * Validates inquiry form, provides instant user feedback, and drives FAQ accordion.
 */

const ContactComponent = {
  init() {
    this.renderContactDetails();
    this.renderFaqs();
    this.setupContactForm();
  },

  renderContactDetails() {
    const contactContainer = document.getElementById('contactOfficeDetails');
    if (!contactContainer || !window.BCA_DATA) return;

    const info = window.BCA_DATA.departmentInfo;

    contactContainer.innerHTML = `
      <div class="contact-detail-items">
        <div class="contact-detail-item">
          <div class="contact-icon-box" aria-hidden="true">📍</div>
          <div class="contact-text-box">
            <h4>Campus & Office Location</h4>
            <p>${info.contact.address}</p>
            <p style="font-size: 0.8rem; color: var(--primary-accent); margin-top: 0.2rem;">
              ${info.hod.officeLocation}
            </p>
          </div>
        </div>

        <div class="contact-detail-item">
          <div class="contact-icon-box" aria-hidden="true">📞</div>
          <div class="contact-text-box">
            <h4>Telephonic Desk</h4>
            <p>${info.contact.phone}</p>
            <p style="font-size: 0.8rem; color: var(--text-muted);">Admissions Hotline: ${info.contact.emergencyContact}</p>
          </div>
        </div>

        <div class="contact-detail-item">
          <div class="contact-icon-box" aria-hidden="true">✉</div>
          <div class="contact-text-box">
            <h4>Official Email Contacts</h4>
            <p>Admissions: <a href="mailto:${info.contact.email}">${info.contact.email}</a></p>
            <p>Department Office: <a href="mailto:${info.contact.generalInquiries}">${info.contact.generalInquiries}</a></p>
          </div>
        </div>

        <div class="contact-detail-item">
          <div class="contact-icon-box" aria-hidden="true">🕒</div>
          <div class="contact-text-box">
            <h4>Office Working Hours</h4>
            <p>${info.contact.workingHours}</p>
          </div>
        </div>
      </div>
    `;
  },

  renderFaqs() {
    const faqContainer = document.getElementById('faqAccordionContainer');
    if (!faqContainer || !window.BCA_DATA || !window.BCA_DATA.faqs) return;

    const faqs = window.BCA_DATA.faqs;

    faqContainer.innerHTML = faqs.map((faq, index) => `
      <div class="faq-item" id="faqItem-${index}">
        <button 
          type="button"
          class="faq-question-btn" 
          aria-expanded="false" 
          aria-controls="faqAnswer-${index}"
          onclick="ContactComponent.toggleFaq(${index})">
          <span>${faq.question}</span>
          <span class="faq-chevron" aria-hidden="true">▼</span>
        </button>
        <div class="faq-answer" id="faqAnswer-${index}" role="region">
          <p>${faq.answer}</p>
        </div>
      </div>
    `).join('');
  },

  toggleFaq(index) {
    const item = document.getElementById(`faqItem-${index}`);
    if (!item) return;

    const btn = item.querySelector('.faq-question-btn');
    const isCurrentlyActive = item.classList.contains('active');

    // Close all other FAQs for clean single accordion
    document.querySelectorAll('.faq-item').forEach(el => {
      el.classList.remove('active');
      const b = el.querySelector('.faq-question-btn');
      if (b) b.setAttribute('aria-expanded', 'false');
    });

    if (!isCurrentlyActive) {
      item.classList.add('active');
      if (btn) btn.setAttribute('aria-expanded', 'true');
    }
  },

  setupContactForm() {
    const form = document.getElementById('departmentContactForm');
    const alertBox = document.getElementById('formFeedbackAlert');
    if (!form || !alertBox) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Form fields
      const fullName = form.querySelector('#inquiryName').value.trim();
      const email = form.querySelector('#inquiryEmail').value.trim();
      const phone = form.querySelector('#inquiryPhone').value.trim();
      const category = form.querySelector('#inquiryCategory').value;
      const message = form.querySelector('#inquiryMessage').value.trim();

      // Simple robust validations
      if (fullName.length < 2) {
        this.showAlert(alertBox, 'error', 'Please enter your full legal name.');
        form.querySelector('#inquiryName').focus();
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        this.showAlert(alertBox, 'error', 'Please provide a valid email address.');
        form.querySelector('#inquiryEmail').focus();
        return;
      }

      if (phone.length < 7) {
        this.showAlert(alertBox, 'error', 'Please enter a valid telephone or mobile number.');
        form.querySelector('#inquiryPhone').focus();
        return;
      }

      if (message.length < 10) {
        this.showAlert(alertBox, 'error', 'Please provide a descriptive query message (at least 10 characters).');
        form.querySelector('#inquiryMessage').focus();
        return;
      }

      // Simulate submission
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Transmitting Message...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        form.reset();
        this.showAlert(alertBox, 'success', `Thank you, ${fullName}! Your inquiry concerning "${category}" has been recorded. Reference Ticket #BCA-${Date.now().toString().slice(-6)}. Our admissions desk will reply within 24 business hours.`);
      }, 700);
    });
  },

  showAlert(alertBox, type, message) {
    alertBox.className = `form-feedback-alert ${type}`;
    alertBox.textContent = message;
    alertBox.style.display = 'block';

    if (type === 'success') {
      setTimeout(() => {
        alertBox.style.display = 'none';
      }, 8000);
    }
  }
};

window.ContactComponent = ContactComponent;
