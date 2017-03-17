/**
 * Created by amarinas on 3/16/17.
 */
var mongoose = require('mongoose');
var Names= mongoose.model('Names');
module.exports={

    show: function (req, res) {
        Names.find({}, function (err, names) {
            res.json(names);
        })

    },

    create: function(req, res){
        var names = new Names({name: req.params.name });
        names.save(function(err){
            if(!err){res.json({Names: req.params.name})
            }else{
                console.log('name not created');
            }
        })
    },

    findName: function (req, res) {
        Names.findOne({name:req.params.name}, {name:req.params.name}, function (err, names) {
            if (!err) {
                res.json(names);
            }
            else {
                res.json("didn't find them");
            }
        });
    },
    removeName: function (req, res) {
        Names.remove({name:req.params.name}, function (err, names) {
            if (!err) {
                res.json('deleted person');
            }
            else {
                res.json('failed to delete');
            }
        })
    },


}