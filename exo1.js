// 1. Demander a l'utilisateur le nombre de notes a inserer
const nombreNotes = Number(prompt("Combien de notes souhaitez-vous inserer?"));

// 2. Inserer les notes dans le tableau
const notesCoursPhysique = [];
for (let i = 0; i < nombreNotes; i++) {
  //   notesCoursPhysique[i] = Number(
  //     prompt(`Veuillez inserer la note numero ${i}: `)
  //   );
  const note = Number(prompt(`Veuillez inserer la note numero ${i}: `));
  notesCoursPhysique.push(note);
}

console.log(notesCoursPhysique); //[12,13,14,15]

// 3.Calculer la somme
let somme = 0;
for (let i = 0; i < notesCoursPhysique.length; i++) {
  // i = 0,somme = somme +  notesCoursPhysique[0] => somme=0+12 = 12
  // i = 1, somme = somme + notesCoursPhysique[1] => somme=12+13 = 25
  // i = 2, somme = somme + notesCoursPhysique[2] => somme=25+14 = 39
  // i = 3, somme = somme + notesCoursPhysique[3] => somme=39+15=54
  somme = somme + notesCoursPhysique[i];
}
console.log(`Somme : ${somme}`);

// 4.Calculer la moyenne
const moyenne = somme / notesCoursPhysique.length;
console.log(`Moyenne : ${moyenne}`);
