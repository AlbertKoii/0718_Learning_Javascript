// courseInfo.js

let lindyHop = document.getElementById('classroomLh');
let charleston = document.getElementById('classroomCh');
let bachata = document.getElementById('classroomBa');
let salsa = document.getElementById('classroomSa');
const displayContainer = document.getElementById('display');

function fetchAndDisplayData(jsonFile) {
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            let htmlContent = '';
            data.courses.forEach(course => {
                htmlContent += `
                    <div class="allInfo">   
                        <img src="${course.img}">
                        <div class="courses01">
                            <div class="courses001">
                                <h1>${course.title}</h1>
                                <p>活動名稱: ${course.name}</p>
                                <p>活動地址: ${course.address}</p>
                                <p>活動時間: ${course.time}</p>
                                <p>活動金額: ${course.price}</p>
                            </div>
                            <a class="courses002" href="${course.link}">
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
classroomLh.addEventListener('click', function() {
    fetchAndDisplayData('lindyhop.json');
});

classroomCh.addEventListener('click', function() {
    fetchAndDisplayData('charleston.json');
});

classroomBa.addEventListener('click', function() {
    fetchAndDisplayData('bachata.json');
});

classroomSa.addEventListener('click', function() {
    fetchAndDisplayData('salsa.json');
});
