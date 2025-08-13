const toggleBtn = document.querySelector('.mobile-menu__toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');

let menuIsOpen = false;

// Hamburger Menu
toggleBtn.addEventListener('click', () => {
    if (!menuIsOpen) {
        mobileMenu.style.left = '0';
        toggleBtn.classList.add('is-open');
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
        mobileMenu.style.left = '-25rem';
        toggleBtn.classList.remove('is-open');
    }

    menuIsOpen = !menuIsOpen;
});

// Overlay Close Section
overlay.addEventListener('click', function () {
    overlay.style.display = 'none';
    mobileMenu.style.left = '-25rem';
    toggleBtn.classList.remove('is-open');
});

// Escape Button
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && ) {
        overlay.style.display = 'none';
        mobileMenu.style.left = '-25rem';
        toggleBtn.classList.remove('is-open');
    }
});

