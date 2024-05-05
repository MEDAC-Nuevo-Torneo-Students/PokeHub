document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const iconperfil = document.querySelector('.icons-user');
        const dropdown = document.querySelector('.dropdown');

        iconperfil.addEventListener('click', () => {
            iconperfil.classList.toggle('active');
            dropdown.classList.toggle('active');
        });

        // Detener la propagación del evento de clic en los elementos secundarios del dropdown
        dropdown.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    }, 50); // Espera 50 ms antes de ejecutar la función
});
