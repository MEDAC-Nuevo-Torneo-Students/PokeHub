fetch('/html/pokemoninfo.html')
    .then(response => response.text())
    .then(html => {
        // Insert the content into the body in the element with ID 'pokeinfo-container'
        document.getElementById('pokeinfo-container').innerHTML = html;
    });
