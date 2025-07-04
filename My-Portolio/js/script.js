// Espera o HTML carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // Pega todos os botões da navbar
    const navButtons = document.querySelectorAll('.navbar-link');
    
    // Pega todas as seções (páginas)
    const sections = document.querySelectorAll('[data-page]');
    
    // Adiciona evento de clique para cada botão
    navButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            
            // Remove 'active' de todos os botões
            navButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            
            // Remove 'active' de todas as seções
            sections.forEach(function(section) {
                section.classList.remove('active');
            });
            
            // Adiciona 'active' no botão clicado
            this.classList.add('active');
            
            // Descobre qual seção mostrar
            const buttonText = this.textContent.toLowerCase();
            let targetSection = '';
            
            if (buttonText === 'sobre') {
                targetSection = 'about';
            } else if (buttonText === 'currículo') {
                targetSection = 'resume';
            } else if (buttonText === 'portfólio') {
                targetSection = 'portfolio';
            } else if (buttonText === 'contato') {
                targetSection = 'contact';
            }
            
            // Mostra a seção correspondente
            const sectionToShow = document.querySelector(`[data-page="${targetSection}"]`);
            if (sectionToShow) {
                sectionToShow.classList.add('active');
            }
        });
    });
});