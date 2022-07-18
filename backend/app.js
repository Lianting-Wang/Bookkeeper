const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Configure environment variables
const config = require('./configs');

// MongoDB connection
const mongoose = require('mongoose');
mongoose.connect(config.mongoURL);
global.mongoose = mongoose;

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const recordRouter = require('./routes/record');
const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Set up APIs
app.use('/api/v1/', indexRouter);
app.use('/api/v1/user/', userRouter);
app.use('/api/v1/record/', recordRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log(`[${new Date().toISOString()}]
    Server is running on ${process.env.PORT}:${process.env.HOST}`);

module.exports = app;
