const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const app = express();

const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true},
() => {console.log('database is connected')})
.catch(err => console.log(err));

const exerciseRouter = require('./routes/exercises');

app.use('/exercises', exerciseRouter);

const connection = mongoose.connection;
connection.once('open', () => {
   console.log('The database is connected');
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
