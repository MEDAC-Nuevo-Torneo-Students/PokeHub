document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded");

    // Select all elements with the class "pokeframe"
    const pokeframes = document.querySelectorAll(".pokeframe");
    console.log("Number of .pokeframe elements:", pokeframes.length);
    
    // Iterate over each pokeframe element
    pokeframes.forEach(function(element) {
        // Get the Pokémon ID from the custom attribute 'poke-id'
        const pokeId = element.getAttribute('poke-id');
        console.log("Pokémon ID:", pokeId);

        // Fetch Pokémon data from PokeAPI using the ID
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
            .then(response => {
                // Check if the response is successful
                if (!response.ok) {
                    throw new Error('Request failed');
                }
                return response.json();
            })
            .then(data => {
                console.log("Pokemon data:", data);

                // Get the URL of the Pokémon's image
                const pokemonImageUrl = data.sprites.front_default;
                console.log("Image URL:", pokemonImageUrl);

                // Find the img element within the pokeframe
                const imgElement = element.querySelector('img');
                console.log("Image element:", imgElement);

                // Update the src and alt attributes of the img element with the Pokémon's image
                if (imgElement) {
                    imgElement.src = pokemonImageUrl;
                    imgElement.alt = data.name;
                    console.log("Image updated");
                } else {
                    console.error("Image element not found.");
                }
            })
            .catch(error => {
                console.error('Error fetching data from the API:', error);
            });
    });
});
