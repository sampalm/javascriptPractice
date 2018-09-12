/*
Problem: What will be logged out for each console log?
*/

// Code Example
console.log([10, 20, 30, 40, 50].indexOf(30)); // Index 2
console.log([{name: 'Pam'}, {name: 'Kent'}].indexOf({name: 'Kent'})); // Cant find it because two different objects are never the same in JS.
console.log('hellow world'.indexOf('o')); // Index 4
console.log([[1],[2],[3],[4]].indexOf([2])); // Cant find because two different array are never the same in JavaScript.

const myArray = [5];
console.log([[1], [2], [3], [4], myArray].indexOf(myArray)) // Index 4, because the argument myArray is the same piece of data as myArray inside the array.