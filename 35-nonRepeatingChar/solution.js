/*
Problem: Implements a function that takes a string and return the character that appears only once or null if none.
*/

// Code Solution
var str1 = "abcd"
var str2 = "aabbc"
var str3 = "aabbcd"
var str4 = "aabbdd"

function nonRepeating(string) {
    for(i=0;i<string.length;i++) {
      if (string.charAt(i) == string.charAt(i-1) || string.charAt(i) == string.charAt(i+1)) {
        continue
      }
      return string.charAt(i)
    }
}

console.log(nonRepeating(str1));
console.log(nonRepeating(str2));
console.log(nonRepeating(str3));
console.log(nonRepeating(str4));



