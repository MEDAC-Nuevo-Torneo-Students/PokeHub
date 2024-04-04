document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM cargado");

    const pokeframes = document.querySelectorAll(".pokeframe");
    console.log("Número de elementos .pokeframe:", pokeframes.length);
    
    pokeframes.forEach(function(element) {
        const pokeId = element.getAttribute('poke-id');
        console.log("ID del Pokémon:", pokeId);

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('La solicitud falló');
                }
                return response.json();
            })
            .then(data => {
                console.log("Datos del Pokémon:", data);

                const pokemonImageUrl = data.sprites.front_default;
                console.log("URL de la imagen:", pokemonImageUrl);

                const imgElement = element.querySelector('img');
                console.log("Elemento de imagen:", imgElement);

                if (imgElement) {
                    imgElement.src = pokemonImageUrl;
                    imgElement.alt = data.name;
                    console.log("Imagen actualizada");
                } else {
                    console.error("No se encontró el elemento de imagen.");
                }
            })
            .catch(error => {
                console.error('Error al obtener datos de la API:', error);
            });
    });
});
