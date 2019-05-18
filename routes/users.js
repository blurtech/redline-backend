let express = require('express');
let router = express.Router();
let ctrl = require('../controllers/user');

/* GET users listing. */
router.get('/', ctrl.getUser);

router.post('/auth', ctrl.auth);

router.post('/reg', ctrl.reg);

module.exports = router;
