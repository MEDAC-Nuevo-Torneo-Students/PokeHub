setTimeout(function() {
    // Selecciona todos los elementos con la clase "pokeframe" y agrega un evento de clic a cada uno
    document.querySelectorAll(".pokeframe").forEach(function(element) {
        element.addEventListener("click", function() {
            // Si el elemento clicado ya tiene la clase "clicked", la eliminamos; de lo contrario, la añadimos
            if (this.classList.contains("clicked")) {
                this.classList.remove("clicked");
            } else {
                // Remueve la clase "clicked" de todos los elementos con la clase "pokeframe"
                document.querySelectorAll(".pokeframe").forEach(function(el) {
                    el.classList.remove("clicked");
                });
                // Añade la clase "clicked" solo al elemento clicado
                this.classList.add("clicked");

                // Obtener el poke-id del atributo personalizado poke-id
                const pokeId = this.getAttribute('poke-id');

                // Hacer la solicitud a la API de PokeAPI
                fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
                    .then(response => response.json())
                    .then(data => {
                        // Obtener el nombre del Pokémon
                        const pokemonName = data.name;
                        const pokemonImage = data.sprites.front_default;

                        

                        // Insertar el nombre del Pokémon en el elemento h2 con id "pokemonName"
                        document.getElementById("pokemonName").innerText = pokemonName;

                        // Insertar la imagen del Pokémon en el elemento img con id "pokemonImage"
                        document.getElementById("pokemonImage").src = pokemonImage;
                    })
                    .catch(error => {
                        console.error('Error al obtener datos de la API:', error);
                    });
            }
        });
    });
}, 500);
