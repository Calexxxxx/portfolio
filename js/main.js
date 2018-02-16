let navToggle = document.getElementById('nav-toggle');
let navToggleClose = document.getElementById('nav-toggle-close');
let nav = document.getElementById('nav');

navToggle.onclick = function() {
  nav.classList.add('nav__inner-show');
};

navToggleClose.onclick = function() {
  nav.classList.remove('nav__inner-show');
};
