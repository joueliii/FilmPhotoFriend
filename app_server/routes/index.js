const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlCameras = require('../controllers/ctrlCameras'); // ... for the list of World Cup winners (countries)
const ctrlLenses = require('../controllers/ctrlLenses'); // ... for the the list of Golden ball winners (players)

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/cameras', ctrlCameras.cameralist);  // List of World Cup winners (countries)
router.get('/lenses', ctrlLenses.lenselist);  // List of Golden ball winners (players)

module.exports = router;
