fetch('/html/login.html')
    .then(response => response.text())
    .then(html => {
        const temp = document.createElement('div');
        temp.innerHTML = html;
        const newContent = temp.querySelector('main').innerHTML;
        document.querySelector('main').innerHTML = newContent;

        // Add event listener for the register link
        document.getElementById('register_link').addEventListener('click', loadRegisterContent);

        // Remove event listener for the back to login link
        document.getElementById('back_to_login_link').removeEventListener('click', loadLoginContent);
    })
    .catch(error => {
        console.error('Error loading login content:', error);
    });
