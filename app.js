//select elements
var sections = document.querySelectorAll(".section")

//give each element the click event
sections.forEach(function(section) {
  //callback function
  section.addEventListener("click", expandSection);
})

//what happens on click
function expandSection(event) {

let section = (event.target.classList.contains("section")) ? event.target : event.target.parentNode;

let images = (event.target.classList.contains("images")) ? event.target : event.target.parentNode;

sections.forEach(function(section) {
  //callback function
  section.classList.remove("open");
  section.classList.add("hide");
  section.classList.remove("show");
})

// give class opener
section.classList.add("open");
section.classList.remove("hide");
section.classList.add("show");
};
