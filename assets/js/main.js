/* CNLawBlog Interactive JavaScript - Ultra Lightweight */
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      const expanded = mobileToggle.getAttribute('aria-expanded') === 'true' || false;
      mobileToggle.setAttribute('aria-expanded', !expanded);
    });
  }

  // FAQ Accordion Interactivity
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isOpen = answer.classList.contains('open');

      // Close all other answers for cleaner look
      document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.remove('open'));
      document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));

      if (!isOpen) {
        answer.classList.add('open');
        question.classList.add('active');
      }
    });
  });

  // Contact Form Interactivity & Guaranteed WhatsApp Redirection
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name')?.value || '';
      const email = document.getElementById('email')?.value || '';
      const subjectSelect = document.getElementById('subject');
      const subjectText = subjectSelect ? subjectSelect.options[subjectSelect.selectedIndex].text : '';
      const message = document.getElementById('message')?.value || '';

      const formattedText = `Hello CNLawBlog Team,%0A%0A*New Inquiry Details:*%0A👤 *Name:* ${encodeURIComponent(name)}%0A📧 *Email:* ${encodeURIComponent(email)}%0A📌 *Subject:* ${encodeURIComponent(subjectText)}%0A💬 *Message:* ${encodeURIComponent(message)}`;
      const whatsappNumber = "918200194578";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${formattedText}`;

      if (formStatus) {
        formStatus.style.display = 'block';
        formStatus.className = 'callout';
        formStatus.style.background = '#ecfdf5';
        formStatus.style.borderColor = '#10b981';
        formStatus.innerHTML = '<strong>Redirecting to WhatsApp...</strong> Please wait while we connect you to +91 8200194578.';
      }

      // Direct synchronous location redirect to prevent browser popup blockers
      window.location.href = whatsappUrl;
    });
  }
});
