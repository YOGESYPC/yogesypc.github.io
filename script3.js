document.addEventListener("DOMContentLoaded", function () {
    // Select all nav links
    const navLinks = document.querySelectorAll(".nav-links a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default jump behavior
  
        const targetId = this.getAttribute("href").substring(1); // Get section ID
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 80, // Adjust for header height
            behavior: "smooth" // Enable smooth scrolling
          });
        }
      });
    });
  });
  
  // Theme Switcher
const themeSwitcher = document.getElementById('theme-switcher');
themeSwitcher.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themeSwitcher.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});