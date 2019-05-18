const repository = require('../repositories/routes');

exports.sendRoutes = async (req, res) => {
    const routes = await repository.getRedLines(req.body.city);
    return res.success( {'routes': routes} );
};

exports.sendCities = async (req, res) => {
    const cities = await repository.getCities();
    return res.success( {'cities': cities} );
};
