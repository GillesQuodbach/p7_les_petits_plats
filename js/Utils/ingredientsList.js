//Création des tableaux des ingredients
const getIngredientsArray = [];
const ingredientArrayWithDuplicate = [];

// Récupération des ingrédients
recipes.forEach((recipe) => getIngredientsArray.push(recipe.ingredients));

// Aplatissage du tableau
const flatIngredientsArray = getIngredientsArray.flat(3);

// Remplissage du tableau des ingrédients
flatIngredientsArray.forEach((item) => {
  const { ingredient } = item;
  ingredientArrayWithDuplicate.push(ingredient);
});

//Suppression des doublons
const uniqueIngredientsArray = Array.from(
  new Set(ingredientArrayWithDuplicate)
);

// Loading item
// Création de la liste des ingrédients

const ingredientsListContainer = document.querySelector(
  "#ingredients-dropdown-menu"
);
uniqueIngredientsArray.forEach((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.setAttribute("class", "ingredients-item text-nowrap");
  ingredientItem.textContent = ingredient;
  ingredientsListContainer.appendChild(ingredientItem);
});

//! Recherche dans ingredients OK
// let test = [];
//
// recipes.forEach((recipe) => {
//   recipe.ingredients.forEach((item) => {
//     if (item.ingredient.toLowerCase().includes("gla")) {
//       test.push(item);
//     }
//   });
// });
// console.log(test);
//!================================
// console.log(recipes);
