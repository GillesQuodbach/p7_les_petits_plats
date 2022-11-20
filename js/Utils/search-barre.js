//Gallery
const searchResult = document.querySelector("#recipes-gallery");

//Liste des recettes
// Ordonnancement de la liste des recettes
let orderedRecipesArray = orderList(recipes);

function orderList(data) {
  const orderedData = data.sort((a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    return 0;
  });
  return orderedData;
}

orderList(recipes);
console.log(orderedRecipesArray);
//Affichage des cards
function createRecipesList(recipesList) {
  recipesList.forEach((recipe) => {
    const {
      appliance,
      description,
      id,
      ingredients,
      name,
      serving,
      time,
      ustensils,
    } = recipe;
    const card = document.createElement("div");
    card.setAttribute("id", id);
    card.setAttribute("class", "col recipe-card");

    //Création de la card
    card.innerHTML = `
      <div id="1" class="col recipe-card">
        <div id="1" class="card card-body-container">
        <img src="https://picsum.photos/380/178" class="card-img-top" alt="Recipe image">
        <div class="card-body">
        <div class="card-hdr d-flex justify-content-between align-items-center">
        <h5 class="card-title my-auto">${name}</h5><img src="/img/clock.svg" class="card-clock my-auto" alt="Clock">
        <p class="card-time fw-bold my-auto">${recipe.time} min</p>
        </div>
        <div class="card-main d-flex justify-content-between mt-3">
          <ul id="list" class="col-6 list-group rounded-0">
          <!-- ! LISTE DES INGREDIENTS ICI-->
          </ul>
        <p class="card-recipe col-6">${recipe.description}</p>
        </div>
      </div>
      </div>
      </div>
    `;
    //Création de la liste des ingredients
    ingredients.forEach((item) => {
      const ingredientList = document.querySelector("#list");
      const { ingredient = "", quantity = "", unit = "" } = item;
      const ingredientItem = document.createElement("li");
      ingredientItem.setAttribute("class", "list-group-item");

      ingredientItem.innerHTML = `
      <li class="list-group-item"><b>${ingredient}:</b> ${quantity} ${unit}</li>
      `;
      ingredientList.appendChild(ingredientItem);
    });
    searchResult.appendChild(card);
  });
}

createRecipesList(orderedRecipesArray);

//Tri des rcettes
