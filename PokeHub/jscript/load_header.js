fetch('/html/header.html')
    .then(response => response.text())
    .then(html => {
        // Crear un elemento temporal para contener el HTML y extraer el contenido del main
        const tempElement = document.createElement('div');
        tempElement.innerHTML = html;
        
        // Obtener el contenido dentro de la etiqueta <main>
        const mainContent = tempElement.querySelector('main').innerHTML;
        
        // Insertar el contenido dentro de la etiqueta <main> en el elemento con ID 'footer-container'
        document.getElementById('header-container').innerHTML = mainContent;
    });