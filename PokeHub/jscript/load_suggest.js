fetch('/html/home_suggests.html')
                .then(response => response.text())
                .then(html => {
                    document.getElementById('suggests').innerHTML = html;
                });