document.addEventListener('DOMContentLoaded', () => {

    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    const mobileLinks = mobileMenu.querySelectorAll('a.mobile-nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () =>{
            mobileMenu.classList.add('hidden');
        });
    });
});