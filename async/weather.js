//bfcdc263d7429a720fe6fd4cf789c755
var request = require('request');

module.exports = function (location){
    return new Promise(function (resolve, reject){
        var encodedLocation = encodeURIComponent(location);
        
        request({
            url: 'http://api.openweathermap.org/data/2.5/weather?appid=bfcdc263d7429a720fe6fd4cf789c755&q=' + encodedLocation + '&units=imperial', 
            json: true
            
        }, function (error, response, body){
            if( error ){
                reject('unable to fetch weather');
            } else {
                resolve("It's " + body.main.temp + " degrees in " + body.name);
            }
        });
    });
}