/*
Problem:  Whats logged out to the console when the method myCar.logColor() is ran.
*/

// 1- Solution
var myCar = {
    color: "Blue",
    logColor: function() {
        var self = this;
        console.log("In logColor - this.color: " + this.color); // Blue
        console.log("In logColor - self.color: " + self.color); // Blue
        (function() {
            console.log("In IIFE - this.color: " + this.color); // undefined because it lose the reference of myCar object and now its referencing to the global object who do not have a color property.
            console.log("In IIFE - self.color: " + self.color); // Blue because it still reference to myCar object.
        })();
    }
};

myCar.logColor();