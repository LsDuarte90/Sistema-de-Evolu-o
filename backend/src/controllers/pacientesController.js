const pacientesModel = require('../models/pacientesModel');

async function getAllPacientes(request, response) {
    const pacientes = await pacientesModel.getAllPacientes();

    return response.status(200).json(pacientes);
};

async function createPaciente(request, response) {
    const pacientes = await pacientesModel.createPacientes(request.body);
    return response.status(201).json(pacientes);
}

module.exports = {
    getAllPacientes,
    createPaciente
};