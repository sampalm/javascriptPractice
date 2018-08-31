/*
Problem: Make a function called tripleAdd that is called like that "tripleAdd(1)(2)(3)" and return total of all 3 numbers.
*/

// 1- Solution
function tripleAdd(i=0){
    return function(n=0) {
        return function(j=0) {
            return i + n + j;
        }
    }
}
  
tripleAdd(5)(5)(5)

// 2- Solution
var tripleAdd = (i) => (j) => (k) => i+j+k;

tripleAdd(5)(5)(5)