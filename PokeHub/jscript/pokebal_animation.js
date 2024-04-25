fetch('/html/header.html')
    .then(response => response.text())
    .then(html => {
        // Add a delay of 500ms to ensure that the dynamic content is fully loaded
        setTimeout(() => {
            // Now that the waiting time has passed, we can access the circle element and add the event listener
            const circleElement = document.getElementById('circle');
            circleElement.addEventListener("click", function() {
                document.querySelector('#header').classList.toggle("active");
                document.querySelector('#footer').classList.toggle("active");
                document.querySelector('#logo').classList.toggle("active");
                document.querySelector('#copyright').classList.toggle("active");
                document.querySelector('.switch').classList.toggle("active");
                document.querySelector('.icons-user').classList.toggle("active");
            });
        }, 500); // Waiting time in milliseconds
    });
