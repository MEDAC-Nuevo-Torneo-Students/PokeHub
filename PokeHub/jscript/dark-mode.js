document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const btnSwitch = document.querySelector('.switch');
        const header = document.querySelector('.header');
        const menupokemoninfo = document.querySelector('.menu-pokeinfo');
        const homechat = document.querySelector('.menu-chat');
        const homesuggest = document.querySelector('.menu-expanded');
        const homechaticon = document.querySelector('.icon-message');
        const profiledropdown = document.querySelector('.dropdown');
        const dropdownhover = document.querySelector('.dropdown li:hover');
        const isDarkMode = localStorage.getItem('darkMode') === 'true';

        // Función para activar el modo oscuro
        const enableDarkMode = () => {
            document.body.classList.add('dark');
            btnSwitch.classList.add('active');
            header.classList.add('purple-background');
            if (menupokemoninfo) {
                menupokemoninfo.classList.add('dark-background');
            }
            if (homechat) {
                homechat.classList.add('dark-background');
            }
            if (homesuggest) {
                homesuggest.classList.add('dark-background');
            }
            if (homechaticon) {
                homechaticon.classList.add('messages-white');
            }
            profiledropdown.classList.add('purple-background');
            localStorage.setItem('darkMode', 'true');
        };

        // Función para desactivar el modo oscuro
        const disableDarkMode = () => {
            document.body.classList.remove('dark');
            btnSwitch.classList.remove('active');
            header.classList.remove('purple-background');
            if (menupokemoninfo) {
                menupokemoninfo.classList.remove('dark-background');
            }
            if (homechat) {
                homechat.classList.remove('dark-background');
            }
            if (homesuggest) {
                homesuggest.classList.remove('dark-background');
            }
            if (homechaticon) {
                homechaticon.classList.remove('messages-white');
            }
            profiledropdown.classList.remove('purple-background');
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
    }, 80); // Espera 100 ms antes de ejecutar la función
});
