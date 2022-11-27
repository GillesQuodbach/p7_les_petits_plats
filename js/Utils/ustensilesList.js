//Création des tableaux des ingredients
const getUstensilesArray = [];

// Récupération des ingrédients
recipes.forEach((recipe) => getUstensilesArray.push(recipe.ustensils));
// console.log(getAppliancesArray);
// Aplatissage du tableau
const flatUstensilesArray = getUstensilesArray.flat(3);
// console.log(flatUstensilesArray);

//Suppression des doublons
const uniqueUstensilesArray = Array.from(new Set(flatUstensilesArray));
// console.log(uniqueUstensilesArray);

// Création de la liste des ingrédients
const ustensilesListContainer = document.querySelector(
  "#ustensiles-dropdown-menu"
);
uniqueUstensilesArray.forEach((appliance) => {
  const ustensileItem = document.createElement("li");
  ustensileItem.setAttribute("class", "ustensiles-item text-nowrap");
  ustensileItem.textContent = appliance;
  ustensilesListContainer.appendChild(ustensileItem);
});

// GESTION DES CHOIX DES USTENSILES
// Récupération de la liste des ustensiles
const ustensilesItems = document.querySelectorAll(".ustensiles-item");

ustensilesItems.forEach((ustensile) => {
  ustensile.addEventListener("click", function () {
    const allSelectedItemsContainer = document.querySelector(
      "#ustensiles-choices-container"
    );
    const selectedItemContainer = document.createElement("div");
    selectedItemContainer.setAttribute(
      "class",
      "selected-choices-container ustensiles-selected-choices-container"
    );
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
      // console.log(this.textContent);
      e.currentTarget.remove(this);
      cardsGallery.innerHTML = "";
      createCardList(orderedRecipes);
    });
  });
});
