// Récupération des recettes
async function getRecipes() {
    const jsonUrl = 'json/recettes.js'
    const res = await fetch(jsonUrl)
    const json = await res.json()
    console.log(json)
}
getRecipes()

const dropdownCaret = document.querySelector('.caret')
const dropdownButton = document.querySelector('.dropdown-button')
const dropdownMenu = document.querySelector('.dropdown-list')
// target = element that triggered event; currentTarget = element that listens to event
dropdownButton.addEventListener('mouseover', function (e) {
    dropdownButton.classList.add('show')
    dropdownMenu.classList.add('show')
    dropdownCaret.classList.add('reverse')
})
dropdownButton.addEventListener('mouseout', function (e) {
    dropdownButton.classList.remove('show')
    dropdownMenu.classList.remove('show')
    dropdownCaret.classList.remove('reverse')
})
dropdownMenu.addEventListener('mouseover', function (e) {
    dropdownButton.classList.add('show')
    dropdownMenu.classList.add('show')
    dropdownCaret.classList.add('reverse')
})
dropdownMenu.addEventListener('mouseout', function (e) {
    dropdownButton.classList.remove('show')
    dropdownMenu.classList.remove('show')
    dropdownCaret.classList.remove('reverse')
})