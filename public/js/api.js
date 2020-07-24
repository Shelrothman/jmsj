const unirest = require("unirest");

const req = unirest(
  "GET",
  "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup"
);

req.query({
  country: "us",
<<<<<<< HEAD
  // eslint-disable-next-line camelcase
=======
>>>>>>> e7f4e825bad3ff27abb87b604216d6748e9f178f
  source_id: "tt3398228",
  source: "imdb"
});

req.headers({
  "x-rapidapi-host":
    "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
<<<<<<< HEAD
  "x-rapidapi-key": "eaa1d6641dmsh4c1b0d7b7ae1fb5p1b674cjsnb2498b69433e",
=======
  "x-rapidapi-key": process.env.X_RAPID_API_KEY,
>>>>>>> e7f4e825bad3ff27abb87b604216d6748e9f178f
  useQueryString: true
});

req.end(res => {
  if (res.error) {
    throw new Error(res.error);
  }

  console.log(res.body.collection.name);
  console.log(res.body.collection.picture);
  console.log(res.body.collection.locations[0].display_name);
<<<<<<< HEAD
=======
  console.log(process.env.X_RAPID_API_KEY);
>>>>>>> e7f4e825bad3ff27abb87b604216d6748e9f178f
});
