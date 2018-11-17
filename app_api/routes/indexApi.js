const express = require('express');
const router = express.Router();

const ctrlApiCameras = require('../controllers/ctrlApiCameras');
const ctrlApiLenses = require('../controllers/ctrlApiLenses');

router
    .route('/cameras')
    .get(ctrlApiCameras.cameraList)
    .post(ctrlApiCameras.addCamera);

router
    .route('/lenses')
    .get(ctrlApiLenses.lensList)
    .post(ctrlApiLenses.addLens);

module.exports = router;


