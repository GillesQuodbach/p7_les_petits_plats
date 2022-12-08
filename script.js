//Constante
const galleryContainer = document.querySelector("#recipes-gallery");
const searchInput = document.querySelector("#main-search-input");
const ingredientChoiceContainer = document.querySelector("#ingredients-choices-container");
const appareilsChoiceContainer = document.querySelector("#appareils-choices-container");
const ustensilesChoiceContainer = document.querySelector("#ustensiles-choices-container");
const ingredientsList = document.querySelector('#ingredients-dropdown-menu')
const appareilsList = document.querySelector('#ingredients-dropdown-menu')
const ustensilesList = document.querySelector('#ingredients-dropdown-menu')
//Liste des ingredients
const ingredientsListContainer = document.querySelector("#ingredients-dropdown-menu")
const appareilsListContainer = document.querySelector("#appareils-dropdown-menu")
const ustensilesListContainer = document.querySelector("#ustensiles-dropdown-menu")
// Liste des choix déjà sélectionnée
const ingredientsSelected = [];
const appareilsSelected = [];
const ustensilesSelected = [];
const allIngredientsListWithDupliquate = [];
const allAppareilsListWithDupliquate = [];
const allUstensilesListWithDupliquate = [];
//FONCTION FILTRAGE BARRE PRINCIPALE
//Récupérer les recettes
console.log(recipes)
//Mise en ordre alphabétique de la gallery
function orderGallery(data) {
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
//Création des cards
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

    galleryContainer.appendChild(cardContainer);
  });
}
//Affichage des choix
function createdChoiceList(array) {

  //Mise à zéro de la liste des choix
  ingredientsListContainer.innerHTML = "";
  appareilsListContainer.innerHTML = "";
  ustensilesListContainer.innerHTML = "";
  //Récupère le tableau des choix, on le compare a la liste, si = supprimer
  const allActualSelectedChoices = document.querySelectorAll(".selected-choice");
  allActualSelectedChoices.forEach((choice) => {
    if (choice.parentElement.className.includes("ingredients")) {
      ingredientsSelected.push(choice.innerText.toLowerCase());
    } else if (choice.parentElement.className.includes("appareils")) {
      appareilsSelected.push(choice.innerText.toLowerCase());
    } else if (choice.parentElement.className.includes("ustensiles")) {
      ustensilesSelected.push(choice.innerText.toLowerCase());
    }
  });
  //Récupération des cartes affichées (avec leur ID)
  const displayedCardsID = document.querySelectorAll(".card");
  array.filter((recipe) => recipe.id === displayedCardsID.id);
  //Dans les cartes affichées on recherche leurs ingredients
  // On récupère tous les ingredients des recettes affichées
  array.forEach((recipe) => {
    let allDisplayedIngredients = recipe.ingredients;
    //Liste de tous les ingrédients
    allDisplayedIngredients.forEach(
      (array) =>
        allIngredientsListWithDupliquate.push(array.ingredient.toLowerCase()) // Tous les ingredients av doublons
    );
  }); // On récupère tous les appareils des recettes affichées
  array.forEach((recipe) => {
    let allDisplayedAppareils = recipe.appliance.toLowerCase();
    allAppareilsListWithDupliquate.push(allDisplayedAppareils);
    // Liste de tous les ingrédients
  });
  // On récupère tous les appareils des recettes affichées
  let allDisplayedUstensiles = []
  array.forEach((recipe) => {
    allDisplayedUstensiles = recipe.ustensils;
    allDisplayedUstensiles.forEach(ustensiles =>
      allUstensilesListWithDupliquate.push(ustensiles.toLowerCase()));
    // Liste de tous les ingrédients
  });
  //Gestion des choix si choix effectué
  //PARTIE INGREDIENT
  if (ingredientsSelected.length !==0) {
    let finalIngredientList =
      allIngredientsListWithDupliquate.concat(ingredientsSelected); // On concact les deux tableaux
    // console.log(finalIngredientList); // Tous les choix
    ingredientsListToDisplay = finalIngredientList.filter((value, index) => {
      return (
        finalIngredientList.indexOf(value) ===
        finalIngredientList.lastIndexOf(value)
      ); // On compare les deux tableau tableau est on garde les valeurs uniques
    });} else {
    ingredientsListToDisplay = Array.from (new Set(allIngredientsListWithDupliquate))
  }
  orderChoices(ingredientsListToDisplay)


  ingredientsListToDisplay.forEach((ingredientInList) => {
    const displayedIngredientsItem = document.createElement("li");
    displayedIngredientsItem.setAttribute(
      "class",
      "dropdown-list-item ingredients-item text-nowrap"
    );
    displayedIngredientsItem.textContent = ingredientInList;
    ingredientsListContainer.appendChild(displayedIngredientsItem);
  });
  //PARTIE APPAREILS
  if (appareilsSelected.length !==0) {
    let finalAppareilsList =
      allAppareilsListWithDupliquate.concat(appareilsSelected); // On concact les deux tableaux
    appareilsListToDisplay = finalAppareilsList.filter((value, index) => {
      return (
        finalAppareilsList.indexOf(value) ===
        finalAppareilsList.lastIndexOf(value)
      ); // On compare les deux tableaux est on garde les valeurs uniques
    });
  } else {
    appareilsListToDisplay = Array.from (new Set(allAppareilsListWithDupliquate))
  }
  orderChoices(appareilsListToDisplay)
  appareilsListToDisplay.forEach((appareilInList) => {
    const displayedAppareilsItem = document.createElement("li");
    displayedAppareilsItem.setAttribute(
      "class",
      "dropdown-list-item appareils-item text-nowrap"
    );
    displayedAppareilsItem.textContent = appareilInList;
    appareilsListContainer.appendChild(displayedAppareilsItem);
  });
  //PARTIE USTENSILES
  let allUstensilesListWithDupliquateFlat =
    allUstensilesListWithDupliquate.flat(1);
  let ustensilesToLowerCase = [];
  allUstensilesListWithDupliquateFlat.forEach((ust) =>
    ustensilesToLowerCase.push(ust.toLowerCase())
  );

  if (ustensilesSelected.length !==0) {
    let finalUstensilesList = ustensilesToLowerCase.concat(ustensilesSelected); // On concact les deux tableaux
    ustensilesListToDisplay = finalUstensilesList.filter((value, index) => {
      return (
        finalUstensilesList.indexOf(value) ===
        finalUstensilesList.lastIndexOf(value)
      ); // On compare les deux tableau tableau est on garde les valeurs uniques
    });} else {
    ustensilesListToDisplay = Array.from (new Set(allUstensilesListWithDupliquate))
  }
  // Mise en ordre des choix
  orderChoices(ustensilesListToDisplay)
  ustensilesListToDisplay.forEach((ustensileInList) => {
    const displayedUstensilesItem = document.createElement("li");
    displayedUstensilesItem.setAttribute(
      "class",
      "dropdown-list-item ustensiles-item text-nowrap"
    );
    displayedUstensilesItem.textContent = ustensileInList;
    ustensilesListContainer.appendChild(displayedUstensilesItem);
  });
}
//Mise en ordre listes des choix - dans la fonction createdChoiceList
function orderChoices(array) {
  return array.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  });
}


//Tableau filtrer via la barre de recherche
let searchBarreFilteredArray = []
//Tableau des choix affichés
let ingredientsListToDisplay = []
let appareilsListToDisplay = []
let ustensilesListToDisplay = []

// * Affichage de toutes les données au chargement de la page
function displayGallery (array) {
  orderGallery(array)
  createCardList(array)
  createdChoiceList(array)
  addChoiceButton(array)
  deleteChoiceButton(array)
}
displayGallery (recipes)

// ? FILTRE BARRE DE RECHERCHE PRINCIPALE
//Input listener
searchInput.addEventListener("input", searchBarreFilter);
//Fonction de recherche BARRE principale
function searchBarreFilter() {
  //Récupération de l'input de l'utilisateur à chaque lettre tapée
  const searchBarreInput = searchInput.value.toLowerCase();
  //Remise a zéro de la gallery
  galleryContainer.innerHTML = "";
  // Si plus de 2 lettres entrées alors on lance la recherche
  if (searchBarreInput.length <= 2) {
    galleryContainer.innerHTML = "";
    displayGallery(recipes);
  }
  if (searchBarreInput.length > 2) {
    // Recherche dans DESCRIPTION - NOM - INGREDIENT
    searchBarreFilteredArray = recipes.filter(
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
    displayGallery(searchBarreFilteredArray);
  }
}

//Fonction tri par HASHTAG AJOUT D'UN TAG
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
        // TODO ICI
        // console.log("===Cat INGREDIENT===");
        // console.log(textContent.toLowerCase()); //Choix en minuscule
        newArray = actualDisplayedCards.filter((recipe) =>
          recipe.ingredients.some((item) =>
            item.ingredient
              .toLowerCase()
              .includes(e.target.textContent.toLowerCase())
          )
        );
        //TODO ICI FONTION INPUT SEARCH
        //Création des cards
        galleryContainer.innerHTML = "";
        displayGallery(newArray);
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
        galleryContainer.innerHTML = "";
        displayGallery(newArray);
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
        galleryContainer.innerHTML = "";
        displayGallery(newArray);
      }
    })
  );
}

//Fonction suppression d'un HASHTAG
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
            galleryContainer.innerHTML = "";
            displayGallery(arrayToDisplay);
          } else if (choice.parentElement.className.includes("appareils")) {
            console.log("APPAREILS");
            deletedChoiceArray = recipes.filter((recipe) =>
              recipe.appliance
                .toLowerCase()
                .includes(choice.innerText.toLowerCase())
            );
            arrayToDisplay =
              actualDisplayedCardsGallery.concat(deletedChoiceArray);
            galleryContainer.innerHTML = "";
            displayGallery(arrayToDisplay);
          } else if (choice.parentElement.className.includes("ustensiles")) {
            console.log("USTENSILES");
            deletedChoiceArray = recipes.filter((recipe) =>
              recipe.ustensils.some((item) =>
                item.toLowerCase().includes(choice.innerText.toLowerCase())
              )
            );
            arrayToDisplay =
              actualDisplayedCardsGallery.concat(deletedChoiceArray);
            galleryContainer.innerHTML = "";
            displayGallery(arrayToDisplay);
          }
        });
      }
    })
  );
}

// ? FILTRE DROPDOWNS
//Inputs dropdowns
const ingredientsInput = document.querySelector('#input-ingredients')
const appareilsInput = document.querySelector('#input-appareils')
const ustensilesInput = document.querySelector('#input-ustensiles')
//Input listener
ingredientsInput.addEventListener("input", ingredientsDropdownFilter);
appareilsInput.addEventListener("input", dropdownFilterAppareils);
ustensilesInput.addEventListener("input", dropdownFilterInputUstensiles);


//Fonction de recherche via input Dropdown
function ingredientsDropdownFilter(){
  //Récupération de l'input de l'utilisateur à chaque lettre tapée
  const ingredientsInputValue = ingredientsInput.value.toLowerCase();
  galleryContainer.innerHTML = "";
    // Recherche dans DESCRIPTION - NOM - INGREDIENT
    let dropdownIngredientFilteredArray = recipes.filter(
      (recipe) =>
        recipe.ingredients.some((item) =>
          item.ingredient.toLowerCase().includes(ingredientsInputValue)))
  ingredientsListContainer.innerHTML=""
    displayGallery(dropdownIngredientFilteredArray);
  }
function dropdownFilterAppareils(){
  //Récupération de l'input de l'utilisateur à chaque lettre tapée
  const appareilsInputValue = appareilsInput.value.toLowerCase();
  galleryContainer.innerHTML = "";
  // Recherche dans DESCRIPTION - NOM - INGREDIENT
  let dropdownAppareilsFilteredArray = recipes.filter(
    (recipe) =>recipe.appliance.toLowerCase().includes(appareilsInputValue)
  );
  //Création des cards
  // createdChoiceList(dropdownIngredientFilteredArray)

  displayGallery(dropdownAppareilsFilteredArray);
}
function dropdownFilterInputUstensiles(){
  //Récupération de l'input de l'utilisateur à chaque lettre tapée
  const ustensilesInputValue = ustensilesInput.value.toLowerCase();
  galleryContainer.innerHTML = "";
  // Recherche dans DESCRIPTION - NOM - INGREDIENT
  let dropdownUstensilesFilteredArray = recipes.filter(
    (recipe) =>
      // Find what I'm looking for but don't push it in the filteredArr
      recipe.ustensils.some((item) =>
        item.toLowerCase().includes(ustensilesInputValue)
      )
  );
  //Création des cards
  // createdChoiceList(dropdownIngredientFilteredArray)
  displayGallery(dropdownUstensilesFilteredArray);
}

//Filtre liste ingredients
ingredientsInput.addEventListener('input', filterIngredientsNodes)
function filterIngredientsNodes() {
  //TABLEAU DES INGREDIENTS
  let filterValue = ingredientsInput.value.toLowerCase()
  console.log(filterValue)
  let ul = document.querySelector('#ingredients-dropdown-menu')
  let li = ul.querySelectorAll('.ingredients-item')
  for (const element of li) {
    if (element.innerHTML.toLowerCase().indexOf(filterValue) > -1) {
      element.style.display = "";
    } else {
      element.style.display = 'none'
    }
  }
}

//Filtre liste appareils
appareilsInput.addEventListener('input', filterAppareilsNodes)
function filterAppareilsNodes() {
  //TABLEAU DES INGREDIENTS
  let filterValue = appareilsInput.value.toLowerCase()
  let ul = document.querySelector('#appareils-dropdown-menu')
  let li = ul.querySelectorAll('.appareils-item')
  for (const element of li) {
    if (element.innerHTML.toLowerCase().indexOf(filterValue) > -1) {
      element.style.display = "";
    } else {
      element.style.display = 'none'
    }
  }
}

//Filtre liste ustensiles
ustensilesInput.addEventListener('input', filterUstensilesNodes)
function filterUstensilesNodes() {
  //TABLEAU DES INGREDIENTS
  let filterValue = ustensilesInput.value.toLowerCase()
  let ul = document.querySelector('#ustensiles-dropdown-menu')
  let li = ul.querySelectorAll('.ustensiles-item')
  for (const element of li) {
    if (element.innerHTML.toLowerCase().indexOf(filterValue) > -1) {
      element.style.display = "";
    } else {
      element.style.display = 'none'
    }
  }
}