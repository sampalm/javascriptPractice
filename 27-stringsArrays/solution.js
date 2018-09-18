/*
Problem: What's logged out to the console.log() for this expression ?
*/

// Code Example
const data1 = 'Jordan Smith';

// Use array.prototype to call an array method on a string.
const data2 = Array.prototype.filter.call(data1, function(elem, index) {
    return index > 6;
});

console.log(data2);
// data2 => [ 'S', 'm', 'i', 't', 'h' ]
// This happens because filter returns an array with the elements that passed through the expression.

// Only 'read-only' methods works on strings. (eg filter, forEach, map, some, every etc).
// Cannot use methods that manipulate arrays. (eg push, pop, splice, shift, reverse etc).