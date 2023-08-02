// courseInfo.js

let lindyHop = document.getElementById('lindyHop');

const displayContainer = document.getElementById('display');

function fetchAndDisplayData(jsonFile) {
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            let htmlContent = '';
            data.forEach(course => {
                htmlContent += `
                    <div class="courseInfo">
                        <h3>${course.title}</h3>
                        <p>活動名稱: ${course.name}</p>
                        <p>活動地址: ${course.address}</p>
                        <p>活動時間: ${course.time}</p>
                        <p>活動金額: ${course.price}</p>
                    </div>
                `;
            });

            displayContainer.innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Error loading course data:', error);
        });
}

document.getElementById('bachata').addEventListener('click', function() {
    fetchAndDisplayData('bachata.json');
});

document.getElementById('salsa').addEventListener('click', function() {
    fetchAndDisplayData('salsa.json');
});

document.getElementById('lindyhop').addEventListener('click', function() {
    fetchAndDisplayData('lindyhop.json');
});

document.getElementById('charleston').addEventListener('click', function() {
    fetchAndDisplayData('charleston.json');
});
