var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRoutes = require('./controller/product');

var app = express();

// Mongodb connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/e-supper-store-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log('Mongoos Connected');
}).catch((e) => {
  console.log(e);
})




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

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/products', productRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;