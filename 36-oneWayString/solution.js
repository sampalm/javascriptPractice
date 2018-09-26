/**
 * Problem:  Write a function that takes two strings and returns true if they are one edit away.
*/

// Code Solution
var str1 = "asdfgas";
var str2 = "asdfgaag";
function isOneWay(str1, str2) {
    if (str1.length - str2.length >= 2 || str2.length - str1.length >= 2) {
        return false
    } else if (str1.length == str2.length) {
        // check if is one edit away
        var count = 0;
        for (i = 0; i < str1.length; i++) {
            if (str1[i] != str2[i])
                count++;
            if (count >= 2)
                return false;
        }
    } else if (str1.length != str2.length) {
        // check who's bigger and if is one edit away
        var bigger = str1.length > str2.length ? str1 : str2;
        var smaller = str1.length < str2.length ? str1 : str2;
        var i = 0; var diff = 0;

        while (smaller.length > i) {
            if (bigger[i + diff] == smaller[i]) {
                i++;
            } else {
                diff++;
                if (diff > 1) {
                    return false;
                }
            }
        }
        
    }
    return true
}

console.log(isOneWay(str1, str2));
