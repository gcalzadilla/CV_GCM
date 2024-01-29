document.addEventListener('DOMContentLoaded', function() {
    const toggleMenuButton = document.getElementById('toggleMenu');
    const mainMenu = document.getElementById('mainMenu');

    toggleMenuButton.addEventListener('click', function() {
        mainMenu.classList.toggle('show-menu');
    });
});