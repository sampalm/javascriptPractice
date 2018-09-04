/*
Problem:  Explains whats is hoisting and how it works.
R: Variables and functions are hoisted to the top of the scope that they are declared in. (global scope, function scope, block scope)
*/

// Function expression
console.log(doSum(2,1)) // error doSum isnt a function
var doSum = function(a, b) {
    return a + b;
};
console.log(doSum(2,1)) // doSum works

// function declaration
console.log(doSum(2,1)) // doSum works
function Sum(a, b) {
    return a + b;
}
console.log(doSum(2,1)) // doSum works
