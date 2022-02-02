var express = require('express');
var router = express.Router();
let userController = require('../controllers/users')

/* GET users listing. */
router.get('/', userController.user);

/* GET Kanishka listing. */
router.get('/kanishka', userController.kanishka);

module.exports = router;
