// * CONSTANTES
const galleryContainer = document.querySelector("#recipes-gallery");
// Liste des choix déjà sélectionnée
let filteredArray = [];

// Container de la galerie
const cardsGallery = document.querySelector("#recipes-gallery");
// Input de recherche
const searchInput = document.querySelector("#main-search-input");
// Liste des cards affichées
const displayedCardsID = document.querySelectorAll(".card");
//Liste des ingredients
const ingredientsListContainer = document.querySelector("#ingredients-dropdown-menu");
//Liste des appareils
const appareilsListContainer = document.querySelector("#appareils-dropdown-menu");
//Liste des ustensiles
const ustensilsListContainer = document.querySelector("#ustensiles-dropdown-menu");
// ! Fonction d'affichage des cartes
function display(data) {
  //Tri par ordre alphabétique
  orderList(data);
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

// //Mise en ordre listes des choix - dans la fonction createdChoiceList
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
// ! Fonction de création des cards
function createCardList(array) {
  //Tableau de chaque RECETTES" (recipesList)
  array.forEach((recipe) => {
    //Destructuring des recette
    const { description, id, name, time } = recipe;
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

//Input listener Barre principale
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
        recipe.name.toLowerCase().includes(searchBarreInput) ||
        recipe.description.toLowerCase().includes(searchBarreInput) ||
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
  // Ingredients arrays
  let ingredientsSelected = [];
  let allIngredientsListWithDupliquate = [];
  let finalIngredientList = [];
  let ingredientsListToDispplay = [];

  // Appareils arrays
  let appareilsSelected = [];
  let allAppareilsListWithDupliquate = [];
  let finalAppareilsList = [];
  let appareilsListToDispplay = [];

  // Ustensiles arrays
  let ustensilesSelected = [];
  let allUstensilesListWithDupliquate = [];
  let finalUstensilesList = [];
  let ustensilesListToDispplay = [];
  let ustensilesToLowerCase = [];
  //Mise à zéro de la liste des choix
  ingredientsListContainer.innerHTML = "";
  appareilsListContainer.innerHTML = "";
  ustensilsListContainer.innerHTML = "";
  //!On récupère le tableau des choix, on le compare a la liste, si = supprimer
  let allActualSelectedChoices = document.querySelectorAll(".selected-choice");
  allActualSelectedChoices.forEach((choice) => {
    if (choice.parentElement.className.includes("ingredients")) {
      ingredientsSelected.push(choice.innerText.toLowerCase());
      console.log(ingredientsSelected);
    } else if (choice.parentElement.className.includes("appareils")) {
      appareilsSelected.push(choice.innerText.toLowerCase());
      console.log(appareilsSelected);
    } else if (choice.parentElement.className.includes("ustensiles")) {
      ustensilesSelected.push(choice.innerText.toLowerCase());
      console.log(ustensilesSelected);
    }
  });
  //Récupération des cartes affichées (avec leur ID)
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
  console.log(allAppareilsListWithDupliquate)
  // On récupère tous les appareils des recettes affichées
  array.forEach((recipe) => {
    let allDisplayedUstensiles = recipe.ustensils;
    allUstensilesListWithDupliquate.push(allDisplayedUstensiles);
    // Liste de tous les ingrédients
  });
  if (allActualSelectedChoices.length !== 0) {
    //Gestion des choix si choix effectué
    //PARTIE INGREDIENT
    finalIngredientList =
      allIngredientsListWithDupliquate.concat(ingredientsSelected); // On concact les deux tableaux
    // console.log(finalIngredientList); // Tous les choix
    ingredientsListToDispplay = finalIngredientList.filter((value, index) => {
      return (
        finalIngredientList.indexOf(value) ===
        finalIngredientList.lastIndexOf(value)
      ); // On compare les deux tableau tableau est on garde les valeurs uniques
    });
    let ingredientsListToDisplayUC = []
    ingredientsListToDispplay.forEach(word => {
      let firstLetter = word.charAt(0).toUpperCase()
      let replacement = word.replace(word.charAt(0),firstLetter)
      ingredientsListToDisplayUC .push(replacement)
    })
    ingredientsListToDisplayUC.forEach((ingredientInList) => {
      const displayedIngredientsItem = document.createElement("li");
      displayedIngredientsItem.setAttribute(
        "class",
        "dropdown-list-item ingredients-item text-nowrap"
      );
      displayedIngredientsItem.textContent = ingredientInList;
      ingredientsListContainer.appendChild(displayedIngredientsItem);
    });
    //PARTIE APPAREILS
    finalAppareilsList =
      allAppareilsListWithDupliquate.concat(appareilsSelected); // On concact les deux tableaux
    appareilsListToDispplay = finalAppareilsList.filter((value, index) => {
      return (
        finalAppareilsList.indexOf(value) ===
        finalAppareilsList.lastIndexOf(value)
      ); // On compare les deux tableaux est on garde les valeurs uniques
    });
    let appareilsListToDisplayUC = []
    appareilsListToDispplay.forEach(word => {
      let firstLetter = word.charAt(0).toUpperCase()
      let replacement = word.replace(word.charAt(0),firstLetter)
      appareilsListToDisplayUC .push(replacement)
    })
    appareilsListToDisplayUC.forEach((appareilInList) => {
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
    allUstensilesListWithDupliquateFlat.forEach((ust) =>
      ustensilesToLowerCase.push(ust.toLowerCase())
    );
    console.log(ustensilesToLowerCase);
    finalUstensilesList = ustensilesToLowerCase.concat(ustensilesSelected); // On concact les deux tableaux
    ustensilesListToDispplay = finalUstensilesList.filter((value, index) => {
      return (
        finalUstensilesList.indexOf(value) ===
        finalUstensilesList.lastIndexOf(value)
      ); // On compare les deux tableau tableau est on garde les valeurs uniques
    });
    let ustensilesListToDispplayUC = []
    ustensilesListToDispplay.forEach(word => {
      let firstLetter = word.charAt(0).toUpperCase()
      let replacement = word.replace(word.charAt(0),firstLetter)
      ustensilesListToDispplayUC.push(replacement)
    })
    ustensilesListToDispplayUC.forEach((ustensileInList) => {
      const displayedUstensilesItem = document.createElement("li");
      displayedUstensilesItem.setAttribute(
        "class",
        "dropdown-list-item ustensiles-item text-nowrap"
      );
      displayedUstensilesItem.textContent = ustensileInList;
      ustensilsListContainer.appendChild(displayedUstensilesItem);
    });
  } else {
    //SI AUCUN CHOIX FAIT
    //Création de la liste des ingredients sans doublons
    let allIngredientsList = Array.from(new Set(allIngredientsListWithDupliquate));
    orderChoices(allIngredientsList)
    // orderChoice(allIngredientsList)
    console.log(allIngredientsList)
    //   //Première lettre en MAJ
    let ingredientsListToDisplayUC = []
    allIngredientsList.forEach(word => {
      let firstLetter = word.charAt(0).toUpperCase()
      let replacement = word.replace(word.charAt(0),firstLetter)
      ingredientsListToDisplayUC.push(replacement)
    })
    ingredientsListToDisplayUC.forEach((ingredientInList) => {
      const displayedIngredientsItem = document.createElement("li");
      displayedIngredientsItem.setAttribute(
        "class",
        "dropdown-list-item ingredients-item text-nowrap"
      );
      displayedIngredientsItem.textContent = ingredientInList;
      ingredientsListContainer.appendChild(displayedIngredientsItem);
    });
    //Création de la liste des appareils sans doublons
    let allAppareilsListWithDupliquateToLowercase = [];
    allAppareilsListWithDupliquate.forEach((app) =>
      allAppareilsListWithDupliquateToLowercase.push(app.toLowerCase())
    );
    let allAppareilsList = Array.from(new Set(allAppareilsListWithDupliquateToLowercase));
    orderChoices(allAppareilsList)
    let appareilsListToDisplayUC = []
    allAppareilsList.forEach(word => {
      let firstLetter = word.charAt(0).toUpperCase()
      let replacement = word.replace(word.charAt(0),firstLetter)
      appareilsListToDisplayUC.push(replacement)
    })
    appareilsListToDisplayUC.forEach((appareilInList) => {
      const displayedAppareilsItem = document.createElement("li");
      displayedAppareilsItem.setAttribute(
        "class",
        "dropdown-list-item appareils-item text-nowrap"
      );
      displayedAppareilsItem.textContent = appareilInList;
      appareilsListContainer.appendChild(displayedAppareilsItem);
    });
    //Création de la liste des ustensiles sans doublons
    let ustensilesFlatArray = allUstensilesListWithDupliquate.flat(1);
    let ustensilesListToLowerCase = [];
    ustensilesFlatArray.forEach((ust) =>
      ustensilesListToLowerCase.push(ust.toLowerCase())
    );
    let allUstensilesList = Array.from(new Set(ustensilesListToLowerCase));
    orderChoices(allUstensilesList)
    // orderChoice(allUstensilesList)
    let ustensilesListToDisplayUC = []
    allUstensilesList.forEach(word => {
      let firstLetter = word.charAt(0).toUpperCase()
      let replacement = word.replace(word.charAt(0),firstLetter)
      ustensilesListToDisplayUC .push(replacement)
    })
    ustensilesListToDisplayUC.forEach((ustensileInList) => {
      const displayedUstensilesItem = document.createElement("li");
      displayedUstensilesItem.setAttribute(
        "class",
        "dropdown-list-item ustensiles-item text-nowrap"
      );
      displayedUstensilesItem.textContent = ustensileInList;
      ustensilsListContainer.appendChild(displayedUstensilesItem);
    });
  }
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
  //Tableau des recettes présentes
  //On récupère le tableau qui correspond aux recettes présentes
  for (let id of actualRecipeId) {
    for (let recipe of recipes) {
      if (recipe.id === id) {
        actualDisplayedCards.push(recipe);
      }
    }
  }
  allChoiceList.forEach((choice) =>
    choice.addEventListener("click", (e) => {
      const ingredientChoiceContainer = document.querySelector("#ingredients-choices-container");
      const appareilsChoiceContainer = document.querySelector("#appareils-choices-container");
      const ustensilesChoiceContainer = document.querySelector("#ustensiles-choices-container");
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
        newArray = actualDisplayedCards.filter((recipe) =>
          recipe.ingredients.some((item) =>
            item.ingredient
              .toLowerCase()
              .includes(e.target.textContent.toLowerCase())
          )
        );
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
  const clickedChoices = document.querySelectorAll(".selected-choices-container");
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

      if (tosLesChoixRestant.length === 0) {
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

// // // ? FILTRE DROPDOWNS
// // //Inputs dropdowns
const ingredientsInput = document.querySelector('#input-ingredients')
const appareilsInput = document.querySelector('#input-appareils')
const ustensilesInput = document.querySelector('#input-ustensiles')
// //Input listener
ingredientsInput.addEventListener("input", ingredientsDropdownFilter);
appareilsInput.addEventListener("input", dropdownFilterAppareils);
ustensilesInput.addEventListener("input", dropdownFilterInputUstensiles);

// //Fonction de recherche via input Dropdown
function ingredientsDropdownFilter(){
  const ingredientsInputValue = ingredientsInput.value.toLowerCase();
  galleryContainer.innerHTML = "";
  let dropdownIngredientFilteredArray = recipes.filter(
    (recipe) =>
      recipe.ingredients.some((item) =>
        item.ingredient.toLowerCase().includes(ingredientsInputValue)))
  ingredientsListContainer.innerHTML=""
  display(dropdownIngredientFilteredArray);
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
  display(dropdownAppareilsFilteredArray);
}
function dropdownFilterInputUstensiles(){
  //Récupération de l'input de l'utilisateur à chaque lettre tapée
  const ustensilesInputValue = ustensilesInput.value.toLowerCase();
  galleryContainer.innerHTML = "";
  let dropdownUstensilesFilteredArray = recipes.filter(
    (recipe) =>
      recipe.ustensils.some((item) =>
        item.toLowerCase().includes(ustensilesInputValue)
      )
  );
  //Création des cards
  display(dropdownUstensilesFilteredArray);
}

// //FILTRE LISTES DES CHOIX
// //Filtre liste ingredients
ingredientsInput.addEventListener('input', filterIngredientsNodes)
function filterIngredientsNodes() {
  //TABLEAU DES INGREDIENTS
  const ul = document.querySelector('#ingredients-dropdown-menu')
  const li = ul.querySelectorAll('.ingredients-item')
  const filterValue = ingredientsInput.value.toLowerCase()
  for (const element of li) {
    if (element.innerHTML.toLowerCase().indexOf(filterValue) > -1) {
      element.style.display = "";
    } else {
      element.style.display = 'none'
    }
  }
}
// // //Filtre liste appareils
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
// // //Filtre liste ustensiles
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
