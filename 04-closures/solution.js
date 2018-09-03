/*
Problem:  Explains whats an closures and why are they used and code out an example.
R: Is an inner function that has access to the scope of an enclosing function.
*/

// 1- Solution
function welcome() {
    message = "Hello there!";
    function printOut(){
        alert(message)
    }
    printOut()
}

welcome();