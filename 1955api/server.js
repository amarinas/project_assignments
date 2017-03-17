/**
 * Created by amarinas on 3/16/17.
 */
var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
//static content
app.use(express.static(path.join(__dirname, "./client/static")));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
//database set up from mongo js

require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes');
routes_setter(app)

//tell the express app to go to the port
app.listen(9000, function(){
    console.log('listening on port 900 for project 1955api');
})
