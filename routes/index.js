var express = require('express');
var router = express.Router();
var{ News } = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/news', async function(req, res, next) {
  let news= await News.findAll();
  res.json(news);
})

module.exports = router;
