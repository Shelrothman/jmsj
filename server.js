// Requiring necessary npm packages
require("dotenv").config();
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

// Requiring passport as we've configured it
const passport = require("./config/passport");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({
    secret: process.env.X_RAPID_API_KEY,
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

//require for testing purposes, eventually bring in dynamically
require("./public/js/api.js");

//config will read the .env file, parse the contents, assign it to the process.env file
//and return an object with a parsed key containing the loaded content or an error key if it failed

// if (result.error) {
//   throw result.error;
// }
// console.log(result.parsed);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
