const fisioModel = require('../models/fisioModel');

const getAllFisio = async(request, response) => {
    const fisioterapeutas = await fisioModel.getAllFisio();

    return response.status(200).json(fisioterapeutas);
};

module.exports = {
    getAllFisio
};