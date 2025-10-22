const express = require('express');
const fisioController = require('./controllers/fisioController');
const usersController = require('./controllers/usersController');
const pacientesController = require('./controllers/pacientesController');
const evolucoesController = require('./controllers/evolucoesController');
const router = express.Router();

router.get('/fisioterapeutas', fisioController.getAllFisio);
router.get('/users', usersController.getAllUsers);
router.get('/pacientes', pacientesController.getAllPacientes);
router.get('/evolucoes', evolucoesController.getAllEvolucoes);

module.exports = router;