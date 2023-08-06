/*
Écrire un programme Javascript qui demande un nombre de départ, et qui affiche ensuite les dix nombres suivants. 
Par exemple, si l'utilisateur entre le nombre 17, le programme affichera les nombres de 18 à 27.
*/

// Demander le nombre de départ
let depart = prompt("Entrez le nombre de départ :");
depart = Number(depart);

// Initialiser le compteur à 0
let compteur = 0;

// Tant que compteur < 10
while (compteur < 10) {
  // Afficher le nombre courant
  console.log(depart + compteur);

  // Incrémenter le compteur
  compteur++;
}
