// Day 5 – Loops Practice

// 1. Print numbers 1–10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Even numbers 2–20
let even = 2;
while (even <= 20) {
  console.log(even);
  even += 2;
}

// 3. Print 5 to 1 using do...while
let dw = 5;
do {
  console.log(dw);
  dw--;
} while (dw >= 1);

// 4. Factorial of a number
const number = 5;
let factorial = 1;
for (let i = 1; i <= number; i++) {
  factorial *= i;
}
console.log(`Factorial of ${number} is ${factorial}`);

// 5. Skip 5 using continue
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i);
}

// 6. Break when value > 7
for (let i = 1; i <= 10; i++) {
  if (i > 7) break;
  console.log(i);
}
