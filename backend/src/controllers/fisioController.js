const fisioModel = require('../models/fisioModel');

const getAllFisio = async(request, response) => {
    const fisioterapeutas = await fisioModel.getAllFisio();

    return response.status(200).json(fisioterapeutas);
};

async function createFisio(request, response) {
    const fisio = await fisioModel.createFisio(request.body);
    return response.status(201).json(fisio);
}

async function deleteFisio(request, response) {
    const {id} = request.params;
    await fisioModel.deleteFisio(id);
    return response.status(204).json();
}

module.exports = {
    getAllFisio,
    createFisio,
    deleteFisio
};