const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
  candidateName: { type: String, required: true },
  role: { type: String, required: true },
  yearsOfExperience: { type: Number, required: true },
  resumeLink: { type: String }, // URL to resume or stored file path
  stage: {
    type: String,
    enum: ['Applied', 'Interview', 'Offer', 'Rejected'],
    default: 'Applied',
  },
  appliedDate: { type: Date, default: Date.now },
});

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

module.exports = JobApplication;
