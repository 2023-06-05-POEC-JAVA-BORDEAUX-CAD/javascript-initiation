// Creation d'un tableau vide
const tb = [];

// Creation et initialisation
const nombres = [12, 15, 17, 9, 8, 15];
nombres[4] = 11;

// Parcourir un tableau
for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]); //nombres[1]
}

// Copier une reference
// nombres et nombres pointent vers le meme tableau en memoire
// Modifier un element a partir de nombres, modifiera les memes elements pour nombres2
const nombres = [2, 3, 4, 5, 6];
const nombre2 = nombres;

// Copier les valeurs
const tab1 = [3, 4, 6, 7];
const tab2 = [...tab1];//copie uniquement les valeurs
