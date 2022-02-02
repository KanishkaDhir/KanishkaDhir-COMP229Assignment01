//Author:Kanishka Dhir
//Student ID:301220757
//Date:01-02-2022

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index')

/* GET home page. */
router.get('/',indexController.home );


/* GET Projects page. */
router.get('/projects', indexController.projects);

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

module.exports = router;
