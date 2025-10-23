const express = require('express');
const usersMiddleware = require('./middlewares/usersMiddlewares');
const fisioController = require('./controllers/fisioController');
const usersController = require('./controllers/usersController');
const pacientesController = require('./controllers/pacientesController');
const evolucoesController = require('./controllers/evolucoesController');
const router = express.Router();

router.get('/fisioterapeutas', fisioController.getAllFisio);
router.get('/users', usersController.getAllUsers);
router.post('/users', usersMiddleware.validateBody, usersController.createUser);
router.get('/pacientes', pacientesController.getAllPacientes);
router.get('/evolucoes', evolucoesController.getAllEvolucoes);

module.exports = router;