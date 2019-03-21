const express = require('express');
const mongoose = require('mongoose');
const Project = require('../models/project-model');

const router  = express.Router();

// GET route => to get all the projects
router.get('/projects', (req, res, next) => {
  Project.find().populate('tasks')
    .then(allTheProjects => {
      res.json(allTheProjects);
    })
    .catch(err => {
      res.json(err);
    })
});

router.get("/projects/:id", (req, res, next)=>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
      res.status(400).json({message: "The ID does not exists"})
      return
    }
  
    Project.findById(req.params.id)
      .populate("tasks")
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.json(err)
      });
  
  })


router.put("/projects/:id" , (req, res, next) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
      res.status(400).json({message: "The ID does not exists"})
      return
    }
  
    Project.findByIdAndUpdate(req.params.id, req.body)
      .then( ()=>{
        res.json({
          message: `Project with id ${req.params.id} has been updated successfully!`
        })
        .catch(err=>{
          res.json(err);
        })
      })
  })
  
  
router.delete("/projects/:id" , (req, res, next) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
      res.status(400).json({message: "The ID does not exists"})
      return
    }
  
    Project.findByIdAndDelete(req.params.id, req.body)
      .then( ()=>{
        res.json({
          message: `Project with id ${req.params.id} has been deleted!`
        })
        .catch(err=>{
          res.json(err);
        })
      })
  
  })




// POST route => to create a new project
router.post('/projects', (req, res, next)=>{
 
    Project.create({
      
        title: req.body.title,
        description: req.body.description,
        place: req.body.place,
        year: req.body.year,
        category: req.body.category,
        image: req.body.image,
        tasks: [],
    })
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.json(err);
      })
  });

module.exports = router;