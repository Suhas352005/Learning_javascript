// Day 7 – Arrays Practice

let movies = ["interstellar", "inception", "martian", "Gravity", "Moon"];
console.log(movies[3]);

let colors = ["red", "green", "Black", "White", "yellow"];
colors[2] = "Purple";
console.log(colors);

let animals = ["tiger", "monkey", "cheetah", "jaguar"];
animals.push("lion");
console.log(animals);

let animal = ["tiger", "monkey", "cheetah", "jaguar"];
animal.shift();
console.log(animal);

let items = ["pen", "book", "eraser", "scale"];
console.log(items.length);

let item = ["pen", "pencil", "eraser", "sharpner", "book"];
console.log(item.includes("book"));

let item1 = ["pen", "pencil", "eraser", "sharpner", "book"];
console.log(item1.indexOf("eraser"));

let item2 = ["pen", "pencil", "eraser", "sharpner", "book"];
console.log(item2[item2.length - 1]);


//Array challenges 
// 1. Sum of All Numbers
function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log(sumArray([10, 20, 30, 40]));

// 2. Count Even Numbers
function countEven(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}
console.log(countEven([1, 2, 3, 4, 5, 6]));

// 3. Find Max Number
function maxNum(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(maxNum([2, 89, 15, 42]));

// 4. Reverse Array
function reverseArr(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
console.log(reverseArr(["a", "b", "c"]));

// 5. Check if All Elements Are Positive
function checkAllPositive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      return false;
    }
  }
  return true;
}
console.log(checkAllPositive([1, 2, 3, 4]));
console.log(checkAllPositive([-1, 2, 3, -4]));

// 6. Remove Duplicates
function removeDup(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(removeDup([1, 2, 2, 3, 4, 4]));

// 7. Find Frequency of Each Element
function findFrequency(arr) {
  let frequency = {};
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (frequency[item]) {
      frequency[item]++;
    } else {
      frequency[item] = 1;
    }
  }
  return frequency;
}
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(findFrequency(fruits));

// 8. Elements at Even Indices
function evenIndices(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(evenIndices([5, 6, 7, 8, 9]));
