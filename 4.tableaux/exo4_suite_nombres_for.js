/*
Écrire un programme Javascript qui demande un nombre de départ, 
et qui affiche ensuite les dix nombres suivants.
*/

// Demander le nombre de départ
let depart = prompt("Entrez le nombre de départ :");
depart = Number(depart);

// Boucler de 0 à 9
for (let i = 1; i <= 10; i++) {
  // Afficher le nombre suivant
  console.log(depart + i);
}
