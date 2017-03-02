var express = require('express');
var PORT = 8080;
var app = express();

var middleware = {
    requireAuth: function(req, resp, next){
        console.log('private route hit');
        next();
    },
    logger: function(req, res, next){
        console.log(req.method + " " + req.originalUrl );
        next();
    }
}
app.use(middleware.logger);

app.get('/about', middleware.requireAuth, function (req, res){
    res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
    console.log('Express Server started on port: ' + PORT);
});