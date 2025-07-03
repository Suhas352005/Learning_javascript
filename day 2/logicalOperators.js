let age = 20;
console.log(age >= 18 && true);  // true

let isWeekend = false;
let isHoliday = true;
console.log(isWeekend || isHoliday);  // true

let isOnline = false;
if (!isOnline || true) {
  console.log("Access allowed"); // ✅
}

let marks = 38;
let result = marks >= 35 ? "Pass" : "Fail";
console.log(result); // "Pass"
