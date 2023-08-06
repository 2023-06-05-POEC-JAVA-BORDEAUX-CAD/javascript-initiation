/*
Écrire un programme Javascript qui permet à l’utilisateur de définir une adresse email et un mot de passe.
Ensuite dans un second temps, il sera demandé à l’utilisateur de fournir l’email et le mot de passe:

- Si l’email et le mot de passe ne correspondent pas aux valeurs définies, le message “Identifiants incorrects devra s’afficher”, et l’utilisateur devra recommencer la saisie des valeurs.

- Sinon, le message “Bienvenu dans votre espace client” devra s’afficher. 

- Le nombre de fois que l’utilisateur peut saisir des mauvais identifiants est limité à 5, ensuite le programme va s’arrêter avec un message disant 
  “Vous avez saisi des mauvais identifiants x fois, votre compte est bloqué”.
*/

// Définir l'email et mot de passe
const email = "exemple@email.com";
const mdp = "motdepasse";

// Nombre max d'essais
const maxEssais = 5;
let essais = 0;

// Tant que nb essais < max
while (essais < maxEssais) {
  // Demander email et mdp
  let emailSaisi = prompt("Entrez votre email");
  let mdpSaisi = prompt("Entrez votre mot de passe");

  // Vérifier correspondance
  if (emailSaisi === email && mdpSaisi === mdp) {
    // Identifiants corrects
    alert("Bienvenue dans votre espace client");
    break;
  } else {
    // Identifiants incorrects
    alert("Identifiants incorrects");
    essais++;
  }
}

// Si sortie de boucle sans succès
if (essais >= maxEssais) {
  alert(
    "Vous avez saisi des mauvais identifiants " +
      essais +
      " fois, votre compte est bloqué"
  );
}
