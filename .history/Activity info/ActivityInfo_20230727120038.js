const btnContent1 = document.getElementById('btnContent1');
const btnContent2 = document.getElementById('btnContent2');
const contentContainer = document.getElementById('contentContainer');

function displayActivities(jsonFile) {
  fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
      let htmlContent = '';
      const activities = data.activities;

      activities.forEach(activity => {
        htmlContent += `
          <div class="allInfo">
            <div class="activity01">
              <img src="${activity.img}">
              <div class="activity001">
                <h1>${activity.title}</h1>
                <p>活動名稱: ${activity.name}</p>
                <p>活動地址: ${activity.address}</p>
                <p>活動時間: ${activity.time}</p>
                <p>活動金額: ${activity.price}</p>
              </div>
              <a class="activity02" href="${activity.link}">
            </div>
              <button>報名連結</button>
            </a>
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
  displayActivities('activities1.json');
});

btnContent2.addEventListener('click', function() {
  displayActivities('activities2.json');
});
