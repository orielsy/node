var express = require('express');
var PORT = 8080;
var app = express();

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuth, function (req, res){
    res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
    console.log('Express Server started on port: ' + PORT);
});