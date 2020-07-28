//This runs the utelly api search on search view
const currentBinge = {};
currentBinge.UserId = " ";
currentBinge.title = " ";
currentBinge.platform = " ";

//Search button actions
document.getElementById("search-button").addEventListener("click", e => {
  e.preventDefault();

  const searchTerm = document.querySelector("#search-term").value;
  if (!searchTerm) {
    alert("please enter the title of your desired binge!");
  } else {
    fetch("http://localhost:8080/api/utelly/" + searchTerm)
      .then(data => data.json())
      .then(data => {
        document.querySelector("#title").innerHTML = data[0].title;
        document.querySelector("#platform").innerHTML =
          "Available on " + data[0].platform;
        document.querySelector("#picture").setAttribute("src", data[0].picture);
        currentBinge.title = data[0].title;
        currentBinge.platform = data[0].platform;
      });
  }
});

//Queue button actions
document.getElementById("queue-button").addEventListener("click", function(e) {
  e.preventDefault();
  currentBinge.UserId = this.getAttribute("data-userid");

  $.post("/api/titles", currentBinge).then(() => {
    location.href = "/playlist";
  });
});
