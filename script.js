// Smooth scrolling for navigation links
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1); // remove # from href
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 50, // Account for the fixed navbar
      behavior: 'smooth',
    });
  });
});

// Scroll animations - Fade in content when scrolled into view
const sections = document.querySelectorAll('.about, .projects, .contact');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.5, // Trigger animation when 50% of section is visible
});

sections.forEach(section => observer.observe(section));

// Hover animation for buttons and links
const buttons = document.querySelectorAll('button, a');

buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.1)';
    button.style.transition = 'transform 0.3s ease-in-out';
  });
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });
});
