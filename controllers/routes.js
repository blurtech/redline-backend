const repository = require('../repositories/routes');

exports.sendRoutes = async (req, res) => {
    let routes = await repository.getRedLines(req.params.city);
    return res.success(routes);
};

exports.sendCities = async (req, res) => {
    let cities = await repository.getCities();
    return res.success( {'cities': cities} );
};
