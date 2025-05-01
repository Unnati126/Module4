const container = document.getElementById('productContainer');
const filter = document.getElementById('categoryFilter');

let allProducts = [];

async function fetchData() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    allProducts = data;
    populateCategories(data);
    renderProducts(data);
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
}

function populateCategories(products) {
  const categories = [...new Set(products.map(p => p.category))];
  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat[0].toUpperCase() + cat.slice(1);
    filter.appendChild(option);
  });
}

function renderProducts(products) {
  container.innerHTML = '';
  products.forEach(product => {
    const col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-3';

    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${product.image}" class="card-img-top p-3" alt="${product.title}" style="height: 200px; object-fit: contain;">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text fw-bold">$${product.price.toFixed(2)}</p>
          <p class="card-text description">${product.description}</p>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}

filter.addEventListener('change', () => {
  const selected = filter.value;
  if (selected === 'all') {
    renderProducts(allProducts);
  } else {
    const filtered = allProducts.filter(p => p.category === selected);
    renderProducts(filtered);
  }
});

fetchData();
