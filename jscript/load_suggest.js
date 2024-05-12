fetch('/html/home_suggests.html')
    .then(response => response.text())
    .then(html => {
        // Create a temporary element to contain the HTML and extract the content of the main
        const tempElement = document.createElement('div');
        tempElement.innerHTML = html;
        
        // Get the content inside the <main> tag
        const mainContent = tempElement.querySelector('main').innerHTML;
        
        // Insert the content inside the <main> tag into the element with ID 'suggests-container'
        document.getElementById('suggests-container').innerHTML = mainContent;
    });
