const searchInput = document.querySelector('.search_input')
let recipesArray = recipes
let recipesFiltered = [...recipes]
let recipesTags = [...recipes]
let tags = []

// Algorythm for the search input
function searchRecipe(recipes, inputValue) {
    recipesFiltered = []

    if (inputValue.length < 3) {
        removeAll()
        removeNoRecipe()
        displayError()
        recipesFiltered = [...recipesArray]
        showRecipe(recipesFiltered)
    } else {
        removeError()

        for (let i = 0; i < recipes.length - 1; i++) {
            const name = recipes[i].name.toLowerCase()
            const description = recipes[i].description.toLowerCase()
            const ingredients = recipes[i].ingredients
            const value = inputValue.toLowerCase()

            if (description.includes(value)) {
                recipesFiltered.push(recipes[i])
            } else if (name.includes(value)) {
                recipesFiltered.push(recipes[i])
            } else {
                for (let i = 0; i < ingredients.length - 1; i++) {
                    const ingredientName =
                        ingredients[i].ingredient.toLowerCase()
                    if (ingredientName.includes(value)) {
                        recipesFiltered.push(recipes[i])
                    }
                }
            }
        }

        showRecipe(recipesFiltered)
    }
}

function tagSearch(recipes) {
    recipesTags = []
    if (tags.length === 0) {
        recipesTags = [...recipesArray]
    }

    // tags.forEach(tag =>  {
    //     recipesTags =
    // })

    tags.forEach((tag) => {
        recipes.forEach((recipe) => {
            const appliance = recipe.appliance.toLowerCase()
            const ingredients = recipe.ingredients
            const ustensils = recipe.ustensils

            if (
                recipesTags.filter((e) => e.name.toLowerCase() === name)
                    .length < 1
            ) {
                if (appliance.includes(tag)) {
                    recipesTags.push(recipe)
                }

                ingredients.forEach((ingredient) => {
                    if (ingredient.ingredient.toLowerCase() === tag) {
                        recipesTags.push(recipe)
                    }
                })

                ustensils.forEach((ustensil) => {
                    if (ustensil.toLowerCase() === tag) {
                        recipesTags.push(recipe)
                    }
                })
            }
        })
    })

    showRecipe(recipesTags)
}

function addTag(name, type) {
    tags.push(name)
    displayTag(name, type)
    tagSearch(recipesArray)
    tagListener()
}

function removeTag(btn) {
    const tag = btn.parentElement
    const name = tag.querySelector('.tag_name').innerText
    console.log(tag, name)

    tag.remove()
    tags = tags.filter((tag) => tag !== name)
    console.log(tags)
    tagSearch(recipesArray)
}

function showRecipe(recipes) {
    if (recipes.length < 1) {
        removeAll()
        displayNoRecipe()
    } else {
        removeAll()
        removeNoRecipe()
        let recipesConditions = []
        recipesFiltered.forEach((filterElement) => {
            recipesTags.forEach((tagElement) => {
                if (
                    filterElement.id === tagElement.id &&
                    recipesConditions.filter(
                        (conditionsElement) =>
                            conditionsElement.id === filterElement.id
                    ).length < 1
                ) {
                    recipesConditions.push(filterElement)
                }
            })
        })
        displayAll(recipesConditions)
        dropDownBtnListener()
    }
}

function dropDownBtnListener() {
    const dropDownBtns = document.querySelectorAll('.dropdown_item')

    dropDownBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            addTag(btn.innerText, btn.classList[1])
        })
    })
}

function tagListener() {
    const tagBtns = document.querySelectorAll('.tag_btn')

    tagBtns.forEach((btn) =>
        btn.addEventListener('click', () => removeTag(btn))
    )
}

function init() {
    displayAll(recipesArray)

    searchInput.addEventListener('input', () => {
        searchRecipe(recipesArray, searchInput.value)
    })
    searchInput.addEventListener('blur', () => {
        searchRecipe(recipesArray, searchInput.value)
    })

    dropDownBtnListener()
}

init()
