document.addEventListener('DomContentLoaded', () => {
    
    const menuButton = document.querySelectorById('menu-button');
    const mobileMenu = document.querySelectorById('mobile-menu');

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