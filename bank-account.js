var account = {
    balance: 0
};


var greetUser = function(name){
    if(typeof name === 'undefined'){
        console.log('Hello World!');
    } else {
        console.log('Hello' + name + '!');
    }
}
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
/*
deposit(account, 1000);
console.log(getBalance(account));
withdraw(account, 121);
console.log(getBalance(account)); */

var flipper = function(val){
  if(typeof(val)=== "number"){

  } else {

  }
};

console.log(flipper(1));
