// reverse a string solution : 
function reverse(ch){
    var rch = "";
    for (let i = ch.length -1; i >= 0 ; i--) {
        rch  += ch[i];
        
    }
return rch 
}
console.log(reverse("acef"));

// count characteres solution :

function count(ch){
    return ch.length
    }
// capialize the first letter of each word in a sentence

function capw(ch) {
  var words = ch.split(' ');
  var res = '';


  for (let i = 0; i < words.length; i++) {
      res += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";

  }

  return res;
}

// array functions :

// max min of array
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
function somme(arr){
    var s = 0 
    for (let i = 0; i < arr.length; i++) {
        s = s + arr[i];
    }
}
// filter out elements 
function filterArray(arr, condition) {
  const res = [];

  for (let i = 0; i < arr.length; i++){
    
    if (condition(arr,arr[i],i )) {
      res.push(arr[i]);
    }
  }
  return res;
}

// math functions 
function fact(n){
    if(n==0){
        return 1}
    
    else {
        return n * fact(n-1)
    }
}
function isPrime(n) {

    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
function fibo(n){
    if(n<2){
        return n
    }
    else {
        return fibo(n-1)+fibo+(n-2)
    }
}