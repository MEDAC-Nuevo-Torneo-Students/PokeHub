document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const btnSwitch = document.querySelector('.switch');
        const header = document.querySelector('.header');
        const menupokemoninfo = document.querySelector('.menu-pokeinfo');
        const homechat = document.querySelector('.menu-chat');
        const homesuggest = document.querySelector('.menu-expanded');
        const homechaticon = document.querySelector('.icon-message');

        btnSwitch.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            btnSwitch.classList.toggle('active');
            header.classList.toggle('purple-background')
            menupokemoninfo.classList.toggle('dark-background')
            homechat.classList.toggle('dark-background')
            homesuggest.classList.toggle('dark-background')
            homechaticon.classList.toggle('.messages-white')
            
            
            ; // Agrega o elimina la clase según sea necesario
        });
    }, 50); // Espera 500 ms antes de ejecutar la función
});
