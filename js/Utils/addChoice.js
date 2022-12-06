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
  console.log(actualDisplayedCards) //OK
  //On récupère le choix cliqué
  // Pour chaque choix cliqué
  allChoiceList.forEach((choice) =>
    choice.addEventListener("click", (e) => {
      if (e.target.className.includes("ingredients")) {
        //Création du bouton de l'item choisi
        const selectedItemContainer = document.createElement("div");
        selectedItemContainer.setAttribute("class", "selected-choices-container ingredients-selected-choices-container");
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
        //Création de la nouvelle liste
        console.log(newArray)
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
        createChoiceListe(newArray)
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
