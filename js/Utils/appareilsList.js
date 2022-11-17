//Création des tableaux des ingredients
const getAppliancesArray = [];

// Récupération des ingrédients
recipes.forEach((recipe) => getAppliancesArray.push(recipe.appliance));
// console.log(getAppliancesArray);
// Aplatissage du tableau
const flatAppliancesArray = getAppliancesArray.flat(3);
console.log(flatAppliancesArray);

//Suppression des doublons
const uniqueAppliancesArray = Array.from(new Set(flatAppliancesArray));
console.log(uniqueAppliancesArray);

// Création de la liste des ingrédients
const appliancesListContainer = document.querySelector(
  "#appareils-dropdown-menu"
);
uniqueAppliancesArray.forEach((appliance) => {
  const applianceItem = document.createElement("li");
  applianceItem.setAttribute("class", "appareils-item text-nowrap");
  applianceItem.textContent = appliance;
  appliancesListContainer.appendChild(applianceItem);
});
