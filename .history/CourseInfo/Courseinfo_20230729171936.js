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
                <div class="allInfo">   
                    <img src="${courses.img}">
                    <div class="activity01">
                        <div class="activity001">
                            <h1>${courses.title}</h1>
                            <p>活動名稱: ${courses.name}</p>
                            <p>活動地址: ${courses.address}</p>
                            <p>活動時間: ${courses.time}</p>
                            <p>活動金額: ${courses.price}</p>
                        </div>
                        <a class="activity002" href="${activity.link}">
                        <button>報名連結</button>
                        </a>
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
