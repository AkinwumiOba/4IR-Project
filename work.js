const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 767) {
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
  }
});

document.addEventListener('click', (event) => {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 767) {
    if (!menu.contains(event.target) && event.target !== menuToggle) {
      menu.style.display = 'none';
    }
  }
});
