var account = {
    balance: 0
};

//deposit
var deposit = function (acc, amount){
    acc.balance += amount;
};

//withdraw
var withdraw = function (acc, amount){
    acc.balance -= amount;
};

//getBalance
var getBalance = function (acc){
    return acc.balance;
};

deposit(account, 1000);
withdraw(account, 500);
console.log(getBalance(account));