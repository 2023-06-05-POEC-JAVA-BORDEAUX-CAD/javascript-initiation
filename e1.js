// Declarer les constantes avec des noms explicites
const NB_ESSAIS_MAX = 5;
const LONGUEUR_CODE_PIN = 4;

// Boucler jusqu'a obtenir un code PIN valide
let codePin;
while (true) {
  // Demander le code
  codePin = prompt("Veuillez saisir un code PIN a 4 chiffres");

  // Valider le format
  if (codePin.length === LONGUEUR_CODE_PIN && !isNaN(codePin)) {
    break;
  }

  alert("Le code PIN doit contenir exactement 4 chiffres");
}

// Compteur d'essais
let essais = 0;

// Boucle de verification du code
let codeATester;
while (essais < NB_ESSAIS_MAX) {
  // Demander le code
  codeATester = prompt(
    "Veuillez saisir le code PIN pour deverouiller l'appareil : "
  );

  // Valider que c'est numerique
  if (isNaN(codeATester)) {
    alert("Le code PIN doit etre compose uniquement de chiffres");
    continue;
  }

  // Verifier correspondance
  if (codeATester === codePin) {
    alert("Acces autorise");
    break;
  }

  // Incrementer essais
  essais++;

  // Avertir utilisateur
  alert(`Code incorrect, ${NB_ESSAIS_MAX - essais} essais restants`);
}

// Si echec apres dernier essai
if (essais >= NB_ESSAIS_MAX) {
  alert("Acces refuse, nombre maximal d'essais depasse");
}
