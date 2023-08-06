// 1. Demander a l'utilisateur le nombre de notes a inserer
let nombreNotes = 0;
while (true) {
  nombreNotes = Number(prompt("Combien de notes souhaitez-vous inserer?"));
  if (!isNaN(nombreNotes) && nombreNotes > 1) {
    break;
  }
  alert("Le nombre de notes doit etre un nombre strictement superieur a 1");
}

// 2. Inserer les notes dans le tableau
const notesCoursPhysique = [];
for (let i = 0; i < nombreNotes; i++) {
  do {
    const note = Number(prompt(`Veuillez inserer la note numero ${i}: `));
    if (!isNaN(note) && note >= 0 && note <= 20) {
      notesCoursPhysique.push(note);
      break;
    }
    alert("Vous devez entrer une note entre 0 et 20");
  } while (true);
}

console.log(notesCoursPhysique); //[12,13,14,15]

// 3.Calculer la somme
let somme = 0;
for (let i = 0; i < notesCoursPhysique.length; i++) {
  somme = somme + notesCoursPhysique[i];
}
console.log(`Somme : ${somme}`);

// 4.Calculer la moyenne
const moyenne = somme / notesCoursPhysique.length;
console.log(`Moyenne : ${moyenne}`);

// 1. Seules les valeurs > 1 sont acceptees pour le nombre de notes.
// Tant que cette condition n'est pas remplie, on ne passe pas a la prochaine etape

// 2. Les valeurs du tableau doivent etre dans [0,20] pour que les notes soient valides
// Sinon, on ne passe pas a l'etape suivante
