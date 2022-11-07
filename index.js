// Récupération des recettes
async function getRecipes() {
    const jsonUrl = 'json/recettes.js'
    const res = await fetch(jsonUrl)
    const json = await res.json()
    console.log(json)
}
getRecipes()