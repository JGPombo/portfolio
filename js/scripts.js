// Estos son los scripts de mi archivo de JavaScript
console.log("hola"); 
// Selecciona el botón
const themeToggleButton = document.getElementById('themeImage');

// Agrega un evento de clic al botón
themeToggleButton.addEventListener('click', function () {
    // Alterna la clase "dark-mode" en el body
    document.body.classList.toggle('light-mode');
    
    // Cambia el texto del botón
    if (document.body.classList.contains('light-mode')) {
        themeImage.src = 'ico/moon.png';
    } else {
        themeImage.src = 'ico/sun.png';
    }
});