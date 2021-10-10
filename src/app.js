const express = require('express');
const notaRouter = require('./routes/notaRoute');

const app = express();

app.use('/enotafiscal/api/v1', notaRouter);

module.exports = app;
