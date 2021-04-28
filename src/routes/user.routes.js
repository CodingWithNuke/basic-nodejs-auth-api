const { Router } = require('express');

const router = Router();

const { UserCtrl } = require('../controllers');
const { AuthMw } = require('../middlewares');

router.get('/me', [AuthMw.verify], UserCtrl.findMe)

module.exports = router;