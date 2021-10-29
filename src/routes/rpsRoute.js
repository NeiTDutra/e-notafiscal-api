/*
/ file: ./src/routes/rpsRoute.js
/ contents: route manager, this file configures the application routes, 
/ used by the express library
/ author: Nei Thomassin Dutra <nei.thomass@gmail.com>
/ date: 2021-10-29
*/

const express = require('express');

const rpsController = require('../controllers/rpsController');
const router = express.Router();


router.get('/', rpsController.index);

router.get('/rps', rpsController.rpsListAll);

router.get('/rps/:id', rpsController.rpsListOne);

router.post('/rps/create', rpsController.rpsCreate);

router.put('/rps/update/:id', rpsController.rpsUpdate);

router.delete('/rps/delete/:id', rpsController.rpsDelete);

module.exports = router;
