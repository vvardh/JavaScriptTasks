// 1. E-Commerce Product Filter
fetch("https://fakestoreapi.com/products/")
  .then((response) => response.json())
  .then((data) => {

    let filteredProducts = data.filter((product) => {
      return product.price > 100 &&
             product.category === "electronics";
    });

    filteredProducts.forEach((product) => {
      console.log("Title :", product.title);
      console.log("Price :", product.price);
    });

  })
  .catch((error) => {
    console.log(error);
  });

 

//2. Online Shopping Cart Total
let cart = [
  {product:"Shoes", price:2000, qty:2},
  {product:"Watch", price:1500, qty:1},
  {product:"Bag", price:1000, qty:3}
];

let total = cart.reduce((accumulator, item) => {
  return accumulator + (item.price * item.qty);
}, 0);

console.log(total);

//3. Employee Salary Dashboard
let employees = [
  {name:"John", salary:25000},
  {name:"Sam", salary:50000},
  {name:"Ravi", salary:45000},
  {name:"Kumar", salary:30000}
];

let result = employees
  .filter((employee) => employee.salary > 40000)
  .map((employee) => employee.name);

console.log(result);

//4. Food Delivery App
let hotels = [
  {hotel:"A2B", rating:4.1},
  {hotel:"KFC", rating:4.7},
  {hotel:"Dominos", rating:4.3}
];

let result = hotels.find((hotel) => {
  return hotel.rating > 4.5;
});

console.log(result);

//5. Student Pass/Fail System
let marks = [45,67,89,90,34];

let result = marks.every((mark) => {
  return mark >= 35;
});

console.log(result);

//6. OTP Verification System
let otpList = [1234,4567,7890,9876];

let enteredOtp = 4567;

let result = otpList.includes(enteredOtp);

console.log(result);

//7. Movie Booking Timer
let count = 10;

let timer = setInterval(() => {

  console.log(count);

  count--;

  if(count < 0){
    clearInterval(timer);
    console.log("Booking Closed");
  }

}, 1000);

//8. Instagram Like Counter
let likes = 0;

let likeCounter = setInterval(() => {

  likes++;

  console.log("Likes :", likes);

  if(likes === 10){
    clearInterval(likeCounter);
  }

}, 1000);

//9. Login Authentication
let username = "admin";
let password = "12345";

if(username === "admin" && password === "12345"){
  console.log("Login Success");
}
else{
  console.log("Invalid Credentials");
}

//10. Weather App Simulation
let internet = true;

let weatherPromise = new Promise((resolve, reject) => {

  if(internet){
    resolve("Weather Data");
  }
  else{
    reject("No Internet");
  }

});

weatherPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//11. Amazon Product Search
let products = [
  "white shirt",
  "black jeans",
  "formal shirt",
  "t-shirt"
];

let result = products.filter((product) => {
  return product.includes("shirt");
});

console.log(result);

//12. YouTube Video Duration
let videos = [10,20,30,40];

let totalWatchTime = videos.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(totalWatchTime);

//13. Swiggy Order Status
let status = "Preparing";

switch(status){

  case "Placed":
    console.log("Your order has been placed");
    break;

  case "Preparing":
    console.log("Your food is being prepared");
    break;

  case "Out for Delivery":
    console.log("Delivery partner is on the way");
    break;

  case "Delivered":
    console.log("Order delivered successfully");
    break;

  default:
    console.log("Invalid Status");

}

//14. WhatsApp Chat Analyzer
let chats = ["hi","hello","where","ok","bye"];

let count = 0;

for(let i = 0; i < chats.length; i++){
  count++;
}

console.log("Total Messages :", count);

//15. Netflix Age Restriction
let age = 20;

let result = age >= 18 ? "watch movie" : "access denied";

console.log(result);

//16. Flipkart Product Sorting
let prices = [1200,450,9999,2500,700];

prices.sort((a,b) => a - b);

console.log(prices);

//17. Employee Attendance
let attendance = ["present","absent","present"];

let result = attendance.reduce((accumulator, currentValue) => {

  accumulator[currentValue] =
    (accumulator[currentValue] || 0) + 1;

  return accumulator;

}, {});

console.log(result);

//18. Banking System
let balance = 5000;

function deposit(amount){

  balance = balance + amount;

  console.log("Deposited :", amount);
}

function withdraw(amount){

  if(amount <= balance){

    balance = balance - amount;

    console.log("Withdraw :", amount);
  }
  else{
    console.log("Insufficient Balance");
  }

}

function checkBalance(){
  console.log("Balance :", balance);
}

deposit(2000);

withdraw(1000);

checkBalance();

//19. Zomato Rating Checker
let ratings = [4.5, 3.8, 2.9, 4.7];

let result = ratings.some((rating) => {
  return rating < 3;
});

console.log(result);

//20. Real API Product Table
fetch("https://fakestoreapi.com/products/")
  .then((response) => response.json())
  .then((data) => {

    let result = data.map((product) => {

      return `
        <div class="card">

          <img src="${product.image}" alt="${product.title}">

          <h3>${product.title}</h3>

          <p>Price : $${product.price}</p>

        </div>
      `;

    });

    document.getElementById("products").innerHTML =
      result.join("");

  })
  .catch((error) => {
    console.log("Error:", error);
  });

//21. Build Small E-Commerce Logic

const productsContainer = document.getElementById("products");
const categorySelect = document.getElementById("category");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const cartContainer = document.getElementById("cart");
const totalElement = document.getElementById("total");

let products = [];
let cart = [];

// Fetch Products
async function getProducts(){
    const response = await fetch(
        "https://fakestoreapi.com/products"
    );

    products = await response.json();

    displayProducts(products);
    loadCategories();
}

getProducts();

// Display Products
function displayProducts(data){

    productsContainer.innerHTML = "";

    data.forEach(product=>{

        productsContainer.innerHTML += `
        <div class="card">
            <img src="${product.image}">
            <h3>${product.title}</h3>
            <p><strong>₹${Math.floor(product.price * 80)}</strong></p>
            <p>${product.category}</p>

            <button onclick="addToCart(${product.id})">
                Add To Cart
            </button>
        </div>
        `;
    });
}

// Load Categories
function loadCategories(){

    const categories = [
        ...new Set(products.map(p=>p.category))
    ];

    categories.forEach(cat=>{

        categorySelect.innerHTML += `
        <option value="${cat}">
            ${cat}
        </option>
        `;
    });
}

// Filter + Search + Sort
function applyFilters(){

    let filteredProducts = [...products];

    // Category Filter
    if(categorySelect.value !== "all"){
        filteredProducts = filteredProducts.filter(
            product =>
            product.category === categorySelect.value
        );
    }

    // Search Product
    filteredProducts = filteredProducts.filter(
        product =>
        product.title.toLowerCase().includes(
            searchInput.value.toLowerCase()
        )
    );

    // Sort by Price
    if(sortSelect.value === "low"){
        filteredProducts.sort(
            (a,b)=>a.price-b.price
        );
    }

    if(sortSelect.value === "high"){
        filteredProducts.sort(
            (a,b)=>b.price-a.price
        );
    }

    displayProducts(filteredProducts);
}

categorySelect.addEventListener(
    "change",
    applyFilters
);

searchInput.addEventListener(
    "input",
    applyFilters
);

sortSelect.addEventListener(
    "change",
    applyFilters
);

// Add To Cart
function addToCart(id){

    const product = products.find(
        item => item.id === id
    );

    cart.push(product);

    renderCart();
}

// Cart
function renderCart(){

    cartContainer.innerHTML = "";

    cart.forEach(item=>{

        cartContainer.innerHTML += `
        <div class="cart-item">
            <span>${item.title}</span>
            <span>
                ₹${Math.floor(item.price * 80)}
            </span>
        </div>
        `;
    });

    calculateTotal();
}

// Total Calculation
function calculateTotal(){

    const total = cart.reduce(
        (sum,item)=>
        sum + Math.floor(item.price * 80),
        0
    );

    totalElement.textContent = total;
}