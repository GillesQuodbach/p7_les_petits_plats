// Input de recherche
const searchInput = document.querySelector("#main-search-input");

// Container de la galerie
const cardsGallery = document.querySelector("#recipes-gallery");

// Fonction mise en ordre alphabetique

function orderList(data) {
  const orderedData = data.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  return orderedData;
}

//Mise en ordre alphabetique
orderList(recipes);
// console.log(recipes)
console.log(recipes);
//Fonction de création des cards
function createCardList(recipesList) {
  //Tableau de chaques RECETTES" (recipesList)
  recipesList.forEach((recipe) => {
    //Destructuring des recette
    const {
      appliance,
      description,
      id,
      name,
      ingredients,
      serving,
      time,
      ustensiles,
    } = recipe;

    //Récupération du tabelau des ingredients
    const recipeIngredients = recipe.ingredients;

    //Création du container de la card
    const listContainer = document.createElement("div");
    listContainer.setAttribute("id", recipe.id);
    listContainer.setAttribute("class", "col recipe-card");
    //Fonction createIngredientList

    const cardListIngredient = `${recipeIngredients
      .map(
        (item) => `<li>${item.ingredient} ${item.quantity} ${item.unit}</li>`
      )
      .join("")
      .replace("undefined", "")}`;

    //Création du HTML de la card
    const cardsHTML = `
            <div id="${id}" class="card card-body-container">
            <img src="https://picsum.photos/380/178" class="card-img-top" alt="Recipe image">
            <div class="card-body">
            <div class="card-hdr d-flex justify-content-between align-items-center">
                <h5 class="card-title my-auto">${name}</h5>
                <img src="img/clock.svg" class="card-clock my-auto" alt="Clock">
                <p class="card-time fw-bold my-auto">${time} min</p>
            </div>
            <div class="card-main d-flex justify-content-between mt-3">
                <ul> ${cardListIngredient}</ul>
                <p class="card-recipe col-6">${description}</p>
            </div>
            </div>
            </div>
        `;

    listContainer.innerHTML = cardsHTML;
    cardsGallery.appendChild(listContainer);
  });
}
// Creation de la liste des cartes
createCardList(recipes);
