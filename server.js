var createError = require('http-errors');
var express = require('express');
var path = require('path')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var flash = require('express-flash');
var session = require('express-session');
var db = require('./database');

var app = express();

//view engine setup
app.set('views',path.join( __dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
   extended: false
}));
app.use(cookieParser());
app.use(
   express.static(
      path.join(
         __dirname, 'public'
      )
   )
);

app.use(session({
   secret: '123456catr',
   resave: false,
   saveUninitialized: true,
   cookie: {maxAge: 60000}
}))