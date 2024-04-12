document.getElementById('register_link').addEventListener('click', function() {
    fetch('/html/register.html')
        .then(response => response.text())
        .then(html => {
            // Create a temporary element to load the HTML
            const temp = document.createElement('div');
            temp.innerHTML = html;

            // Select the desired content within the loaded HTML
            const newContent = temp.querySelector('main').innerHTML;

            // Replace the current content of the <main> tag with the loaded content
            document.querySelector('main').innerHTML = newContent;
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
});
