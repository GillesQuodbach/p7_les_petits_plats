// Récupération des recettes
const ingredientsDropdownCaret = document.querySelector('#ingredients-dropdown-caret');
const ingredientsDropdownButton = document.querySelector('.ingredients-button');
const ingredientsDropdownMenu = document.querySelector('#ingredients-dropdown-menu');
// target = element that triggered event; currentTarget = element that listens to event
ingredientsDropdownButton.addEventListener('mouseover', () => {
  ingredientsDropdownButton.classList.add('show');
  ingredientsDropdownMenu.classList.add('show');
  ingredientsDropdownCaret.classList.add('reverse');
});
ingredientsDropdownButton.addEventListener('mouseout', () => {
  ingredientsDropdownButton.classList.remove('show');
  ingredientsDropdownMenu.classList.remove('show');
  ingredientsDropdownCaret.classList.remove('reverse');
});
ingredientsDropdownMenu.addEventListener('mouseover', () => {
  ingredientsDropdownButton.classList.add('show');
  ingredientsDropdownMenu.classList.add('show');
  ingredientsDropdownCaret.classList.add('reverse');
});
ingredientsDropdownMenu.addEventListener('mouseout', () => {
  ingredientsDropdownButton.classList.remove('show');
  ingredientsDropdownMenu.classList.remove('show');
  ingredientsDropdownCaret.classList.remove('reverse');
});

// Modification placerholder

const dropdownPlaceholder = document.querySelector('.dropdown-inputs');

console.log(dropdownPlaceholder);
