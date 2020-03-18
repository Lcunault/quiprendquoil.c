const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(process.env.PORT, () => console.log(`Front app listening on port ${port}!`));
const dotenv = require('dotenv');
app.set('view engine', 'pug');