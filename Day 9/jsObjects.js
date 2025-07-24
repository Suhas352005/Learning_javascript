// ✅ 1. Create an Object and Print Its Properties
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};
console.log(car.brand);
console.log(car.model);
console.log(car.year);

// ✅ 2. Check if a Property Exists in an Object
function hasProperty(obj, key) {
  return key in obj;
}
console.log(hasProperty({ name: "Bharath", age: 24 }, "age")); // true

// ✅ 3. Count Number of Properties
function countProperties(obj) {
  return Object.keys(obj).length;
}
console.log(countProperties({ name: "Bharath", age: 24 }));

// ✅ 4. Find the Person with Highest Age
const people = [
  { name: "Suhas", age: 21 },
  { name: "Bharath", age: 25 },
  { name: "Dhanush", age: 18 }
];

let oldest = people[0];
for (let person of people) {
  if (person.age > oldest.age) {
    oldest = person;
  }
}
console.log(oldest);

// ✅ 5. Nested Object Access
const book = {
  title: "The Great Book",
  author: "John Smith",
  publisher: {
    name: "ABC Publishing",
    location: "New York"
  }
};
console.log(book.publisher.location);

// ✅ 6. Sum of Object Values
function sumValues(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      sum += obj[key];
    }
  }
  return sum;
}
console.log(sumValues({ a: 10, b: 20, c: 30 })); // 60

// ✅ 7. Convert Object to Array
function objectToArray(obj) {
  return Object.entries(obj);
}
console.log(objectToArray({ a: 1, b: 2 })); // [["a", 1], ["b", 2]]

// ✅ 8. Merge Two Objects
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
console.log(mergeObjects({ a: 1 }, { b: 2 })); // {a:1, b:2}

// ✅ 9. Remove a Property
function removeKey(obj, key) {
  delete obj[key];
  return obj;
}
console.log(removeKey({ a: 1, b: 2 }, "b")); // {a:1}

// ✅ 10. Find Keys with Even Values
function evenKeys(obj) {
  let result = [];
  for (let key in obj) {
    if (obj[key] % 2 === 0) {
      result.push(key);
    }
  }
  return result;
}
console.log(evenKeys({ a: 2, b: 5, c: 8 })); // ["a", "c"]
