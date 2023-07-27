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
    <div class="activity_info">
      <h1>Bachata Party info</h1>
      <p>活動名稱: </p>
      <p>活動地址: </p>
      <p>活動時間: </p>
      <p>活動金額: </p>
      <button>報名連結</button>
    </div>
  `;
  `<div class="activity_info">
      <h1>Bachata Party info</h1>
      <p>活動名稱: </p>
      <p>活動地址: </p>
      <p>活動時間: </p>
      <p>活動金額: </p>
      <button>報名連結</button>
    </div>
  `;
  `<div class="activity_info">
      <h1>Bachata Party info</h1>
      <p>活動名稱: </p>
      <p>活動地址: </p>
      <p>活動時間: </p>
      <p>活動金額: </p>
      <button>報名連結</button>
    </div>
  `;
});
