// Récupération recettes
// console.log(recipes);

// Récupération des recettes et créations des cards
// const recipes = liste de toutes les recettes
// console.log(recipes[0].name);

// "Récupération des données"
async function getRecipes() {
  console.log({ recettes: [...recipes] });
  console.log({ recettes: [...[0]] });

  return { recettes: [...recipes] };
}

getRecipes();
// // * FACTORY cards
// function cardsFactory(data) {
//   console.log(data); // ! OK avec P6
//   const { id } = data;
//
//   const cardsImagesSRC = "https://picsum.photos/380/178";
//   const cardsTimeIconSRC = "img/clock.svg";
//
//   function getRecipesCardDOM() {
//     // ? Card container
//     const cardsContainer = document.createElement("div");
//     cardsContainer.setAttribute("id", id);
//     cardsContainer.setAttribute("class", "card");
//
//     // * Card recipe image
//     const img = document.createElement("img");
//     img.setAttribute("src", cardsImagesSRC);
//     img.setAttribute("class", "card-img-top");
//     img.setAttribute("alt", "Recipe image");

// // * Card body
// const cardBody = document.createElement("div");
// cardBody.setAttribute("class", "card-body");
//
// // ? Card recipe header
// const cardRecipeHeader = document.createElement("div");
// cardRecipeHeader.setAttribute(
//   "class",
//   "card-hdr d-flex justify-content-between align-items-center"
// );
//
// // * Card recipe name
// const recipeName = document.createElement("h5");
// recipeName.setAttribute("class", "card-title my-auto");
// recipeName.textContent = name;
//
// // * Card recipe clock icon
// const cardTimeIcon = document.createElement("img");
// cardTimeIcon.setAttribute("src", cardsTimeIconSRC);
// cardTimeIcon.setAttribute("class", "card-clock my-auto");
// cardTimeIcon.setAttribute("alt", "Recipe clock icon");
//
// // * Card recipe time
// const cardRecipeTime = document.createElement("p");
// cardRecipeTime.setAttribute(
//   "class",
//   "card-main d-flex justify-content-between mt-3"
// );
// cardRecipeTime.textContent = time;
//
// // ? Card main (recipe + ingredients)
// const cardMain = document.createElement("div");
// cardMain.setAttribute(
//   "class",
//   "card-main d-flex justify-content-between mt-3"
// );

// // ? Ingredients list UL
// const ingredientsList = document.createElement("ul");
// ingredientsList.setAttribute("id", "list");
// ingredientsList.setAttribute("class", "col-6 list-group rounded-0");

// * Ingredients list LI
// let i = 0;

// console.log(recipes.ingredients[id]);
// let i = 0;
// let listItems = ingredients[i];
// listItems.forEach((listItem) => {
//   listItem.createElement("li");
//   listItem.setAttribute("class", "list-group-item");
//   listItem.textContent = listItem;
// });

// ? Recipe description
// const recipeDescription = document.createElement("p");
// recipeDescription.setAttribute("class", "card-recipe col-6");
// recipeDescription.textContent = description;

//     cardsContainer.appendChild(img);
//     // cardsContainer.appendChild(cardBody);
//     // cardBody.appendChild(cardRecipeHeader);
//     // cardRecipeHeader.appendChild(recipeName);
//     // cardRecipeHeader.appendChild(cardTimeIcon);
//     // cardRecipeHeader.appendChild(cardRecipeTime);
//     // cardBody.appendChild(cardMain);
//     // cardMain.appendChild(ingredientsList);
//     // ingredientsList.appendChild(listItems);
//     // console.log(cardsContainer);
//     return cardsContainer;
//   }
//
//   return { id, getRecipesCardDOM };
// }
//
// // * Création des cards des recettes
// const recipesCardsSection = document.getElementById("recipes-gallery");
// console.log(recipesCardsSection);
//
// function displayData(recettes) {
//   recettes.forEach((recette) => {
//     const recipeCard = cardsFactory(recette);
//     const recipeCardDOM = recipeCard.getRecipesCardDOM();
//     recipesCardsSection.appendChild(recipeCardDOM);
//   });
// }
//
// // Affichage des cards
// async function init() {
//   const { recettes } = getRecipes();
//   console.log({ recettes });
//   await displayData(recettes);
// }
//
// init();
