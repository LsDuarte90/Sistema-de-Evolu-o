const connection = require('./connection');

async function getAllUsers() {
    const [users] = await connection.execute('SELECT * FROM usuarios');
    return users;
};

async function createUser(user) {
    const {email, senha_hash, tipousuario, nome} = user;

    const query = 'INSERT INTO usuarios(email, senha_hash, tipousuario, nome) VALUES (?, ?, ?, ?)';

    const [createdUser] = await connection.execute(query, [email, senha_hash, tipousuario, nome]);
    return createdUser;
}

module.exports = {
    getAllUsers,
    createUser
};