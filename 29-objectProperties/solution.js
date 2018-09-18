/*
Problem: What will be logged out to the console?
*/

// Code Example
const a = {}
const b = { name: 'b' };
const c = { name: 'c' };

a[b] = 200;
// a['[object Object]'] = 200

a[c] = 400;
// a['[object Object]'] = 400


console.log(a[b]);
// console.log(a['[object Object]'] = 400)

// Only strings can be properties in objects therefore JS will convert the object to a 'string object'.