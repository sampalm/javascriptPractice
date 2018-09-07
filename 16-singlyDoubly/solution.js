/*
Problem: Build a function called 'getTotal()' that can be invoked in two different ways.
- Singly invoked: getTotal(10, 20);
- Doubly invoked: getTotal(10)(20);
*/

function getTotal(){
    args = Array.prototype.slice.call(arguments)

    if (args.length === 2) {
        return args[0] + args[1];
    }
    else if (args.length === 1) {
        return function(n2) {
            return args[0] + n2;
        }
    }
}

console.log(getTotal(20,25))
console.log(getTotal(10)(25))