// Sample products data (in a real scenario, this would come from a database)
const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
    { id: 3, name: 'Product 3', price: 20 },
    { id: 4, name: 'Product 4', price: 25 },
    { id: 5, name: 'Product 5', price: 30 },
];

// Function to display products on the homepage
function displayProducts() {
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <img src="product-image.jpg" alt="Product">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productsContainer.appendChild(productDiv);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    // In a real scenario, you would implement cart functionality here
    console.log(`Product with ID ${productId} added to cart`);
}

// Display products when the page loads
window.onload = function() {
    displayProducts();
};
