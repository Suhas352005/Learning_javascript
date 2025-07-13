// Day 10 – Advanced Function Types Practice

// 1. Anonymous Function Example
const square = function(n) {
  return n * n;
};
console.log("Square of 5:", square(5));

// 2. Anonymous function in setTimeout
setTimeout(function() {
  console.log("Anonymous function after 2 seconds");
}, 2000);

// 3. Callback Function Example
function greetUser(name) {
  console.log("Hello, " + name);
}
function login(callback) {
  let user = "Suhas";
  callback(user);
}
login(greetUser); // Passing function as argument

// 4. Callback Function with Custom Operation
function calculator(a, b, operation) {
  return operation(a, b);
}

let add = function(x, y) {
  return x + y;
};

console.log("Addition:", calculator(5, 3, add));

// 5. Higher-Order Function Returning Function
function multiplier(factor) {
  return function(num) {
    return num * factor;
  };
}

let double = multiplier(2);
let triple = multiplier(3);
console.log("Double of 5:", double(5));
console.log("Triple of 5:", triple(5));

// 6. Higher-Order Function Accepting Function
function processTask(taskName, callback) {
  console.log("Starting task:", taskName);
  callback();
}

processTask("Upload Files", function() {
  console.log("Files uploaded successfully");
});

// === Answers to Practice Questions ===

// 1. Cube using anonymous function
const cube = function(n) {
  return n ** 3;
};
console.log("Cube of 3:", cube(3));

// 2. setTimeout with anonymous function
setTimeout(function() {
  console.log("Break time over");
}, 3000);

// 3. runTask with callback
function runTask(callback) {
  console.log("Running");
  callback();
}

function finish() {
  console.log("Task Completed");
}

runTask(finish);

// 4. makeGreeting returning function
function makeGreeting(greeting) {
  return function(name) {
    console.log(greeting + ", " + name);
  };
}

let greet = makeGreeting("Hello");
greet("Suhas"); // Hello, Suhas

greet = makeGreeting("Welcome");
greet("Dhanush"); // Welcome, Dhanush

// 5. Higher-order operation function
function operate(a, b, operation) {
  return operation(a, b);
}

let subtract = (x, y) => x - y;
let multiply = (x, y) => x * y;

console.log("Subtract:", operate(10, 3, subtract));
console.log("Multiply:", operate(4, 5, multiply));
