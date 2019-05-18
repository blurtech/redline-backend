const express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    mongoose = require('mongoose');

const customResponses = require('./middlewares/customResponses');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

const mongoURI = 'mongodb://root:toor123456@ds159036.mlab.com:59036/redline';

mongoose.connect(mongoURI, {useNewUrlParser: true}, function(err) {
    if(err != null) console.log('MongoDB Error:\n' + err);
});

let app = express();
app.disable('etag');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(customResponses);

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
