const openNav = document.querySelector('.hamburger');
const closeNav = document.querySelector('.nav__close');
const nav = document.querySelector('.nav__list');

openNav.addEventListener('click', () => {
    const navLeft = nav.getBoundingClientRect().left;
    if (navLeft < 0) {
        nav.style.left = 0;
        document.body.classList.add('active');
    }
});

closeNav.addEventListener("click", () => {
  const navLeft = nav.getBoundingClientRect().left;
  if ((navLeft === 0)) {
    nav.style.left = '-40rem';
    document.body.classList.remove("active");
  }
});