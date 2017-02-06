var accounts = [];

var createAccount = function(username, balance){
    var account = {};
    if(typeof balance === 'number'){
        account = {
            username: username,
            balance: balance
        };
        accounts.push(account);
    } else{
        console.log("Balance given is not a number");
    }
    return account;
};

var getAccount = function(username){
    var matchedAccount;
    
    for(var x = 0; x < accounts.length; x++){
        if(accounts[x].username === username){
            matchedAccount = accounts[x];
        } 
    }
    return matchedAccount;
};

var deposit = function (username, amount){
    
    if(typeof amount === 'number'){
        for (var x = 0; x < accounts.length; x++){
            if(accounts[x].username === username){
                accounts[x].balance += amount;    
            }
        }
    } else {
        console.log('Ammount is not a number. Please use number.');
    }
};

//withdraw
var withdraw = function (username, amount){
    if(typeof amount === 'number'){
        for (var x = 0; x < accounts.length; x++){
            if(accounts[x].username === username){
                accounts[x].balance -= amount;       
            }
        }
    } else {
        console.log('Ammount is not a number. Please use number.');
    }
};

//getBalance
var getBalance = function (username){
    for(var x = 0; x < accounts.length; x++){
        if(accounts[x].username === username){
            return accounts[x].balance;       
        }
    }
};

var balanceGetter = function(username){
    return function(){
        for(var x = 0; x < accounts.length; x++){
            if(accounts[x].username === username){
                return accounts[x].balance;       
            }
        }
    };
};

var displayAll = function(){
    for(var x = 0; x < accounts.length; x++){
        console.log('Account #' + x + ": " + accounts[x].username +"---"+ accounts[x].balance);
    }
}

createAccount('Orielsy', 'a');
createAccount('Orielsy', 5);
createAccount('John', 200);
withdraw('John', 4);
deposit('Orielsy', 200);
console.log(getBalance('Orielsy'));
console.log(getBalance('John'));
console.log(getAccount('John'));
var hold = balanceGetter('Orielsy');
