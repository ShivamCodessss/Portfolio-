document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menuOptions = document.querySelector('.menu_options ul');

    menuToggle.addEventListener('change', () => {
        if (menuToggle.checked) {
            menuOptions.style.display = 'flex';
        } else {
            menuOptions.style.display = 'none';
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menuOptions.style.display = 'flex';
        } else {
            if (!menuToggle.checked) {
                menuOptions.style.display = 'none';
            }
        }
    });
});
