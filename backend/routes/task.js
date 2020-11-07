const express = require("express");
const Task = require("../models/task");
const auth = require("../middleware/auth");
const config = require('config');
const router = express.Router();

const User = require('../models/user');

//! create task
router.post('/', auth, async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  const task = new Task({
    ...req.body,
    taskOwner: user._id
  });
  try {
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

//! get all tasks
// GET /tasks?completed=true    (filter)
// GET /tasks?limit=10&skip=0   (pagination)
// GET /tasks?sortBy=createdAt_asc
// ?sortBy=createdAt:asc&completed=true&limit=1&skip=1
router.get('/', auth, async (req, res) => {
    const user = await User.findById(req.user.id).select('-password');
  try {
    const tasks = await Task.find({owner: req.user._id}).sort({ date: -1 });
    if (!task) {
        return res.status(404).send("No task found or you're not authenticated");
      }
    res.send(tasks);
  } catch (error) {
    res.status(500).send();
  }
});

//! get task (user's task)
router.get("/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findOne({ _id, owner: req.user._id });
    if (!task) {
      return res.status(404).send("Task not found or you're not authenticated");
    }
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

//! update task
router.patch("/:id", auth, async (req, res) => {
  //*
  const updates = Object.keys(req.body);

  const allowedUpdates = ["taskName","taskDescription","taskStatus"];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
  if (!isValidOperation) {
    return res.status(400).send("ERROR: invalid operation");
  }
  //*

  const _id = req.params.id;
  try {
    //* this logic for future use of middleware on updating tasks
    const task = await Task.findOne({ _id, owner: req.user._id });
    if (!task) {
      return res.status(404).send("task not found or You're not authenticated");
    }
    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();
    //*
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

//! delete task
router.delete("/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findOneAndDelete({ _id, owner: req.user._id });
    if (!task) {
      res.status(404).send("Task not founded or You're not authenticated");
    }
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
