var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var index = require('./routes/index');
import index from './routes/index';
var users = require('./routes/users');

var app = express(); 
// var server = require('./bin/www').server;
// var server = require('http').createServer(app);
// import SocketIO from 'socket.io';
// var s = server.listen(3005);
// var io = new SocketIO(s);
// const Server = require('socket.io');
// const io = new Server();
var io = require('socket.io').listen(3005);

io.on('connection', () => {
  console.log('Ok');
} );
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// import SocketCtrl from './controllers/socket-init';
app.use(function(req, res, next){
  // res.io = io;
  // io.on('connect', (socket) => {
  //   // ...
    // console.log('==============on connect =============== ');
  // });
  io.sockets.on('connection',function(client){  
    console.log('==============Connected=============== ');
        next();
  });
});
app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// var port = process.env.PORT || '3000';
// app.set('port', port);
// let port=3000;
// app.listen(port,function(){
//   console.log(' server listening -------',port);
// });

// module.exports = app;
module.exports = {app: app};
