const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("./config/db");
const passport = require("passport");

const Registration = require("./model/User");

// Importing Route Files
const loginRoutes = require("./routes/loginRoutes");


// INSTANTIATIONS
const app = express();

//setup database connections
mongoose.connect(config.database, { useNewUrlParser: true });
const db = mongoose.connection;

// Check db connection
db.once("open", function () {
	console.log("Connected to MongoDB");
});

// Check for db errors
db.on("error", function (err) {
	console.error(err);
});

// CONFIGURATIONS
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/public/css", express.static(__dirname + "/public/css"));

// passport configuration middleware
app.use(passport.initialize());
passport.use(Registration.createStrategy());

// Middleware
app.use("/", loginRoutes);

//Always the second last line in the Express server
app.get("*", (req, res) => {
	res.send("404! This invalid URL");
});

// BOOTSTRAPPING SERVER ALWAYS THE LAST LINE IN THE EXPRESS SERVER
app.listen(4300, () => console.log("listening on port 4300!"));
