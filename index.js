var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var app = express();
var reload = require('reload');
app.set('port', process.env.POST || 7000);

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(cookieParser());

app.use(session({secret: 'kak'}));

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.locals.siteTitle = 'Vista Webshop';

//public folder
app.use(express.static('public'));
app.use(require('./routers/pages'));


app.use(function(req, res, next) {
  res.status(404);
  if (req.accepts('html')) {
    res.statusCode = 404
    res.redirect('/404');
    return;
  } 
});

//Server
var server = app.listen(1000, function() {
  console.log('Running server');
})
reload(server, app)