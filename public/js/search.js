//This runs the utelly api search on search view

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
      console.log(data);
      console.log(data[0].title);
    });
});

//Queue button actions
const titleInput = document.getElementById("#search-term");

document.getElementById("queue-button").addEventListener("click", e => {
  e.preventDefault();
  location.href = "/playlist";
  if (!titleInput.val().trim()) {
    return;
  }

  console.log("it works!");
});
