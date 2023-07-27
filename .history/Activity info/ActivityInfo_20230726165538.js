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
        <div class="allInfo">
          <img src="https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/358615341_5977976555641860_3354273534376025393_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sfG_jlGjitYAX8cOWcQ&_nc_ht=scontent-tpe1-1.xx&oh=00_AfDAMBDlboKFEM8gshdEHLVrlhp6yoMFF4KT6ffBoljwXQ&oe=64C5860A">
          <div class="activity_info">
            <h1>${activity.title}</h1>
            <p>活動名稱: ${activity.name}</p>
            <p>活動地址: ${activity.address}</p>
            <p>活動時間: ${activity.time}</p>
            <p>活動金額: ${activity.price}</p>
            <button>報名連結</button>
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
  loadActivities('activities1.json');
});

btnContent2.addEventListener('click', function() {
  loadActivities('activities2.json');
});
