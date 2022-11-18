// On récupère la saisie dans la barre de recherche
const searchBarreInput = document.querySelector("#main-search-barre");
console.log(searchBarreInput);

searchBarreInput.addEventListener("keyup", (e) => {
  const userInput = e.target.value; //Lettres rentrées
  recipesFilter(userInput, recipes);
});
console.log(recipes);
//Fonction de recherche FILTER
function recipesFilter(inputs, array) {
  const { id, name, appliance, ingredients, ustensils } = array;
  if (inputs.length > 2) {
    for (let i = 0; i < array.length; i++)
      if (array.indexOf(inputs)) {
        console.log(id);
      } else {
        console.log("Aucun résultat !");
      }
  }
}

//OBSERVATION
//Noeud à observer
const cardsGallery = document.querySelector("#recipes-gallery");
//Config
const observerConfig = { childList: true, subtree: true };

//Fonction à exécuter si mutation

const observerFunction = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      console.log("Liste des cards a été modifiée");
    }
  }
};

// Création d'un lien entre l'observer et la fonction
const observer = new MutationObserver(observerFunction);

//Début de l'observation
observer.observe(cardsGallery, observerConfig);
