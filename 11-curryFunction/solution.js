/*
Problem:  Curry the function below:

function getProduct(n1, n2) {
    return n1 * n2;
}
getProduct(n1, n2);

*/

// 1- Solution
function getProduct(n1) {
    return function(n2) {
        return n1 * n2;
    }
}
const doubleNum = getProduct(2);

console.log(doubleNum(36)); // 72