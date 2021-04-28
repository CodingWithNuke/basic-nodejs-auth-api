const { Router } = require('express');

const router = Router();

const { AuthCtrl } = require('../controllers');

router.post('/signup', AuthCtrl.signup)
router.post('/signin', AuthCtrl.signin)

module.exports = router;