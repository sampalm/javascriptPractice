/*
Problem: Take a look at the code below and explain what "list2" wil contains when it be logged out.
*/

// Code Example
const list1 = [1,2,3,4,5];
const list2 = list1;
list1.push(6,7,8,9)

console.log(list2) // [1,2,3,4,5,6,7,8,9] Because list1 and list2 is a reference to the same underlying array.

/*
Problem 2: How can we set list2 equal to an array that has the same data that the list1 without referencing the same array that list1 does. And update list1 without affecting the data that is in the list2.
*/

const list1 = [1,2,3,4,5];
//const list2 = list1.concat([]);
const list2 = list1.slice(); //Makes a copy of list1 without referencing to the same data.
list1.push(6,7,8,9)

console.log(list1)
console.log(list2)