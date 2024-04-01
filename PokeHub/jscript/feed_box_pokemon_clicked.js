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
            }
        });
    });
}, 500);