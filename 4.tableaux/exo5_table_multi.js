/*
Écrire un algorithme qui permettra de calculer plusieurs tables de multiplication
On va d’abord demander à l’utilisateur de saisir le 1er nombre dont il faut connaître la table de multiple, 
ensuite on lui demandera le dernier nombre.
Si par exemple le premier nombre est 3 et le dernier 8, on va afficher toutes les tables de multiplications de 3 à 8.

Après on demandera à l’utilisateur d’entre le premier nombre et le dernier nombre à multiplier. 
Si par exemple il saisit comme premier nombre 3 et dernier nombre 7, on aura:

3 x 3 = 9  
4 x 3 = 12
...
8 x 3 = 24

3 x 4 = 12  
4 x 4 = 16
... 
8 x 4 = 32

etc... jusqu'à 

3 x 7 = 21
4 x 7 = 28 
...
8 x 7 = 56
*/

// Demander le premier nombre
let premier = prompt("Saisir le premier nombre :");
premier = Number(premier);

// Demander le dernier nombre
let dernier = prompt("Saisir le dernier nombre :");
dernier = Number(dernier);

// Boucler de premier à dernier
for (let i = premier; i <= dernier; i++) {
  // Afficher la table de i
  for (let j = premier; j <= dernier; j++) {
    console.log(i + " x " + j + " = " + i * j);
  }

  console.log(""); // Saut de ligne entre les tables
}
