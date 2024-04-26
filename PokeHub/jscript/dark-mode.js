document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const btnSwitch = document.querySelector('.switch');
        const header = document.querySelector('.header');
        const menupokemoninfo = document.querySelector('.menu-pokeinfo');
        const homechat = document.querySelector('.menu-chat');
        const homesuggest = document.querySelector('.menu-expanded');
        const homechaticon = document.querySelector('.icon-message');
        const isDarkMode = localStorage.getItem('darkMode') === 'true';

        // Función para activar el modo oscuro
        const enableDarkMode = () => {
            document.body.classList.add('dark');
            btnSwitch.classList.add('active');
            header.classList.add('purple-background');
            menupokemoninfo.classList.add('dark-background');
            homechat.classList.add('dark-background');
            homesuggest.classList.add('dark-background');
            homechaticon.classList.add('messages-white');
            localStorage.setItem('darkMode', 'true');
        };

        // Función para desactivar el modo oscuro
        const disableDarkMode = () => {
            document.body.classList.remove('dark');
            btnSwitch.classList.remove('active');
            header.classList.remove('purple-background');
            menupokemoninfo.classList.remove('dark-background');
            homechat.classList.remove('dark-background');
            homesuggest.classList.remove('dark-background');
            homechaticon.classList.remove('messages-white');
            localStorage.setItem('darkMode', 'false');
        };

        // Verificar si el modo oscuro está activado
        if (isDarkMode) {
            enableDarkMode();
        }

        // Agregar evento de clic para cambiar el modo
        btnSwitch.addEventListener('click', () => {
            if (document.body.classList.contains('dark')) {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        });
    }, 50); // Espera 50 ms antes de ejecutar la función
});

