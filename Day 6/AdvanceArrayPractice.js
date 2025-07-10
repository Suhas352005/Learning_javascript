// Day 9 – Practice Solutions for Advanced Array Methods

// 1. forEach – Print all items with index
let fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

// 2. forEach – Log items with more than 5 letters
let animals = ["tiger", "elephant", "cat", "giraffe"];
animals.forEach(animal => {
  if (animal.length > 5) console.log(animal);
});

// 3. map – Squares of numbers
let nums1 = [2, 3, 4];
let squares = nums1.map(n => n * n);
console.log(squares); // [4, 9, 16]

// 4. map – Uppercase names
let names = ["suhas", "bharath", "dhanush"];
let upper = names.map(n => n.toUpperCase());
console.log(upper);

// 5. map – String lengths
let langs = ["JavaScript", "Python", "C++"];
let lengths = langs.map(lang => lang.length);
console.log(lengths);

// 6. filter – Even numbers
let nums2 = [1, 2, 3, 4, 5, 6];
let evens = nums2.filter(n => n % 2 === 0);
console.log(evens);

// 7. filter – Strings longer than 4 chars
let cities = ["Goa", "Mumbai", "Delhi", "Agra"];
let longCities = cities.filter(c => c.length > 4);
console.log(longCities);

// 8. filter – Age > 18
let users1 = [
  { name: "Suhas", age: 20 },
  { name: "Dhanush", age: 15 }
];
let adults = users1.filter(u => u.age > 18);
console.log(adults);

// 9. reduce – Sum of prices
let prices = [100, 250, 350];
let total = prices.reduce((sum, curr) => sum + curr, 0);
console.log(total);

// 10. reduce – Product of numbers
let nums3 = [2, 3, 4];
let product = nums3.reduce((acc, val) => acc * val, 1);
console.log(product);

// 11. reduce – Sentence from words
let words = ["Learning", "JavaScript", "is", "fun"];
let sentence = words.reduce((acc, w) => acc + " " + w);
console.log(sentence);

// 12. find – First even number
let numbers = [1, 3, 7, 10, 15];
let even = numbers.find(n => n % 2 === 0);
console.log(even);

// 13. find – User with id 102
let users2 = [
  { id: 101, name: "Bharath" },
  { id: 102, name: "Suhas" }
];
let userFound = users2.find(u => u.id === 102);
console.log(userFound);

// 14. sort – Alphabetically
let names2 = ["dhanush", "bharath", "suhas"];
names2.sort();
console.log(names2);

// 15. sort – Descending scores
let scores = [80, 95, 50, 100];
scores.sort((a, b) => b - a);
console.log(scores);

// 16. sort – Products by price
let products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 50 },
  { name: "Scale", price: 5 }
];
products.sort((a, b) => a.price - b.price);
console.log(products);

// 17. Challenge – Frequency count
let fruits2 = ["apple", "banana", "apple", "orange", "banana"];
let freq = {};
fruits2.forEach(fruit => {
  freq[fruit] = (freq[fruit] || 0) + 1;
});
console.log(freq);

// 18. Challenge – Remove duplicates
let data = [1, 2, 2, 3, 4, 4, 5];
let unique = data.filter((item, index) => data.indexOf(item) === index);
console.log(unique);

// 19. Challenge – Pass/Fail from marks
let marks = [60, 35, 75, 28];
let result = marks.map(m => m >= 40 ? "pass" : "fail");
console.log(result);
