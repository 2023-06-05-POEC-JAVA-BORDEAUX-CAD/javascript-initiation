const frontend = document.querySelectorAll(".frontend");

for (let front of frontend) {
  // front.classList.add("front");
  // front.className = "front";
  // Rappel ou Callback
  front.addEventListener("click", function () {
    // console.log(`Contenu : ${front.innerText}`);
    console.log(`Contenu : ${this.innerText}`);
    // this.classList.add("front"); Ajouter une classe
    this.classList.toggle("front");
  });
}
