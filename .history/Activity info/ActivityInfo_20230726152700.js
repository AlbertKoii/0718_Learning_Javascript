// 獲取按鈕和容器的 DOM 元素
const btnContent1 = document.getElementById('btnContent1');
const btnContent2 = document.getElementById('btnContent2');
const contentContainer = document.getElementById('contentContainer');

// 當按鈕1被點擊時，顯示內容1
btnContent1.addEventListener('click', function() {
  // 先清空容器
  contentContainer.innerHTML = '';

  // 動態插入內容1
  const content1 = document.createElement('div');
  content1.innerHTML = `
    <h1>Content 1</h1>
    <p>This is the first content.</p>
  `;
  contentContainer.appendChild(content1);
});

// 當按鈕2被點擊時，顯示內容2
btnContent2.addEventListener('click', function() {
  // 先清空容器
  contentContainer.innerHTML = '';

  // 動態插入內容2
  const content2 = document.createElement('div');
  content2.innerHTML = `
    <h1>Content 2</h1>
    <p>This is the second content.</p>
  `;
  contentContainer.appendChild(content2);
});
