var accounts = [];

var createAccount = function(username, balance){
    var account = {
        username: username,
        balance: balance
    }
    accounts.push(account);
};

var getAccount = function(username){
    var find;
    accounts.forEach(function(current, index){
        if(current.username === username){
            find = current;
        } 
    });
    return find;
};

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


createAccount('ori', 33);
createAccount('diaz', 500);
console.log(getAccount('ori'));
//deposit


var flipper = function(val){
  if(typeof(val)=== "number"){

  } else {

  }
};


