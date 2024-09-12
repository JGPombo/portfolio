// Estos son los scripts de mi archivo de JavaScript
// Selecciona el botón
const themeToggleButton = document.getElementById('themeIcon');

// Agrega un evento de clic al botón
themeToggleButton.addEventListener('click', function () {
    // Alterna la clase "dark-mode" en el body
    document.body.classList.toggle('light-mode');
    
    // Cambia el texto del botón
    if (document.body.classList.contains('light-mode')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
});