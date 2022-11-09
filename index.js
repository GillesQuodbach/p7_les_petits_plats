//! Dropdown ingredients
// Récupération des recettes
const ingredientsDropdownCaret = document.querySelector('#ingredients-dropdown-caret');
const ingredientsDropdownButton = document.querySelector('#ingredients-btn');
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

//! Dropdown appareils
// Récupération des recettes
const appareilsDropdownCaret = document.querySelector('#appareils-dropdown-caret');
const appareilsDropdownButton = document.querySelector('#appareils-btn');
const appareilsDropdownMenu = document.querySelector('#appareils-dropdown-menu');
// target = element that triggered event; currentTarget = element that listens to event
appareilsDropdownButton.addEventListener('mouseover', () => {
  appareilsDropdownButton.classList.add('show');
  appareilsDropdownMenu.classList.add('show');
  appareilsDropdownCaret.classList.add('reverse');
});
appareilsDropdownButton.addEventListener('mouseout', () => {
  appareilsDropdownButton.classList.remove('show');
  appareilsDropdownMenu.classList.remove('show');
  appareilsDropdownCaret.classList.remove('reverse');
});
appareilsDropdownMenu.addEventListener('mouseover', () => {
  appareilsDropdownButton.classList.add('show');
  appareilsDropdownMenu.classList.add('show');
  appareilsDropdownCaret.classList.add('reverse');
});
appareilsDropdownMenu.addEventListener('mouseout', () => {
  appareilsDropdownButton.classList.remove('show');
  appareilsDropdownMenu.classList.remove('show');
  appareilsDropdownCaret.classList.remove('reverse');
});

//! Dropdown ustensiles
// Récupération des recettes
const ustensilesDropdownCaret = document.querySelector('#ustensiles-dropdown-caret');
const ustensilesDropdownButton = document.querySelector('#ustensiles-btn');
const ustensilesDropdownMenu = document.querySelector('#ustensiles-dropdown-menu');
// target = element that triggered event; currentTarget = element that listens to event
ustensilesDropdownButton.addEventListener('mouseover', () => {
  ustensilesDropdownButton.classList.add('show');
  ustensilesDropdownMenu.classList.add('show');
  ustensilesDropdownCaret.classList.add('reverse');
});
ustensilesDropdownButton.addEventListener('mouseout', () => {
  ustensilesDropdownButton.classList.remove('show');
  ustensilesDropdownMenu.classList.remove('show');
  ustensilesDropdownCaret.classList.remove('reverse');
});
ustensilesDropdownMenu.addEventListener('mouseover', () => {
  ustensilesDropdownButton.classList.add('show');
  ustensilesDropdownMenu.classList.add('show');
  ustensilesDropdownCaret.classList.add('reverse');
});
ustensilesDropdownMenu.addEventListener('mouseout', () => {
  ustensilesDropdownButton.classList.remove('show');
  ustensilesDropdownMenu.classList.remove('show');
  ustensilesDropdownCaret.classList.remove('reverse');
});
