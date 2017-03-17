/**
 * Created by amarinas on 3/17/17.
 */
//comment schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CommentSchema = new mongoose.Schema({
    _message:{type: Schema.Types.ObjectId, ref: 'Message'},
    name: { type: String, required: true, minlength: 4},
    text: { type: String, required: true, minlength: 4}

});
CommentSchema.path('name').required(true,'name cannot be blank');
CommentSchema.path('text').required(true,'comment cannot be blank');
mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment');

