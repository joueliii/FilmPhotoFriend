const mongoose = require('mongoose');

const lensModel = mongoose.model('lens');

const lensList = function (req, res) {
    lensModel.find({}, function(err, lenses){
        if (err){
            res
                .status(404)
                .json(err);
        }
        else{
            res
                .status(200)
                .json(lenses);
        }
    });};

const addLens = function (req, res) {
    res
        .status(201)
        .json({"Add lens" : "Work in progress"});
};

module.exports = {
    lensList,
    addLens
};