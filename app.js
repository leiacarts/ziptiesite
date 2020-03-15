var sections = document.querySelectorAll(".section")

sections.forEach(function(section) {
  section.addEventListener("click", expandSection);
})

function expandSection(event) {
let section = (event.target.classList.contains("section")) ? event.target : event.target.parentNode;
  
let images = (event.target.classList.contains("images")) ? event.target : event.target.parentNode;


sections.forEach(function(section) {
  section.classList.remove("open")
  images.classList.remove("show");
  images.classList.add("hide");
})

section.classList.add("open");
images.classList.remove("hide");
images.classList.add("show");
}
