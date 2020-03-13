var sections = document.querySelectorAll(".section")

sections.forEach(function(section) {
  section.addEventListener("click", expandSection);
})

function expandSection(event) {
let section = (event.target.classList.contains("section")) ? event.target : event.target.parentNode;

sections.forEach(function(section) {
  section.classList.remove("open")
})

section.classList.add("open");
}
