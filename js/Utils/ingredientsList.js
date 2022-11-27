//Création des tableaux des ingredients
const getIngredientsArray = [];
const ingredientArrayWithDuplicate = [];
//Liste des ingredients
const ingredientsListContainer = document.querySelector(
  "#ingredients-dropdown-menu"
);
// Récupération des ingrédients
recipes.forEach((recipe) => getIngredientsArray.push(recipe.ingredients));

// Aplatissage du tableau
const flatIngredientsArray = getIngredientsArray.flat(3);

// Remplissage du tableau des ingrédients
flatIngredientsArray.forEach((item) => {
  const { ingredient } = item;
  ingredientArrayWithDuplicate.push(ingredient);
});

//Suppression des doublons
const uniqueIngredientsArray = Array.from(
  new Set(ingredientArrayWithDuplicate)
);
console.log(uniqueIngredientsArray);

//Mise dans l'ordre alphabétique
const orderedIngredients = orderChoices(uniqueIngredientsArray);

// Création de la liste des ingrédients
orderedIngredients.forEach((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.setAttribute("class", "ingredients-item text-nowrap");
  ingredientItem.textContent = ingredient;
  ingredientsListContainer.appendChild(ingredientItem);
});

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

    // console.log(this.textContent);

    // * Suppression du HASHTAG
    selectedItemContainer.addEventListener("click", (e) => {
      e.currentTarget.remove(this);
      ingredientsListContainer.appendChild(ingredient);
      cardsGallery.innerHTML = "";
      createCardList(orderedRecipes);
    });
    ingredient.remove();
  });
  // console.log(ingredient);
});
