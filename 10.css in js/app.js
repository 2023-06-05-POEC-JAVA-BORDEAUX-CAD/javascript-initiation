const frontend = document.querySelectorAll(".frontend");

// background-color -> backgroundColor
// font-size -> fontSize
// frontend[0].style.backgroundColor = "red";
// frontend[0].style.color = "white";
// frontend[0].style.fontWeight = "bold";
// frontend[0].style.fontSize = "25px";
// frontend[0].style.padding = "10px";

for (let techno of frontend) {
  techno.style.backgroundColor = "red";
  techno.style.color = "white";
  techno.style.fontWeight = "bold";
  techno.style.fontSize = "25px";
  techno.style.padding = "10px";
  techno.style.border = "2px solid yellow";
}
