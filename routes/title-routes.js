const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);

const db = require("../models");
// eslint-disable-next-line no-unused-vars
const binges = require("../models/binges");

module.exports = function(app) {
  // Adding an event listener for when the form is submitted
  app.get("/api/utelly/:title", (req, res) => {
    const settings = {
      async: true,
      crossDomain: true,
      url:
        "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" +
        req.params.title +
        "&country=us",
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
        "x-rapidapi-key": process.env.X_RAPID_API_KEY
      }
    };
    $.ajax(settings).done(response => {
      const title = response.results[0];
      const platform = title.locations[0].display_name;
      const data = [
        {
          title: title.name,
          picture: title.picture,
          id: title.id,
          platform: platform
        }
      ];

      return res.json(data);
    });
  });

  app.post("/api/titles", (req, res) => {
    db.Binge.create(req.body)
      .then(dbTitle => {
        res.json(dbTitle);
      })
      .catch(error => {
        console.log(error);
        res.status(500).end();
      });
  });

  //get route for getting all of the binges
  app.get("/api/titles", (req, res) => {
    const query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    db.Binge.findAll({
      where: query
    }).then(dbBinge => {
      res.json(dbBinge);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/titles/:id", (req, res) => {
    db.Binge.findOne({
      where: {
        id: req.params.id
      }
    }).then(dbTitle => {
      res.json(dbTitle);
    });
  });

  // Get route for retrieving a single post tp update to presently watching
  app.patch("/api/titles", (req, res) => {
    db.Binge.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(dbTitle => {
      res.json(dbTitle);
    });
  });
};
