const repository = require('../repositories/users');

exports.auth = async (req, res) => {
    let login = req.body.login;
    let password = req.body.password;
    const data = await repository.authorize(login, password);
    return res.success(data);
};

exports.reg = async (req, res) => {
    let login = req.body.login;
    let password = req.body.password;
    let name = req.body.name;
    const data = await repository.register(login, password, name);
    return res.success(data);
};