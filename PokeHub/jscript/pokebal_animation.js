fetch('/html/header.html')
    .then(response => response.text())
    .then(html => {
        // Agregar un retraso de 500ms para asegurarnos de que el contenido dinámico se haya cargado completamente
        setTimeout(() => {
            // Ahora que ha pasado el tiempo de espera, podemos acceder al elemento circle y agregar el event listener
            const circleElement = document.getElementById('circle');
            circleElement.addEventListener("click", function() {
                document.querySelector('#header').classList.toggle("active");
                document.querySelector('#footer').classList.toggle("active");
                document.querySelector('#logo').classList.toggle("active");
                document.querySelector('#copyright').classList.toggle("active");
            });
        }, 500); // Tiempo de espera en milisegundos
    });
