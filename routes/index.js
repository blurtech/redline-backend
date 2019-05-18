let express = require('express');
let router = express.Router();
let showCtrl = require('../controllers/showplaces');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.success({ title: 'Express' });
});

router.get('/tags', showCtrl.getAllTags);

module.exports = router;
