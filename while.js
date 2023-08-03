const codePin = prompt("Veuillez definir un code PIN : ");

let codeATester = "";

while (codeATester !== codePin) {
  codeATester = prompt(
    "Veuillez saisir le code PIN pour deverouiller l'appareil : "
  );
  if (codeATester !== codePin) {
    alert("Code PIN incorrect. Veuillez ressayer.");
  } else {
    alert("Appareil debloque.");
  }
}

// 1. Limiter le nombre d'essais a 5
// 2. S'assurer le code PIN puisse toujours avoir 4 chiffres
// 3. La valeur du code PIN doit etre un nombre
