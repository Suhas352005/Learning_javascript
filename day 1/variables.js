// let and const demo
let firstName = "Suhas";
const birthYear = 2004;

firstName = "Sk";
// birthYear = 2005; // ❌ Error: Assignment to constant variable

{
  let secret = "hidden";
}
// console.log(secret); // ❌ Error: secret is not defined

{
  var name = "Suhas";
}
console.log(name); // ✅ "Suhas"

var a = 10;
{
  var a = 20;
}
console.log(a); // ✅ 20 (var is function-scoped)
