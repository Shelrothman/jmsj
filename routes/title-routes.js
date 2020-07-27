const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);

const db = require("../models");

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
      console.log(data);

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
};
