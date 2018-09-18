/*
Problem: What variable will be logged out for the variable 'x' ?
*/

// Code Example
var x = 10;

function y() {
  x = 100;
  return;
  function x() {}
}

y();

console.log(x); // logs out 10

// Whats happening underlying is that function x() is hoisted as a local variable inside y() function block scope therefore the value of the global variable 'x' never changes.