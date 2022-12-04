//TODO recherche via input dropdown
//TODO Modifier le css des listes des dropdowns

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
  let allIngredientsListWithDupliquate = [];
  let uniqueIngerdientsList = [];
  let allAppareilsListWithDupliquate = [];
  let uniqueAppareilsList = [];
  let allUstensilesListWithDupliquate = [];
  let uniqueUstensilesList = [];
  let midChoiceArray = [];
  let finalIngredientList = [];

  //Mise à zéro de la liste des choix
  ingredientsListContainer.innerHTML = "";
  appareilsListContainer.innerHTML = "";
  ustensilsListContainer.innerHTML = "";

  //Récupération des cartes affichées (avec leur ID)
  array.filter((recipe) => recipe.id === displayedCardsID.id);

  //Dans les cartes affichées on recherche leurs ingredients
  // ET on affiche la liste des INGREDIENTS dans le dropdown
  array.forEach((recipe) => {
    let allDisplayedIngredients = recipe.ingredients;
    //Liste de tous les ingrédients
    allDisplayedIngredients.forEach((array) =>
      allIngredientsListWithDupliquate.push(array.ingredient.toLowerCase())
    );
  });
  //Tableau des ingredients avec doublon
  // console.log(allIngredientsListWithDupliquate);
  //Tableau des ingrédients sans doublons
  uniqueIngerdientsList = new Set(allIngredientsListWithDupliquate);
  //!On récupère le tableau des choix, on le compare a la liste, si = supprimer
  let allActualSelectedChoices = document.querySelectorAll(".selected-choice");
  let allActualSelectedChoicesValue = [];

  allActualSelectedChoices.forEach((choice) =>
    allActualSelectedChoicesValue.push(choice.textContent)
  );
  console.log(allActualSelectedChoicesValue); // Liste des choix deja selectionné
  if (allActualSelectedChoices.length !== 0) {
    console.log(uniqueIngerdientsList); // Set des choix unique
    for (let i = 0; i < uniqueIngerdientsList.length; i++) {
      console.log(i);
    }
    //Liste des CHOIX OK
    //TODO TERMINER LA BOUCLE
  } else {
    console.log("Auncun choix sélectionné");
  }

  //Création de la liste sans doublons
  uniqueIngerdientsList.forEach((ingredientInList) => {
    // console.log(displayedIngredient);
    const displayedIngredientsItem = document.createElement("li");
    displayedIngredientsItem.setAttribute(
      "class",
      "dropdown-list-item ingredients-item text-nowrap"
    );
    displayedIngredientsItem.textContent = ingredientInList;
    ingredientsListContainer.appendChild(displayedIngredientsItem);
  });

  // ET on affiche la liste des APPAREILS dans le dropdown
  array.forEach((recipe) => {
    let allDisplayedAppareils = recipe.appliance;
    //Liste de tous les APPAREILS
    allAppareilsListWithDupliquate.push(allDisplayedAppareils.toLowerCase());
  });
  // console.log(allAppareilsListWithDupliquate); //Liste des appareils en minuscule
  //Création de la liste sans doublons
  uniqueAppareilsList = new Set(allAppareilsListWithDupliquate);
  uniqueAppareilsList.forEach((displayedAppareils) => {
    const displayedAppareilsItem = document.createElement("li");
    displayedAppareilsItem.setAttribute(
      "class",
      "dropdown-list-item appareils-item text-nowrap"
    );
    displayedAppareilsItem.textContent = displayedAppareils;
    appareilsListContainer.appendChild(displayedAppareilsItem);
  });

  // ET on affiche la liste des USTENSILES dans le dropdown

  array.forEach((recipe) => {
    const allDisplayedUstensiles = recipe.ustensils;
    // console.log(allDisplayedUstensiles);
    allDisplayedUstensiles.forEach((ustensil) =>
      allUstensilesListWithDupliquate.push(ustensil.toLowerCase())
    );
  });
  //Liste des ustensiles avec doublons
  // console.log(allUstensilesListWithDupliquate);
  uniqueUstensilesList = new Set(allUstensilesListWithDupliquate);
  uniqueUstensilesList.forEach((displayedUstensiles) => {
    const displayedUstensilesItem = document.createElement("li");
    displayedUstensilesItem.setAttribute(
      "class",
      "dropdown-list-item ustensiles-item text-nowrap"
    );
    displayedUstensilesItem.textContent = displayedUstensiles;
    ustensilsListContainer.appendChild(displayedUstensilesItem);
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

  allChoiceList.forEach((choice) =>
    choice.addEventListener("click", (e) => {
      const ingredientsListContainer = document.querySelector(
        "#ingredients-dropdown-menu"
      );
      const appareilsListContainer = document.querySelector(
        "#ingredients-dropdown-menu"
      );
      const ustensilesListContainer = document.querySelector(
        "#ingredients-dropdown-menu"
      );
      const ingredientChoiceContainer = document.querySelector(
        "#ingredients-choices-container"
      );
      const appareilsChoiceContainer = document.querySelector(
        "#appareils-choices-container"
      );
      const ustensilesChoiceContainer = document.querySelector(
        "#ustensiles-choices-container"
      );
      if (e.target.className.includes("ingredients")) {
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

        // console.log("===Cat INGREDIENT===");
        // console.log(textContent.toLowerCase()); //Choix en minuscule
        newArray = actualDisplayedCards.filter((recipe) =>
          recipe.ingredients.some((item) =>
            item.ingredient
              .toLowerCase()
              .includes(e.target.textContent.toLowerCase())
          )
        );

        //TODO ICI SUPPRESSION DU CHOIX DE LA LISTE

        //Création des cards
        cardsGallery.innerHTML = "";
        display(newArray);
      } else if (e.target.className.includes("appareils")) {
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
        console.log(e.target.textContent.toLowerCase()); //Choix en minuscule
        newArray = actualDisplayedCards.filter((recipe) =>
          recipe.appliance
            .toLowerCase()
            .includes(e.target.textContent.toLowerCase())
        );
        //Création des cards
        cardsGallery.innerHTML = "";
        display(newArray);
      } else if (e.target.className.includes("ustensiles")) {
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
        console.log(e.target.textContent.toLowerCase()); //Choix en minuscule
        newArray = actualDisplayedCards.filter((recipe) =>
          recipe.ustensils.some((item) =>
            item.toLowerCase().includes(e.target.textContent.toLowerCase())
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
  const clickedChoices = document.querySelectorAll(
    ".selected-choices-container"
  );
  let actualDisplayedCardsGallery = [];
  let actualDisplayedCardsGalleryDOM = document.querySelectorAll(".card");
  let actualDisplayedCardsIds = []; //! ID attribué à chaque recette (pas l'emplacement dans le tableau)
  let deletedChoiceArray = [];
  let arrayToDisplay = [];
  //Tableau des cartes affichées au moment du clic
  //On récupère l'id des cartes affichées et on push les recettes correspondantes dans le tableau actualDisplayedCards
  // On transforme string en number
  actualDisplayedCardsGalleryDOM.forEach((recipe) =>
    actualDisplayedCardsIds.push(parseInt(recipe.getAttribute("id")))
  );
  //Tableau des recettes présentes
  //On récupère le tableau qui correspond aux recettes présentes
  for (let id of actualDisplayedCardsIds) {
    for (let recipe of recipes) {
      if (recipe.id === id) {
        actualDisplayedCardsGallery.push(recipe);
      }
    }
  }
  // // * Suppression du HASHTAG
  clickedChoices.forEach((clickedChoice) =>
    clickedChoice.addEventListener("click", (e) => {
      e.currentTarget.remove(this);
      //Tableau des cartes affichées au moment du clic
      //On récupère l'id des cartes affichées et on push les recettes correspondantes dans le tableau actualDisplayedCards
      // On transforme string en number
      //Récupération de tous les choix
      const tousLesChoixRestant = document.querySelectorAll(".selected-choice");
      //On récupère la liste des choix restants
      console.log(tousLesChoixRestant);

      if (tousLesChoixRestant.length === 0) {
        searchBarreFilter();
      } else {
        tousLesChoixRestant.forEach((choice) => {
          // listeDesChoixRestant.push(choice.innerText.toLowerCase())
          // console.log(choice.innerText)
          // console.log(choice.parentElement.className);
          if (choice.parentElement.className.includes("ingredients")) {
            console.log("INGREDIENT");
            deletedChoiceArray = recipes.filter((recipe) =>
              recipe.ingredients.some((item) =>
                item.ingredient
                  .toLowerCase()
                  .includes(choice.innerText.toLowerCase())
              )
            );
            arrayToDisplay =
              actualDisplayedCardsGallery.concat(deletedChoiceArray);
            cardsGallery.innerHTML = "";
            display(arrayToDisplay);
          } else if (choice.parentElement.className.includes("appareils")) {
            console.log("APPAREILS");
            deletedChoiceArray = recipes.filter((recipe) =>
              recipe.appliance
                .toLowerCase()
                .includes(choice.innerText.toLowerCase())
            );
            arrayToDisplay =
              actualDisplayedCardsGallery.concat(deletedChoiceArray);
            cardsGallery.innerHTML = "";
            display(arrayToDisplay);
          } else if (choice.parentElement.className.includes("ustensiles")) {
            console.log("USTENSILES");
            deletedChoiceArray = recipes.filter((recipe) =>
              recipe.ustensils.some((item) =>
                item.toLowerCase().includes(choice.innerText.toLowerCase())
              )
            );
            arrayToDisplay =
              actualDisplayedCardsGallery.concat(deletedChoiceArray);
            cardsGallery.innerHTML = "";
            display(arrayToDisplay);
          }
        });
      }
    })
  );
}
