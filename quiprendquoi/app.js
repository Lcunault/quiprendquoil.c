const express = require('express');
const app = express();
const port = 3000;
app.use(bodyParser);
méthode `GET`
url : `/party/:id`
console.log(req.params.id)

axios
  .post(`${process.env.API_URL}/party`, req.body)
  .then(({ data }) => res.redirect(`/party/${data._id}`))
  .catch((err) => res.send(err));

axios
  .get(`${process.env.API_URL}/party/${req.params.id}`)
  .then(({ data }) =>
    res.render('party', {
      party: data,
      title: party.name
    }),
  )
  .catch((err) => console.log(err));

  res.render('party', {
    party: data,
    title: data.name,
    url: `${process.env.FRONT_URL}:${process.env.PORT}/party/${data._id}`
  }), 
  

app.listen(process.env.PORT, () => console.log(`Front app listening on port ${port}!`));
const dotenv = require('dotenv');
app.set('view engine', 'pug');
app.use(bodyParser);
console.log(req.params);
const axios = require('axios');







