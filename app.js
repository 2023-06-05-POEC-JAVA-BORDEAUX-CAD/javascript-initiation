const technos = document.querySelectorAll("li");
console.log(technos);

// Accéder au premier element
console.log(technos[0]);

// Lire le text du premier element
console.log(technos[0].innerText);

// Modifier le text du premier element
technos[0].innerText = "Angular";

// Afficher le contenu(text) de tous les elements "li"
// Boucle for classique
for (let i = 0; i < technos.length; i++) {
  console.log(
    `#${i} => ${technos[i].innerText} - Classe ${technos[i].className}`
  );
}

// Boucle "for of": Plus lisible
for (let techno of technos) {
  console.log(`#${techno.innerText} - Classe ${techno.className}`);
}

// E1.Remplacer tous les elements par les elements du tableau ci-desssous
const framworks = [
  "Nest.js",
  "Spring",
  "Asp Dotnet Core",
  "Ruby On Rails",
  "Angular",
  "Symfony",
  "Laravel",
  "Dynamo",
];

// E1.R1
for (let i = 0; i < framworks.length; i++) {
  technos[i].innerText = framworks[i];
}

// E1.R2 : Méthode Array.forEach 
framworks.forEach(function (framwork, index) {
  technos[index].innerText = framwork;
});
