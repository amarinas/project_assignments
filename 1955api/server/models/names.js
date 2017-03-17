/**
 * Created by amarinas on 3/16/17.
 */
var mongoose = require('mongoose');

var NamesSchema = new mongoose.Schema({
    name: {type: String, required: true}
}, {timestamps: true})


var Names = mongoose.model('Names', NamesSchema);

mongoose.Promise = global.Promise;
