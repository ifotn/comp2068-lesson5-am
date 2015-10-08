var express = require('express');
var router = express.Router();

// GET articles main page
router.get('/', function(res, res, next) {
   res.render('articles/index', {
       title: 'Articles'
   });
});

// make this public so the rest of app can see it
module.exports = router;

