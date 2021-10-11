const express = require('express');

const rpsController = require('../controllers/rpsController');
const router = express.Router();


router.get('/', rpsController.index);

router.get('/rps', rpsController.rpsListAll);

router.get('/rps/:id', rpsController.rpsListOne);

router.post('/rps/create', rpsController.rpsCreate);

router.put('/rps/:id', rpsController.rpsUpdate);

router.delete('/rps/:id', rpsController.rpsDelete);

module.exports = router;
