var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var passport = require('passport');
var jwt = require('jsonwebtoken');

let {Users, News, Banner, Locations, Events} = require('../models');

router.post('/register', (req, res, next) => {
  passport.authenticate('register', (err, user, info) => {
    if (err) {
      console.error(err);
    }
    if (info !== undefined) {
      console.error(info.message);
      res.status(403).send(info.message);
    } else {
      req.logIn(user, error => {
        console.log(user);
        const data = {
          username: user.username,
        };
        console.log(data);
        Users.findOne({
          where: {
            username: data.username,
          },
        }).then(() => {
            console.log('user created in db');
            res.status(200).send({ message: 'user created' }); // nothing to update, just return status
        });
      });
    }
  })(req, res, next);
});

router.post('/login', (req, res, next) => {
  passport.authenticate('login', (err, user, info) => {
    if (err) {
      console.error(`error ${err}`);
    }
    if (info !== undefined) {
      console.error(info.message);
      if (info.message === 'username not exist') {
        res.status(401).send(info.message);
      } else {
        res.status(403).send(info.message);
      }
    } else {
      req.logIn(user, err => {
        Users.findOne({
          where: {
            username: req.body.username,
          },
        }).then(user => {
          const token = jwt.sign({ id: user.id }, process.env.SECRET, {
            expiresIn: 60 * 60 * 12,
          });
          res.status(200).send({
            auth: true,
            token,
            message: 'user found & logged in'
          });
        });
      });
    }
  })(req, res, next);
})

router.post('/createBanner',(req, res, next) =>{
  passport.authenticate('jwt', { session: false }, async (err, user, info)=> {
    if (err) {
      console.log(err);
    }
    if (info !== undefined) {
      console.log(info.message);
      res.status(401).send(info.message)
    } else {
        let banner = await Banner.create(req.body)
        res.status(201).send(
          banner
        )
      
    }
  })(req, res, next);
})

router.post('/createNews',(req, res, next) =>{
  passport.authenticate('jwt', { session: false }, async (err, user, info)=> {
    if (err) {
      console.log(err);
    }
    if (info !== undefined) {
      console.log(info.message);
      res.status(401).send(info.message)
    } else {
        let news = await News.create(req.body)
        res.status(201).send(
          news
        )
      
    }
  })(req, res, next);
})

router.post('/createEvents',(req, res, next) =>{
  passport.authenticate('jwt', { session: false }, async (err, user, info)=> {
    if (err) {
      console.log(err);
    }
    if (info !== undefined) {
      console.log(info.message);
      res.status(401).send(info.message)
    } else {
        let event = await Events.create(req.body)
        res.status(201).send(
          event
        )
      
    }
  })(req, res, next);
})

router.post('/createLocations',(req, res, next) =>{
  passport.authenticate('jwt', { session: false }, async (err, user, info)=> {
    if (err) {
      console.log(err);
    }
    if (info !== undefined) {
      console.log(info.message);
      res.status(401).send(info.message)
    } else {
        let location = await Locations.create(req.body)
        res.status(201).send(
          location
        )
      
    }
  })(req, res, next);
})

module.exports = router;