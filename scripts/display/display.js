const allList = document.querySelectorAll('.dropdown_list')
const recipesBox = document.querySelector('.recipes')
const errorMsg = document.querySelector('.error-msg')
const noRecipe = document.querySelector('.no-recipe')
const tagContainer = document.querySelector('.tags_container')

function displayRecipe(recipes) {
    recipes.forEach((recipe) => {
        const recipeModel = recipeFactory(recipe)
        const recipeArticle = recipeModel.createRecipe()
        recipesBox.appendChild(recipeArticle)
    })
}

function displayIngredients(recipes) {
    let ingredientsArray = []
    const ingredientList = allList[0]

    recipes.forEach((recipe) => {
        const ingredients = recipe.ingredients
        ingredients.forEach((ingredient) => {
            const name = ingredient.ingredient.toLowerCase()
            if (name && !ingredientsArray.includes(name)) {
                ingredientsArray.push(name)
            }
        })
    })

    ingredientsArray.forEach((ingredient) => {
        const ingredientModel = dropdownItemFactory(ingredient, 'ingredient')
        const ingredientItem = ingredientModel.createDropdownItem()
        ingredientList.appendChild(ingredientItem)
    })
}

function displayAppliances(recipes) {
    let appliancesArray = []
    const applianceList = allList[1]

    recipes.forEach((recipe) => {
        const name = recipe.appliance.toLowerCase()
        if (name && !appliancesArray.includes(name)) {
            appliancesArray.push(name)
        }
    })

    appliancesArray.forEach((appliance) => {
        const applianceModel = dropdownItemFactory(appliance, 'appliance')
        const applianceItem = applianceModel.createDropdownItem()
        applianceList.appendChild(applianceItem)
    })
}

function displayUstensils(recipes) {
    let ustensilsArray = []
    const ustensilList = allList[2]

    recipes.forEach((recipe) => {
        const ustensils = recipe.ustensils
        ustensils.forEach((ustensil) => {
            const name = ustensil.toLowerCase()
            if (name && !ustensilsArray.includes(name)) {
                ustensilsArray.push(name)
            }
        })
    })

    ustensilsArray.forEach((ustensil) => {
        const ustensilModel = dropdownItemFactory(ustensil, 'ustensil')
        const ustensilItem = ustensilModel.createDropdownItem()
        ustensilList.appendChild(ustensilItem)
    })
}

function displayError() {
    errorMsg.style.display = 'block'
}

function displayNoRecipe() {
    noRecipe.style.display = 'block'
}

function displayAll(recipes) {
    displayRecipe(recipes)
    displayAppliances(recipes)
    displayIngredients(recipes)
    displayUstensils(recipes)
}

function removeError() {
    errorMsg.style.display = 'none'
}

function removeNoRecipe() {
    noRecipe.style.display = 'none'
}

function removeAll() {
    allList.forEach((list) => {
        list.innerHTML = ''
    })

    recipesBox.innerHTML = ''
}

function displayTag(tag, type) {
    const tagModel = dropdownItemFactory(tag, type)
    const tagItem = tagModel.createTag()
    tagContainer.appendChild(tagItem)
}
