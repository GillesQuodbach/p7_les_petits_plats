
//
// //Mise à jour de la liste des ingrédients
// function getChoiceList(array) {
//   // Ingredients arrays
//   let ingredientsSelected = [];
//   let allIngredientsListWithDupliquate = [];
//   let finalIngredientList = [];
//   let ingredientsListToDispplay = [];
//
//   // Appareils arrays
//   let appareilsSelected = [];
//   let allAppareilsListWithDupliquate = [];
//   let finalAppareilsList = [];
//   let appareilsListToDispplay = [];
//
//   // Ustensiles arrays
//   let ustensilesSelected = [];
//   let allUstensilesListWithDupliquate = [];
//   let finalUstensilesList = [];
//   let ustensilesListToDispplay = [];
//   let ustensilesFlatArrayToLowerCase = [];
//   let ustensilesToLowerCase = [];
//
//   //Mise à zéro de la liste des choix
//   ingredientsListContainer.innerHTML = "";
//   appareilsListContainer.innerHTML = "";
//   ustensilsListContainer.innerHTML = "";
//
//   //!On récupère le tableau des choix, on le compare a la liste, si = supprimer
//   let allActualSelectedChoices = document.querySelectorAll(".selected-choice");
//   // console.log(allActualSelectedChoices);
//   allActualSelectedChoices.forEach((choice) => {
//     if (choice.parentElement.className.includes("ingredients")) {
//       ingredientsSelected.push(choice.innerText.toLowerCase());
//       console.log(ingredientsSelected);
//     } else if (choice.parentElement.className.includes("appareils")) {
//       appareilsSelected.push(choice.innerText.toLowerCase());
//       console.log(appareilsSelected);
//     } else if (choice.parentElement.className.includes("ustensiles")) {
//       ustensilesSelected.push(choice.innerText.toLowerCase());
//       console.log(ustensilesSelected);
//     }
//   });
//   //Récupération des cartes affichées (avec leur ID)
//   array.filter((recipe) => recipe.id === displayedCardsID.id);
//
//   //Dans les cartes affichées on recherche leurs ingredients
//   // On récupère tous les ingredients des recettes affichées
//   array.forEach((recipe) => {
//     let allDisplayedIngredients = recipe.ingredients;
//     //Liste de tous les ingrédients
//     allDisplayedIngredients.forEach(
//       (array) =>
//         allIngredientsListWithDupliquate.push(array.ingredient.toLowerCase()) // Tous les ingredients av doublons
//     );
//   }); // On récupère tous les appareils des recettes affichées
//   array.forEach((recipe) => {
//     let allDisplayedAppareils = recipe.appliance.toLowerCase();
//     allAppareilsListWithDupliquate.push(allDisplayedAppareils);
//     // Liste de tous les ingrédients
//   });
//   console.log(allAppareilsListWithDupliquate)
//   // On récupère tous les appareils des recettes affichées
//   array.forEach((recipe) => {
//     let allDisplayedUstensiles = recipe.ustensils;
//     allUstensilesListWithDupliquate.push(allDisplayedUstensiles);
//     // Liste de tous les ingrédients
//   });
//
//   if (allActualSelectedChoices.length !== 0) {
//     //Gestion des choix si choix effectué
//
//     //PARTIE INGREDIENT
//     finalIngredientList =
//       allIngredientsListWithDupliquate.concat(ingredientsSelected); // On concact les deux tableaux
//     // console.log(finalIngredientList); // Tous les choix
//     ingredientsListToDispplay = finalIngredientList.filter((value, index) => {
//       return (
//         finalIngredientList.indexOf(value) ===
//         finalIngredientList.lastIndexOf(value)
//       ); // On compare les deux tableau tableau est on garde les valeurs uniques
//     });
//
//
//     ingredientsListToDispplay.forEach((ingredientInList) => {
//       const displayedIngredientsItem = document.createElement("li");
//       displayedIngredientsItem.setAttribute(
//         "class",
//         "dropdown-list-item ingredients-item text-nowrap"
//       );
//       displayedIngredientsItem.textContent = ingredientInList;
//       ingredientsListContainer.appendChild(displayedIngredientsItem);
//     });
//     //PARTIE APPAREILS
//     finalAppareilsList =
//       allAppareilsListWithDupliquate.concat(appareilsSelected); // On concact les deux tableaux
//     appareilsListToDispplay = finalAppareilsList.filter((value, index) => {
//       return (
//         finalAppareilsList.indexOf(value) ===
//         finalAppareilsList.lastIndexOf(value)
//       ); // On compare les deux tableaux est on garde les valeurs uniques
//     });
//     // console.log(appareilsListToDispplay);
//     appareilsListToDispplay.forEach((appareilInList) => {
//       const displayedAppareilsItem = document.createElement("li");
//       displayedAppareilsItem.setAttribute(
//         "class",
//         "dropdown-list-item appareils-item text-nowrap"
//       );
//       displayedAppareilsItem.textContent = appareilInList;
//       appareilsListContainer.appendChild(displayedAppareilsItem);
//     });
//
//     //PARTIE USTENSILES
//     // console.log(allUstensilesListWithDupliquate);
//     let allUstensilesListWithDupliquateFlat =
//       allUstensilesListWithDupliquate.flat(1);
//
//     allUstensilesListWithDupliquateFlat.forEach((ust) =>
//       ustensilesToLowerCase.push(ust.toLowerCase())
//     );
//     console.log(ustensilesToLowerCase);
//
//     finalUstensilesList = ustensilesToLowerCase.concat(ustensilesSelected); // On concact les deux tableaux
//
//     ustensilesListToDispplay = finalUstensilesList.filter((value, index) => {
//       return (
//         finalUstensilesList.indexOf(value) ===
//         finalUstensilesList.lastIndexOf(value)
//       ); // On compare les deux tableau tableau est on garde les valeurs uniques
//     });
//     ustensilesListToDispplay.forEach((ustensileInList) => {
//       const displayedUstensilesItem = document.createElement("li");
//       displayedUstensilesItem.setAttribute(
//         "class",
//         "dropdown-list-item ustensiles-item text-nowrap"
//       );
//       displayedUstensilesItem.textContent = ustensileInList;
//       ustensilsListContainer.appendChild(displayedUstensilesItem);
//     });
//   } else {
//     //SI AUCUN CHOIX FAIT
//     //Création de la liste des ingredients sans doublons
//     let allIngredientsList = Array.from(new Set(allIngredientsListWithDupliquate));
// // TODO INPUT INGREDIENT
//     const dropdownInputIngredient = document.querySelector('#input-ingredients')
//     dropdownInputIngredient.addEventListener('input', dopdownIngredientFilter)
//
//     function dopdownIngredientFilter(){
//       const dropdownInputIngredientValue = dropdownInputIngredient.value.toLowerCase();
//       let filteredIngredient = allIngredientsList.filter(
//         (truc) => truc.toLowerCase().includes(dropdownInputIngredientValue))
//       //Remise a zéro de la gallery
//       ingredientsListContainer.innerHTML = ""
//       filteredIngredient.forEach((ingredientInList) => {
//         const displayedIngredientsItem = document.createElement("li");
//         displayedIngredientsItem.setAttribute(
//           "class",
//           "dropdown-list-item ingredients-item text-nowrap"
//         );
//         displayedIngredientsItem.textContent = ingredientInList;
//         ingredientsListContainer.appendChild(displayedIngredientsItem);
//       });
//       const allIng = document.querySelectorAll(".ingredients-item")
//
//     }
//     allIngredientsList.forEach((ingredientInList) => {
//       const displayedIngredientsItem = document.createElement("li");
//       displayedIngredientsItem.setAttribute(
//         "class",
//         "dropdown-list-item ingredients-item text-nowrap"
//       );
//       displayedIngredientsItem.textContent = ingredientInList;
//       ingredientsListContainer.appendChild(displayedIngredientsItem);
//     });
//     //Création de la liste des appareils sans doublons
//     // console.log(allAppareilsListWithDupliquate);
//     let allAppareilsListWithDupliquateToLowercase = [];
//     allAppareilsListWithDupliquate.forEach((app) =>
//       allAppareilsListWithDupliquateToLowercase.push(app.toLowerCase())
//     );
//     let allAppareilsList = new Set(allAppareilsListWithDupliquateToLowercase);
//     allAppareilsList.forEach((appareilInList) => {
//       const displayedAppareilsItem = document.createElement("li");
//       displayedAppareilsItem.setAttribute(
//         "class",
//         "dropdown-list-item appareils-item text-nowrap"
//       );
//       displayedAppareilsItem.textContent = appareilInList;
//       appareilsListContainer.appendChild(displayedAppareilsItem);
//     });
//     //Création de la liste des ustensiles sans doublons
//     let ustensilesFlatArray = allUstensilesListWithDupliquate.flat(1);
//
//     let ustensilesListToLowerCase = [];
//     ustensilesFlatArray.forEach((ust) =>
//       ustensilesListToLowerCase.push(ust.toLowerCase())
//     );
//     let allUstensilesList = new Set(ustensilesListToLowerCase);
//     allUstensilesList.forEach((ustensileInList) => {
//       const displayedUstensilesItem = document.createElement("li");
//       displayedUstensilesItem.setAttribute(
//         "class",
//         "dropdown-list-item ustensiles-item text-nowrap"
//       );
//       displayedUstensilesItem.textContent = ustensileInList;
//       ustensilsListContainer.appendChild(displayedUstensilesItem);
//     });
//   }
// }
// let actualDisplayedCards = [];
// //Listener de la liste des choix
// function addChoiceButton(array) {
//   //tableau des cards actuellement affichées
//   let actualDisplayedCards = [];
//   let newArray = [];
//   let allChoiceList = document.querySelectorAll(".dropdown-list-item");
//   let actualGallery = document.querySelectorAll(".card");
//   let actualRecipeId = []; //! ID attribué à chaque recette (pas l'emplacement dans le tableau)
//
//   //Tableau des cartes affichées au moment du clic
//   //On récupère l'id des cartes affichées et on push les recettes correspondantes dans le tableau actualDisplayedCards
//   // On transforme string en number
//   actualGallery.forEach((recipe) =>
//     actualRecipeId.push(parseInt(recipe.getAttribute("id")))
//   );
//   // console.log(actualRecipeId); // TABLEAU OK
//   //Tableau des recettes présentes
//   //On récupère le tableau qui correspond aux recettes présentes
//   for (let id of actualRecipeId) {
//     for (let recipe of recipes) {
//       if (recipe.id === id) {
//         actualDisplayedCards.push(recipe);
//       }
//     }
//   }
//   //Tableau contenant les recettes actuelles
//   // console.log(actualDisplayedCards);
//   //On récupère le choix cliqué
//   // Pour chaque choix cliqué
//
//   allChoiceList.forEach((choice) =>
//     choice.addEventListener("click", (e) => {
//       const ingredientChoiceContainer = document.querySelector(
//         "#ingredients-choices-container"
//       );
//       const appareilsChoiceContainer = document.querySelector(
//         "#appareils-choices-container"
//       );
//       const ustensilesChoiceContainer = document.querySelector(
//         "#ustensiles-choices-container"
//       );
//       if (e.target.className.includes("ingredients")) {
//         //Création du bouton de l'item choisi
//         const selectedItemContainer = document.createElement("div");
//         selectedItemContainer.setAttribute(
//           "class",
//           "selected-choices-container ingredients-selected-choices-container"
//         );
//         //Affichage de l'ingrédient choisi
//
//         const selectedItem = document.createElement("p");
//         selectedItem.setAttribute("class", "selected-choice");
//         selectedItem.textContent = e.target.textContent;
//         const selectedItemCross = document.createElement("img");
//         selectedItemCross.setAttribute("class", "selected-choice-cross");
//         selectedItemCross.setAttribute("src", "img/choice-delete-cross.svg");
//         selectedItemCross.setAttribute("alt", "delete your choice");
//         ingredientChoiceContainer.prepend(selectedItemContainer);
//         selectedItemContainer.appendChild(selectedItem);
//         selectedItem.appendChild(selectedItemCross);
//
//
//         // TODO ICI
//         // console.log("===Cat INGREDIENT===");
//         // console.log(textContent.toLowerCase()); //Choix en minuscule
//         newArray = actualDisplayedCards.filter((recipe) =>
//           recipe.ingredients.some((item) =>
//             item.ingredient
//               .toLowerCase()
//               .includes(e.target.textContent.toLowerCase())
//           )
//         );
//         //TODO ICI FONTION INPUT SEARCH
//
//         //Création des cards
//         cardsGallery.innerHTML = "";
//         display(newArray);
//       } else if (e.target.className.includes("appareils")) {
//         //Création du bouton de l'item choisi
//         const selectedItemContainer = document.createElement("div");
//         selectedItemContainer.setAttribute(
//           "class",
//           "selected-choices-container appareils-selected-choices-container"
//         );
//         //Affichage de l'ingrédient choisi
//         const selectedItem = document.createElement("p");
//         selectedItem.setAttribute("class", "selected-choice");
//         selectedItem.textContent = e.target.textContent;
//         const selectedItemCross = document.createElement("img");
//         selectedItemCross.setAttribute("class", "selected-choice-cross");
//         selectedItemCross.setAttribute("src", "img/choice-delete-cross.svg");
//         selectedItemCross.setAttribute("alt", "delete your choice");
//         appareilsChoiceContainer.prepend(selectedItemContainer);
//         selectedItemContainer.appendChild(selectedItem);
//         selectedItem.appendChild(selectedItemCross);
//
//         console.log("===Cat APPAREILS===");
//         console.log(e.target.textContent.toLowerCase()); //Choix en minuscule
//         newArray = actualDisplayedCards.filter((recipe) =>
//           recipe.appliance
//             .toLowerCase()
//             .includes(e.target.textContent.toLowerCase())
//         );
//         //Création des cards
//         cardsGallery.innerHTML = "";
//         display(newArray);
//       } else if (e.target.className.includes("ustensiles")) {
//         //Création du bouton de l'item choisi
//         const selectedItemContainer = document.createElement("div");
//         selectedItemContainer.setAttribute(
//           "class",
//           "selected-choices-container ustensiles-selected-choices-container"
//         );
//         //Affichage de l'ingrédient choisi
//         const selectedItem = document.createElement("p");
//         selectedItem.setAttribute("class", "selected-choice");
//         selectedItem.textContent = e.target.textContent;
//         const selectedItemCross = document.createElement("img");
//         selectedItemCross.setAttribute("class", "selected-choice-cross");
//         selectedItemCross.setAttribute("src", "img/choice-delete-cross.svg");
//         selectedItemCross.setAttribute("alt", "delete your choice");
//         ustensilesChoiceContainer.prepend(selectedItemContainer);
//         selectedItemContainer.appendChild(selectedItem);
//         selectedItem.appendChild(selectedItemCross);
//         console.log("===Cat USTENSILES===");
//         console.log(e.target.textContent.toLowerCase()); //Choix en minuscule
//         newArray = actualDisplayedCards.filter((recipe) =>
//           recipe.ustensils.some((item) =>
//             item.toLowerCase().includes(e.target.textContent.toLowerCase())
//           )
//         );
//         //Création des cards
//
//         cardsGallery.innerHTML = "";
//         display(newArray);
//       }
//     })
//   );
// }
// function deleteChoiceButton(array) {
//   const clickedChoices = document.querySelectorAll(
//     ".selected-choices-container"
//   );
//   let actualDisplayedCardsGallery = [];
//   let actualDisplayedCardsGalleryDOM = document.querySelectorAll(".card");
//   let actualDisplayedCardsIds = []; //! ID attribué à chaque recette (pas l'emplacement dans le tableau)
//   let deletedChoiceArray = [];
//   let arrayToDisplay = [];
//   //Tableau des cartes affichées au moment du clic
//   //On récupère l'id des cartes affichées et on push les recettes correspondantes dans le tableau actualDisplayedCards
//   // On transforme string en number
//   actualDisplayedCardsGalleryDOM.forEach((recipe) =>
//     actualDisplayedCardsIds.push(parseInt(recipe.getAttribute("id")))
//   );
//   //Tableau des recettes présentes
//   //On récupère le tableau qui correspond aux recettes présentes
//   for (let id of actualDisplayedCardsIds) {
//     for (let recipe of recipes) {
//       if (recipe.id === id) {
//         actualDisplayedCardsGallery.push(recipe);
//       }
//     }
//   }
//   // // * Suppression du HASHTAG
//   clickedChoices.forEach((clickedChoice) =>
//     clickedChoice.addEventListener("click", (e) => {
//       e.currentTarget.remove(this);
//       //Tableau des cartes affichées au moment du clic
//       //On récupère l'id des cartes affichées et on push les recettes correspondantes dans le tableau actualDisplayedCards
//       // On transforme string en number
//       //Récupération de tous les choix
//       const tousLesChoixRestant = document.querySelectorAll(".selected-choice");
//       //On récupère la liste des choix restants
//       console.log(tousLesChoixRestant);
//
//       if (tousLesChoixRestant.length === 0) {
//         searchBarreFilter();
//       } else {
//         tousLesChoixRestant.forEach((choice) => {
//           if (choice.parentElement.className.includes("ingredients")) {
//             console.log("INGREDIENT");
//             deletedChoiceArray = recipes.filter((recipe) =>
//               recipe.ingredients.some((item) =>
//                 item.ingredient
//                   .toLowerCase()
//                   .includes(choice.innerText.toLowerCase())
//               )
//             );
//             arrayToDisplay =
//               actualDisplayedCardsGallery.concat(deletedChoiceArray);
//             cardsGallery.innerHTML = "";
//             display(arrayToDisplay);
//           } else if (choice.parentElement.className.includes("appareils")) {
//             console.log("APPAREILS");
//             deletedChoiceArray = recipes.filter((recipe) =>
//               recipe.appliance
//                 .toLowerCase()
//                 .includes(choice.innerText.toLowerCase())
//             );
//             arrayToDisplay =
//               actualDisplayedCardsGallery.concat(deletedChoiceArray);
//             cardsGallery.innerHTML = "";
//             display(arrayToDisplay);
//           } else if (choice.parentElement.className.includes("ustensiles")) {
//             console.log("USTENSILES");
//             deletedChoiceArray = recipes.filter((recipe) =>
//               recipe.ustensils.some((item) =>
//                 item.toLowerCase().includes(choice.innerText.toLowerCase())
//               )
//             );
//             arrayToDisplay =
//               actualDisplayedCardsGallery.concat(deletedChoiceArray);
//             cardsGallery.innerHTML = "";
//             display(arrayToDisplay);
//           }
//         });
//       }
//     })
//   );
// }
// //
// // const inputIngredient = document.querySelector('#input-ingredients')
// // console.log(inputIngredient)
// // inputIngredient.addEventListener('input', e=> console.log(inputIngredient.value.toLowerCase()))