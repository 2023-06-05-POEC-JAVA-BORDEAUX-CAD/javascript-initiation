/*
Écrire un programme Javascript qui demande à l'utilisateur de créer 2 listes composées de nombres.
Ensuite, remplir ces 2 listes à partir de la lecture du clavier tout en sachant que ces 2 listes doivent avoir la même taille
(aussi définie par une lecture). 

Puis, calculer la liste résultante qui va être construite par la somme des éléments aux mêmes index des 2 listes précédentes.

Exemple :
Liste 1 : [2, 4, 5, 7, 8]  
Liste 2 : [3, 7, 2, 5, 6]
Liste 3 (résultante) : [5(2+3), 11(4+7), 7(5+2), 12(7+5), 14(8+6)]
*/

// Demander la taille des listes
const taille = Number(prompt("Entrez la taille des listes :"));

// Initialiser les listes
const liste1 = [];
const liste2 = [];

// Remplir la première liste
for (let i = 0; i < taille; i++) {
  liste1.push(
    Number(prompt("Entrez l'élément " + (i + 1) + " de la liste 1 :"))
  );
}

// Remplir la deuxième liste
for (let i = 0; i < taille; i++) {
  liste2.push(
    Number(prompt("Entrez l'élément " + (i + 1) + " de la liste 2 :"))
  );
}

// Calculer la liste résultante
const liste3 = [];
for (let i = 0; i < taille; i++) {
  liste3.push(liste1[i] + liste2[i]);
}

// Afficher la liste résultante
console.log("Liste résultante : " + liste3);
