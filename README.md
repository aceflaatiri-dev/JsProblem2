# JavaScript Utility Functions

This project contains a collection of beginner-friendly JavaScript utility functions that handle string manipulation, array operations, and basic math calculations. These functions are ideal for learning, interviews, and building foundational understanding in JavaScript.

---

### Code Overview

```js
// Reverse a string
function reverse(ch){
    var rch = "";
    for (let i = ch.length -1; i >= 0 ; i--) {
        rch  += ch[i];
    }
    return rch;
}
console.log(reverse("acef")); // Output: "feca"

// Count characters in a string
function count(ch){
    return ch.length;
}
console.log(count("hello")); // Output: 5

// Capitalize the first letter of each word in a sentence
function capw(ch) {
  var words = ch.split(' ');
  var res = '';
  for (let i = 0; i < words.length; i++) {
      res += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
  }
  return res.trim();
}
console.log(capw("hello world")); // Output: "Hello World"

// Find maximum and minimum in an array
function findMax(arr) {
  if (arr.length === 0) return null;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax([2, 8, 1, 4])); // Output: 8

function findMin(arr) {
  if (arr.length == 0) return null;
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(findMin([2, 8, 1, 4])); // Output: 1

// Sum of array elements
function somme(arr){
    var s = 0;
    for (let i = 0; i < arr.length; i++) {
        s = s + arr[i];
    }
    return s;
}
console.log(somme([1, 2, 3])); // Output: 6

// Filter array elements by condition
function filterArray(arr, condition) {
  const res = [];
  for (let i = 0; i < arr.length; i++){
    if (condition(arr, arr[i], i)) {
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(filterArray([1, 2, 3, 4], (arr, val) => val % 2 === 0)); // Output: [2, 4]

// Factorial using recursion
function fact(n){
    if(n == 0){
        return 1;
    } else {
        return n * fact(n - 1);
    }
}
console.log(fact(5)); // Output: 120

// Check if a number is prime
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(7)); // Output: true

// Fibonacci using recursion
function fibo(n){
    if(n < 2){
        return n;
    } else {
        return fibo(n - 1) + fibo(n - 2);
    }
}
console.log(fibo(6)); // Output: 8
