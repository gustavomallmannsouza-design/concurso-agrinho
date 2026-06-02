// Aguarda o carregamento total do HTML antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. EFEITO DE ROLAGEM SUAVE (SMOOTH SCROLL)
    const linksMenu = document.querySelectorAll('nav a');

    linksMenu.forEach(link => {
        link.addEventListener('click', (
