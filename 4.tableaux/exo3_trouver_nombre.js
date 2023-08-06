/*
Écrire un programme javascript qui demande un nombre compris entre 10 et 20, 
jusqu’à ce que la réponse convienne. En cas de réponse supérieure à 20, on fera 
apparaître un message : « Plus petit ! », et inversement, « Plus grand ! » si le nombre est inférieur à 10.
*/

// Tant que la réponse ne convient pas
while (true) {
  // Demander un nombre
  let nombre = prompt("Entrez un nombre entre 10 et 20 :");

  // Vérifier que c'est un nombre
  if (isNaN(nombre)) {
    alert("Vous n'avez pas saisi un nombre");
    continue;
  }

  // Convertir en nombre
  nombre = Number(nombre);

  // Vérifier la valeur
  if (nombre < 10) {
    alert("Plus grand !");
  } else if (nombre > 20) {
    alert("Plus petit !");
  } else {
    // La réponse convient
    break;
  }
}

// La réponse convient
alert("Nombre accepté : " + nombre);
