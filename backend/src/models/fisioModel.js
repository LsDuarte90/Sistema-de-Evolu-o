const connection = require('./connection');

const getAllFisio = async () => {
    const [fisioterapeutas] = await connection.execute('SELECT * FROM fisioterapeutas');
    return fisioterapeutas;
};

async function createFisio(fisio) {
    const {nome, crefito, usuario_id} = fisio;

    const query = 'INSERT INTO fisioterapeutas(nome, crefito, usuario_id) VALUES (?, ?, ?)';

    const [createdFisio] = await connection.execute(query, [nome, crefito, usuario_id]);

    return createdFisio;
}

module.exports = {
    getAllFisio,
    createFisio
};