const mongoose = require('mongoose');

const cameraModel = mongoose.model('camera');

const cameraList = function (req, res) {
    cameraModel.find({}, function(err, cameras){
        if (err){
            res
                .status(404)
                .json(err);
        }
        else{
            res
                .status(200)
                .json(cameras);
        }
    });};

const addCamera = function (req, res) {
    res
        .status(201)
        .json({"Add camera" : "Work in progress"});
};

module.exports = {
    cameraList,
    addCamera
};