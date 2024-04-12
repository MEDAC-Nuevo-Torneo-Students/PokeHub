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
                        // Get the name of the Pokémon
                        const pokemonName = data.name;
                        // Get the Pokémon's image
                        const pokemonImage = data.sprites.front_default;

                        // Insert the Pokémon's name into the h2 element with id "pokemonName"
                        document.getElementById("pokemonName").innerText = pokemonName;

                        // Insert the Pokémon's image into the img element with id "pokemonImage"
                        document.getElementById("pokemonImage").src = pokemonImage;
                    })
                    .catch(error => {
                        console.error('Error fetching data from the API:', error);
                    });
            }
        });
    });
}, 500);
