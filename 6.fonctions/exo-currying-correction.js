/* 
Complétez le code suivant pour créer une fonction factory inRange 
qui permet de vérifier si un nombre est compris entre deux bornes :

*/

// Fonction factory  : C'est la fonction qui va créer toutes les autres fonctions
// Si les fonctions factories sont possibles, c'est grace au "Currying" qu'on a vu ensemble
function makeBetweenFunc(min, max) {
  return function (val) {
    return val >= min && val <= max;
  };
}

// 1. Utilisation, vous pouvez essayer avec des ranges entre 18 et 100
const inRange = makeBetweenFunc(18, 100); // Completer les ? ?

console.log(inRange(17)); // Doit afficher false
console.log(inRange(68)); // Doit afficher true

/*
2. Puis complétez à nouveau le code pour créer une fisNinetiesonction "" 
qui vérifie si une année est comprise entre 1900 et 2000 :
*/
// Nouvelle fonction factory
const isNineties = makeBetweenFunc(1900, 2000);

console.log(isNineties(1995)); // Doit afficher true

/**
 * 3. Enfin, complétez une dernière fois le code pour créer une fonction "isNiceWeather"
 * qui vérifie si une température est comprise entre 18 et 23 degrés :
 */
// Dernière fonction factory
const isNiceWeather = makeBetweenFunc(18, 23);

console.log(isNiceWeather(20)); // Doit afficher true
