/**
 * Created by amarinas on 3/15/17.
 */
//require express,path,bodyparser, mongoose
var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
//static content
app.use(express.static(path.join(__dirname, "./client/static")));

//setting ejs and view folder
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
require('./server/config/mongoose.js');

//store the function in a variable
var routes_setter = require('./server/config/routes.js');
//invoke the function in routes_setter and pass it to app variable
routes_setter(app)


//tell the express app to go to port 8000
app.listen(8000, function () {
    console.log('listening on port 8000 for project module_mongoose');
})

