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
// console.log(uniqueIngredientsArray);

// Création de la liste des ingrédients
const ingredientsListContainer = document.querySelector(
  "#ingredients-dropdown-menu"
);
uniqueIngredientsArray.forEach((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.setAttribute("class", "text-nowrap");
  ingredientItem.textContent = ingredient;
  ingredientsListContainer.appendChild(ingredientItem);
});
