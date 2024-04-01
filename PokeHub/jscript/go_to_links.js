document.addEventListener('DOMContentLoaded', function() {
    // Define la función para cargar dinámicamente el contenido del registro
    function loadRegisterContent() {
        fetch('/html/register.html')
            .then(response => response.text())
            .then(html => {
                const temp = document.createElement('div');
                temp.innerHTML = html;
                const newContent = temp.querySelector('main').innerHTML;
                document.querySelector('main').innerHTML = newContent;

                // Agregar el event listener para el enlace de volver al login
                document.getElementById('back_to_login_link').addEventListener('click', loadLoginContent);

                // Eliminar el event listener del enlace de registro
                document.getElementById('register_link').removeEventListener('click', loadRegisterContent);
            })
            .catch(error => {
                console.error('Error al cargar el contenido del registro:', error);
            });
    }

    // Define la función para cargar dinámicamente el contenido del login
    function loadLoginContent() {
        fetch('/html/login.html')
            .then(response => response.text())
            .then(html => {
                const temp = document.createElement('div');
                temp.innerHTML = html;
                const newContent = temp.querySelector('main').innerHTML;
                document.querySelector('main').innerHTML = newContent;
    
                // Agregar el event listener para el enlace de registro
                document.getElementById('register_link').addEventListener('click', loadRegisterContent);
    
                // Eliminar el event listener del enlace de volver al login, si existe
                const backToLoginLink = document.getElementById('back_to_login_link');
                if (backToLoginLink) {
                    backToLoginLink.removeEventListener('click', loadLoginContent);
                }
            })
            .catch(error => {
                console.error('Error al cargar el contenido del login:', error);
            });
    }
    // Carga el login al inicar la web
    loadLoginContent();

    // Agrega el event listener para el enlace de registro
    document.getElementById('register_link').addEventListener('click', loadRegisterContent);

    // Agrega el event listener para el enlace de volver al login desde la página de registro
    const backToLoginLink = document.getElementById('back_to_login_link');
    if (backToLoginLink) {
        backToLoginLink.addEventListener('click', function() {
            loadLoginContent();
        });
    }
});

