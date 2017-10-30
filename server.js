//Dependencies
import express from "express";
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import passport from "passport";
import config from "./config";
import validator from"validator";

// Create a new express app
const app = express();

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); 


// Sets an initial port. We'll use this later in our listener
const PORT = process.env.PORT || 3001;

// plug in the promise library:
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/rucbgrad", {useMongoClient: true});
const db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
})

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./middleware/auth-check');
app.use('/api', authCheckMiddleware);


app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});
//Routes
const authRoutes = require("./routes/auth");
const apiRoutes = require("./routes/api");
app.use("/auth", authRoutes);
app.use("/api", apiRoutes);

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
