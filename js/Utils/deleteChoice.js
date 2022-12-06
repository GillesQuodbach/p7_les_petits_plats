function deleteChoiceButton(array) {
  const clickedChoices = document.querySelectorAll(
    ".selected-choices-container"
  );
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
      // console.log(tousLesChoixRestant);

      if (tousLesChoixRestant.length === 0) {
        searchBarreFilter();
      } else {
        tousLesChoixRestant.forEach((choice) => {
          if (choice.parentElement.className.includes("ingredients")) {
            // console.log("INGREDIENT");
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
            // console.log("APPAREILS");
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
            // console.log("USTENSILES");
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