/**
 * Created by amarinas on 3/17/17.
 */
var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');


module.exports= {

    find: function (req, res) {
        Message.find({})
            .populate("comments")

            .exec(function (err, results) {

                if (err) {
                    console.log(err);
                }
                res.render('index', {result: results})
            })

    },

    addMessage: function (req, res) {

        var postMessage = new Message({name: req.body.name, message: req.body.message});
        postMessage.save(function (err) {
            if (err) {
                console.log(err);
                res.render('index.ejs', {errors: postMessage.errors});
            } else {
                console.log('message saved to the database');
                res.redirect('/');
            }

        })

    },

    addComment: function (req, res) {

        var message_id = req.params.id;
        Message.findOne({_id: message_id}, function (err, message) {
            var newComment = new Comment({name: req.body.name, text: req.body.comment});

            newComment._message = message.id;
            Message.update({_id: message.id}, {$push: {"comments": newComment}}, function (err) {

            })
            newComment.save(function (err) {
                if (err) {
                    res.render('index.ejs', {errors: newComment.errors});

                } else {
                    console.log('comment added');
                    res.redirect('/');
                }

            })

        })
    }
}



