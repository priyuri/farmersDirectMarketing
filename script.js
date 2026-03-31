const productsData = [
  { name: "Tomato", price: 20, img: "p1.jpg" },
  { name: "Potato", price: 15, img: "p2.jpg" },
  { name: "Onion", price: 25, img: "p3.jpg" },
  { name: "Pumpkin", price: 30, img: "p4.jpeg" },
  { name: "Cabbage", price: 30, img: "p6.webp" },
  { name: "Purple Cabbage", price: 30, img: "p7.webp" },
  { name: "Cauliflower", price: 30, img: "p8.webp" },
  { name: "Green Chilli", price: 30, img: "p11.webp" },
  { name: "Sweet Corn", price: 30, img: "p10.jpg" },
  { name: "Wheat", price: 20, img: "g1.jpg" },
  { name: "Oat", price: 15, img: "g2.webp" },
  { name: "Buckwheat", price: 25, img: "g3.avif" },
  { name: "Corn", price: 30, img: "g4.jpg" },
  { name: "Barley", price: 30, img: "g5.webp" },
  { name: "Black Rice", price: 30, img: "g6.jpg" },
  { name: "Strawberry", price: 20, img: "f1.jpg" },
  { name: "Pomegranate", price: 15, img: "f2.jpg" },
  { name: "Mango", price: 25, img: "f3.jpg" },
  { name: "Dragon Fruit", price: 30, img: "f4.jpg" },
  { name: "Apple", price: 30, img: "f6.jpg" },
  { name: "Green Grapes", price: 30, img: "f7.webp" },
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

  products.forEach(function (p) {
    container.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}/kg</p>
        <button onclick="addToCart('${p.name}', ${p.price})">
          Add to Cart
        </button>
      </div>
    `;
  });
}

//cart section
var cart = [];

// Add to cart
function addToCart(name, price) {

  // 🔐 Login check
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    alert("Please login first");
    window.location.href = "login.html";
    return;
  }

  // अगर login है तो add करो
  cart.push({ name: name, price: price });

  updateCart();

  // auto open cart
  document.getElementById("cart-section").style.display = "block";
}

// Update cart UI
function updateCart() {
  var cartItems = document.getElementById("cart-items");
  var total = 0;

  cartItems.innerHTML = "";

  for (var i = 0; i < cart.length; i++) {
    var li = document.createElement("li");
    li.innerText = cart[i].name + " - ₹" + cart[i].price;
    cartItems.appendChild(li);

    total += cart[i].price;
  }

  document.getElementById("total").innerText = "Total: ₹" + total;
  document.getElementById("cart-count").innerText = cart.length;
}

// Load products
displayProducts(productsData);

// Checkout click
function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty 😅");
    return;
  }

  document.getElementById("payment-section").style.display = "block";
}

//login logout
function handleLoginLogout() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn) {
    localStorage.removeItem("isLoggedIn");
    alert("Logged out successfully");
    window.location.href = "index.html";
  } else {
    window.location.href = "login.html";
  }
}

//navbar 
window.onload = function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn) {
    document.getElementById("signIn").innerText = "Logout";
  }
};

// Place order
function placeOrder(method) {
  alert("✅ Order placed successfully via " + method);

  // Reset cart
  cart = [];
  updateCart();

  // Hide payment section
  document.getElementById("payment-section").style.display = "none";
}


var lastResponse = "";

// Toggle chat
function toggleChat() {
  var box = document.getElementById("ai-chatbox");
  box.style.display = (box.style.display === "block") ? "none" : "block";
}

// Send message
function sendMessage() {
  var input = document.getElementById("chatInput");
  var msg = input.value;

  if (!msg) return;

  addMessage("You: " + msg);

  var reply = getBotReply(msg);
  addMessage("Bot: " + reply);

  lastResponse = reply;
  speak(reply);

  input.value = "";
}

// Add message
function addMessage(text) {
  var chat = document.getElementById("chat-content");
  var p = document.createElement("p");
  p.innerText = text;
  chat.appendChild(p);
}

// Bot reply
function getBotReply(msg) {
  msg = msg.toLowerCase();

  if (msg.indexOf("hello") !== -1) return "Hello! How Can I Assist You?";
  if (msg.indexOf("name") !== -1) return "I am AI assistent 🤖";
  if (msg.indexOf("bye") !== -1) return "Bye 👋";

  return "I did'nt understand 😅";
}

// Voice input
function startVoice() {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Browser voice support nahi karta");
    return;
  }

  var recognition = new SpeechRecognition();
  recognition.lang = "en-IN";
  recognition.start();

  recognition.onresult = function (event) {
    var voiceText = event.results[0][0].transcript;
    document.getElementById("chatInput").value = voiceText;
    sendMessage();
  };

  recognition.onerror = function () {
    alert("Voice error");
  };
}

// Text to speech
function speak(text) {
  var speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-IN";
  window.speechSynthesis.speak(speech);
}

// Speak last
function speakLast() {
  if (lastResponse) {
    speak(lastResponse);
  }
}


//sign up page
function signup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password
    })
  })
    .then(res => res.text())
    .then(data => {
      alert(data);
    });
}
