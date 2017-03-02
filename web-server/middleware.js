
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


module.exports = middleware;