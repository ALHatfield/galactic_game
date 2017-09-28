const express = require('express');
const validator = require('validator');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require("../models/user");

const router = new express.Router();

/**
 * Validate the sign up form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */

 function validateSignUpForm(payload) {
   const errors = {};
   let isFormValid = true;
   let message = '';

   if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
     isFormValid = false;
     errors.name = 'Please provide your name.';
   }
   if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
     isFormValid  = false;
     errors.email = 'Please provide a correct email address.';
   }

   if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
     isFormValid = false;
     errors.password = 'Password must have at least 8 characters.';
   }
   
   if (!isFormValid) {
     message = 'Check the form for errors.';
   }

   return {
     success: isFormValid,
     message,
     errors
   };
}

/**
 * Validate the login form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */

 function validateLoginForm(payload) {
   const errors = {};
   let isFormValid = true;
   let message = '';

   if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
     isFormValid = false;
     errors.email = 'Please provide your email address.';
   }

   if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
     isFormValid = false;
     errors.password = 'Please provide your password';
   }
   if (!isFormValid) {
     message = 'Check the form for errors.';
   }

   return {
     success: isFormValid,
     message,
     errors
   };
 }

 router.post('/signup', (req, res) => {
   const validationResult = validateSignUpForm(req.body);
   if (!validationResult.success) {
     return res.status(400).json({
       success: false,
       message: validationResult.message,
       errors:validationResult.errors
     });
   }

   else {
    var newUser = new User({
      name: name,
      email:email,
      password: password
    });

    User.createUser(newUser, function(err, user){
      if(err) throw err;
      console.log(user);
    });

    req.flash('success_msg', 'You are registered and can now login');

    res.redirect('/users/login');
  }
});

 passport.use(new LocalStrategy(
  function(name, password, done) {
   User.getUserByUsername(name, function(err, user){
    if(err) throw err;
    if(!user){
      return done(null, false, {message: 'Unknown User'});
    }

    User.comparePassword(password, user.password, function(err, isMatch){
      if(err) throw err;
      if(isMatch){
        return done(null, user);
      } else {
        return done(null, false, {message: 'Invalid password'});
      }
    });
   });
  }));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});


 router.post('/login', (req, res) => {
   const validationResult = validateLoginForm(req.body);
   if (!validationResult.success) {
     return res.status(400).json({
       success: false,
       message: validationResult.message,
       errors: validationResult.errors
     });
   }

  res.redirect('/');
 });

 router.get('/logout', function(req, res){
  req.logout();

  req.flash('success_msg', 'You are logged out');

  res.redirect('/users/login');
});

 module.exports = router;