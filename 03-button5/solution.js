/*
Problem: Fix the code below to show the correct number of each button.
*/
/* 
    function createButtons() {
        for (var i = 1; i <= 5; i++) {
            var body = document.getElementsByTagName("BODY")[0];
            var button = document.createElement("BUTTON");
            button.innerHTML = 'Button ' + i;
            button.onclick = function() {
                alert('This is button ' + i);
            }
            body.appendChild(button);
        }
    }                
    createButtons();
*/

// 1- Solution
function createButtons() {
    for (var i = 1; i <= 5; i++) {
        var body = document.getElementsByTagName("BODY")[0];
        var button = document.createElement("BUTTON");
        button.innerHTML = 'Button ' + i;
        body.appendChild(button);
        (function(n) {
            button.onclick = function() {
                alert('This is button ' + n);
            }
        })(i);
    }
}                
createButtons();