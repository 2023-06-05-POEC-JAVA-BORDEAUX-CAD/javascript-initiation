// E2
// Demander la distance parcourue
let distance = prompt("Entrez la distance parcourue (en m) :");
distance = Number(distance);

// Demander le temps
let temps = prompt("Entrez le temps (en sec) :");
temps = Number(temps);

// Calculer la vitesse
let vitesse = distance / temps;

// Afficher le résultat dans une alerte
alert(distance + " m / " + temps + " s = " + vitesse + " m/s");

// Afficher le résultat dans la console
console.log(distance + " m / " + temps + " s = " + vitesse + " m/s");
