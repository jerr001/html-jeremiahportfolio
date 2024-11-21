// Add this in a script tag or separate .js file
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const navMenu = document.querySelector('.nav-menu');

  hamburgerIcon.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburgerIcon.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
  });

  // Close menu when a nav link is clicked
  navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
          navMenu.classList.remove('active');
          hamburgerIcon.innerHTML = '☰';
      });
  });
});