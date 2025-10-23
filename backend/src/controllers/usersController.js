const userModel = require('../models/usersModel');

async function getAllUsers(request, response) {
    const users = await userModel.getAllUsers();
    return response.status(200).json(users);
};

async function createUser(request, response) {
    const user = await userModel.createUser(request.body);
    return response.status(201).json(user);
}

module.exports = {
    getAllUsers,
    createUser
};