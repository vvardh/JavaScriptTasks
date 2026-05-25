//Task 1 — Spread Operator

let frontEnd = ["HTML", "CSS"];
let backEnd = ["Node", "MongoDB"];

let fullStack = [...frontEnd, ...backEnd];

console.log(fullStack);

//Task 2 — Copy Array

let original = [1, 2, 3];

let copied = [...original];

copied.push(4);

console.log("Original:", original); //original not changed
console.log("Copied:", copied);

//Task 3 — Object Merge

let student1 = {
  name: "Rahul"
};

let student2 = {
  role: "Developer"
};

let student = {
  ...student1,
  ...student2
};

console.log(student);

//Task 4 — Rest Operator

function total(a, b, ...rest) {
  console.log("a =", a);
  console.log("b =", b);
  console.log("Remaining Values =", rest);
  console.log("Total Remaining Count =", rest.length);
}

total(1, 2, 3, 4, 5, 6, 7, 8);

//Task 5 — Array Destructuring

let colors = ["red", "green", "blue", "yellow"];

let [a, b, c, d] = colors;

console.log(c);

//Task 6 — Nested Array Destructuring

let data = [1, [2, [3, [4]]]];

let [a, [b, [c, [d]]]] = data;

console.log(a, b, c, d);

//Task 7 — Object Destructuring

let mobile = {
  brand: "Samsung",
  price: 20000,
  color: "black"
};

let { brand, price, color } = mobile;

console.log(brand, color);

//Task 8 — push() & pop()

let numbers = [1, 2, 3];

numbers.push(4, 5, 6);

numbers.pop();

console.log(numbers);

//Task 9 — shift() & unshift()

let fruits = ["banana", "orange"];

fruits.unshift("apple");

fruits.shift();

console.log(fruits);

//Task 10 — splice()

let arr = [1, 2, 30, 40, 5, 6];

arr.splice(2, 2, 3, 4);

console.log(arr);

//Task 11 — concat()
let a = [1, 2];
let b = [3, 4];

let result = a.concat(b, 5, 6);

console.log(result);

//Task 12 — slice()

let marks = [10, 20, 30, 40, 50, 60];

let result = marks.slice(2, 5);

console.log(result);

//Task 13 — flat()

let nest = [1, [2, [3, [4, [5]]]]];

let result = nest.flat(Infinity);

console.log(result);

//Task 14 — fill()

let arr = [1, 2, 3, 4, 5];

arr.fill("done", 3,5);

console.log(arr);

//Task 15 — includes()

let values = [10, 20, 30, 40];

console.log(values.includes(20));
console.log(values.includes(100));

//Task 16 — indexOf()

let arr = [1, 2, 3, 4, 3, 2];

console.log(arr.indexOf(3));
console.log(arr.indexOf(2));

//Task 17 — lastIndexOf()

let arr = [1, 2, 3, 4, 3, 2];

console.log(arr.lastIndexOf(3));
console.log(arr.lastIndexOf(2));

//Task 18 — sort()

let nums = [100, 2, 55, 1, 9];

console.log(nums.sort());

console.log(nums.sort((a, b) => a - b));

//Task 19 — reverse()

let letters = ["a", "b", "c", "d"];

console.log(letters.reverse());

//Task 20 — Student Management

let students = ["Rahul", "Ajay", "Kumar"];

// Add new student
students.push("Vijay");

// Remove one student
students.splice(1, 1);

// Replace one name
students[1] = "Arjun";

// Reverse array
students.reverse();

console.log(students);

//Task 21 — Shopping Cart

let cart = ["Shoes", "Watch", "Phone"];

// Add laptop
cart.push("Laptop");

// Remove watch
cart.splice(1, 1);

// Check phone
console.log(cart.includes("Phone"));

// Total items
console.log(cart.length);

console.log(cart);

//Task 22 — Employee Database

let employee = {
  name: "Naveen",
  role: "Web Developer",
  salary: "5LPA"
};

// Destructuring
let { name, role, salary } = employee;

console.log(name, role, salary);

// Copy object
let copiedEmployee = {
  ...employee
};

// Change copied salary
copiedEmployee.salary = "10LPA";

console.log(employee);
console.log(copiedEmployee);

//Task 23 — Custom Function

function company(name, ...skills) {
  console.log("Employee Name:", name);
  console.log("Skills:", skills);
  console.log("Total Skills:", skills.length);
}

company("Naveen", "HTML", "CSS", "JS", "React");

//Task 24 — Array Analyzer

let data = [1,2,3,4,5,6,7,8,9,10];

// First 5 values
console.log(data.slice(0, 5));

// Reverse
console.log([...data].reverse());

// Check 7 exists
console.log(data.includes(7));

// Find index of 10
console.log(data.indexOf(10));

//Task 25 — Complete Challenge

let users = [
  { name: "Rahul", role: "Developer" },
  { name: "Ajay", role: "Designer" },
  { name: "Kumar", role: "Tester" }
];

// Add new user
users.push({ name: "Vijay", role: "Manager" });

// Remove last user
users.pop();

// Another array
let newUsers = [
  { name: "Ravi", role: "HR" },
  { name: "Sneha", role: "Developer" }
];

// Merge arrays
let finalUsers = [...users, ...newUsers];

// Print names only
for (let user of finalUsers) {
  console.log(user.name);
}

// Reverse array
finalUsers.reverse();

console.log(finalUsers);