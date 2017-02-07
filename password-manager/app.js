console.log("Starting password manager");

var storage = require('node-persist');
storage.initSync();

var createAccount = function(name, username, password){
    var accounts = storage.getItemSync('accounts');
    var newAccount = {
        name: name,
        username: username,
        password: password
    }
    
    if(typeof accounts === 'undefined'){
        accounts = [];
    } 
    
    accounts.push(newAccount);
    storage.setItemSync('accounts', accounts);
    
    return newAccount;
};

var getAccount = function(accountName){
    var accounts = storage.getItemSync('accounts');
    var matchedAccount; 
    
    for(var x = 0; x < accounts.length; x++){
        if(accounts[x].name === accountName){
            matchedAccount = accounts[x];
        }
    }
    return matchedAccount;
};

createAccount('facebook', 'orielsy@gmail.com', '12345678');

var facebookAccount = getAccount('facebook');
console.log(facebookAccount);
//test