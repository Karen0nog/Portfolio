document.addEventListener('DOMContentLoaded', () => {

    const mobileMenuButton = document.querySelector('#mobile-menu-button');
    const mobileMenu = document.querySelector('#mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('show-mobile-menu');
        });
    }

    const menuBtn = document.querySelector('#menu-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    if(menuBtn && dropdownContent) {
        menuBtn.addEventListener('click',(event) => {
            event.stopPropagation();
            dropdownContent.classList.toggle('show');
        });

        document.addEventListener('click', (event) => {
            if(!menuBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
                dropdownContent.classList.remove('show');
            }
        });
    }

    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-link-contact');

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu) {
                mobileMenu.classList.remove('show-mobile-menu');
            }
        });
    });
});

console.log()