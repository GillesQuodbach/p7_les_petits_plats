//Gallery
const searchResult = document.querySelector("#recipes-gallery");

//Liste des recettes
// Ordonnancement de la liste des recettes
let orderedRecipesArray = orderList(recipes);

function orderList(data) {
  const orderedData = data.sort((a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    return 0;
  });
  return orderedData;
}
orderList(recipes);
console.log(orderedRecipesArray);

// Tri des recettes
const searchInput = document.querySelector("#main-search-input");

searchInput.addEventListener("input", filterData);

function filterData(e) {
  // searchResult.innerHTML = "";
  // const searchedString = e.target.value.toLowerCase().replace(/\s/g, "");
  // const filteredArr = orderedRecipesArray.filter((el) =>
  //   el.name.toLowerCase().includes(searchedString)
  // );

  console.log(e);
}
