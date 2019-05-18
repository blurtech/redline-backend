let express = require('express');
let router = express.Router();
let ctrl = require('../controllers/auth');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/auth', ctrl.auth);

module.exports = router;
