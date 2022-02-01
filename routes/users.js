var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET Kanishka listing. */
router.get('/kanishka', function(req, res, next) {
  res.send('Welcome Kanishka');
});
module.exports = router;
