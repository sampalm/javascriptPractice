/*
Problem: Determine what's logged out in the first console log and in the last one.
*/

// Code Example
var string1 = 'Tampa';
var string2 = string1;

string1 = 'Venice';

console.log(string2); // returns Tampa because strings are passed by value so changes in the string1 wont effect string2.

/////////////////////////////////////////////

var person1 = {
    name: 'Alex',
    age: 30
};

var person2 = person1;
person2.name = 'Kyle';

console.log(person1); // return Kyle because person2 refers to the same underlying object as person1