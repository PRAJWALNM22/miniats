const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');


const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/mini-ats';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));


app.use(cors());
app.use(express.json());

const jobApplicationsRoute = require('./routes/jobApplications');
app.use('/api/job-applications', jobApplicationsRoute);

app.get('/', (req, res) => {
  res.send('Mini ATS backend running');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
