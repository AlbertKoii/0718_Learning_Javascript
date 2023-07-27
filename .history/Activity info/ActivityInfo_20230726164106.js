const btnContent1 = document.getElementById('btnContent1');
const btnContent2 = document.getElementById('btnContent2');
const contentContainer = document.getElementById('contentContainer');

btnContent1.addEventListener('click', function() {
  contentContainer.innerHTML = `
    <div class="activity_info">
      <h1>Swing Party info</h1>
      <p>活動名稱: </p>
      <p>活動地址: </p>
      <p>活動時間: </p>
      <p>活動金額: </p>
      <button>報名連結</button>
    </div>
  `;
});

btnContent2.addEventListener('click', function() {
  contentContainer.innerHTML = `
  <div class=
    <img src="https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/358615341_5977976555641860_3354273534376025393_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sfG_jlGjitYAX8cOWcQ&_nc_ht=scontent-tpe1-1.xx&oh=00_AfDAMBDlboKFEM8gshdEHLVrlhp6yoMFF4KT6ffBoljwXQ&oe=64C5860A">
    <div class="activity_info">
      <h1>Bachata Party info</h1>
      <p>活動名稱: </p>
      <p>活動地址: </p>
      <p>活動時間: </p>
      <p>活動金額: </p>
      <button>報名連結</button>
    </div>
  `;
});
