/**
 * Created by amarinas on 3/16/17.
 */
var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');

module.exports ={

    all: function(req, res){
        Animal.find({}, function (err, animals) {
            if (err){console.log(err);}
            res.render('index',{animals: animals})
        })
    },

    edit: function (req,res) {
        Animal.find({_id:req.params.id}, function (err, animals) {
            if (err){console.log(err);}
            res.render('edit',{animals: animals[0]});
        })
    },
    update: function(req,res){
        console.log(req.body);
        Animal.update({_id:req.params.id}, req.body, function(err,animals){
            if (err){console.log(err);}
            res.redirect('/');

        })
    },

    delete: function(req,res){
    Animal.remove({_id:req.params.id}, function(err,animals){
        if (err){consile.log(err);}
        res.redirect('/');
        })

    },
    show: function(req,res){
        Animal.find({_id:req.params.id}, function (err, animals) {

            if (err){console.log(err);}
            console.log(animals[0].name)

            res.render('shows',{animals: animals[0]});
        })
    },
    addNew: function (req,res) {
        console.log("Post Data",req.body);
        var addAnimal = new Animal({name: req.body.name, breed: req.body.breed, color: req.body.color});
        addAnimal.save(function (err) {
            if(err){
                console.log('item was not added in the database')
            }else{
                console.log('added the animal in the database')
            }

        })
        res.redirect('/');
    },


}

