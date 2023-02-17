function recipeFactory(recipe) {
    const { name, time, description, ingredients } = recipe

    function createRecipe() {
        const article = document.createElement('article')
        article.className = 'recipe'

        article.innerHTML = `
        <div class="recipe_img-container">
        </div>
        <div class="recipe_text-container">
            <h2 class="recipe_title">
                ${name}
            </h2>
            <p class="recipe_duration">
                <i class="recipe_duration-icon fa-solid fa-clock"></i>
                ${time} min
            </p>
            <div class="recipe_ingredients">
                ${ingredients
                    .map((ingredient) => {
                        return ` 
                        <p class="ingredient">
                            <span class="ingredient_name">${
                                ingredient.ingredient
                            }:</span> ${
                            ingredient.quantity ? ingredient.quantity : ''
                        }${ingredient.unit ? ingredient.unit : ''}
                        </p>`
                    })
                    .join('\n')}
            </div>
            <p class="recipe_preparation">
                ${description}
            </p>
        </div>
        `

        return article
    }

    return { createRecipe }
}
