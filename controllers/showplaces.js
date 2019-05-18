const repository = require('../repositories/showplaces');

exports.sendShowplaces = async (req, res) => {
    const showplaces = await repository.getShowplaces();
    res.success(showplaces);
}