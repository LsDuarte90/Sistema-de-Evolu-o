const connection = require('./connection');

async function getAllEvolucoes() {
    const [evolucoes] = await connection.execute('SELECT * FROM evolucoes');
    return evolucoes;
};

async function createEvolucao(evolucao) {
    const {paciente_id, objetivo, regiao_trabalhada, aparelho, chegada, saida, observacoes} = evolucao;

    const query = 'INSERT INTO evolucoes(paciente_id, objetivo, regiao_trabalhada, aparelho, chegada, saida, observacoes) VALUES (?, ?, ?, ?, ?, ?, ?)';

    const [createdEvolucao] = await connection.execute(query,[paciente_id, objetivo, regiao_trabalhada, aparelho, chegada, saida, observacoes]);
    return createdEvolucao;
}

module.exports = {
    getAllEvolucoes,
    createEvolucao
};