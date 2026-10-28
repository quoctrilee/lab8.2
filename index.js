const express = require('express');
const bodyParser = require('body-parser');
const validator = require('email-validator');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to Express on Firebase');
});

app.get('/hello', (req, res) => {
  console.info('/hello call success');
  res.send('Welcome to Express on Firebase');
});

app.post('/emailValidate', (req, res) => {
  const postData = req.body;
  if (postData.email) {
    console.info('/emailValidate call success');
    res.json({ status: validator.validate(postData.email) });
  } else {
    console.warn('/emailValidate wrong input');
    res.status(500).json({ status: 'wrong input' });
  }
});

app.listen(PORT, () => {
  console.info('Server is running on PORT:', PORT);
});
