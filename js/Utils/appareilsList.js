//Création des tableaux des ingredients
const getAppliancesArray = [];
// Récupération des ingrédients
recipes.forEach((recipe) => getAppliancesArray.push(recipe.appliance));
// console.log(getAppliancesArray);
// Aplatissage du tableau
const flatAppliancesArray = getAppliancesArray.flat(3);
// console.log(flatAppliancesArray);

//Suppression des doublons
const uniqueAppliancesArray = Array.from(new Set(flatAppliancesArray));
// console.log(uniqueAppliancesArray);

// Création de la liste des ingrédients
const appliancesListContainer = document.querySelector(
  "#appareils-dropdown-menu"
);
uniqueAppliancesArray.forEach((appliance) => {
  const applianceItem = document.createElement("li");
  applianceItem.setAttribute("class", "appareils-item text-nowrap");
  applianceItem.textContent = appliance;
  appliancesListContainer.appendChild(applianceItem);
});

// GESTION DES CHOIX DES APPAREILS
// Récupération de la liste des appareils
const appareilsItems = document.querySelectorAll(".appareils-item");

appareilsItems.forEach((appareil) => {
  appareil.addEventListener("click", function () {
    const allSelectedItemsContainer = document.querySelector(
      "#appareils-choices-container"
    );
    const selectedItemContainer = document.createElement("div");
    selectedItemContainer.setAttribute(
      "class",
      "selected-choices-container appareils-selected-choices-container"
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
