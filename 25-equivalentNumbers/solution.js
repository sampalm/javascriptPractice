/*
Problem: What will be logged out to the console for this expression?
*/

// Code Example
console.log(900.9 === 3 * 300.3); // false because the numbers in the expression are not equal when they are evaluated. (3 * 300.3 => 900.9000000000001 != 900.9)

// toFixed()
console.log(Number((3 * 300.3).toFixed(2))); // return 900.9
// toPrecision()
console.log(Number((3 * 300.3).toPrecision(12))); // return 900.9