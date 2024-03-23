fetch('/html/login.html')
            .then(response => response.text())
            .then(html => {
                const temp = document.createElement('div');
                temp.innerHTML = html;
                const newContent = temp.querySelector('main').innerHTML;
                document.querySelector('main').innerHTML = newContent;

                // Agregar el event listener para el enlace de registro
                document.getElementById('register_link').addEventListener('click', loadRegisterContent);

                // Eliminar el event listener del enlace de volver al login
                document.getElementById('back_to_login_link').removeEventListener('click', loadLoginContent);
            })
            .catch(error => {
                console.error('Error al cargar el contenido del login:', error);
            });