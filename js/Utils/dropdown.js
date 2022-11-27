//! Dropdown ingredients
// Récupération des recettes
const ingredientsDropdownCaret = document.querySelector(
  "#ingredients-dropdown-caret"
);
const ingredientsDropdownButton = document.querySelector("#ingredients-btn");
const ingredientsDropdownMenu = document.querySelector(
  "#ingredients-dropdown-menu"
);
const ingredientsDropdownInput = document.getElementById("input-ingredients");

// target = element that triggered event; currentTarget = element that listens to event
ingredientsDropdownButton?.addEventListener("mouseover", () => {
  ingredientsDropdownButton.classList.add("show");
  ingredientsDropdownMenu.classList.add("show");
  ingredientsDropdownCaret.classList.add("reverse");
  if (ingredientsDropdownButton.classList.contains("show")) {
    ingredientsDropdownInput.value = "";
  }
});
ingredientsDropdownButton?.addEventListener("mouseout", () => {
  ingredientsDropdownButton.classList.remove("show");
  ingredientsDropdownMenu.classList.remove("show");
  ingredientsDropdownCaret.classList.remove("reverse");
  if (!ingredientsDropdownButton.classList.contains("show")) {
    ingredientsDropdownInput.value = "Ingrédients";
  }
});
ingredientsDropdownMenu?.addEventListener("mouseover", () => {
  ingredientsDropdownButton.classList.add("show");
  ingredientsDropdownMenu.classList.add("show");
  ingredientsDropdownCaret.classList.add("reverse");
  if (ingredientsDropdownMenu.classList.contains("show")) {
    ingredientsDropdownInput.value = "";
  }
});
ingredientsDropdownMenu?.addEventListener("mouseout", () => {
  ingredientsDropdownButton.classList.remove("show");
  ingredientsDropdownMenu.classList.remove("show");
  ingredientsDropdownCaret.classList.remove("reverse");
  if (!ingredientsDropdownMenu.classList.contains("show")) {
    ingredientsDropdownInput.value = "Ingrédients";
  }
});

//! Dropdown appareils
// Récupération des recettes
const appareilsDropdownCaret = document.querySelector(
  "#appareils-dropdown-caret"
);
const appareilsDropdownButton = document.querySelector("#appareils-btn");
const appareilsDropdownMenu = document.querySelector(
  "#appareils-dropdown-menu"
);
const appareilsDropdownInput = document.getElementById("input-appareils");

// target = element that triggered event; currentTarget = element that listens to event
appareilsDropdownButton.addEventListener("mouseover", () => {
  appareilsDropdownButton.classList.add("show");
  appareilsDropdownMenu.classList.add("show");
  appareilsDropdownCaret.classList.add("reverse");
  if (appareilsDropdownButton.classList.contains("show")) {
    appareilsDropdownInput.value = "";
  }
});
appareilsDropdownButton.addEventListener("mouseout", () => {
  appareilsDropdownButton.classList.remove("show");
  appareilsDropdownMenu.classList.remove("show");
  appareilsDropdownCaret.classList.remove("reverse");
  if (!appareilsDropdownButton.classList.contains("show")) {
    appareilsDropdownInput.value = "Appareils";
  }
});
appareilsDropdownMenu.addEventListener("mouseover", () => {
  appareilsDropdownButton.classList.add("show");
  appareilsDropdownMenu.classList.add("show");
  appareilsDropdownCaret.classList.add("reverse");
  if (appareilsDropdownMenu.classList.contains("show")) {
    appareilsDropdownInput.value = "";
  }
});
appareilsDropdownMenu.addEventListener("mouseout", () => {
  appareilsDropdownButton.classList.remove("show");
  appareilsDropdownMenu.classList.remove("show");
  appareilsDropdownCaret.classList.remove("reverse");
  if (!appareilsDropdownMenu.classList.contains("show")) {
    appareilsDropdownInput.value = "Appareils";
  }
});

//! Dropdown ustensiles
// Récupération des recettes
const ustensilesDropdownCaret = document.querySelector(
  "#ustensiles-dropdown-caret"
);
const ustensilesDropdownButton = document.querySelector("#ustensiles-btn");
const ustensilesDropdownMenu = document.querySelector(
  "#ustensiles-dropdown-menu"
);
const ustensilesDropdownInput = document.getElementById("input-ustensiles");

// target = element that triggered event; currentTarget = element that listens to event
ustensilesDropdownButton.addEventListener("mouseover", () => {
  ustensilesDropdownButton.classList.add("show");
  ustensilesDropdownMenu.classList.add("show");
  ustensilesDropdownCaret.classList.add("reverse");
  if (ustensilesDropdownButton.classList.contains("show")) {
    ustensilesDropdownInput.value = "";
  }
});
ustensilesDropdownButton.addEventListener("mouseout", () => {
  ustensilesDropdownButton.classList.remove("show");
  ustensilesDropdownMenu.classList.remove("show");
  ustensilesDropdownCaret.classList.remove("reverse");
  if (!ustensilesDropdownButton.classList.contains("show")) {
    ustensilesDropdownInput.value = "Ustensiles";
  }
});
ustensilesDropdownMenu.addEventListener("mouseover", () => {
  ustensilesDropdownButton.classList.add("show");
  ustensilesDropdownMenu.classList.add("show");
  ustensilesDropdownCaret.classList.add("reverse");
  if (ustensilesDropdownMenu.classList.contains("show")) {
    ustensilesDropdownInput.value = "";
  }
});
ustensilesDropdownMenu.addEventListener("mouseout", () => {
  ustensilesDropdownButton.classList.remove("show");
  ustensilesDropdownMenu.classList.remove("show");
  ustensilesDropdownCaret.classList.remove("reverse");
  if (!ustensilesDropdownMenu.classList.contains("show")) {
    ustensilesDropdownInput.value = "Ustensiles";
  }
});
