const moreButton = document.querySelector('.more-button');
const detailsElement = document.querySelector('details');

// 監聽按鈕的點擊事件
moreButton.addEventListener('click', () => {
    // 切換 details 元素的 open 屬性值
    detailsElement.open = !detailsElement.open;
});