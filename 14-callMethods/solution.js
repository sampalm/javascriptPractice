/*
Problem: Describe the javascript call() and apply() methods.
- How do they function ?
- What arguments do they take ?
- How are they different ?
*/

// Solution call()
/* 
- R: Give a different way of passing arguments into a function, it also give us the ability to change the "this" context.
*/

const carOne = {
    brand: 'Opala',
    getDescription: function(year, color) {
        console.log(`Your ${this.brand} is a nice ${color} car from ${year}.`)
    }
}
const carTwo = {
    brand: "Maverick"
}
const carThree = {
    brand: "Fusca"
}

carOne.getDescription(1997, "red")
carOne.getDescription.call(carTwo, 1992, "black")

// Solution apply()
/* The only difference between call() and apply() is that we pass the arguments in as an array. */

carOne.getDescription.apply(carThree, [1990, "blue"])