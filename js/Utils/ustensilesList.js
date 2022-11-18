//Création des tableaux des ingredients
const getUstensilesArray = [];

// Récupération des ingrédients
recipes.forEach((recipe) => getUstensilesArray.push(recipe.ustensils));
// console.log(getAppliancesArray);
// Aplatissage du tableau
const flatUstensilesArray = getUstensilesArray.flat(3);
// console.log(flatUstensilesArray);

//Suppression des doublons
const uniqueUstensilesArray = Array.from(new Set(flatUstensilesArray));
// console.log(uniqueUstensilesArray);

// Création de la liste des ingrédients
const ustensilesListContainer = document.querySelector(
  "#ustensiles-dropdown-menu"
);
uniqueUstensilesArray.forEach((appliance) => {
  const ustensileItem = document.createElement("li");
  ustensileItem.setAttribute("class", "ustensiles-item text-nowrap");
  ustensileItem.textContent = appliance;
  ustensilesListContainer.appendChild(ustensileItem);
});
