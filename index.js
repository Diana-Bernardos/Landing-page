const themeButton = document.getElementById('theme-button');
const themeIcon = document.getElementById('theme-icon');
const menuButton = document.querySelector('.menu-button');
const dropdown = document.querySelector('.dropdown');

menuButton.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Al hacer clic en el botón de tema
themeButton.addEventListener('click', () => {
    // Alternar entre el tema claro y oscuro
    document.body.classList.toggle('light-theme');
    
    // Cambiar el icono dependiendo del tema actual
    if (document.body.classList.contains('light-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun'); // Cambiar a icono de sol
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon'); // Volver a icono de luna
    }
});




