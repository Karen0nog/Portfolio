document.addEventListener('DOMContentLoaded', function() {
        
  
  // Scroll reveal
  const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {

            if(entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });

    }, observerOptions);
    revealElements.forEach(element => {
        scrollObserver.observe(element);
    });

    // Remove a classe 'hidden' da navbar após animação
    const navbar = document.querySelector(".navbar");
     if (navbar) {
       setTimeout(() => {
         navbar.classList.remove("hidden");
       }, 400);
     }

    });
