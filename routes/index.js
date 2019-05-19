let express = require('express');
let router = express.Router();
let showCtrl = require('../controllers/showplaces');
let routeCtrl = require('../controllers/routes');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.success({ title: 'Express' });
});

router.get('/routes', routeCtrl.getRoutes);

router.get('/tags', showCtrl.getAllTags);

router.get('/route', routeCtrl.createRoutes);

module.exports = router;
