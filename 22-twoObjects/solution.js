/*
Problem: What is logged out for each expression ?
*/

// Code Example
const user1 = {
    name: 'Jordan',
    age: 28,
}

const user2 = {
    name: 'Jordan',
    age: 28
}

console.log(user1 == user2);
console.log(user1 === user2);
// None of theses objects are equals because in JS objects are passed by reference.

console.log([] === []);
// Returns false because arrays are also objects.

console.log(JSON.stringify(user1) === JSON.stringify(user2));
// However if we convert both objects to a string they will be equals.