var createError = require('http-errors');
var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()

var indexRoute = require('./routes/index');
var productRoutes = require('./routes/productRoutes');
var userRoutes = require('./routes/userRoutes');
var categoryRoutes = require('./routes/categoryRoutes')
const { dbConnection } = require('./db/config');

var app = express();
app.use(cors())
// db connection call
dbConnection();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// cors 
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || 'http://localhost:3000');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type,token,authorization');
//   res.header('Access-Control-Allow-Credentials', true);
//   if ('OPTIONS' == req.method) {
//     res.status(204).end();
//   } else {
//     next();
//   }
//   global.baseUrl = appUrl;
// });

app.use('/',indexRoute);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === process.env.APP_ENV ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
