var express = require('express');
var router = express.Router();
var cv = require('opencv4nodejs');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;