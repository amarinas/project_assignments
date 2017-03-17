/**
 * Created by amarinas on 3/16/17.
 */
//require mongoose
var mongoose = require('mongoose');

    var AnimalSchema = new mongoose.Schema({
        name: {type: String, required: true, minlength: 3},
        breed: {type: String, required: true, minlength: 3},
        color: {type: String, required: true, minlength: 3}
    }, {timestamps: true})

    mongoose.model('Animal', AnimalSchema);
    var Animal = mongoose.model('Animal');


mongoose.Promise = global.Promise;