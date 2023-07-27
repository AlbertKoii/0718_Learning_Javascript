const btnContent1 = document.getElementById('btnContent1');
const btnContent2 = document.getElementById('btnContent2');
const contentContainer = document.getElementById('contentContainer');

function loadActivities(jsonFile) {
  fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
      let htmlContent = '';
      const activities = data.activities;

      activities.forEach(activity => {
        htmlContent += `
        <div class="activity_info"
          <div class="activity_info">
            <h1>${activity.title}</h1>
            <p>活動名稱: ${activity.name}</p>
            <p>活動地址: ${activity.address}</p>
            <p>活動時間: ${activity.time}</p>
            <p>活動金額: ${activity.price}</p>
            <button>報名連結</button>
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
  loadActivities('activities1.json');
});

btnContent2.addEventListener('click', function() {
  loadActivities('activities2.json');
});