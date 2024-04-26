document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const iconperfil = document.querySelector('.icons-user');
       

        iconperfil.addEventListener('click', () => {
            iconperfil.classList.toggle('show');
            
        });
    }, 200); // Espera 50 ms antes de ejecutar la función
});
