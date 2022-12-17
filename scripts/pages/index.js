const searchInput = document.querySelector('.search_input')
let recipesArray = recipes

// Algorythm for the search input
function searchRecipe (recipes, inputValue) {
  let recipesFiltered = []

  if (inputValue.length < 3) {
    removeNoRecipe()
    displayError()
    displayAll(recipesArray)

  } else {
    removeError()

    recipes.forEach(recipe => {
      const name = recipe.name.toLowerCase()
      const description = recipe.description.toLowerCase()
      const ingredients = recipe.ingredients
      const value = inputValue.toLowerCase()

      if(recipesFiltered.filter(e => e.name.includes(name)).length < 1){
        
        if(description.includes(value)) {
          recipesFiltered.push(recipe)
        } else if(name.includes(value)){
          recipesFiltered.push(recipe)
        } else {
          ingredients.forEach(ingredient => {
            const ingredientName = ingredient.ingredient.toLowerCase()
            if(ingredientName.includes(value)) {
              recipesFiltered.push(recipe)
            }
          })
        }
      }
    })

    if(recipesFiltered.length < 1) {
      removeAll()
      displayNoRecipe()
    } else {
      removeAll()
      removeNoRecipe()
      displayAll(recipesFiltered)
      recipesArray = recipesFiltered
    }
  }
}

function init () {
  displayAll(recipesArray)

  searchInput.addEventListener('input', () => {
    searchRecipe(recipesArray, searchInput.value)
  })
  searchInput.addEventListener('blur', () => {
    searchRecipe(recipesArray, searchInput.value)
  })
}
  
init()



