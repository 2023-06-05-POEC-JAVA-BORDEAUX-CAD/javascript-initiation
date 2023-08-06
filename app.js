function add(a, b) {
  return a + b;
}

const nombre1 = Number(prompt("Saisir la premiere valeur : "));
const nombre2 = Number(prompt("Saisir la deuxieme valeur :"));

const somme = add(nombre1, nombre2);
alert(`${nombre1} + ${nombre2} = ${somme}`);



// Calculer la surface et le perimetre du rectangle a partie de la longueur et de la largeur
// surface = longueur * largeur
// perimetre=2(longueur + largeur)