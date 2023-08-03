// E3
// Demander l'âge
let age = prompt("Quel est l'âge de l'enfant ?");

// Convertir en nombre
age = Number(age);

// Déterminer la catégorie
let categorie;

if (age >= 7 && age <= 9) {
  categorie = "Poussin";
} else if (age >= 10 && age <= 11) {
  categorie = "Pupille";
} else if (age >= 12 && age <= 13) {
  categorie = "Benjamin";
} else if (age >= 14 && age <= 15) {
  categorie = "Minime";
} else if (age >= 16 && age <= 17) {
  categorie = "Cadet";
} else {
  categorie = "Catégorie inconnue";
}

// Afficher le résultat
alert("Catégorie de l'enfant : " + categorie);
