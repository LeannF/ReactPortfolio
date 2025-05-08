const express = require('express');
const mongodb = require('./db/mongo');

const projectRouter = require('./routes/projects');

require('dotenv').config({ path: './env/.env' });

const { models } = require('mongoose');

mongodb.initClientDbConnection();

const app = express();

app.use(function(req, res) {
    res.status(404).json({ name: 'Portfolio', version: '1.0', status: 404, message: 'not_found' });
});
  
module.exports = app;