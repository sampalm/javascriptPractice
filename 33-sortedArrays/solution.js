/*
Problem: You are given two sorted arrays in the ascendant order so that the smallest values comes first. Writes a function that takes these two arrays and returns an array of the common elements between the two.
*/

// Code Solution
var a = [1,3,4,6,7,9,11,12,15];
var b = [1,2,4,5,9,10,15];

function commonElements(arr1, arr2) {
    var p1 = 0;
    var p2 = 0;
    var result = [];
    while (p1 < arr1.length && p2 < arr2.length) {
      if (arr1[p1] == arr2[p2]){
        result.push(arr1[p1]);
        p1 += 1;
        p2 += 1;
      }  else if(arr1[p1] > arr2[p2]) {
        p2++;
      } else {
        p1++;
      }
    }
    return result;
}

console.log(commonElements(a, b))