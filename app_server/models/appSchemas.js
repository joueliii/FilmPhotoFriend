const mongoose = require('mongoose');

const cameraSchema = new mongoose.Schema({model: String, year: String});
const lensSchema = new mongoose.Schema({model: String, year: String});

mongoose.model('cameras', cameraSchema);
mongoose.model('lenses', lensSchema);