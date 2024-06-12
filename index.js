const burger = document.querySelector('.burger-menu');
burger.addEventListener('click', openNav);

function openNav() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
}
