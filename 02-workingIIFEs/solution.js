/*
Problem: Explains whats an IIFE and why are they used and code out an example.
*/
/* 
:    1- Solution: Its a function that is exectued right after it is created. The main reason to use and IIFE is to preserve a private scope.
*/

// 2- Solution
(function(n){
    return n * 2;
})(2);