// Get current page name (like "about.html")
const currentPage = window.location.pathname.split("/").pop() || "index.html";

// Select all nav links
const navLinks = document.querySelectorAll("nav a");

// Loop through each link
navLinks.forEach(link => {
  const linkHref = link.getAttribute("href");

  if (linkHref === currentPage) {
    link.classList.add("active");
  }
});

  // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
                
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
                
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('nav');
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);

  mobileMenuBtn.addEventListener('click', function() {
    nav.classList.toggle('active');
    overlay.style.display = nav.classList.contains('active') ? 'block' : 'none';
  });

  overlay.addEventListener('click', function() {
    nav.classList.remove('active');
    overlay.style.display = 'none';
  });
});

// Add this to your existing functions.js file
document.addEventListener('DOMContentLoaded', function() {
  // Section transition observer
  const sections = document.querySelectorAll('section');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    observer.observe(section);
  });

  // Add slight delay to cards for staggered animation
  const cards = document.querySelectorAll('.card, .opportunities-card, .project-card, .objectives-card, .stakeholder');
  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });
});
 