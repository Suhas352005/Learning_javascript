// Number conversion
console.log(Number("123"));      // 123
console.log(Number("123abc"));   // NaN
console.log(Number(true));       // 1
console.log(Number(false));      // 0

// String conversion
console.log(String(123));        // "123"
console.log(String(true));       // "true"
console.log(String(null));       // "null"

// Boolean conversion
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean("hello"));   // true
console.log(Boolean(1));         // true

// Implicit conversion
// Implicit type coercion
console.log("5" + 2);      // "52"
console.log("5" - 2);      // 3
console.log("5" * "2");    // 10

// Coercion with boolean and null/undefined
console.log(true + 1);        // 2
console.log(false + 1);       // 1
console.log(null + 1);        // 1
console.log(undefined + 1);   // NaN

