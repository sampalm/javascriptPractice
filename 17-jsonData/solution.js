/*
Problem: 
- Describe what JSON format is.
- Delete the data types not permitted in JSON.
- Replace placeholder-text with the corresponding data type, properly formatted as JSON.


// Code Example
const myJsonObj = {
    myString: [some string],
    myNumber: [some number],
    myNull: [null],
    myBoolean: [false],
    myUndefined: [undefined],
    myArray: [some array],
    myFunction: [some function],
    myObject: [some object]
}


*/
/*
- JSON:> Javascript Object Notation is a light-weight format for transferring data. It is easy for humans to understand and for computers to parse & generate.
*/

// Code Solution
const myJsonObj = {
    myString: "something",
    myNumber: 459788,
    myNull: null,
    myBoolean: true,
    // myUndefined: [undefined], invalid type
    myArray: ["a", 2],
    // myFunction: [some function], invalid type
    myObject: {"name": "sam"}
}