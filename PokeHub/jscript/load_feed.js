document.addEventListener('DOMContentLoaded', function() {
    fetch('/html/home_feed.html')
        .then(response => response.text())
        .then(html => {
            // Create a temporary element to contain the HTML and extract the content of the main tag
            const tempElement = document.createElement('div');
            tempElement.innerHTML = html;
            
            // Get the content inside the <main> tag
            const mainContent = tempElement.querySelector('main').innerHTML;
            
            // Insert the content inside the <main> tag into the element with ID 'feed-container'
            document.getElementById('feed-container').innerHTML = mainContent;

        });
});
