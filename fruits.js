const productsData = [
    { name: "Strawberry", price: 20, img: "f1.jpg" },
    { name: "Pomegranate", price: 15, img: "f2.jpg" },
    { name: "Mango", price: 25, img: "f3.jpg" },
    { name: "Dragon Fruit", price: 30, img: "f4.jpg" },
    { name: "Apple", price: 30, img: "f6.jpg" },
    { name: "Green Grapes", price: 30, img: "f7.webp" }

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