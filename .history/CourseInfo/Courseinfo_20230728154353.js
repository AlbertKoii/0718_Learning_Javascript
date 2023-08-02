const btnContent1 = document.getElementById('btnContent1');
const btnContent2 = document.getElementById('btnContent2');
const contentContainer = document.getElementById('contentContainer');

function displayCourseInfo(jsonFile) {
  fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
      let htmlContent = '';
      const courses = data.courses;

      courses.forEach(courses => {
        htmlContent += `
          <div class="allInfo">   
            <img src="${courses.img}">
            <div class="activity01">
              <div class="activity001">
                <h1>${courses.title}</h1>
                <p>活動名稱: ${activity.name}</p>
                <p>活動地址: ${activity.address}</p>
                <p>活動時間: ${activity.time}</p>
                <p>活動金額: ${activity.price}</p>
              </div>
              <a class="activity002" href="${activity.link}">
              <button>報名連結</button>
              </a>
            </div>
          </div> 
        `;
      });

      contentContainer.innerHTML = htmlContent;
    })
    .catch(error => {
      console.error('Error loading activities:', error);
    });
}

btnContent1.addEventListener('click', function() {
  displayActivities('courseInfo1.json');
});

btnContent2.addEventListener('click', function() {
  displayActivities('courseInfo2.json');
});
