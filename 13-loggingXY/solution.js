/*
Problem: 
- What is the value of y when it is logged out ?
- What is the value of x when it is logged out ?
*/

// Code Example 
(function() {
  var x = y = 200;
})();
console.log('y: ',y)
console.log('x: ',x)

// Explanation Code
(function() {
  // var x = y = 200;
  y = 200; // 'y' is declared as a global variable
  var x = y; // 'x' is accessable only inside the IIFE scope
})();
console.log('y: ',y)
console.log('x: ',x)

