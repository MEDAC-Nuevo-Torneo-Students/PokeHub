document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const btnSwitch = document.querySelector('.switch');
        const header = document.querySelector('.header');

        btnSwitch.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            btnSwitch.classList.toggle('active');
            header.classList.toggle('purple-background'); // Agrega o elimina la clase según sea necesario
        });
    }, 50); // Espera 500 ms antes de ejecutar la función
});