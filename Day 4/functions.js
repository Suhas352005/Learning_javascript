// Day 6 – JavaScript Functions Practice

// 1. Print "Good Morning!"
function greet() {
  console.log("Good morning");
}
greet(); // Output: Good morning

// 2. Add two numbers and return the result
function add(a, b) {
  return a + b;
}
let sum = add(5, 6);
console.log(sum); // Output: 11

// 3. Return square of a number
function square(n) {
  return n * n;
}
let squared = square(5);
console.log(squared); // Output: 25

// 4. Check if number is even or odd
function checkNum(num) {
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
checkNum(10); // Output: Even

// 5. Find the maximum of two numbers
function maxNum(a, b) {
  if (a > b) {
    console.log("A is greater");
  } else {
    console.log("B is greater");
  }
}
maxNum(5, 10); // Output: B is greater

// 6. Arrow function to greet someone by name
const greetUser = (name) => {
  console.log(`Welcome ${name}`);
};
greetUser("Suhas"); // Output: Welcome Suhas
