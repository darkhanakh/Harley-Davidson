const menuIconWrapper = document.querySelector('.menu-icon-wrapper');

menuIconWrapper.addEventListener('click', () => {
  document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
});