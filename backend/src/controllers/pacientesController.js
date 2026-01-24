const pacientesModel = require('../models/pacientesModel');

async function getAllPacientes(request, response) {
    const pacientes = await pacientesModel.getAllPacientes();

    return response.status(200).json(pacientes);
};

async function createPaciente(request, response) {
    const pacientes = await pacientesModel.createPacientes(request.body);
    return response.status(201).json(pacientes);
}

async function deletePaciente(request, response) {
    const {id} = request.params;
    await pacientesModel.deletePaciente(id);
    return response.status(204).json();
}

module.exports = {
    getAllPacientes,
    createPaciente,
    deletePaciente
};