const productsData = [
    { name: "Milk", price: 20, img: "d1.webp" },
    { name: "Butter", price: 15, img: "d2.jpg" },
    { name: "Yoghurt", price: 25, img: "d3.jpg" },
    { name: "Curd", price: 30, img: "d4.jpg" },
    { name: "Ice Cream", price: 30, img: "d5.jpg" },
    { name: "Natural Cheese", price: 30, img: "d6.jpeg" }

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