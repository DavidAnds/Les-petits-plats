const searchInput = document.querySelector('.search_input')
let recipesArray = recipes
let recipesFiltered = []


// Algorythm for the search input
function searchRecipe (recipes, inputValue) {
  recipesFiltered = []

  if (inputValue.length < 3) {
    removeAll()
    removeNoRecipe()
    displayError()
    displayAll(recipesArray)
    console.log(recipesFiltered)

  } else {
    removeError()

    recipes.forEach(recipe => {
      const name = recipe.name.toLowerCase()
      const description = recipe.description.toLowerCase()
      const ingredients = recipe.ingredients
      const value = inputValue.toLowerCase()

      if(recipesFiltered.filter(e => e.name.toLowerCase() === name).length < 1){
        
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
      console.log(recipesFiltered)
    } else {
      removeAll()
      removeNoRecipe()
      displayAll(recipesFiltered)
      console.log(recipesFiltered)
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



