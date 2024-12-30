// Adiciona a funcionalidade do menu toggle
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');  // Alterna a classe 'active' que expande o menu
});
