function add(a, b) {
  return a + b;
}

const nombre1 = Number(prompt("Saisir la premiere valeur : ")); //4
const nombre2 = Number(prompt("Saisir la deuxieme valeur :")); //5

const somme = add(nombre1, nombre2);
alert(`${nombre1} + ${nombre2} = ${somme}`);

// Calculer la surface et le perimetre du rectangle a partie de la longueur et de la largeur
// surface = longueur * largeur
// perimetre=2(longueur + largeur)

// 1. En utilisant les fonctions, écrire un programme qui permet de calculer le perimetre et la surface
// de cercle à partir du Rayon.
// PI est une constante : Math.PI