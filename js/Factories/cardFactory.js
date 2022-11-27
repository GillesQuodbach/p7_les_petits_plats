let filteredArr = [];
let testArr = [];
let testIngredients = [];
let testAppareils = [];
let testUstensils = [];

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
const orderedRecipes = orderList(recipes);
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
                <ul class="col-6 list-group rounded-0"> ${cardListIngredient}</ul>
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
createCardList(orderedRecipes);
console.log(orderedRecipes);

//Fonction de recherche
searchInput.addEventListener("input", filterData);

function filterData(e) {
  let filteredIngredientsArr2 = [];
  //Remise a zéro de la gallery
  cardsGallery.innerHTML = "";
  //Récupération de l'input de l'utilisateur à chaque lettre tapée
  const searchedString = e.target.value.toLowerCase();
  //Si plus de 2 lettres entrées alors on lance la recherche
  if (searchedString.length > 2) {
    // Recherche dans DESCRITPION - NOM - INGREDIENT
    let filteredIngredientsArr1 = recipes.filter(
      (recipe) =>
        // Work well
        recipe.name.toLowerCase().includes(searchedString) ||
        // Work well
        recipe.description.toLowerCase().includes(searchedString) ||
        // Find what I'm looking for but don't push it in the filteredArr
        recipe.ingredients.forEach((item) => {
          if (item.ingredient.toLowerCase().includes(searchedString)) {
            filteredIngredientsArr2.push(recipe);
          }
        })
    );
    filteredArr = filteredIngredientsArr1.concat(filteredIngredientsArr2);
    console.log(filteredArr);
    createCardList(filteredArr);
  } else {
    createCardList(orderedRecipes);
  }
}

//*
// ! Filtrage par hashtag ==================================
//*
window.onload = () => {
  // Une fois la page complètement chargée

  // *
  // ?  Choix des ingredients
  //*
  //Récupération de la liste des ingredients
  const allIngredientsChoices = document.querySelectorAll(".ingredients-item");

  //On récupère la liste de tout les ingredients
  allIngredientsChoices.forEach((choice) => {
    //Pour chaque choix, au clic...
    choice.addEventListener("click", function filterIngr(e) {
      const choicedIngredient = e.target.innerText; // On récupère le text de l'ingrédient choisi
      console.log(choicedIngredient);
      console.log(choicedIngredient.toLowerCase());
      recipes.forEach((recipe) => {
        recipe.ingredients.forEach((item) => {
          if (
            item.ingredient
              .toLowerCase()
              .includes(choicedIngredient.toLowerCase())
          ) {
            testIngredients.push(recipe);
          }
        });
      });
      console.log("=====DISPLAY OK======");
      cardsGallery.innerHTML = "";
      createCardList(testIngredients);
    });
  });

  // *
  // ? Choix des appareils
  //*
  //Récupération de la liste des appareils
  const allAppareilsChoices = document.querySelectorAll(".appareils-item");

  //On récupère la liste de tout les appareils
  allAppareilsChoices.forEach((choice) => {
    //Pour chaque choix, au clic...
    choice.addEventListener("click", function filterAppareils(e) {
      const choicedAppareils = e.target.innerText; // On récupère le text de l'appareil choisi
      console.log(choicedAppareils);
      console.log(choicedAppareils.toLowerCase());
      recipes.forEach((recipe) => {
        if (
          recipe.appliance
            .toLowerCase()
            .includes(choicedAppareils.toLowerCase())
        ) {
          testAppareils.push(recipe);
        }
      });
      console.log("=====DISPLAY OK======");
      cardsGallery.innerHTML = "";
      createCardList(testAppareils);
    });
  });

  // *
  // ?  Choix des ustensiles
  //*
  //Récupération de la liste des ingredients
  const allUstensilsChoices = document.querySelectorAll(".ustensiles-item");

  //On récupère la liste de tout les ingredients
  allUstensilsChoices.forEach((choice) => {
    //Pour chaque choix, au clic...
    choice.addEventListener("click", function filterUstensils(e) {
      const choicedUstensils = e.target.innerText; // On récupère le text de l'ingrédient choisi
      console.log(choicedUstensils);
      console.log(choicedUstensils.toLowerCase());
      recipes.forEach((recipe) => {
        recipe.ustensils.forEach((item) => {
          if (item.toLowerCase().includes(choicedUstensils.toLowerCase())) {
            testUstensils.push(recipe);
          }
        });
      });
      console.log("=====DISPLAY OK======");
      cardsGallery.innerHTML = "";
      createCardList(testUstensils);
    });
  });

  // Suppression des choices
  // Sélection des boutons (choix)
  const selectedChoice = document.querySelectorAll(".selected-choice");
};
