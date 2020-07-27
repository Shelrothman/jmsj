//This runs the utelly api search on search view
const currentBinge = {};
currentBinge.UserId = " ";
currentBinge.title = " ";
currentBinge.platform = " ";

//listen to click event listener on search button
document.getElementById("search-button").addEventListener("click", e => {
  e.preventDefault();
  //get value of search input
  const searchTerm = document.querySelector("#search-term").value;
  console.log(searchTerm);
  //append value to url that goes in fetch request
  fetch("http://localhost:8080/api/utelly/" + searchTerm)
    .then(data => data.json())
    .then(data => {
      document.querySelector("#title").innerHTML = data[0].title;
      document.querySelector("#platform").innerHTML =
        "Available on " + data[0].platform;
      document.querySelector("#picture").setAttribute("src", data[0].picture);
      currentBinge.title = data[0].title;
      currentBinge.platform = data[0].platform;
      console.log(data);
      console.log(data[0].title);
    });
});

//Queue button actions
console.log("currentBinge Title: " + currentBinge.title);

document.getElementById("queue-button").addEventListener("click", function(e) {
  e.preventDefault();
  currentBinge.UserId = this.getAttribute("data-userid");

  console.log("currentBinge: ", currentBinge);

  $.post("/api/titles", currentBinge).then(() => {
    location.href = "/playlist";
  });
});
