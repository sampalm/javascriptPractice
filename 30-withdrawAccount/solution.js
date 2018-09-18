/*
Problem: Break the code down and run throught it line by line and then determine what will be logged out from the two console logs?
*/

// Code Example
const account1 = {
    name: 'Jan',
    totalAmount: 5000,
    deductAmount: function(amount) {
        this.totalAmount -= amount;
        return 'Amount in account: ' + this.totalAmount;
    },
};

const account2 = {
    name: 'James',
    totalAmount: 8000,
};

const withdrawFromAccount = function(amount) {
    return account1.deductAmount.bind(account2, amount);
}

console.log(withdrawFromAccount(500)()); // 7500
console.log(withdrawFromAccount(200)()); // 7300

// This code simply deducts 700 from account2's totalAmount.