const connection = require('./connection');

const getAllFisio = async () => {
    const [fisioterapeutas] = await connection.execute('SELECT * FROM fisioterapeutas');
    return fisioterapeutas;
};

module.exports = {
    getAllFisio
};