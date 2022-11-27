//Création des tableaux des ingredients
const getAppareilsArray = [];
//Liste des appareils
const appareilsListContainer = document.querySelector(
  "#appareils-dropdown-menu"
);
// Récupération des ingrédients
recipes.forEach((recipe) => getAppareilsArray.push(recipe.appliance));
// console.log(getAppliancesArray);
// Aplatissage du tableau
const flatAppareilArray = getAppareilsArray.flat(3);
// console.log(flatAppliancesArray);

//Suppression des doublons
const uniqueAppareilsArray = Array.from(new Set(flatAppareilArray));

//Mise dans l'ordre alphabétique
const orderedAppareilsArray = orderChoices(uniqueAppareilsArray);

console.log(uniqueAppareilsArray);

function orderChoices(data) {
  const orderedData = data.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  return orderedData;
}
// Création de la liste des ingrédients

orderedAppareilsArray.forEach((appliance) => {
  const applianceItem = document.createElement("li");
  applianceItem.setAttribute("class", "appareils-item text-nowrap");
  applianceItem.textContent = appliance;
  appareilsListContainer.appendChild(applianceItem);
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
      appareilsListContainer.appendChild(appareil);
      cardsGallery.innerHTML = "";
      createCardList(orderedRecipes);
    });
    appareil.remove();
  });
});
