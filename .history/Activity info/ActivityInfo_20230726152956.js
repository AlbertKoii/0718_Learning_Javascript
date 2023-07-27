const btnContent1 = document.getElementById('btnContent1');
const btnContent2 = document.getElementById('btnContent2');
const contentContainer = document.getElementById('contentContainer');

btnContent1.addEventListener('click', function() {
  contentContainer.innerHTML = `
    <h1>Content 1</h1>
    <p>This is the first content.</p>
  `;
});

btnContent2.addEventListener('click', function() {
  contentContainer.innerHTML = `
    <h1>Content 2</h1>
    <p>This is the second content.</p>
  `;
});
