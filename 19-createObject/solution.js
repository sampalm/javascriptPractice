/*
Problem: List and describe 3 different ways of creating an object in javascript.
*/

// Code Solution
var obj1 = {}; // object literal syntax
var obj2 = new Object(); // new keyword & object constructor

// constructor function
function Car(color, brand, year) {
    this.color = color;
    this.brand = brand;
    this.year = year;
}
  
Car.prototype.getBrand = function() {
return this.brand;
}
  
myCar = new Car("red", "mustang", "1995");
console.log(myCar);
console.log(myCar.getBrand());