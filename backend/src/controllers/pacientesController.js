const pacientesModel = require('../models/pacientesModel');

async function getAllPacientes(request, response) {
    const pacientes = await pacientesModel.getAllPacientes();

    return response.status(200).json(pacientes);
};

module.exports = {
    getAllPacientes
};