//Variables and Printing Statements

// 1. Create a variable using var and store your name.

var name = "Vishnu";


// 2. Print your name using console.log().

console.log(name);


// 3. Create a variable using let and store your age.

let age = 22;


// 4. Change the value of age and print it.

age = 23;
console.log(age);


// 5. Create a constant variable for country name.

const country = "India";


// 6. Print the country name.

console.log(country);


// 7. Try redeclaring var variable and observe output.

var city = "Hyderabad";
var city = "Delhi";

console.log(city); // Output: Delhi


// 8. Try redeclaring let variable and observe error.

let marks = 90;
// let marks = 95; // Error: Identifier 'marks' has already been declared //let does not allow redeclaration in the same scope.


// 9. Try reassigning const variable and observe error.

const pi = 3.14;
// pi = 3.14159; // Error: Assignment to constant variable //const does not allow updating.


// 10. Write difference between var and let.

/*
var:
1. Can be redeclared.
2. Function scoped.

let:
1. Cannot be redeclared.
2. Block scoped.
*/

// 11. Write difference between let and const.

/*
let:
1. Value can be changed.
2. Cannot be redeclared.

const:
1. Value cannot be changed.
2. Must be initialized during declaration.
*/


// 12. Predict output

var a = 10;
a = 20;
var a = 30;

console.log(a); // Output: 30


// 13. Predict output

let b = 50;
b = 60;

console.log(b); // Output: 60


// 14. Predict output

const c = 100;

console.log(c); // Output: 100


// 15. Use console.log() to print "Hello World".

console.log("Hello World");


// 16. Use alert() to show "Welcome User".

alert("Welcome User");


// 17. Use confirm() to ask user:
// "Do you like JavaScript?"

confirm("Do you like JavaScript?");


// 18. Use prompt() to ask user name.

let userName = prompt("Enter your name");


// 19. Print prompt value in console.

console.log(userName);


// 20. Use document.writeln() to print "Batch 33".

document.writeln("Batch 33");


// 21. Create variable studentName and store your name.

let studentName = "Vishnu";


// 22. Create variable studentAge and store your age.

let studentAge = 22;


// 23. Print both variables together.

console.log(studentName, studentAge);


// 24. Create a variable for mobile number.

let mobileNumber = "9876543210";


// 25. Print mobile number using console.log().

console.log(mobileNumber);


// 26. Create variable using var for favorite color.

var favoriteColor = "Blue";


// 27. Reassign another color value.

favoriteColor = "Black";

console.log(favoriteColor);


// 28. Create variable using let for marks.

let studentMarks = 85;


// 29. Change marks value and print it.

studentMarks = 95;

console.log(studentMarks);


// 30. Create const variable for PI value.

const PI = 3.14159;


// 31. Print PI value.

console.log(PI);


// 32. Predict output

var x = 5;
var x = 15;

console.log(x); // Output: 15


// 33. Predict output

let y = 25;
y = 35;

console.log(y); // Output: 35


// 34. Find error

const z = 40;
z = 45; // Error: Assignment to constant variable //const does not allow updating.

console.log(z);


// 35. Create alert box with your college name.

alert("Prakash College");


// 36. Ask user age using prompt().

let userAge = prompt("Enter your age");


// 37. Print user age in console.

console.log(userAge);


// 38. Ask user confirmation:
// "Did you complete HTML?"

confirm("Did you complete HTML?");


// 39. Print confirm result in console.

let result = confirm("Did you complete HTML?");

console.log(result);


// 40. Print "JavaScript Class" using document.writeln().

document.writeln("JavaScript Class");


// 41. Create 3 variables:
// city, state, country.

let cityName = "Hyderabad";
let stateName = "Telangana";
let countryName = "India";


// 42. Print all variables together.

console.log(cityName, stateName, countryName);


// 43. Create one example for var.

var course = "JavaScript";


// 44. Create one example for let.

let salary = 50000;


// 45. Create one example for const.

const company = "Tech";


// 46. Predict output

var num = 100;
num = 200;

console.log(num); // Output: 200


// 47. Predict output

let price = 500;
price = 700;

console.log(price); // Output: 700


// 48. Predict output

const password = 12345;

console.log(password); // Output: 12345


// 49. Write rules of var.

/*
1. Can be redeclared.
2. Can be updated.
3. Function scoped.
4. variables are initialized with undefined.
*/


// 50. Write rules of let and const.

/*
let:
1. Cannot be redeclared.
2. Can be updated.
3. Block scoped.

const:
1. Cannot be redeclared.
2. Cannot be updated.
3. Block scoped.
4. Must be initialized at declaration.
*/