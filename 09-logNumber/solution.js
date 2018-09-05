/*
Problem:  Whats logged out to the console when the function logNumber() is ran.
*/

// 1- Solution
var num = 50;

function logNumber() {
    console.log(num); // Undefined because var num will be "hoisted" to the top of the logNumber function scope.
    var num = 100;
}

logNumber();