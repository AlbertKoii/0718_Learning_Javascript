// courseInfo.js

let lindyHop = document.getElementById('lindyHop');
let charleston = document.getElementById('charleston');
let bachata = document.getElementById('bachata');
let salsa = document.getElementById('salsa')
const displayContainer = document.getElementById('display');

function fetchAndDisplayData(jsonFile) {
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            let htmlContent = '';
            data.courses.forEach(course => {
                htmlContent += `
                    <div class="courseInfo">
                        <img class="imgJs" src="${course.title}">
                        <div class="CouseJsinfo">
                            <h3>${course.title}</h3>
                            <p>活動名稱: ${course.name}</p>
                            <p>活動地址: ${course.address}</p>
                            <p>活動時間: ${course.time}</p>
                            <p>活動金額: ${course.price}</p>
                        </div>
                    </div>
                `;
            });

            displayContainer.innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Error loading course data:', error);
        });
}

// Add click event listeners to the h4 elements inside the summary tags
lindyHop.addEventListener('click', function() {
    fetchAndDisplayData('lindyhop.json');
});

charleston.addEventListener('click', function() {
    fetchAndDisplayData('charleston.json');
});

bachata.addEventListener('click', function() {
    fetchAndDisplayData('bachata.json');
});

salsa.addEventListener('click', function() {
    fetchAndDisplayData('salsa.json');
});
