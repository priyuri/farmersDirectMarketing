const productsData = [
    { name: "Wheat", price: 20, img: "g1.jpg" },
    { name: "Oat", price: 15, img: "g2.webp" },
    { name: "Buckwheat", price: 25, img: "g3.avif" },
    { name: "Corn", price: 30, img: "g4.jpg" },
    { name: "Barley", price: 30, img: "g5.webp" },
    { name: "Black Rice", price: 30, img: "g6.jpg" }

];

function displayProducts(products) {
    const container = document.getElementById("products");
    container.innerHTML = "";

    products.forEach(p => {
        container.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}/kg</p>
        <button>Add to Cart</button>
      </div>
    `;
    });
}

// Load products
displayProducts(productsData);