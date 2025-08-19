const express = require('express');
const router = express.Router();
const JobApplication = require('../models/JobApplication');

// Create a new job application
router.post('/', async (req, res) => {
  try {
    const newApplication = new JobApplication(req.body);
    const savedApplication = await newApplication.save();
    res.status(201).json(savedApplication);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all job applications
router.get('/', async (req, res) => {
  try {
    const applications = await JobApplication.find();
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update job application by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedApplication = await JobApplication.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedApplication);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete job application by ID (optional)
router.delete('/:id', async (req, res) => {
  try {
    await JobApplication.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
