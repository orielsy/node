var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs')
    .option('location', {
        alias: 'l',
        demand: false,
        description: 'The name of the city you want weather from',
        type: 'string'
    })
    .help('help')
    .argv;

if(typeof argv.l === "string" && argv.location.length > 0){
    weather(argv.location).then(function(message){
        console.log(message);
    }).catch(function (error){
        console.log(error);
    });
    
} else {
    console.log('No location given. Guessing...')
    location().then(function (message){
        return weather(message.city);
    }).then(function (currentWeather){
       console.log(currentWeather) 
    }).catch(function (error){
        console.log(error);
    });
       
    
}