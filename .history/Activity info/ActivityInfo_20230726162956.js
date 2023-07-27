const btnContent1 = document.getElementById('btnContent1');
const btnContent2 = document.getElementById('btnContent2');
const contentContainer = document.getElementById('contentContainer');

btnContent1.addEventListener('click', function() {
  contentContainer.innerHTML = `
    <div class="sales-content">
      <h1>Product 1</h1>
      <p>This is the sales page for Product 1.</p>
      <p>Price: $19.99</p>
      <button>Buy Now</button>
    </div>
  `;
});

btnContent2.addEventListener('click', function() {
  contentContainer.innerHTML = `
    <div class="activity_info">
      <h1>Product 2</h1>
      <p>This is the sales page for Product 2.</p>
      <p>Price: $29.99</p>
      <button>Buy Now</button>
    </div>
  `;
});