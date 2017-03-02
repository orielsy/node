function getLocation(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('New York');
        }, 2000);
    });
}

function getWeather(location){
    return new Promise(function(resolve, reject){
        resolve("It's 35 degrees in " + location);
    })   
}

getLocation().then(function(message){
    return getWeather(message);
}).then(function(message){
   console.log(message); 
});