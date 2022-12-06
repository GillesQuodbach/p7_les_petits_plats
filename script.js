//  Fonction d'affichage de la page
function display(data) {
  createCardList(data);
  addChoiceButton(data);
  createChoiceListe(data)
  deleteChoiceButton(data);
}
// ? Affichage de la galerie de cartes
display(recipes);