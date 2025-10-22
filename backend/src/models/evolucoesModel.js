const connection = require('./connection');

async function getAllEvolucoes() {
    const [evolucoes] = await connection.execute('SELECT * FROM evolucoes');
    return evolucoes;
};

module.exports = {
    getAllEvolucoes
};