const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlCameras = require('../controllers/ctrlCameras'); // ... for the list of cameras
const ctrlLenses = require('../controllers/ctrlLenses'); // ... for the the list of lenses

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/cameras', ctrlCameras.cameraList);  // List of cameras
router.get('/lenses', ctrlLenses.lensList);  // List of lenses

router
    .route('/cameras/add')
    .get(ctrlCameras.showForm)
    .post(ctrlCameras.addData)

module.exports = router;
