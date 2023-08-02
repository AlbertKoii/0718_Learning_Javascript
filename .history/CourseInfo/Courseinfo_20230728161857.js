const btnContent1 = document.getElementById('btnContent1');
const btnContent2 = document.getElementById('btnContent2');
const contentContainer = document.getElementById('contentContainer');

function displayCourseInfo(jsonFile) {
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            let htmlContent = '';
            let course = data.courses;

            course.forEach(courses => {
                htmlContent += `
                    <div class="allInfo">
                        <img src="${courses.img}">
                        <div class="coursesy01">
                            <div class="courses001">
                                <h1>${courses.title}</h1>
                                <p>活動名稱: ${courses.name}</p>
                                <p>活動地址: ${courses.address}</p>
                                <p>活動時間: ${courses.time}</p>
                                <p>活動金額: ${courses.price}</p>
                            </div>
                            <a class="activity002" href="${course.link}">
                                <button>報名連結</button>
                            </a>
                        </div>
                    </div>
                `;
            });

            contentContainer.innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Error loading course info:', error);
        });
}

btnContent1.addEventListener('click', function() {
    displayCourseInfo('courseInfo1.json');
});

btnContent2.addEventListener('click', function() {
    displayCourseInfo('courseInfo2.json');
});
