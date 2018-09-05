/*
Problem:  Whats does using 'strict mode' do to your code and what are the benefits of using it ?
R: Enforce stricter parsing and error handling in your code also prevents the use of global variables.
*/

// 1- Solution
'use strict';

city = 'Lisbon';

console.log(city) // error city is not defined