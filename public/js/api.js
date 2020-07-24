const settings = {
  async: true,
  crossDomain: true,
  url:
    "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=bojack&country=uk",
  method: "GET",
  headers: {
    "x-rapidapi-host":
      "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
    "x-rapidapi-key": "57edf28d4fmsh046dee6d8c6be2fp116f03jsnf6899b32e536"
  }
};

$.ajax(settings).done(res => {
  console.log(res);
  console.log(res.body.collection.name);
  console.log(res.body.collection.picture);
  console.log(res.body.collection.locations[0].display_name);
});
