let express = require('express');
let router = express.Router();
let ctrl = require('../controllers/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/auth', ctrl.auth);

router.post('/reg', ctrl.reg);

module.exports = router;
