// GESTION DES CHOIX DES INGREDIENTS
// Récupération de la liste des ingrédients
const ingredientsItems = document.querySelectorAll(".ingredients-item");

ingredientsItems.forEach((ingredient) => {
  ingredient.addEventListener("click", function () {
    const allSelectedItemsContainer = document.querySelector(
      "#ingredients-dropdown-container"
    );
    const selectedItemContainer = document.createElement("div");
    selectedItemContainer.setAttribute(
      "class",
      "selected-choices-container ingredients-selected-choices-container"
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
    console.log(this.textContent);

    // * Suppression du HASHTAG
    selectedItemContainer.addEventListener("click", (e) => {
      e.currentTarget.remove(this);
    });
  });
});

// GESTION DES CHOIX DES APPAREILS
// Récupération de la liste des appareils
const appareilsItems = document.querySelectorAll(".appareils-item");

appareilsItems.forEach((appareil) => {
  appareil.addEventListener("click", function () {
    const allSelectedItemsContainer = document.querySelector(
      "#appareils-dropdown-container"
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
    console.log(this.textContent);

    // * Suppression du HASHTAG
    selectedItemContainer.addEventListener("click", (e) => {
      console.log(this.textContent);
      e.currentTarget.remove(this);
    });
  });
});

// GESTION DES CHOIX DES USTENSILES
// Récupération de la liste des ustensiles
const ustensilesItems = document.querySelectorAll(".ustensiles-item");

ustensilesItems.forEach((ustensile) => {
  ustensile.addEventListener("click", function () {
    const allSelectedItemsContainer = document.querySelector(
      "#ustensiles-dropdown-container"
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
    console.log(this.textContent);

    // * Suppression du HASHTAG
    selectedItemContainer.addEventListener("click", (e) => {
      console.log(this.textContent);
      e.currentTarget.remove(this);
    });
  });
});

//SUPPRESSION D'UN HASHTAG
const ingredientHashtagContainer = document.querySelector(
  "#ingredients-dropdown-container"
);
const appareilsHashtagContainer = document.querySelector(
  "#appareils-dropdown-container"
);
const ustensilesHashtagContainer = document.querySelector(
  "#ustensiles-dropdown-container"
);
