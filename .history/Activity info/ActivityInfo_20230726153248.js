const btnContent1 = document.getElementById('btnContent1');
const btnContent2 = document.getElementById('btnContent2');
const contentContainer = document.getElementById('contentContainer');

btnContent1.addEventListener('click', function() {
  contentContainer.innerHTML = `
    <h1>Sales Page 1</h1>
    <p>This is the first sales page content.</p>
    <!-- 在此放置銷售頁面的內容 -->
  `;
});

btnContent2.addEventListener('click', function() {
  contentContainer.innerHTML = `
    <h1>Sales Page 2</h1>
    <p>This is the second sales page content.</p>
    <!-- 在此放置銷售頁面的內容 -->
  `;
});
