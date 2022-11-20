//Réception des données (recettes)
async function getRecipes() {
  return { recettes: [...recipes] };
}

getRecipes()
  .then((response) => {
    console.log("Les recettes ont bien été reçu");
  })
  .catch((error) => {
    console.error("ERROR, les recettes sont manquantes");
  });

// Création du DOM
async function displayData(recettes) {
  // Création des cards des recettes
  const recipesCardsSection = document.getElementById("recipes-gallery");
  recettes.forEach((recette) => {
    const recipesData = appFactory(recette);
    const cardsDOM = recipesData.getDataDOM();
    recipesCardsSection.appendChild(cardsDOM);
  });
}

// Affichage des cards
async function init() {
  const { recettes } = await getRecipes();
  await displayData(recettes);
}

init()
  .then((response) => {
    console.log("Les recettes ont bien été affichées");
  })
  .catch((error) => {
    console.error("ERROR, les recettes sont manquantes");
  });

//  FACTORY cards
function appFactory(data) {
  const { id, name, time, description, ingredients } = data;
  const picture = "https://picsum.photos/380/178";
  const clockIconSRC = "img/clock.svg";

  function getDataDOM() {
    const cardBootstrapColumn = document.createElement("div");
    cardBootstrapColumn.setAttribute("id", id);
    cardBootstrapColumn.setAttribute("class", "col recipe-card");
    // ? Card container
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("id", id);
    cardContainer.setAttribute("class", "card card-body-container");

    // * Card recipe image
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("class", "card-img-top");
    img.setAttribute("alt", "Recipe image");

    // ? Card body container
    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    // Card header (name + icon + time)
    const cardHeader = document.createElement("div");
    cardHeader.setAttribute(
      "class",
      "card-hdr d-flex justify-content-between align-items-center"
    );

    const recipeName = document.createElement("h5");
    recipeName.setAttribute("class", "card-title my-auto");
    recipeName.textContent = name;

    const clockIcon = document.createElement("img");
    clockIcon.setAttribute("src", clockIconSRC);
    clockIcon.setAttribute("class", "card-clock my-auto");
    clockIcon.setAttribute("alt", "Clock");

    const recipeTime = document.createElement("p");
    recipeTime.setAttribute("class", "card-time fw-bold my-auto");
    recipeTime.textContent = time + " min";

    // Card main content ( ingredients + description )
    const cardMainContent = document.createElement("div");
    cardMainContent.setAttribute(
      "class",
      "card-main d-flex justify-content-between mt-3"
    );

    // ? Ingredient list container UL
    const listIngredient = document.createElement("ul");
    listIngredient.setAttribute("id", "list");
    listIngredient.setAttribute("class", "col-6 list-group rounded-0");

    // * Ingredient list LI
    ingredients.forEach((item) => {
      const { ingredient = "", quantity = "", unit = "" } = item;
      // console.log(ingredient);
      // Ingredients de la card
      const listIngredientItem = document.createElement("li");
      listIngredientItem.setAttribute("class", "list-group-item");
      listIngredientItem.innerHTML = `<b>${ingredient}:</b> ${quantity} ${unit}`;
      listIngredient.appendChild(listIngredientItem);

      // // Ingrédients du dropdown
      // const dropdownIngredientsContainer = document.querySelector(
      //   "#ingredients-dropdown-menu"
      // );
      // const dropdownIngredientItem = document.createElement("li");
      // dropdownIngredientItem.setAttribute("class", "dropdown-ingredients-item");
      // dropdownIngredientItem.innerHTML = `${ingredient}`;
      // dropdownIngredientsContainer.appendChild(dropdownIngredientItem);
    });

    // * Card description
    const recipeDescription = document.createElement("p");
    recipeDescription.setAttribute("class", "card-recipe col-6");
    recipeDescription.textContent = description;

    // Card creation
    cardBootstrapColumn.appendChild(cardContainer);
    cardContainer.appendChild(img);
    cardContainer.appendChild(cardBody);
    cardBody.appendChild(cardHeader);
    cardHeader.appendChild(recipeName);
    cardHeader.appendChild(clockIcon);
    cardHeader.appendChild(recipeTime);
    cardBody.appendChild(cardMainContent);
    cardMainContent.appendChild(listIngredient);
    cardMainContent.appendChild(recipeDescription);

    return cardBootstrapColumn;
  }

  return { id, name, time, description, ingredients, getDataDOM };
}
