const age = prompt("Veuillez entrer votre age : ");
const PI = 3.14;
const G = 9.8;
const AGE_RETRAITE = 35;
// Operateurs logiques : &&(and) ||(or)
// > : Strictement superieur
// < : Strictement inferieur
// >= : superieur ou egal
// <= : inferieur ou egal
// == : Egalite
// === : Egalite stricte
// != : Difference
// !== : Difference stricte

const isMajor = age >= 18;
if (isMajor) {
  console.log("Ouiiiii!!!");
} else {
  console.log("Noonnn");
}

// Garder la meme langue pour les noms des variables
let firstName = "Chris";
let nomDeFamille = "Lis";
