const toggleTag = document.querySelector('a.toggle-nav');
const mainTag = document.querySelector('main');
const navTag = document.querySelector('nav');

toggleTag.addEventListener('click', () => {
  mainTag.classList.toggle('open');
  navTag.classList.toggle('open');
  toggleTag.classList.toggle('open');

  //toggle 'open/close'
  if (mainTag.classList.contains('open')) {
    toggleTag.innerHTML = `<img src='images/close.svg'>`;
  } else {
    toggleTag.innerHTML = `<img src='images/menu.svg'>`;
  }
});
