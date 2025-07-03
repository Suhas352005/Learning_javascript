let x = 7;
console.log(x % 2 === 0 ? "Even" : "Odd"); // "Odd"

let age = 16;
let canDrive = age >= 18 ? "Yes" : "No";
console.log(canDrive); // "No"

let score = 50;
let status = score >= 40 ? "Pass" : "Fail";
console.log(status); // "Pass"

let temp = 32;
let weather = temp > 30 ? "Hot" : temp >= 20 ? "Warm" : "Cold";
console.log(weather); // "Hot"

let value = 0;
let valCheck = value ? "Truthy" : "Falsy";
console.log(valCheck); // "Falsy"

let a = null;
let b = undefined;
console.log(a == b);  // true
console.log(a === b); // false

let loggedIn = true;
let isAdmin = false;
let access = loggedIn && isAdmin ? "Accessed" : "Limited Access";
console.log(access); // "Limited Access"
