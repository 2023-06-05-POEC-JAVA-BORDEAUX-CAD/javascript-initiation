#Afficher menu

Le but de ce TP est d'afficher le menu avec la possibilité de filter selon la categorie:

Les 4 catégories sont :

- `all` : Qui affiche tout le menu
- `breakfast` : N'affiche que les données de la catégorie _breakfast_
- `lunch` : Affiche uniquement les données de la categorie _Lunch_
- `shakes` : Affiche uniquementles données de la categorie _Shakes_
- `dinner` : Affiche uniquement les données de la categorie _dinner_

Voici les données du menu:

```
[
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
```

Exemple d'exécution
![Alt Text](https://res.cloudinary.com/jochri3/image/upload/v1658915519/gif%20exercices/tp4-menu.gif)

## Ajout

Ajouter la possibilité de voir les détails d'un article dans une page détails.

1. Stocker tout le tableau dans le `localStorage`
2. Ajouter les urls cliquables sur chaque `carte` avec un paramère `?id=[votre_id]`.
3. En cliquant sur un elément, vous devez ouvrir page page.Où pour récupérer l'id depuis l'url vous devez vous utiliser [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
4. Aller dans le `localStorage` pour récupérer un element par son `id` puis afficher l'information selon le format de votre choix.
