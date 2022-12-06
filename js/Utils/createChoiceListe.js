//Dans les cartes affichées on recherche leurs ingredients
// On récupère tous les ingredients des recettes affichées et on crée les listes des choix
const ingredientChoiceContainer = document.querySelector("#ingredients-choices-container");
const appareilsChoiceContainer = document.querySelector("#appareils-choices-container");
const ustensilesChoiceContainer = document.querySelector("#ustensiles-choices-container");
const ingredientsListContainer = document.querySelector("#ingredients-dropdown-menu");
const appareilsListContainer = document.querySelector("#appareils-dropdown-menu");
const ustensilesListContainer = document.querySelector("#ustensiles-dropdown-menu");
const allActualSelectedChoices = document.querySelectorAll(".selected-choice");
function createChoiceListe(array) {
  const allIngredientsListWithDupliquate = []
  const allAppareilsListWithDupliquate = []
  const allUstensilesListWithDupliquate = []
  array.forEach((recipe) => {
    const allDisplayedIngredients = recipe.ingredients;
    //Liste de tous les ingrédients
    allDisplayedIngredients.forEach(
      (array) =>
        allIngredientsListWithDupliquate.push(array.ingredient.toLowerCase()) // Tous les ingredients av doublons
    );
  }); // On récupère tous les appareils des recettes affichées
  const ingredientsList = Array.from(new Set(allIngredientsListWithDupliquate))
  console.log(ingredientsList) //OK
//Création de la liste
  ingredientsList.forEach((ingredientlInList) => {
    const displayedIngredientsItem = document.createElement("li");
    displayedIngredientsItem.setAttribute(
      "class",
      "dropdown-list-item ingredient-item text-nowrap"
    );
    displayedIngredientsItem.textContent = ingredientlInList;
    ingredientsListContainer.appendChild(displayedIngredientsItem);
  });

  array.forEach((recipe) => {
    const allDisplayedAppareils = recipe.appliance;
    allAppareilsListWithDupliquate.push(allDisplayedAppareils);
    // Liste de tous les ingrédients
  });
  const appareilsListToLowerCase = allAppareilsListWithDupliquate.map(item => item.toLowerCase())
  const appareilsList = Array.from(new Set(appareilsListToLowerCase))
  console.log(appareilsList) //OK

  appareilsList.forEach((appareilInList) => {
    const displayedAppareilssItem = document.createElement("li");
    displayedAppareilssItem.setAttribute(
      "class",
      "dropdown-list-item appareils-item text-nowrap"
    );
    displayedAppareilssItem.textContent = appareilInList;
    appareilsListContainer.appendChild(displayedAppareilssItem);
  });

// On récupère tous les appareils des recettes affichées
  array.forEach((recipe) => {
    const allDisplayedUstensiles = recipe.ustensils;
    allDisplayedUstensiles.forEach(item => allUstensilesListWithDupliquate.push((item.toLowerCase())))
    // Liste de tous les ingrédients
  });
  const ustensilesList = Array.from(new Set(allUstensilesListWithDupliquate))
  console.log(ustensilesList) //OK

  ustensilesList.forEach((ustensilelInList) => {
    const displayedUstensilesItem = document.createElement("li");
    displayedUstensilesItem.setAttribute(
      "class",
      "dropdown-list-item ustensiles-item text-nowrap"
    );
    displayedUstensilesItem.textContent = ustensilelInList;
    ustensilesListContainer.appendChild(displayedUstensilesItem);
  });
}

