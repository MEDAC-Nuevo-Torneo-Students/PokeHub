setTimeout(function() {
    // Select all elements with the class "pokeframe" and add a click event to each one
    document.querySelectorAll(".pokeframe").forEach(function(element) {
        element.addEventListener("click", function() {
            // If the clicked element already has the "clicked" class, remove it; otherwise, add it
            if (this.classList.contains("clicked")) {
                this.classList.remove("clicked");
            } else {
                // Remove the "clicked" class from all elements with the class "pokeframe"
                document.querySelectorAll(".pokeframe").forEach(function(el) {
                    el.classList.remove("clicked");
                });
                // Add the "clicked" class only to the clicked element
                this.classList.add("clicked");

                // Get the poke-id from the custom attribute poke-id
                const pokeId = this.getAttribute('poke-id');


                // Make the request to the PokeAPI
                fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
            .then(response => response.json())
            .then(data => {
                // Obtener el nombre del Pokémon
                const pokemonName = data.name;
                // Obtener la imagen del Pokémon
                const pokemonImage = data.sprites.front_default;
                // Obtener el tipo del Pokémon en el slot 1
                const type1 = data.types.find(type => type.slot === 1).type.name;
                // Obtener el tipo del Pokémon en el slot 2 (si existe)
                const type2Slot = data.types.find(type => type.slot === 2);
                const type2 = type2Slot ? type2Slot.type.name : null;
            
                // Insertar el nombre del Pokémon en el elemento h2 con el id "pokemonName"
                document.getElementById("pokemonName").innerText = pokemonName;
            
                // Insertar la imagen del Pokémon en el elemento img con el id "pokemonImage"
                document.getElementById("pokemonImage").src = pokemonImage;
                
                // Crear un elemento de imagen para el tipo 1
                const type1Img = document.createElement('img');
                type1Img.src = `/src/img/${type1}.png`;
                // Crear un elemento de imagen para el tipo 2 (si existe)
                if (type2) {
                    const type2Img = document.createElement('img');
                    type2Img.src = `/src/img/${type2}.png`;
                
                    // Seleccionar el div con la clase "types"
                    const typesDiv = document.querySelector('.types');
                
                    // Eliminar cualquier imagen existente dentro del div
                    typesDiv.innerHTML = '';
                
                    // Añadir las nuevas imágenes al div
                    typesDiv.appendChild(type1Img);
                    typesDiv.appendChild(type2Img);
                } else {
                    // Si el Pokémon solo tiene un tipo, añadir solo la imagen del tipo 1
                    const typesDiv = document.querySelector('.types');
                    typesDiv.innerHTML = '';
                    typesDiv.appendChild(type1Img);
                }
            })
            .catch(error => {
                console.error('Error al obtener los datos del Pokémon:', error);
            });
            }
        });
    });
}, 500);
