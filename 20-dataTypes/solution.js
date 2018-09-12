/*
Problem: What is logged out for each console.log statement ?
*/

// Code Example
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof {}); // object
console.log(typeof []); // object

// Checks if a piece of data it is an array
console.log("Array: ", Array.isArray([]));
console.log("Array: ", [] instanceof Array);