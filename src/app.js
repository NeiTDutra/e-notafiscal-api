/*
/ file: ./src/app.js
/ contents: this is the main system file, it contains all execution settings
/ author: Nei Thomassin Dutra <nei.thomass@gmail.com>
/ date: 2021-10-29
*/

const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');
const expressSession = require('express-session');
const express = require('express');
const rpsRouter = require('./routes/rpsRoute');
const connectDB = require('./config/dbConnection');


const app = express();

app.set('conn', connectDB);

app.use(expressSession({
    secret: process.env.EXPRESS_SECRET || 'z3|d4',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 30 * 60 * 1000 }
  }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));

app.use(['/enotafiscal/api/v1','/'], rpsRouter);

app.use(function(req, res, next) {
    next(createError(404));
});

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // send the error
    res.status(err.status || 500).send({ error: err.message, stack: err.stack });
});

module.exports = app;
