module.exports = function (app, models) {
  var userModel = models.userModel;
  var session = require('express-session');
  var passport = require('passport');
  var bcrypt = require('bcrypt-nodejs');

  var LocalStrategy = require('passport-local').Strategy;
  passport.use(new LocalStrategy(localStrategy));

  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  //use sessions for tracking logins
  app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
  }));


  app.post("/api/login", passport.authenticate('local'), login);
  app.post("/api/logout", logout);
  app.post("/api/loggedIn", loggedIn);

  function localStrategy(usr, pass, done){
    console.log(userModel.findUserByUsername(usr));
    userModel
      .findUserByUsername(usr)//here is something wrong
      .then(
        function (user) {
          if(user.username === usr &&
              user.password == pass){
            //bcrypt.compare(pass, user.password)) {
              return done(null, user);
          }
          else {
            return done(null, false);
          }
        }
      )
  }

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done){
    userModel
      .findUserById(user._id)
      .then(
        function(user) {
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function login(req,res){
    console.log("tried login");
    console.log(req);
    res.json(req.user);
    res.send(req.body);
  }

  function logout(req, res){
    req.logout();
    res.send(200);
  }

  function loggedIn(req, res) {
    if(req.isAuthenticated()){
      res.json(req.user);
    }
    else{
      res.send('0');
    }
  }


  function updateUser(req, res) {
    var id = req.params.userId;
    var newUser = req.body;
    userModel
      .updateUser(id, newUser)
      .then(
        function (user) {
          res.json(user);
        },
        function (error) {
          res.status(404).send("Unable to update user with ID: " + id);
        }
      );
  }



  // function findUserByCredentials(username, password, res) {
  //   userModel
  //     .findUserByCredentials(username, password)
  //     .then(
  //       function (user) {
  //         res.json(user);
  //       },
  //       function (error) {
  //         res.status(403).send("Unable to login");
  //       }
  //     );
  // }

};
