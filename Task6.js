// 1. Employee Bonus Filter
let employees = [
  {name:"john", salary:200000},
  {name:"rahul", salary:500000},
  {name:"siva", salary:700000}
];

employees
  .filter(emp => emp.salary > 300000)
  .map(emp => console.log("Congrats " + emp.name));

// Congrats rahul
// Congrats siva

// 2. Shopping Cart Total
let cart = [1200, 3400, 500, 999];

let total = cart.reduce((sum, item) => sum + item, 0);

console.log(total); //6099


// 3. Login Username Formatter
let user = "naveen";

let formatted = user.slice(0,1).toUpperCase() + user.slice(1);

console.log(formatted); //Naveen


// 4. OTP Checker
let otp = "560890";

if (otp.includes("0")) {
  console.log("Valid OTP");
} else {
  console.log("Invalid OTP");
}
//Valid OTP

// 5. Food Delivery App
let orders = ["burger","pizza"];

orders.push("shawarma");
orders.pop();

console.log(orders); //[ 'burger', 'pizza' ]


// 6. Attendance Checker
let marks1 = [40,50,70,80];

let result1 = marks1.every(mark => mark >= 35);

console.log(result1); //true


// 7. Find VIP Customer
let customer = [
  {name:"arun", purchase:5000},
  {name:"vijay", purchase:15000},
  {name:"surya", purchase:25000}
];

let vip = customer.find(c => c.purchase > 10000);

console.log(vip.name); //vijay


// 8. Reverse Chat Message
let msg = "hello";

let reversed = msg.split("").reverse().join("");

console.log(reversed); //olleh


// 9. Remove Duplicate Product
let products = ["tv","laptop","mobile","watch"];

console.log(products.indexOf("mobile")); //2


// 10. Student Rank Sort
let marks2 = [99,45,12,67,89];

marks2.sort((a,b) => a - b);

console.log(marks2); //[ 12, 45, 67, 89, 99 ]


// 11. Movie Search
let movies1 = ["Jailer","Leo","Vikram"];

let found = movies1.some(movie => movie === "Leo");

console.log(found); //true


// 12. Hide Mobile Number
let num = "6383366774";

console.log(num.slice(-4)); //6774


// 13. Online Exam Result
let mark = 78;

console.log(mark >= 35 ? "Pass" : "Fail"); //Pass


// 14. Cab Booking Price
function totalFare(baseFare, extraKm) {
  return baseFare + extraKm;
}

console.log(totalFare(100, 50)); //150


// 15. Instagram Hashtag Generator
let tag = "web developer";

console.log(tag.replaceAll(" ", "_")); //web_developer


// 16. Netflix Kids Content
let movies2 = [
  {name:"A", age:13},
  {name:"B", age:18},
  {name:"C", age:10}
];

movies2
  .filter(movie => movie.age < 18)
  .forEach(movie => console.log(movie.name)); 
// A
// C

// 17. E-commerce Product Search
let product = "iphone";

console.log(product.startsWith("i")); //true


// 18. WhatsApp Group Names
let groups = ["office","friends","family"];

groups.forEach((group, index) => {
  console.log(index + 1, group);
});

// 1 office
// 2 friends
// 3 family

// 19. Salary Highest Finder
let salary = [20000,50000,70000,10000];

let highest = salary.reduce((max, sal) => {
  return sal > max ? sal : max;
});

console.log(highest); //70000


// 20. Password Security Checker
let password = "navi@123";

if (password.includes("@") && password.length >= 8) {
  console.log("Strong Password");
} else {
  console.log("Weak Password");
} //Strong Password