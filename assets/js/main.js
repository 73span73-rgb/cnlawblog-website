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

  // Contact Form Interactivity
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      formStatus.style.display = 'block';
      formStatus.className = 'callout';
      formStatus.innerHTML = '<strong>Thank you!</strong> Your message has been received by the CNLawBlog editorial team. We will respond within 24 hours.';
      contactForm.reset();
    });
  }
});
