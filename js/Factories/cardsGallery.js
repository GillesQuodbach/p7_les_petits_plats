
//Listener du dropdown ingredient

// //DROPDOWN INGREDIENT ================================================
// inputDropdonwIngredients.addEventListener("input", dropdownIngredientsFilter);
// function dropdownIngredientsFilter() {
//   const dropdownIngredientInputValue =
//     inputDropdonwIngredients.value.toLowerCase();
//   newIngredientList = allIngredientsList.filter((ingredient) => ingredient.toLowerCase().includes(dropdownIngredientInputValue));
//   ingredientsListContainer.innerHTML = "";
//   createIngredientsList(newIngredientList);
//   addChoiceButton(newIngredientList);
// }
// function createIngredientsList(array) {
//   array.forEach((ingredientInList) => {
//     const displayedIngredientsItem = document.createElement("li");
//     displayedIngredientsItem.setAttribute(
//       "class",
//       "dropdown-list-item ingredients-item text-nowrap"
//     );
//     displayedIngredientsItem.textContent = ingredientInList;
//     ingredientsListContainer.appendChild(displayedIngredientsItem);
//   });
// }