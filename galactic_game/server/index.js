const express = require('express');
const bodyParser = require('body-parser');
const path = require ('path');
//var expressValidator = require('express-validator');
//var flash = require('connect-flash');
//var passport = require('passport');
//var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var morgan = require('morgan');

const app = express();

// Database configuration for mongoose
// db: week18day3mongoose
mongoose.connect("mongodb://localhost/galacticstuugle");
// Hook mongoose connection to db
var db = mongoose.connection;

// Log any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Log a success message when we connect to our mongoDB collection with no issues
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build/index.html'));
});
// tell the app to look for static files in these directories
app.use(bodyParser.urlencoded({ extended: false}));

//routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

// start the server
app.listen(3000, () => {
  console.log('Server is running on https://localhost:3000');
});