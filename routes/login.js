/**
 * Created by guangshuozang on 3/10/16.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express' });
});

module.exports = router;
