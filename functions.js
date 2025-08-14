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

document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const closeBtn = document.querySelector('.mobile-close-btn');
  const nav = document.querySelector('nav');
  const overlay = document.querySelector('.overlay');
  
  menuBtn.addEventListener('click', () => {
    nav.classList.add('active');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
  
  closeBtn.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  });
  
  overlay.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.style.display = 'none';
    document.body.style.overflow = '';
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
 