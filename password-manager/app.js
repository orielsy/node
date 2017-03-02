console.log("Starting password manager");

var crypto = require('crypto-js');
var storage = require('node-persist');
storage.initSync();

var getAccounts = function(master){
    
    var encryptedAccounts = storage.getItemSync('accounts');
    var accounts = [];
    if(typeof encryptedAccounts !== 'undefined'){
        var bytes = crypto.AES.decrypt(encryptedAccounts, master);
        var decryptedAccounts = bytes.toString(crypto.enc.Utf8);
        var accounts = JSON.parse(decryptedAccounts); 
    }
    
    return accounts;
};

var saveAccounts = function(accounts, master){
    var accountsString = JSON.stringify(accounts);
    var encryptedAccounts = crypto.AES.encrypt(accountsString, master);
    
    storage.setItemSync('accounts', encryptedAccounts.toString());
    
    return accounts;
};

var createAccount = function(name, username, password, master){
    var newAccount = {
        name: name,
        username: username,
        password: password
    };
    
    var accounts = getAccounts(master);
    
    accounts.push(newAccount);
    saveAccounts(accounts, master);
    
    console.log(name + " account created");
    return newAccount;
};

var getAccount = function(accountName, master){
    
    var accounts = getAccounts(master);
    var matchedAccount; 
    
    for(var x = 0; x < accounts.length; x++){
        if(accounts[x].name === accountName){
            matchedAccount = accounts[x];
        }
    }
    if(typeof matchedAccount === 'undefined'){
        console.log('No account found');
    } else {
        console.log(matchedAccount);
        return matchedAccount;
    }
};

var argv = require('yargs')
    .command("create", "Create an account", function(yargs){
        yargs.options({
            name: {
                demand: true,
                alias: 'n',
                description: 'The name of the service',
                type: 'string'
            },
            username: {
                demand: true,
                alias: 'u',
                description: 'Your user name',
                type: 'string'
            },
            password: {
                demand: true,
                alias: 'p',
                description: 'The password for this service',
                type: 'string'
            },
            master: {
                demand: true,
                alias: 'm',
                description: 'Master Password',
                type: 'string'
            }
        }).help('help');
    })
    .command("get", "Fetches an account", function(yargs){
        yargs.options({
            name: {
                demand: true,
                alias: 'n',
                description: 'The name of the service',
                type: 'string'
            },
            master: {
                demand: true,
                alias: 'm',
                description: 'Master Password',
                type: 'string'
            }
        }).help('help');
    })
    .help('help')
    .argv;
    
var command = argv._[0];

if(command === "create" && argv.name.length > 0 && argv.username.length > 0 && argv.password.length > 0 ){
    try{
        createAccount(argv.name, argv.username, argv.password, argv.master);
    } catch (e) {
        console.log('Unable to create');
    }
} 
else if(command ==='get' && argv.name.length > 0){
    try{
        getAccount(argv.name, argv.master);
    } catch (e) {
        console.log('Unable to fetch');
    }
} else {
    console.log('Please enter complete commands');
}


/*if(command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined'){
    console.log('hello ' + argv.name + " " + argv.lastname);
}*/




