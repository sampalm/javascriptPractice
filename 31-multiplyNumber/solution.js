/*
Problem: Find two integers that multiply to 20.
*/

// Code Solution
var arr = [2,4,1,6,5,40,-1]

arr.forEach(function(val){
  for(i=0;i<arr.length;i++){
    arr[i] * val == 20 ?
    console.log(`${arr[i]} * ${val} = 20`) :
    null
  }
});
