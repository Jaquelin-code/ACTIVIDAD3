const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('modo-oscuro');
    
    if (document.body.classList.contains('modo-oscuro')) {
        localStorage.setItem('modoOscuro', true);
        darkModeToggle.textContent = 'Modo Claro';
    } else {
        localStorage.removeItem('modoOscuro');
        darkModeToggle.textContent = 'Modo Oscuro';
    }
});

function verificarModoOscuro() {
    const modoOscuro = localStorage.getItem('modoOscuro');
    
    if (modoOscuro) {
        document.body.classList.add('modo-oscuro');
        darkModeToggle.textContent = 'Modo Claro';
    } else {
        document.body.classList.remove('modo-oscuro');
        darkModeToggle.textContent = 'Modo Oscuro';
    }
}

window.onload = function() {
    addImageHoverEffect(); 
    verificarModoOscuro();
};
