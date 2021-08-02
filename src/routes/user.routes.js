const { Router } = require('express');

const router = Router();

const { UserCtrl } = require('../controllers');

const { isLoggedIn } = require('../middlewares');

router.get('/me', [isLoggedIn], UserCtrl.findMe)

module.exports = router;