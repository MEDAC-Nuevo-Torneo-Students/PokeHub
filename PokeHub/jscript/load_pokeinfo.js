fetch('/html/pokemoninfo.html')
    .then(response => response.text())
    .then(html => {
        // Insertar el contenido dentro del body en el elemento con ID 'pokeinfo-container'
        document.getElementById('pokeinfo-container').innerHTML = html;
    });