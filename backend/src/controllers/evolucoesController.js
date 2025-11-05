const evolucoesModel = require('../models/evolucoesModel');

async function getAllEvolucoes(request, response) {
    const evolucoes = await evolucoesModel.getAllEvolucoes();

    return response.status(200).json(evolucoes);
};

async function createEvolucao(request, response) {
    const evolucao = await evolucoesModel.createEvolucao(request.body);
    return response.status(201).json(evolucao);
}
module.exports = {
    getAllEvolucoes,
    createEvolucao
};