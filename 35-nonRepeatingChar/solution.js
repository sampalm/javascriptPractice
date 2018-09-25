/*
Problem: Implements a function that takes a string and return the character that appears only once or null if none.
*/

var str1 = "abcd"
var str2 = "aabbc"
var str3 = "aabbcd"
var str4 = "aabbdd"

// Code Solution #1
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

// Code Solution #2
function nonRepeating(string) {
    var charCount = null;
    var counter = {}
    for(i=0;i<string.length;i++) {
      if (!counter[string.charAt(i)]) {
        counter[string.charAt(i)] = 1
      } else {
        counter[string.charAt(i)] += 1
      }
    }
    Object.keys(counter).map(function(char) {
      if (charCount !== null)
        return false;
      if (counter[char] === 1)
        return charCount = char; 
    });

    return charCount;
}

console.log(nonRepeating(str1));
console.log(nonRepeating(str2));
console.log(nonRepeating(str3));
console.log(nonRepeating(str4));
