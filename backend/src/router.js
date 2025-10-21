const express = require('express');
const taskFisioController = require('./controllers/fisioController');
const router = express.Router();

router.get('/fisioterapeutas', taskFisioController.getAllFisio);

module.exports = router;