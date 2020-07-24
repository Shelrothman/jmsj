const unirest = require("unirest");

const req = unirest("GET", "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup");

req.query({
	"country": "us",
	"source_id": "tt3398228",
	"source": "imdb"
});

req.headers({
	"x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
	"x-rapidapi-key": "eaa1d6641dmsh4c1b0d7b7ae1fb5p1b674cjsnb2498b69433e",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

    console.log(res.body.collection.name)
    console.log(res.body.collection.picture)
	console.log(res.body.collection.locations[0].display_name);
	
   
});

var nameEl = document.getElementById("bingeName");
	nameEl.textContent = res.body.collection.name;

  

