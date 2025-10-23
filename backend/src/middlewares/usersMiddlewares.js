const validateBody = (request, response, next) => {
    const { body } = request;
    if(body.email === undefined || body.senha_hash === undefined || body.tipousuario === undefined || body.nome === undefined) {
        return response.status(400).json({ message: 'Dados incompletos' });
    }

    if(body.email === '' || body.senha_hash === '' || body.tipousuario === '' || body.nome === '') {
        return response.status(400).json({ message: 'Dados não podem ser vazios' });
    }
    next();
}

module.exports = {
    validateBody,
};