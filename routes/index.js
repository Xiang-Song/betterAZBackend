var express = require('express');
var router = express.Router();
var{News, Banner, Locations, Events, Twitter, Facebook} = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express-Postgre' });
});

router.get('/banner', async function(req, res, next) {
  let banner= await Banner.findAll();
  res.json(banner);
})

router.get('/news', async function(req, res, next) {
  let news= await News.findAll();
  res.json(news);
})

router.get('/news/:id', async function(req, res, next) {
  let news = await News.findAll({where: {id: req.params.id}});
  res.json(news);
})

router.get('/events', async function(req, res, next) {
  let events= await Events.findAll();
  res.json(events);
})

router.get('/locations', async function(req, res, next) {
  let locations= await Locations.findAll();
  res.json(locations);
})

router.get('/twitter', async function(req, res, next) {
  let twitter= await Twitter.findAll();
  res.json(twitter);
})

router.get('/facebook', async function(req, res, next) {
  let fb= await Facebook.findAll();
  res.json(fb);
})

module.exports = router;
