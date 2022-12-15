function displayRecipe(data) {
    const recipes = document.querySelector('.recipes')

    data.forEach(recipe => {
        const recipeModel = recipeFactory(recipe)
        const recipeArticle = recipeModel.createRecipe()
        recipes.appendChild(recipeArticle)
    })
}