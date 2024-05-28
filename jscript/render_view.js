
//Traduce los IDs por los nombres de los Pokemon
async function cargarNombresPokemon() {
    //Recoge la etiqueta del html
    const spans = document.querySelectorAll('.pokemon-list #name');
    for (const span of spans) {
        //Recoge el contenido de la etiqueta
        const id = span.textContent.trim();
        try {
            //Llama a la api concatenando el ID
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            const nombre = data.name;
            //Asigna la nueva información al lugar de donde recogió el ID, cambiando su valor
            span.textContent = nombre;
        } catch (error) {
            console.error(`Error al cargar el nombre del Pokémon ${id}:`, error);
            span.textContent = "Desconocido";
        }
    }
}
//Traduce los IDs por las habilidades de los Pokemon
async function cargarAbilitysPokemon() {
    //Recoge la etiqueta del html
    const spans = document.querySelectorAll('.pokemon-list #ability');
    for (const span of spans) {
        //Recoge el contenido de la etiqueta
        const id = span.textContent.trim();
        try {
            //Llama a la api concatenando el ID
            const response = await fetch(`https://pokeapi.co/api/v2/ability/${id}`);
            const data = await response.json();
            const nombre = data.name;
            //Asigna la nueva información al lugar de donde recogió el ID, cambiando su valor
            span.textContent = nombre;
        } catch (error) {
            console.error(`Error al cargar el nombre del Pokémon ${id}:`, error);
            span.textContent = "Desconocido";
        }
    }
}
//Traduce los IDs por los items de los Pokemon
async function cargarItemsPokemon() {
    //Recoge la etiqueta del html
    const spans = document.querySelectorAll('.pokemon-list #item');
    for (const span of spans) {
        //Recoge el contenido de la etiqueta
        const id = span.textContent.trim();
        try {
            //Llama a la api concatenando el ID
            const response = await fetch(`https://pokeapi.co/api/v2/item/${id}`);
            const data = await response.json();
            const nombre = data.name;
            //Asigna la nueva información al lugar de donde recogió el ID, cambiando su valor
            span.textContent = nombre;
        } catch (error) {
            console.error(`Error al cargar el nombre del Pokémon ${id}:`, error);
            span.textContent = "Desconocido";
        }
    }
}
//Traduce los IDs por los movimientos de los Pokemon
async function cargarMovesPokemon() {
    //Recoge la etiqueta del html
    const spans = document.querySelectorAll('.pokemon-list #move');
    for (const span of spans) {
        //Recoge el contenido de la etiqueta
        const id = span.textContent.trim();
        try {
            //Llama a la api concatenando el ID
            const response = await fetch(`https://pokeapi.co/api/v2/move/${id}`);
            const data = await response.json();
            const nombre = data.name;
            //Asigna la nueva información al lugar de donde recogió el ID, cambiando su valor
            span.textContent = nombre;
        } catch (error) {
            console.error(`Error al cargar el nombre del Pokémon ${id}:`, error);
            span.textContent = "Desconocido";
        }
    }
}
//Traduce los IDs por las naturalezas de los Pokemon
async function cargarNaturesPokemon() {
    //Recoge la etiqueta del html
    const spans = document.querySelectorAll('.pokemon-list #nature');
    for (const span of spans) {
        //Recoge el contenido de la etiqueta
        const id = span.textContent.trim();
        try {
            //Llama a la api concatenando el ID
            const response = await fetch(`https://pokeapi.co/api/v2/nature/${id}`);
            const data = await response.json();
            const nombre = data.name;
            //Asigna la nueva información al lugar de donde recogió el ID, cambiando su valor
            span.textContent = nombre;
        } catch (error) {
            console.error(`Error al cargar el nombre del Pokémon ${id}:`, error);
            span.textContent = "Desconocido";
        }
    }
}
//Carga las imagenes de los Pokemon y las inserta en la tarjeta
async function cargarImagenesPokemon() {
    //Recoge la etiqueta del html
    const imgs = document.querySelectorAll('.pokemon-card #imgmove');
    for (const img of imgs) {
        //Recoge el contenido de la etiqueta
        const id = img.getAttribute('data-id');
        try {
            //Llama a la api concatenando el ID
            const response = await fetch(`https://pokeapi.co/api/v2/move/${id}`);
            const data = await response.json();
            const imagenUrl = data.type.name;
            //Asigna la nueva información al lugar de donde recogió el ID, cambiando su valor
            img.src = "https://www.serebii.net/pokedex-sv/type/icon/" + imagenUrl + ".png";
        } catch (error) {
            console.error(`Error al cargar la imagen del Pokémon ${id}:`, error);
            img.src = 'src\img\MissingNo.png';
        }
    }
}

async function calcHpPokemon() {
    //Recoge las etiquetas del html
    const spans = document.querySelectorAll('.pokemon-list #name');
    const hp_totals = document.querySelectorAll('#hp_total');
    const hp_evs = document.querySelectorAll('#hp_evs');
    const hp_ivs = document.querySelectorAll('#hp_ivs');

    for (let i = 0; i < spans.length; i++) {
        const id = spans[i].textContent.trim();
        try {
            //Llama a la api concatenando el ID
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            const hp_base = data.stats[0].base_stat;
            //Recoge las estadisticas que vamos a usar
            const hp_ev = Number(hp_evs[i].textContent);
            const hp_iv = Number(hp_ivs[i].textContent);
            //Hace el calculo de la estadistica total con los datos y lo almacena en su etiqueta total
            hp_totals[i].textContent = Math.floor(0.01 * (2 * hp_base + hp_iv + Math.floor(0.25 * hp_ev)) * 50) + 50 + 10;
        } catch (error) {
            console.error(`Error al cargar el Hp del Pokémon ${id}:`, error);
            hp_totals[i].textContent = "?";
        }
    }
}

async function calcAtkPokemon() {
    //Recoge las etiquetas del html
    const spans = document.querySelectorAll('.pokemon-list #name');
    const natures = document.querySelectorAll('.pokemon-list #nature');
    const atk_totals = document.querySelectorAll('#atk_total');
    const atk_evs = document.querySelectorAll('#atk_evs');
    const atk_ivs = document.querySelectorAll('#atk_ivs');

    for (let i = 0; i < spans.length; i++) {
        const id = spans[i].textContent.trim();
        const idNature = natures[i].textContent.trim();
        try {
            //Llama a la api concatenando el ID
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const nature = await fetch(`https://pokeapi.co/api/v2/nature/${idNature}`)
            const data = await response.json();
            const natureData = await nature.json();
            const natureName = natureData.name;
            const atk_base = data.stats[1].base_stat;
            //Recoge las estadisticas que vamos a usar
            const atk_ev = Number(atk_evs[i].textContent);
            const atk_iv = Number(atk_ivs[i].textContent);
            let natureValue = 1;
            const naturePositive = ["lonely", "adamant", "naughty", "brave"];
            const natureNegative = ["bold", "modest", "calm", "timid"];
            if (naturePositive.includes(natureName)) {
                natureValue = 1.1;
                atk_totals[i].style.color = "red";
            } else if (natureNegative.includes(natureName)) {
                natureValue = 0.9;
                atk_totals[i].style.color = "blue";
            }
            //Hace el calculo de la estadistica total con los datos y lo almacena en su etiqueta total
            atk_totals[i].textContent = Math.floor(((0.01 * (2 * atk_base + atk_iv + Math.floor(0.25 * atk_ev)) * 50) + 5) * natureValue);
        } catch (error) {
            console.error(`Error al cargar el Atk del Pokémon ${id}:`, error);
            atk_totals[i].textContent = "?";
        }
    }
}

async function calcDefPokemon() {
    //Recoge las etiquetas del html
    const spans = document.querySelectorAll('.pokemon-list #name');
    const natures = document.querySelectorAll('.pokemon-list #nature');
    const def_totals = document.querySelectorAll('#def_total');
    const def_evs = document.querySelectorAll('#def_evs');
    const def_ivs = document.querySelectorAll('#def_ivs');

    for (let i = 0; i < spans.length; i++) {
        const id = spans[i].textContent.trim();
        const idNature = natures[i].textContent.trim();
        try {

            //Llama a la api concatenando el ID
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const nature = await fetch(`https://pokeapi.co/api/v2/nature/${idNature}`)
            const data = await response.json();
            const natureData = await nature.json();
            const natureName = natureData.name;
            const def_base = data.stats[2].base_stat;
            //Recoge las estadisticas que vamos a usar
            const def_ev = Number(def_evs[i].textContent);
            const def_iv = Number(def_ivs[i].textContent);
            let natureValue = 1;
            const naturePositive = ["bold", "impish", "lax", "relaxed"];
            const natureNegative = ["lonely", "mild", "gentle", "hasty"];
            if (naturePositive.includes(natureName)) {
                natureValue = 1.1;
                def_totals[i].style.color = "red";
            } else if (natureNegative.includes(natureName)) {
                natureValue = 0.9;
                def_totals[i].style.color = "blue";
            }
            //Hace el calculo de la estadistica total con los datos y lo almacena en su etiqueta total
            def_totals[i].textContent = Math.floor(((0.01 * (2 * def_base + def_iv + Math.floor(0.25 * def_ev)) * 50) + 5) * natureValue);
        } catch (error) {
            console.error(`Error al cargar la Def del Pokémon ${id}:`, error);
            def_totals[i].textContent = "?";
        }
    }
}

async function calcSpAPokemon() {
    //Recoge la etiqueta del html
    const spans = document.querySelectorAll('.pokemon-list #name');
    const natures = document.querySelectorAll('.pokemon-list #nature');
    const spa_totals = document.querySelectorAll('#spa_total');
    const spa_evs = document.querySelectorAll('#spa_evs');
    const spa_ivs = document.querySelectorAll('#spa_ivs');

    for (let i = 0; i < spans.length; i++) {
        const id = spans[i].textContent.trim();
        const idNature = natures[i].textContent.trim();
        try {

            //Llama a la api concatenando el ID
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const nature = await fetch(`https://pokeapi.co/api/v2/nature/${idNature}`)
            const data = await response.json();
            const natureData = await nature.json();
            const natureName = natureData.name;
            const spa_base = data.stats[3].base_stat;
            //Recoge el contenido de la etiqueta
            const spa_ev = Number(spa_evs[i].textContent);
            const spa_iv = Number(spa_ivs[i].textContent);
            let natureValue = 1;
            const naturePositive = ["modest", "mild", "rash", "quiet"];
            const natureNegative = ["adamant", "impish", "careful", "jolly"];
            if (naturePositive.includes(natureName)) {
                natureValue = 1.1;
                spa_totals[i].style.color = "red";
            } else if (natureNegative.includes(natureName)) {
                natureValue = 0.9;
                spa_totals[i].style.color = "blue";
            }
            //Asigna la nueva información al lugar de donde recogió el ID, cambiando su valor
            spa_totals[i].textContent = Math.floor(((0.01 * (2 * spa_base + spa_iv + Math.floor(0.25 * spa_ev)) * 50) + 5) * natureValue);
        } catch (error) {
            console.error(`Error al cargar el SpA del Pokémon ${id}:`, error);
            spa_totals[i].textContent = "?";
        }
    }
}

async function calcSpDPokemon() {
    //Recoge la etiqueta del html
    const spans = document.querySelectorAll('.pokemon-list #name');
    const natures = document.querySelectorAll('.pokemon-list #nature');
    const spd_totals = document.querySelectorAll('#spd_total');
    const spd_evs = document.querySelectorAll('#spd_evs');
    const spd_ivs = document.querySelectorAll('#spd_ivs');

    for (let i = 0; i < spans.length; i++) {
        const id = spans[i].textContent.trim();
        const idNature = natures[i].textContent.trim();
        try {

            //Llama a la api concatenando el ID
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const nature = await fetch(`https://pokeapi.co/api/v2/nature/${idNature}`)
            const data = await response.json();
            const natureData = await nature.json();
            const natureName = natureData.name;
            const spd_base = data.stats[4].base_stat;
            //Recoge el contenido de la etiqueta
            const spd_ev = Number(spd_evs[i].textContent);
            const spd_iv = Number(spd_ivs[i].textContent);
            let natureValue = 1;
            const naturePositive = ["calm", "gentle", "careful", "sassy"];
            const natureNegative = ["naughty", "lax", "rash", "naive"];
            console.log(natureName);
            if (naturePositive.includes(natureName)) {
                natureValue = 1.1;
                spd_totals[i].style.color = "red";
            } else if (natureNegative.includes(natureName)) {
                natureValue = 0.9;
                spd_totals[i].style.color = "blue";
            }
            //Asigna la nueva información al lugar de donde recogió el ID, cambiando su valor
            spd_totals[i].textContent = Math.floor(((0.01 * (2 * spd_base + spd_iv + Math.floor(0.25 * spd_ev)) * 50) + 5) * natureValue);
        } catch (error) {
            console.error(`Error al cargar la SpD del Pokémon ${id}:`, error);
            spd_totals[i].textContent = "?";
        }
    }
}

async function calcSpePokemon() {
    //Recoge la etiqueta del html
    const spans = document.querySelectorAll('.pokemon-list #name');
    const natures = document.querySelectorAll('.pokemon-list #nature');
    const spe_totals = document.querySelectorAll('#spe_total');
    const spe_evs = document.querySelectorAll('#spe_evs');
    const spe_ivs = document.querySelectorAll('#spe_ivs');

    for (let i = 0; i < spans.length; i++) {
        const id = spans[i].textContent.trim();
        const idNature = natures[i].textContent.trim();
        try {

            //Llama a la api concatenando el ID
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const nature = await fetch(`https://pokeapi.co/api/v2/nature/${idNature}`)
            const data = await response.json();
            const natureData = await nature.json();
            const natureName = natureData.name;
            const spe_base = data.stats[5].base_stat;
            //Recoge el contenido de la etiqueta
            const spe_ev = Number(spe_evs[i].textContent);
            const spe_iv = Number(spe_ivs[i].textContent);
            let natureValue = 1;
            const naturePositive = ["timid", "hasty", "jolly", "naive"];
            const natureNegative = ["brave", "relaxed", "quiet", "sassy"];
            if (naturePositive.includes(natureName)) {
                natureValue = 1.1;
                spe_totals[i].style.color = "red";
            } else if (natureNegative.includes(natureName)) {
                natureValue = 0.9;
                spe_totals[i].style.color = "blue";
            }
            //Asigna la nueva información al lugar de donde recogió el ID, cambiando su valor
            spe_totals[i].textContent = Math.floor(((0.01 * (2 * spe_base + spe_iv + Math.floor(0.25 * spe_ev)) * 50) + 5) * natureValue);
        } catch (error) {
            console.error(`Error al cargar la Spe del Pokémon ${id}:`, error);
            spe_totals[i].textContent = "?";
        }
    }
}

// Muestra un spinner de carga
function mostrarContainers() {
    const elementos = document.querySelectorAll('.container');
    elementos.forEach(elemento => {
        elemento.style.opacity = 1;
    });
}

function mostrarSpinner() {
    const spinner = document.querySelector(".loader");
    spinner.style.opacity = 1;
}

function ocultarSpinner() {
    const spinner = document.querySelector(".loader");
    spinner.style.opacity = 0;
}

// Oculta el spinner de carga
function ocultarContainers() {
    const elementos = document.querySelectorAll('.container');
    elementos.forEach(elemento => {
        elemento.style.opacity = 0;
    });
}


async function cargarDatosPokemon() {
    console.log("Iniciando carga de datos...");
    ocultarContainers();

    // Establecer un temporizador para mostrar el spinner después de 2 segundos
    const spinnerTimeout = setTimeout(() => {
        mostrarSpinner();
    }, 500);

    try {
        await Promise.all([
            cargarImagenesPokemon(),
            cargarItemsPokemon(),
            cargarNombresPokemon(),
            cargarAbilitysPokemon(),
            cargarMovesPokemon(),
            cargarNaturesPokemon(),
            calcHpPokemon(),
            calcAtkPokemon(),
            calcDefPokemon(),
            calcSpAPokemon(),
            calcSpDPokemon(),
            calcSpePokemon()
        ]);
        console.log("Datos cargados correctamente.");
        mostrarContainers(); // Muestra los contenedores después de cargar los datos
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        // Maneja el error aquí (por ejemplo, mostrar un mensaje de error)
    } finally {
        // Limpiar el temporizador para mostrar el spinner
        clearTimeout(spinnerTimeout);
        ocultarSpinner(); // Asegúrate de ocultar el spinner después de cargar los contenedores
    }
}



// Llama a cargarDatosPokemon cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', cargarDatosPokemon);