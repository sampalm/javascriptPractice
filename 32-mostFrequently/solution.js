/* 
Problem: Writes a function that takes an array and returns the number that occurs more often.
*/

// Code Solution
var arr = [1,2,4,3,1,5,1,2,3]

function mostFrequently(array) {
  var maxCount = 0; var maxItem = null;
  count = {}
  array.forEach(function(val){
    count[val] ? count[val] += 1 : count[val] = 1;
    if (count[val] > maxCount) {
      maxCount = count[val];
      maxItem = val;
    }
  })
  return maxItem;
}

console.log('The most frequently number is: ', mostFrequently(arr))
