const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())
require('./app/models/inventory.model.js');

// configure the database
require('dotenv').config();
const mongoose = require('mongoose');

// connect to the database
mongoose.connect(
  process.env.DATABASE,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

mongoose.connection
.on('open', () => {
  console.log('Mongoose connection open');
})
.on('error', (err) => {
  console.log(`Mongoose connection error: ${err.message}`);
});

// create the server and port
require('./app/routes/inventory.router.js')(app);
const server = app.listen(8080, function () {
  const host = server.address().address
  const port = server.address().port
  console.log(`App listening at http://${host}:${port}`);
});
