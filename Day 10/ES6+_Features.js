// 1. let and const 📦
console.log("--- 1. let and const ---");

// 'let' allows reassignment, 'const' does not. Both are block-scoped.
let score = 10;
score = 15; // ✅ Allowed
console.log("Reassigned 'let' score:", score);

const name = "Gemini";
// name = "Google"; // ❌ This would cause a TypeError.

if (true) {
  let blockVar = "I'm inside the block";
  console.log(blockVar); // "I'm inside the block"
}
// console.log(blockVar); // ❌ This would cause a ReferenceError because blockVar is not defined here.


// 2. Arrow Functions =>
console.log("\n--- 2. Arrow Functions ---");

// Concise syntax and lexical 'this'
const add = (a, b) => a + b;
console.log("Arrow function result:", add(5, 5));

// Example of lexical 'this'
const myObject = {
  value: 10,
  printValueNew: function() {
    // The arrow function inherits 'this' from the parent 'printValueNew' function's scope.
    setTimeout(() => {
      console.log("Lexical 'this' value:", this.value); // ✅ Correctly refers to myObject.value
    }, 1000);
  }
};
myObject.printValueNew(); // Prints 10 after 1 second.


// 3. Template Literals (`` ` ``) ✍️
console.log("\n--- 3. Template Literals ---");

const userName = "Alex";
const items = 3;
const price = 7.50;

const newMessage = `Hello ${userName},
Your ${items} items cost $${items * price}.`;

console.log(newMessage);


// 4. Destructuring {} []
console.log("\n--- 4. Destructuring ---");

// Object Destructuring
const user = {
  id: 123,
  firstName: "Sam",
  email: "sam@example.com",
};
const { id, email } = user;
console.log("Object Destructuring -> id:", id);
console.log("Object Destructuring -> email:", email);

// Array Destructuring
const coordinates = [10, 20, 30];
const [x, y] = coordinates;
console.log("Array Destructuring -> x:", x);
console.log("Array Destructuring -> y:", y);


// 5. Spread (...) / Rest (...) Operators
console.log("\n--- 5. Spread / Rest Operators ---");

// Spread Operator: expands an iterable
const fruits = ['apple', 'banana'];
const vegetables = ['carrot', 'broccoli'];
const groceryList = [...fruits, ...vegetables];
console.log("Spread for arrays:", groceryList);

const userDetails = { name: "Jordan", age: 30 };
const userWithStatus = { ...userDetails, isActive: true };
console.log("Spread for objects:", userWithStatus);

// Rest Operator: collects multiple elements into an array
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log("Rest in function:", sum(1, 2, 3, 4, 5)); // 15

const [first, ...theRest] = [10, 20, 30, 40, 50];
console.log("Rest in destructuring:", theRest); // [30, 40, 50]


// 6. Default Parameters
console.log("\n--- 6. Default Parameters ---");

function greet(person = 'Guest', message = 'Hello') {
  console.log(`${message}, ${person}!`);
}
greet('Alice', 'Hi');
greet('Bob');
greet();


// 7. Modules (import/export) 🧩
console.log("\n--- 7. Modules (import/export) ---");
console.log("NOTE: The following module code is for demonstration.");
console.log("To make it work, you must split it into two separate files (`math.js` and `app.js`).");

/*
// --- FILE 1: math.js ---

// Named Export
export const PI = 3.14159;

// Named Export
export function add(a, b) {
  return a + b;
}

// Default Export
export default function multiply(a, b) {
  return a * b;
}

*/


/*
// --- FILE 2: app.js ---
// You would run this file (e.g., `node app.js`)

// Import the default and named exports from math.js
import multiply, { PI, add } from './math.js';

console.log(PI);          // 3.14159
console.log(add(5, 10));    // 15
console.log(multiply(5, 10)); // 50

*/