
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', function(req, res, next){
  console.log("HOME PAGE");
  res.sendfile("/views/index.html" , { root:__dirname });
});
app.get('/test', function(req, res, next){
  console.log("TEST PAGE");
  res.sendfile("/test.html" , { root:__dirname + "/views" });
});
app.get('/phaser', function(req, res, next){
  console.log("PHASER PAGE");
  res.sendfile("/phaser.html" , { root:__dirname + "/views" });
});
app.get('/part1', function(req, res, next){
  console.log("PART1 PAGE");
  res.sendfile("/part1.html" , { root:__dirname + "/views" });
});
app.get('/part2', function(req, res, next){
  console.log("PART2 PAGE");
  res.sendfile("/part2.html" , { root:__dirname + "/views" });
});
app.get('/part3', function(req, res, next){
  console.log("PART3 PAGE");
  res.sendfile("/part3.html" , { root:__dirname + "/views" });
});
app.get('/part4', function(req, res, next){
  console.log("PART4 PAGE");
  res.sendfile("/part4.html" , { root:__dirname + "/views" });
});
app.get('/part5', function(req, res, next){
  console.log("PART5 PAGE");
  res.sendfile("/part5.html" , { root:__dirname + "/views" });
});
app.get('/part6', function(req, res, next){
  console.log("PART6 PAGE");
  res.sendfile("/part6.html" , { root:__dirname + "/views" });
});
app.get('/part7', function(req, res, next){
  console.log("PART7 PAGE");
  res.sendfile("/part7.html" , { root:__dirname + "/views" });
});
app.get('/part8', function(req, res, next){
  console.log("PART8 PAGE");
  res.sendfile("/part8.html" , { root:__dirname + "/views" });
});
app.get('/part9', function(req, res, next){
  console.log("PART9 PAGE");
  res.sendfile("/part9.html" , { root:__dirname + "/views" });
});
app.get('/tutorial', function(req, res, next){
  console.log("TUTORIAL PAGE");
  res.sendfile("/tutorial.html" , { root:__dirname + "/views" });
});

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
