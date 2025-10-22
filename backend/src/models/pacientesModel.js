const connection = require('./connection');

async function getAllPacientes() {
    const [pacientes] = await connection.execute('SELECT * FROM pacientes');
    return pacientes;
};

module.exports = {
    getAllPacientes
};