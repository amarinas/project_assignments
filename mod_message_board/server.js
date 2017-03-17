/**
 * Created by amarinas on 3/16/17.
 */
//require package npm
var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

///use static content views
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, "./client/views"))
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './client/static')));

//invoke database for comments and messages
require('./server/config/mongoose.js');

//routes in the console get url

app.use(function(req, res, next) {
    req.getUrl = function() {
        return "(" + req.method + ") " + req.protocol + "://" + req.get('host') + req.originalUrl;
    }
    console.log("Request: " + req.getUrl());
    //console.log('request: ', req )
    return next();
});


//

//store routes into a variable and invoke it
var routes_setter = require('./server/config/routes');
routes_setter(app);

// setting the server and port
app.listen(9000, function () {
    console.log('listening on port 9000 for project mongoose message board')

})