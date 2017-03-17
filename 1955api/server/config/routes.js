/**
 * Created by amarinas on 3/16/17.
 */
var mongoose = require('mongoose');
var name = require('../controllers/name');

module.exports = function(app){
    app.get('/', function(req,res){
       name.show(req, res);
    })

    app.get('/new/:name/', function(req, res){
        name.create(req,res);
    })

    app.get('/remove/:name/', function(req, res){
        name.removeName(req, res)
    })

    app.get('/:name', function (req, res) {
        name.findName(req, res)
    })

}