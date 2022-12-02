//All const
const gridContainer = document.querySelector("#recipes-gallery");
displayData(recipes);
//Récupération des données et affichage des cartes
function displayData(data) {
  //Mise dans l'ordre alphabétique

  //Tableau de chaques RECETTES" (recipesList)

  //Destructuring des recette
  const { description, id, name, time } = data;

  //Récupération du tableau des ingredients
  const recipeIngredients = data.ingredients;

  //Création du container de la card
  const listContainer = document.createElement("div");
  listContainer.setAttribute("id", data.id);
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
}
