import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"

export default function Main() {

    const [ingredients, setIngredients] = React.useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    )

    const [recipeShown, setRecipeShown] = React.useState(false)

    function handleSubmit(formData) {

        const newIngredient = formData.get("ingredient")

        setIngredients(prevIngredients=>[...prevIngredients, newIngredient])
    }

    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }

    return (
        <main>
            <form action={handleSubmit} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 &&
                <IngredientsList ingredients={ingredients} toggleRecipeShown={toggleRecipeShown} />
            }
            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}