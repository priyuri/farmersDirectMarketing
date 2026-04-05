const productsData = [
  { name: "Tomato", price: 20, img: "p1.jpg" },
  { name: "Potato", price: 15, img: "p2.jpg" },
  { name: "Onion", price: 25, img: "p9.jpg" },
  { name: "Pumpkin", price: 30, img: "p4.jpeg" },
  { name: "Cabbage", price: 30, img: "p6.webp" },
  { name: "Purple Cabbage", price: 30, img: "p7.webp" },
  { name: "Cauliflower", price: 30, img: "p8.webp" },
  { name: "Green Chilli", price: 30, img: "p11.webp" },
  { name: "Sweet Corn", price: 30, img: "p10.jpg" }
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