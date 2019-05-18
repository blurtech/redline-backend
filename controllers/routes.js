const repository = require('../repositories/routes');

exports.getRoutes = async (req, res) => {
    let routes = await repository.getRedLines(req.query.city);
    return res.success(routes);
};

exports.getCities = async (req, res) => {
    let cities = await repository.getCities();
    return res.success( {'cities': cities} );
};

exports.getAllRoutes = async (req, res) => {
    let routes = await repository.getAllRoutes();
    return res.success(routes);
};