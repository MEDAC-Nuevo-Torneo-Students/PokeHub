async function cargarNombresPokemon() {
    const spans = document.querySelectorAll('.pokemon-list #name');
    for (const span of spans) {
        const id = span.textContent.trim();
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            const nombre = data.name;
            span.textContent = nombre;
        } catch (error) {
            console.error(`Error al cargar el nombre del Pokémon ${id}:`, error);
            span.textContent = "Desconocido";
        }
    }
}
async function cargarAbilitysPokemon() {
    const spans = document.querySelectorAll('.pokemon-list #ability');
    for (const span of spans) {
        const id = span.textContent.trim();
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/ability/${id}`);
            const data = await response.json();
            const nombre = data.name;
            span.textContent = nombre;
        } catch (error) {
            console.error(`Error al cargar el nombre del Pokémon ${id}:`, error);
            span.textContent = "Desconocido";
        }
    }
        }
async function cargarItemsPokemon() {
    const spans = document.querySelectorAll('.pokemon-list #item');
    for (const span of spans) {
        const id = span.textContent.trim();
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/item/${id}`);
            const data = await response.json();
            const nombre = data.name;
            span.textContent = nombre;
        } catch (error) {
            console.error(`Error al cargar el nombre del Pokémon ${id}:`, error);
            span.textContent = "Desconocido";
        }
    }
        }
async function cargarMovesPokemon() {
    const spans = document.querySelectorAll('.pokemon-list #move');
    for (const span of spans) {
        const id = span.textContent.trim();
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/move/${id}`);
            const data = await response.json();
            const nombre = data.name;
            span.textContent = nombre;
        } catch (error) {
            console.error(`Error al cargar el nombre del Pokémon ${id}:`, error);
            span.textContent = "Desconocido";
        }
    }
        }
        
async function cargarNaturesPokemon() {
    const spans = document.querySelectorAll('.pokemon-list #nature');
    for (const span of spans) {
        const id = span.textContent.trim();
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/nature/${id}`);
            const data = await response.json();
            const nombre = data.name;
            span.textContent = nombre;
        } catch (error) {
            console.error(`Error al cargar el nombre del Pokémon ${id}:`, error);
            span.textContent = "Desconocido";
        }
    }
        }
async function cargarImagenesPokemon() {
    const imgs = document.querySelectorAll('.pokemon-card #imgmove');
    for (const img of imgs) {
        const id = img.getAttribute('data-id');
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/move/${id}`);
            const data = await response.json();
            const imagenUrl = data.type.name;
            img.src = "https://www.serebii.net/pokedex-sv/type/icon/"+imagenUrl+".png";
        } catch (error) {
            console.error(`Error al cargar la imagen del Pokémon ${id}:`, error);
            img.src = 'src\img\MissingNo.png';
        }
    }
}

cargarImagenesPokemon();
cargarItemsPokemon();
cargarNombresPokemon();
cargarAbilitysPokemon();
cargarMovesPokemon();
cargarNaturesPokemon();
