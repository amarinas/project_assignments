/**
 * Created by amarinas on 3/17/17.
 */
var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');
var content = require('../controllers/messages.js');
//export module

module.exports = function (app) {
    //find all
    app.get('/', function(req, res){
        content.find(req, res)
    });


    //add Message
    app.post('/message', function (req, res) {
        content.addMessage(req, res)
    });

    //add comment
    app.post('/addComment/:id', function (req,res) {
        content.addComment(req, res)
    });


    
}