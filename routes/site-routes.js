const express = require('express');
const mongoose = require('mongoose');
const Project = require('../models/project-model');

const router  = express.Router();

// GET route => to get all the projects
router.get('/graphics', (req, res, next) => {
  Project.find({category: 'Graphics'}).populate('tasks')
    .then(allTheProjects => {
      res.json(allTheProjects);
    })
    .catch(err => {
      res.json(err);
    })
});


router.get('/motion', (req, res, next) => {
    Project.find({category: 'Motion'}).populate('tasks')
      .then(allTheProjects => {
        res.json(allTheProjects);
      })
      .catch(err => {
        res.json(err);
      })
  });
  

  router.get('/video', (req, res, next) => {
    Project.find({category: 'Video'}).populate('tasks')
      .then(allTheProjects => {
        res.json(allTheProjects);
      })
      .catch(err => {
        res.json(err);
      })
  });

  router.get('/about', (req, res, next) => {
    Project.find().populate('tasks')
      .then(allTheProjects => {
        res.json(allTheProjects);
      })
      .catch(err => {
        res.json(err);
      })
  });
  

module.exports = router;