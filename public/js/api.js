const unirest = require("unirest");

const req = unirest(
  "GET",
  "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup"
);

req.query({
  country: "us",
  source_id: "tt3398228",
  source: "imdb"
});

req.headers({
  "x-rapidapi-host":
    "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
  "x-rapidapi-key": process.env.X_RAPID_API_KEY,
  useQueryString: true
});

req.end(res => {
  if (res.error) {
    throw new Error(res.error);
  }

  console.log(res.body.collection.name);
  console.log(res.body.collection.picture);
  console.log(res.body.collection.locations[0].display_name);
  console.log(process.env.X_RAPID_API_KEY);
});
