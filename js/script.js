const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile');

// Adding event listener for hamburger button

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

document.addEventListener('click', (event) => {

    if (!event.target.classList.contains('active')) {
        hamburger.classList.remove('active')
        mobileMenu.classList.remove('active')
    }
});