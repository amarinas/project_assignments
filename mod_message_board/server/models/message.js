/**
 * Created by amarinas on 3/17/17.
 */
//message schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4},
    message: { type: String, required: true, minlength: 4},
    comments:[{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

MessageSchema.path('name').required(true, 'Name Cannot be blank');
MessageSchema.path('message').required(true, 'message cannot be blank')
mongoose.model("Message", MessageSchema);
var Message = mongoose.model('Message');

