// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/search");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/search");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../views/search.handlebars"));
  });

  app.get("/playlist", isAuthenticated, (req, res) => {
    // get the users playlist from the db

    db.Binge.findAll({
      where: {
        UserId: req.user.id
      }
    }).then(binges => {
      const notWatchedYet = [];
      const currentlyWatching = [];
      const finishedWatching = [];
      // sort the playlist into notWatchedYet, currentlyWatching, finishedWatching arrays
      for (let i = 0; i < binges.length; i += 1) {
        if (binges[i].alreadyWatched) {
          finishedWatching.push(binges[i].toJSON());
        } else if (binges[i].presentlyWatching) {
          currentlyWatching.push(binges[i].toJSON());
        } else {
          notWatchedYet.push(binges[i].toJSON());
        }
      }
      const hbsData = {
        notWatchedYet,
        currentlyWatching,
        finishedWatching
      };
      // return res.json(hbsData)
      // render playlist with the 3 arrays
      res.render("playlist", hbsData);
    });
  });

  app.get("/search", isAuthenticated, (req, res) => {
    res.render("search", { user: req.user });
    console.log(req.user);
  });
};
