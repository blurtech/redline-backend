const repository = require('../repositories/showplaces');

exports.sendShowplaces = async (req, res) => {
    let showplaces = await repository.getShowplaces();
    res.success(showplaces);
};

exports.addNewShowplace = async (req, res) => {
    let newShowplace = await repository.createShowplace(req.body);
    res.success(newShowplace);
};

exports.getAllTags = async (req, res) => {
    let tags = await repository.getAllTags();
    res.success(tags);
};