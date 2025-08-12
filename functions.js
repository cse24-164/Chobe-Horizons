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

    // Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.createElement('button');
  mobileMenuBtn.className = 'mobile-menu-btn';
  mobileMenuBtn.innerHTML = '☰';
  
  const nav = document.querySelector('nav');
  const header = document.querySelector('header');
  
  // Insert the button before the nav in the header
  if (nav && header) {
    header.insertBefore(mobileMenuBtn, nav);
    
    mobileMenuBtn.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
  }
});
 