const express = require('express');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const surveyLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000,
  max: 1,
  message: 'You have already taken this survey.'
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/survey.html');
});

app.post('/submit-survey', surveyLimiter, (req, res) => {
  if (req.cookies.surveyCompleted) {
    return res.send('You have already completed this survey.');
  }

  console.log('Survey Response:', req.body);
  res.cookie('surveyCompleted', 'true', { maxAge: 24 * 60 * 60 * 1000 });
  res.send('Thank you for completing the survey!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
