let filteredArray = [];
let testIngredients = [];
let testAppareils = [];
let testUstensils = [];

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
const orderedRecipes = orderList(recipes);

//Fonction de création des cards
function createCardList(recipesList) {
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
// Creation de la liste des cartes
createCardList(orderedRecipes);

//Fonction de recherche
searchInput.addEventListener("input", filterData);

function filterData(e) {
  //Remise a zéro de la gallery
  cardsGallery.innerHTML = "";
  //Récupération de l'input de l'utilisateur à chaque lettre tapée
  const searchedString = e.target.value.toLowerCase();
  //Si plus de 2 lettres entrées alors on lance la recherche
  if (searchedString.length === 0 && filteredArray.length === 0) {
    cardsGallery.innerHTML = "";
    filteredArray = [];
    createCardList(orderedRecipes);
    console.log("= 0 && === 0");
  }
  if (searchedString.length === 0 && filteredArray.length !== 0) {
    cardsGallery.innerHTML = "";
    filteredArray = [];
    createCardList(orderedRecipes);
    console.log("= 0 && !== 0");
  }
  if (searchedString.length <= 2 && filteredArray.length === 0) {
    cardsGallery.innerHTML = "";
    filteredArray = [];
    createCardList(orderedRecipes);
    console.log("<= 2 && === 0");
  }
  if (searchedString.length <= 2 && filteredArray.length !== 0) {
    cardsGallery.innerHTML = "";
    createCardList(orderedRecipes);
    console.log("<= 2 && !== 0");
  }
  if (searchedString.length > 2) {
    // Recherche dans DESCRITPION - NOM - INGREDIENT
    if (filteredArray.length > 0) {
      console.log(" > 2 ===ARRAY > 0 ===== ");
      filteredArray.filter(
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
    } else {
      console.log(" > 2 ===ARRAY = 0 ===== ");
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
    }
    createCardList(filteredArray);
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
      if (filteredArray > 0) {
        console.log(" ===ARRAY > 0 ===== ");
        filteredArray.filter((recipe) =>
          recipe.ingredients.some((item) =>
            item.ingredient
              .toLowerCase()
              .includes(choicedIngredient.toLowerCase())
          )
        );
      } else {
        console.log(" ===ARRAY = 0 ===== ");
        filteredArray.filter((recipe) =>
          recipe.ingredients.some((item) =>
            item.ingredient
              .toLowerCase()
              .includes(choicedIngredient.toLowerCase())
          )
        );
      }
      cardsGallery.innerHTML = "";
      createCardList(filteredArray);
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
      // console.log(choicedAppareils);
      // console.log(choicedAppareils.toLowerCase());
      recipes.forEach((recipe) => {
        if (
          recipe.appliance
            .toLowerCase()
            .includes(choicedAppareils.toLowerCase())
        ) {
          testAppareils.push(recipe);
        }
      });
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
      // console.log(choicedUstensils);
      // console.log(choicedUstensils.toLowerCase());
      recipes.forEach((recipe) => {
        recipe.ustensils.forEach((item) => {
          if (item.toLowerCase().includes(choicedUstensils.toLowerCase())) {
            testUstensils.push(recipe);
          }
        });
      });
      cardsGallery.innerHTML = "";
      createCardList(testUstensils);
    });
  });
};
