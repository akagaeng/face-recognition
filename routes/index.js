var express = require('express');
var router = express.Router();
var cv = require('opencv4nodejs');
if (cv) {
    console.log('opencv4nodejs successfully installed!');
}

/* GET dummy page. */
router.get('/', (req, res) => {
    res.render('index', { title: 'Opencv4nodejs dashboard' });
});

router.post('/faces/detection', (req, res) => {
    res.send('(res) POST /faces/detection');
});

router.post('/faces/recognition', (req, res) => {
    res.send('(res) POST /faces/recognition');
});
module.exports = router;