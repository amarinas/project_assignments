/**
 * Created by amarinas on 3/15/17.
 */
var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');
var command_action = require('../controllers/animal.js');

module.exports = function(app){


    app.get('/', function(req, res){
        command_action.all(req, res)
    });
//send to the new form
    app.get('/new', function (req, res) {
        res.render('new')
    });
//send to edit screen
    app.get('/:id/edit', function (req,res) {
        command_action.edit(req, res)
        });
//update
    app.post('/:id', function(req,res){
        command_action.update(req, res)
        });


//delete animal
    app.post('/:id/delete', function(req,res){
        command_action.delete(req, res)

    })
//show all
    app.get('/shows/:id', function(req,res){
        command_action.show(req,res)
    })



// add new animal
    app.post("/mongoose/new", function (req,res) {
        command_action.addNew(req, res)
    })

}