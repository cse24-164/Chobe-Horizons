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