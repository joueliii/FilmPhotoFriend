const mongoose = require('mongoose');

const cameraSchema = new mongoose.Schema({model: String, year: String});
const lensSchema = new mongoose.Schema({model: String, year: String});

//mongoose.model('cameras', cameraSchema);
//mongoose.model('lenses', lensSchema);

mongoose.model('camera', cameraSchema, 'cameras');
mongoose.model('lens', lensSchema, 'lenses');
