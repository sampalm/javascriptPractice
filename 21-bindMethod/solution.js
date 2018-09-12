/*
Problems:
- Describe how the bind() function works
- Explain the parameters that it takes
- Code out an example of how bind() is used
*/

// Code Solution
// - The bind() function allows you to bind a function to a certain 'this' context
// - Also allows you to define parameters that you want to hold constant as well.

this.distance = 5000;

const route1 = {
    distance: 300,
    getDistance: function(unit, caption) {
        return this.distance + unit + caption;
    }
}

const route2 = {
    distance: 450
}

const getRouteDistance = route1.getDistance;
const getRoute1Distance = route1.getDistance.bind(route1, 'km', ' in total');
const getRoute2Distance = route1.getDistance.bind(route2, 'km', ' in total');

console.log(getRouteDistance('km', ' in total')); // 5000km in total because the context now is the global variable
console.log(getRoute1Distance()); // 300km in total
console.log(getRoute2Distance()); // 450km in total