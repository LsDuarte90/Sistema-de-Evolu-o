const fisioModel = require('../models/fisioModel');

const getAllFisio = async(request, response) => {
    const fisioterapeutas = await fisioModel.getAllFisio();

    return response.status(200).json(fisioterapeutas);
};

async function createFisio(request, response) {
    const fisio = await fisioModel.createFisio(request.body);
    return response.status(201).json(fisio);
}

module.exports = {
    getAllFisio,
    createFisio
};