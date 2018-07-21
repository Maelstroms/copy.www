var express = require('express');
var session = require('express-session');
var passport = require('passport');
var ip = require("ip");
var app = express();

var bodyParser = require('body-parser');

//TODO add ip package

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  //need an env var os secret
  //process.env.SESSION_SECRET,
  secret: 'lk[asdf(*agafg$Yag46#T$dugvcxr34(*Uer653wbg#%',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.use(passport.initialize());
app.use(passport.session());

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin",
    "http://localhost:4200");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});


require ("./private/app.js")(app);

var port = process.env.PORT || 3000;
console.log("server on at " + ip.address() + "at port " + port);

app.listen(port);
