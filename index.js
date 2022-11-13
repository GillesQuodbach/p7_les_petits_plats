// Récupération recettes
// console.log(recipes);

// Récupération des recettes et créations des cards
// const recipes = liste de toutes les recettes
// console.log(recipes[0].name);

// "Récupération des données"

async function getRecipes() {
  return { recettes: [...recipes] };
}

// console.log({ recettes: [...recipes] });
getRecipes();

// * Création des cards des recettes
async function displayData(recettes) {
  const recipesCardsSection = document.getElementById("recipes-gallery");
  recettes.forEach((recette) => {
    const recipeCard = cardsFactory(recette);
    const recipeCardDOM = recipeCard.getRecipesCardDOM();
    recipesCardsSection.appendChild(recipeCardDOM);
  });
}

// Affichage des cards
async function init() {
  const { recettes } = await getRecipes();
  // console.log({ recettes });
  displayData(recettes);
}

init();
