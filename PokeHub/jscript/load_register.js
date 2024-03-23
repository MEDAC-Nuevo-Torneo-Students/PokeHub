document.getElementById('register_link').addEventListener('click', function() {
    fetch('/html/register.html')
        .then(response => response.text())
        .then(html => {
            // Crear un elemento temporal para cargar el HTML
            const temp = document.createElement('div');
            temp.innerHTML = html;

            // Seleccionar el contenido deseado dentro del HTML cargado
            const newContent = temp.querySelector('main').innerHTML;

            // Reemplazar el contenido actual de la etiqueta <main> con el contenido cargado
            document.querySelector('main').innerHTML = newContent;
        })
        .catch(error => {
            console.error('Error al cargar el contenido:', error);
        });
});