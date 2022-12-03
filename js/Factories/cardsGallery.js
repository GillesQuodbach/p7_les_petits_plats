//TODO recherche via input dropdown
//TODO supprimer les doublons des listes de choix
//TODO Suppression des choix
//TODO Modifier le css des listes des dropdowns
//TODO Supprimer le choix sélectionné de la liste des choix

let filteredArray = [];

// Container de la galerie
const cardsGallery = document.querySelector("#recipes-gallery");
// Input de recherche
const searchInput = document.querySelector("#main-search-input");
// Liste des cards affichées
const displayedCardsID = document.querySelectorAll(".card");
//Liste des ingredients
const ingredientsListContainer = document.querySelector(
  "#ingredients-dropdown-menu"
);
//Liste des appareils
const appareilsListContainer = document.querySelector(
  "#appareils-dropdown-menu"
);
//Liste des ustensiles
const ustensilsListContainer = document.querySelector(
  "#ustensiles-dropdown-menu"
);
// ! Fonction d'affichage des cartes
function display(data) {
  //Tri par ordre alphabétique
  orderList(data);
  // Creation de la liste des cartes "DE BASE" dans la galerie
  createCardList(data);
  getChoiceList(data);
  addChoiceButton(data);
  deleteChoiceButton(data);
}
// ? Affichage de la galerie de cartes
display(recipes);

// ! Fonction mise en ordre alphabétique
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

// ! Fonction de création des cards
function createCardList(array) {
  //Tableau de chaque RECETTES" (recipesList)
  array.forEach((recipe) => {
    //Destructuring des recette
    const { description, id, name, time, ingredients } = recipe;
    //Récupération du tableau des ingredients
    const recipeIngredients = recipe.ingredients;
    //Création du container de la card
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("id", recipe.id);
    cardContainer.setAttribute("class", "col recipe-card");
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
    cardContainer.innerHTML = `
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

    cardsGallery.appendChild(cardContainer);
  });
}

//Input listener
searchInput.addEventListener("input", searchBarreFilter);

// ! Fonction de filtrage
function searchBarreFilter() {
  //Récupération de l'input de l'utilisateur à chaque lettre tapée
  const searchBarreInput = searchInput.value.toLowerCase();
  //Remise a zéro de la gallery
  cardsGallery.innerHTML = "";
  // Si plus de 2 lettres entrées alors on lance la recherche
  if (searchBarreInput.length <= 2) {
    cardsGallery.innerHTML = "";
    display(recipes);
  }
  if (searchBarreInput.length > 2) {
    // Recherche dans DESCRIPTION - NOM - INGREDIENT
    filteredArray = recipes.filter(
      (recipe) =>
        // Work well
        recipe.name.toLowerCase().includes(searchBarreInput) ||
        // Work well
        recipe.description.toLowerCase().includes(searchBarreInput) ||
        // Find what I'm looking for but don't push it in the filteredArr
        recipe.ingredients.some((item) =>
          item.ingredient.toLowerCase().includes(searchBarreInput)
        )
    );
    //Création des cards
    display(filteredArray);
  }
}

//Mise à jour de la liste des ingrédients
function getChoiceList(array) {
  //Mise à zéro de la liste des choix
  ingredientsListContainer.innerHTML = "";
  appareilsListContainer.innerHTML = "";
  ustensilsListContainer.innerHTML = "";
  //Récupération des cartes affichées (avec leur ID)
  array.filter((recipe) => recipe.id === displayedCardsID.id);
  //Dans les cartes affichées ont recherche leurs ingredients
  // ET on affiche la liste des INGREDIENTS dans le dropdown
  array.forEach((displayedIngredients) => {
    const displayedIngredientsCategory = displayedIngredients.ingredients;
    displayedIngredientsCategory.forEach((displayedIngredient) => {
      const displayedIngredientsItem = document.createElement("li");
      displayedIngredientsItem.setAttribute(
        "class",
        "dropdown-list-item ingredients-item text-nowrap"
      );
      displayedIngredientsItem.textContent = displayedIngredient.ingredient;
      ingredientsListContainer.appendChild(displayedIngredientsItem);
    });
  });
  // ET on affiche la liste des APPAREILS dans le dropdown
  array.forEach((displayedAppareils) => {
    const displayedAppareilsItem = document.createElement("li");
    displayedAppareilsItem.setAttribute(
      "class",
      "dropdown-list-item appareils-item text-nowrap"
    );
    displayedAppareilsItem.textContent = displayedAppareils.appliance;
    appareilsListContainer.appendChild(displayedAppareilsItem);
  });
  // ET on affiche la liste des USTENSILES dans le dropdown
  array.forEach((displayedUstensiles) => {
    const displayedUstensilesCategory = displayedUstensiles.ustensils;
    displayedUstensilesCategory.forEach((displayedUstensiles) => {
      const displayedUstensilesItem = document.createElement("li");
      displayedUstensilesItem.setAttribute(
        "class",
        "dropdown-list-item ustensiles-item text-nowrap"
      );
      displayedUstensilesItem.textContent = displayedUstensiles;
      ustensilsListContainer.appendChild(displayedUstensilesItem);
    });
  });
}

//Listener de la liste des choix
function addChoiceButton(array) {
  //tableau des cards actuellement affichées
  let actualDisplayedCards = [];
  let newArray = [];
  let allChoiceList = document.querySelectorAll(".dropdown-list-item");
  let actualGallery = document.querySelectorAll(".card");
  let actualRecipeId = []; //! ID attribué à chaque recette (pas l'emplacement dans le tableau)

  //Tableau des cartes affichées au moment du clic
  //On récupère l'id des cartes affichées et on push les recettes correspondantes dans le tableau actualDisplayedCards
  // On transforme string en number
  actualGallery.forEach((recipe) =>
    actualRecipeId.push(parseInt(recipe.getAttribute("id")))
  );
  console.log(actualRecipeId); // TABLEAU OK
  //Tableau des recettes présentes
  //On récupère le tableau qui correspond aux recettes présentes
  for (let id of actualRecipeId) {
    for (let recipe of recipes) {
      if (recipe.id === id) {
        actualDisplayedCards.push(recipe);
      }
    }
  }
  //Tableau contenant les recettes actuelles
  console.log(actualDisplayedCards);
  //On récupère le choix cliqué
  // Pour chaque choix cliqué
  allChoiceList.forEach((choice) =>
    choice.addEventListener("click", (e) => {
      const ingredientChoiceContainer = document.querySelector(
        "#ingredients-choices-container"
      );
      const appareilsChoiceContainer = document.querySelector(
        "#appareils-choices-container"
      );
      const ustensilesChoiceContainer = document.querySelector(
        "#ustensiles-choices-container"
      );
      let textContent = e.target.textContent;
      let parentCategoryId = e.target.parentElement.id;

      if (parentCategoryId.includes("ingredients")) {
        //Création du bouton de l'item choisi
        const selectedItemContainer = document.createElement("div");
        selectedItemContainer.setAttribute(
          "class",
          "selected-choices-container ingredients-selected-choices-container"
        );
        //Affichage de l'ingrédient choisi

        const selectedItem = document.createElement("p");
        selectedItem.setAttribute("class", "selected-choice");
        selectedItem.textContent = e.target.textContent;
        const selectedItemCross = document.createElement("img");
        selectedItemCross.setAttribute("class", "selected-choice-cross");
        selectedItemCross.setAttribute("src", "img/choice-delete-cross.svg");
        selectedItemCross.setAttribute("alt", "delete your choice");
        ingredientChoiceContainer.prepend(selectedItemContainer);
        selectedItemContainer.appendChild(selectedItem);
        selectedItem.appendChild(selectedItemCross);

        console.log("===Cat INGREDIENT===");
        console.log(textContent.toLowerCase()); //Choix en minuscule
        newArray = actualDisplayedCards.filter((recipe) =>
          recipe.ingredients.some((item) =>
            item.ingredient.toLowerCase().includes(textContent.toLowerCase())
          )
        );
        //Création des cards
        cardsGallery.innerHTML = "";
        display(newArray);
      } else if (parentCategoryId.includes("appareils")) {
        //Création du bouton de l'item choisi
        const selectedItemContainer = document.createElement("div");
        selectedItemContainer.setAttribute(
          "class",
          "selected-choices-container appareils-selected-choices-container"
        );
        //Affichage de l'ingrédient choisi
        const selectedItem = document.createElement("p");
        selectedItem.setAttribute("class", "selected-choice");
        selectedItem.textContent = e.target.textContent;
        const selectedItemCross = document.createElement("img");
        selectedItemCross.setAttribute("class", "selected-choice-cross");
        selectedItemCross.setAttribute("src", "img/choice-delete-cross.svg");
        selectedItemCross.setAttribute("alt", "delete your choice");
        appareilsChoiceContainer.prepend(selectedItemContainer);
        selectedItemContainer.appendChild(selectedItem);
        selectedItem.appendChild(selectedItemCross);

        console.log("===Cat APPAREILS===");
        console.log(textContent.toLowerCase()); //Choix en minuscule
        newArray = actualDisplayedCards.filter((recipe) =>
          recipe.appliance.toLowerCase().includes(textContent.toLowerCase())
        );
        //Création des cards
        cardsGallery.innerHTML = "";
        display(newArray);
      } else if (parentCategoryId.includes("ustensiles")) {
        //Création du bouton de l'item choisi
        const selectedItemContainer = document.createElement("div");
        selectedItemContainer.setAttribute(
          "class",
          "selected-choices-container ustensiles-selected-choices-container"
        );
        //Affichage de l'ingrédient choisi
        const selectedItem = document.createElement("p");
        selectedItem.setAttribute("class", "selected-choice");
        selectedItem.textContent = e.target.textContent;
        const selectedItemCross = document.createElement("img");
        selectedItemCross.setAttribute("class", "selected-choice-cross");
        selectedItemCross.setAttribute("src", "img/choice-delete-cross.svg");
        selectedItemCross.setAttribute("alt", "delete your choice");
        ustensilesChoiceContainer.prepend(selectedItemContainer);
        selectedItemContainer.appendChild(selectedItem);
        selectedItem.appendChild(selectedItemCross);
        console.log("===Cat USTENSILES===");
        console.log(textContent.toLowerCase()); //Choix en minuscule
        newArray = actualDisplayedCards.filter((recipe) =>
          recipe.ustensils.some((item) =>
            item.toLowerCase().includes(textContent.toLowerCase())
          )
        );
        //Création des cards
        cardsGallery.innerHTML = "";
        display(newArray);
      }
    })
  );
}
function deleteChoiceButton(array) {
  //Choix affichés
  const clickedChoices = document.querySelectorAll(
    ".selected-choices-container"
  );

  let actualDisplayedCards = [];
  let newArray = [];
  let deletedRecipesArray = [];
  let allChoiceList = document.querySelectorAll(".dropdown-list-item");
  let actualGallery = document.querySelectorAll(".card");
  let actualRecipeId = []; //! ID attribué à chaque recette (pas l'emplacement dans le tableau)
  let concatArray = [];

  //Tableau des cartes affichées au moment du clic
  //On récupère l'id des cartes affichées et on push les recettes correspondantes dans le tableau actualDisplayedCards
  // On transforme string en number
  actualGallery.forEach((recipe) =>
    actualRecipeId.push(parseInt(recipe.getAttribute("id")))
  );
  // console.log(actualRecipeId); // TABLEAU OK
  //Tableau des recettes présentes
  //On récupère le tableau qui correspond aux recettes présentes
  for (let id of actualRecipeId) {
    for (let recipe of recipes) {
      if (recipe.id === id) {
        actualDisplayedCards.push(recipe);
      }
    }
  }
  //Tableau contenant les recettes actuelles
  // console.log(actualDisplayedCards);
  //On récupère le choix cliqué
  // Pour chaque choix cliqué

  // // * Suppression du HASHTAG
  clickedChoices.forEach((clickedChoice) =>
    clickedChoice.addEventListener("click", (e) => {
      e.currentTarget.remove(this);
      console.log(e.currentTarget.innerText.toLowerCase()); // Récupération du text
      const deletedChoice = e.currentTarget.innerText.toLowerCase(); // Récupération du text
      console.log(e.currentTarget);
      //Tableau des cartes affichées au moment du clic
      //On récupère l'id des cartes affichées et on push les recettes correspondantes dans le tableau actualDisplayedCards
      // On transforme string en number

      //Partir INGREDIENTS
      if (e.currentTarget.className.includes("ingredient")) {
        console.log("===DELETE INGREDIENT===");

        // Récupérer tableau qui n'inclus pas le mot supprimé et concatainer le tableau a newArray
        deletedRecipesArray = actualDisplayedCards.filter((recipe) =>
          recipe.ingredients.some(
            (item) => !item.ingredient.toLowerCase().includes(deletedChoice)
          )
        );
        console.log(deletedRecipesArray);

        //Création des cards
        cardsGallery.innerHTML = "";
        display(deletedRecipesArray);
      } else if (e.currentTarget.className.includes("appareils")) {
        console.log("===DELETE APPAREILS===");
      } else if (e.currentTarget.className.includes("ustensiles")) {
        console.log("===DELETE USTENSILES===");
      }
    })
  );
}
