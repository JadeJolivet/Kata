// // Gestion des Produits d'un Magasin en Ligne
// Vous travaillez sur le site web d'un magasin en ligne qui liste divers produits. Chaque produit est noté par les utilisateurs, 
// et cette note influence l'ordre d'affichage des produits sur la page. 
// Pour faciliter la gestion de ces produits, nous allons créer deux fonctions utiles :
// une pour trier les produits par note et une pour filtrer les produits par catégorie.

// Structure des Objets Produit
// Chaque produit est représenté par un objet contenant les informations suivantes :

// id : Identifiant unique du produit
// name : Nom du produit
// category : Catégorie à laquelle le produit appartient
// price : Prix du produit
// rating : Note moyenne du produit
// Exemple de Tableau de Produits
// Voici un tableau exemple contenant plusieurs produits :

const products = [
  { id: 1, name: "Smartphone XY", category: "Électronique", price: 799.99, rating: 4.6 },
  { id: 2, name: "Basketball Pro Ball", category: "Sport", price: 29.99, rating: 4.2 },
  { id: 3, name: "Casque Audio Sans Fil", category: "Électronique", price: 199.99, rating: 4.8 },
  { id: 4, name: "Série de Romans Fantasy", category: "Livres", price: 59.99, rating: 4.5 },
  { id: 5, name: "Montre Connectée", category: "Électronique", price: 249.99, rating: 4.4 },
];

function sortProductsByRating(products) {
    return [...products].sort((a, b) => a.rating - b.rating);
  }

  function filterProductsByCategory(products, category) {
    return products.filter(product => product.category === category);
  }

  const sortedProducts = sortProductsByRating(products);
console.log("Produits triés par note :");
console.log(sortedProducts);

const electronics = filterProductsByCategory(products, "Électronique");
console.log("Produits électroniques :");
console.log(electronics);


