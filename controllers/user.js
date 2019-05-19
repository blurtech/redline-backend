const repository = require('../repositories/users');

exports.auth = async (req, res) => {
    let login = req.body.login;
    let password = req.body.password;
    let data = await repository.authorize(login, password);
    if(data.length > 0) return res.notFound();
    return res.success(data);
};

exports.reg = async (req, res) => {
    let login = req.body.login;
    let password = req.body.password;
    let name = req.body.name;
    let preferences = req.body.preferences;
    let data = await repository.register(login, password, name, preferences);
    return res.success(data);
};

exports.getUser = async (req, res) => {
    let id = req.params._id;
    let data = await repository.getUserById(id);
    return res.success(data);
};