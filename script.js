// ── MOBILE MENU ──
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
 
// Close mobile menu when clicking outside
document.addEventListener('click', function (e) {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove('open');
  }
});
 
// ── CARD ANIMATIONS ──
// Stagger the fade-up animation delay for each card
document.querySelectorAll('.card').forEach(function (card, i) {
  card.style.animationDelay = (0.05 * (i % 4)) + 's';
});
 