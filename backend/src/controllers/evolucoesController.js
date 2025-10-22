const evolucoesModel = require('../models/evolucoesModel');

async function getAllEvolucoes(request, response) {
    const evolucoes = await evolucoesModel.getAllEvolucoes();

    return response.status(200).json(evolucoes);
};

module.exports = {
    getAllEvolucoes
};