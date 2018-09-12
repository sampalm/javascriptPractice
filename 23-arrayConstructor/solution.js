/*
Problem: What is logged out for each console.log statements?
*/

// Code Example
var arr1 = [];
var arr2 = new Array(50);
var arr3 = new Array(1, 2, "three", 4, "five");
var arr4 = new Array([1, 2, 3, 4, 5]);

console.log('arr1: ', arr1); // return an empty array.
console.log('arr2: ', arr2); // return an array with 50 empty elements.
console.log('arr3: ', arr3); // return an array with the given arguments.
console.log('arr4: ', arr4); // return an array within another one.
