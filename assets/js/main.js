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

  // Contact Form Submission (Mailto)
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name')?.value || '';
      const email = document.getElementById('email')?.value || '';
      const subjectSelect = document.getElementById('subject');
      const subjectText = subjectSelect ? subjectSelect.options[subjectSelect.selectedIndex].text : 'Inquiry';
      const message = document.getElementById('message')?.value || '';

      const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
      const mailtoUrl = `mailto:plusplymarketing@gmail.com?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(body)}`;

      if (formStatus) {
        formStatus.style.display = 'block';
        formStatus.className = 'callout';
        formStatus.style.background = '#ecfdf5';
        formStatus.style.borderColor = '#10b981';
        formStatus.innerHTML = '<strong>Opening Email Client...</strong> Sending inquiry to plusplymarketing@gmail.com.';
      }

      window.location.href = mailtoUrl;
    });
  }
});
