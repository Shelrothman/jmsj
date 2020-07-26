const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);
const testTitle = "Stranger Things";

http://localhost:8080/api/Stranger%20Things

//Need a function so that when the user enters a search, it generates the search, something like this:
// $("#search-button").on("click", function () {
//   var searchValue = $("#search-value").val();

//   // clear input box
//   $("#search-value").val("");

//   (searchValue);
// });

$.ajax({
  method: "GET",
  URL: "http://localhost:8080/api/Stranger%20Things"
}).done(response => {
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
  console.log("Here is the data");
  console.log(data);
});
