let ingredientChoiceArray = [];
let testArray = [];
let testPutain = [];
window.onload = () => {
  const allIngredientsChoices = document.querySelectorAll(".ingredients-item");
  // console.log(allIngredientsChoices);

  //On récupère la liste de tout les ingredients
  allIngredientsChoices.forEach((choice) => {
    //Pour chaque choix, au clic...
    // choice.addEventListener("click", fileredIngredient);
  });
};

function filterIngr() {
  for (let i = 0; i < recipes.length; i++) {
    const recipesIngredientsList = recipes[i].ingredients;
    for (let j = 0; j < recipesIngredientsList.length; j++) {
      const allIndividualIngredient = recipesIngredientsList[j].ingredient;
      if (allIndividualIngredient === "Oeuf") {
        testPutain.push(recipes[i]);
      }
    }
  }
  console.log(testPutain);
}

filterIngr();
