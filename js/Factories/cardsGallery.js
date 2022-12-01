let filteredArray = [];
// Input de recherche
const searchInput = document.querySelector("#main-search-input");
// Container de la galerie
const cardsGallery = document.querySelector("#recipes-gallery");

// Fonction mise en ordre alphabetique
function orderList(data) {
  return data.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
}

//Mise en ordre alphabetique

//Fonction de création des cards
function createCardList(recipesList) {
  //Mise dans l'ordre alphabétique
  orderList(recipesList);
  //Tableau de chaques RECETTES" (recipesList)
  recipesList.forEach((recipe) => {
    //Destructuring des recette
    const { description, id, name, time } = recipe;

    //Récupération du tableau des ingredients
    const recipeIngredients = recipe.ingredients;

    //Création du container de la card
    const listContainer = document.createElement("div");
    listContainer.setAttribute("id", recipe.id);
    listContainer.setAttribute("class", "col recipe-card");
    //Fonction createIngredientList

    const cardListIngredient = `${recipeIngredients
      .map((item) => {
        if (item.quantity === undefined) {
          item.quantity = "";
        }
        if (item.unit === undefined) {
          item.unit = "";
        }
        return `<li class="list-group-item"><b>${item.ingredient}:</b> ${item.quantity} ${item.unit}</li>`;
      })
      .join("")
      .replace("undefined", "")}`;

    //Création du HTML de la card
    listContainer.innerHTML = `
            <div id="${id}" class="card card-body-container">
            <img src="https://picsum.photos/380/178" class="card-img-top" alt="Recipe image">
            <div class="card-body">
            <div class="card-hdr d-flex justify-content-between align-items-center">
                <h5 class="card-title my-auto">${name}</h5>
                <img src="img/clock.svg" class="card-clock my-auto" alt="Clock">
                <p class="card-time fw-bold my-auto">${time} min</p>
            </div>
            <div class="card-main d-flex justify-content-between mt-3">
                <ul class="col-6 list-group rounded-0"> ${cardListIngredient}</ul>
                <p class="card-recipe col-6">${description.slice(0, 175)}...</p>
            </div>
            </div>
            </div>
        `;
    cardsGallery.appendChild(listContainer);
  });
}
// Creation de la liste des cartes "DE BASE"
createCardList(recipes);
//Fonction de recherche
searchInput.addEventListener("input", filterData);

function filterData(e) {
  //Remise a zéro de la gallery
  cardsGallery.innerHTML = "";
  //Récupération de l'input de l'utilisateur à chaque lettre tapée
  const searchedString = e.target.value.toLowerCase();
  // Si plus de 2 lettres entrées alors on lance la recherche
  if (searchedString.length <= 2) {
    cardsGallery.innerHTML = "";
    createCardList(recipes);
    getChoiceList(recipes);
  }
  if (searchedString.length > 2) {
    // Recherche dans DESCRIPTION - NOM - INGREDIENT
    filteredArray = recipes.filter(
      (recipe) =>
        // Work well
        recipe.name.toLowerCase().includes(searchedString) ||
        // Work well
        recipe.description.toLowerCase().includes(searchedString) ||
        // Find what I'm looking for but don't push it in the filteredArr
        recipe.ingredients.some((item) =>
          item.ingredient.toLowerCase().includes(searchedString)
        )
    );
    //Création des cards
    createCardList(filteredArray);
    getChoiceList(filteredArray);
    // console.log(filteredArray);
    // console.log("===PUTAIN===");
  }
  // console.log(filteredArray);
  // console.log("===PUTAIN===");
}

//*
// ! Filtrage par hashtag ==================================
//*
window.onload = () => {
  // Récupération de la liste des ingredient
  getChoiceList(recipes);
};
