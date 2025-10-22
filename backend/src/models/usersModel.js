const connection = require('./connection');

async function getAllUsers() {
    const [users] = await connection.execute('SELECT * FROM usuarios');
    return users;
};

module.exports = {
    getAllUsers
};