/*
Problem: 
- Write a function that keeps track of how many times it was called and returns that number.
- All functionality should be inside of the function - none outside.
*/

// Solution 01
function myCall() {
    // JavaScript functions are also Objects
    if (typeof myCall.counter == "undefined") {
      myCall.counter = 1;
    }
  
    console.log(myCall.counter++);
}
myCall(); 
myCall();
myCall();

// Solution 02
function myCall() {
    // Using closures
    let i = 0;
    return function() {
      i++;
      return i;
    };
  }
const instaOne = myCall();
const instaTwo = myCall();

console.log("instaOne", instaOne()) 
console.log("instaOne", instaOne()) 
console.log("instaOne", instaOne()) 
console.log("instaTwo", instaTwo()) 
console.log("instaTwo", instaTwo()) 