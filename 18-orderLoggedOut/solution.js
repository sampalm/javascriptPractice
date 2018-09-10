/*
Problem: What order are the numbers (1, 2, 3, 4) logged out in ?
*/

// Code Example
function logNumbers() {
    console.log(1)
    setTimeout(function(){console.log(2)}, 1000) // stucked into the event loop
    setTimeout(function(){console.log(3)}, 0) // stucked into the event loop
    console.log(4)
}

// Console log: 1 > 4 > 3 > 2