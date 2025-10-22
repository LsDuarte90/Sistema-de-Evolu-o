const userModel = require('../models/usersModel');

async function getAllUsers(request, response) {
    const users = await userModel.getAllUsers();
    return response.status(200).json(users);
};

module.exports = {
    getAllUsers
};