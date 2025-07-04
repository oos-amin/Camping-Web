const toggleBtn = document.querySelector('.mobile-menu__toggle');
const mobileMenu = document.querySelector('.mobile-menu');

let menuIsOpen = false;

toggleBtn.addEventListener('click', () => {
    if (!menuIsOpen) {
        mobileMenu.style.left = '0';
        toggleBtn.classList.add('is-open');
    } else {
        mobileMenu.style.left = '-25rem';
        toggleBtn.classList.remove('is-open');
    }

    menuIsOpen = !menuIsOpen;
});
