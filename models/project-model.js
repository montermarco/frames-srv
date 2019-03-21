const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const Task = require('./task-model');

const projectSchema = new Schema({
  title: String,
  description: String,
  place: String,
  year: Number,
  category: String,
  image: String,
  tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}],
  // owner will be added later on
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;