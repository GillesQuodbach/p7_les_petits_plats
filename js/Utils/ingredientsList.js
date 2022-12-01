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
// Récupération des ingrédients dans les cartes affichées
function getChoiceList(array) {
  //Récupération des cartes affichées (avec leur ID)
  ingredientsListContainer.innerHTML = "";
  appareilsListContainer.innerHTML = "";
  ustensilsListContainer.innerHTML = "";
  array.filter((recipe) => recipe.id === displayedCardsID.id);
  //Dans les cartes affichées ont recherche leurs ingredients
  // ET on affiche la liste des INGREDIENTS dans le dropdown
  array.forEach((displayedIngredients) => {
    const displayedIngredientsCategory = displayedIngredients.ingredients;
    displayedIngredientsCategory.forEach((displayedIngredient) => {
      const displayedIngredientsItem = document.createElement("li");
      displayedIngredientsItem.setAttribute(
        "class",
        "ingredients-item text-nowrap"
      );
      displayedIngredientsItem.textContent = displayedIngredient.ingredient;
      ingredientsListContainer.appendChild(displayedIngredientsItem);
    });
  });
  // ET on affiche la liste des APPAREILS dans le dropdown
  array.forEach((displayedAppareils) => {
    const displayedAppareilsItem = document.createElement("li");
    displayedAppareilsItem.setAttribute("class", "appareils-item text-nowrap");
    displayedAppareilsItem.textContent = displayedAppareils.appliance;
    appareilsListContainer.appendChild(displayedAppareilsItem);
  });
  array.forEach((displayedUstensiles) => {
    const displayedUstensilesCategory = displayedUstensiles.ustensils;
    displayedUstensilesCategory.forEach((displayedUstensiles) => {
      const displayedUstensilesItem = document.createElement("li");
      displayedUstensilesItem.setAttribute(
        "class",
        "ustensiles-item text-nowrap"
      );
      displayedUstensilesItem.textContent = displayedUstensiles;
      ustensilsListContainer.appendChild(displayedUstensilesItem);
    });
  });
}
// GESTION DES CHOIX DES INGREDIENTS
// Récupération de la liste des ingrédients
const ingredientsItems = document.querySelectorAll(".ingredients-item");

ingredientsItems.forEach((ingredient) => {
  ingredient.addEventListener("click", function () {
    //Container des ingrédients choisi
    const allSelectedItemsContainer = document.querySelector(
      "#ingredients-choices-container"
    );
    // Création du "bouton" de l'ingrédient choisi
    const selectedItemContainer = document.createElement("div");
    selectedItemContainer.setAttribute(
      "class",
      "selected-choices-container ingredients-selected-choices-container"
    );
    //Affichage de l'ingrédient choisi
    const selectedItem = document.createElement("p");
    selectedItem.setAttribute("class", "selected-choice");
    selectedItem.textContent = this.textContent;
    const selectedItemCross = document.createElement("img");
    selectedItemCross.setAttribute("class", "selected-choice-cross");
    selectedItemCross.setAttribute("src", "img/choice-delete-cross.svg");
    selectedItemCross.setAttribute("alt", "delete your choice");

    allSelectedItemsContainer.prepend(selectedItemContainer);
    selectedItemContainer.appendChild(selectedItem);
    selectedItem.appendChild(selectedItemCross);

    // * Suppression du HASHTAG
    selectedItemContainer.addEventListener("click", (e) => {
      e.currentTarget.remove(this);
      ingredientsListContainer.appendChild(ingredient);
      cardsGallery.innerHTML = "";
      createCardList(orderedRecipes);
    });
    ingredient.remove();
  });
});
