// Day 5 – Control Flow Practice

// 1. Simple calculator (switch)
const a = 10, b = 5, operator = '*';
switch (operator) {
  case '+': console.log(a + b); break;
  case '-': console.log(a - b); break;
  case '*': console.log(a * b); break;
  case '/': console.log(a / b); break;
  default: console.log('Invalid operator');
}

// 2. Day of the week (switch)
const day = 5;
switch (day) {
  case 1: console.log('Monday'); break;
  case 2: console.log('Tuesday'); break;
  case 3: console.log('Wednesday'); break;
  case 4: console.log('Thursday'); break;
  case 5: console.log('Friday'); break;
  case 6: console.log('Saturday'); break;
  case 7: console.log('Sunday'); break;
  default: console.log('Invalid input');
}

// 3. Temperature classification
const temp = 30;
if (temp > 30) {
  console.log('Hot');
} else if (temp >= 20) {
  console.log('Warm');
} else if (temp >= 10) {
  console.log('Cool');
} else {
  console.log('Cold');
}

// 4. Login system
const username = 'admin';
const password = '12345';
if (username === 'admin' && password === '12345') {
  console.log('Login successful');
} else {
  console.log('Access denied');
}

// 5. Largest of three numbers
const x = 12, y = 25, z = 10;
if (x > y && x > z) {
  console.log(`${x} is largest`);
} else if (y > x && y > z) {
  console.log(`${y} is largest`);
} else {
  console.log(`${z} is largest`);
}

// 6. Even/Odd using ternary
const checkNum = 5;
console.log(checkNum % 2 === 0 ? 'Even' : 'Odd');

// 7. Grading system
const marks = 90;
if (marks >= 90) {
  console.log('Grade A');
} else if (marks >= 75) {
  console.log('Grade B');
} else if (marks >= 50) {
  console.log('Grade C');
} else {
  console.log('Fail');
}

// 8. Positive / Negative / Zero
const val = -7;
if (val > 0) {
  console.log('Positive number');
} else if (val < 0) {
  console.log('Negative number');
} else {
  console.log('Zero');
}
