import React from "react"

export default function Main() {

    const [ingredients,setIngredients] = React.useState([])

    const ingredientsList = ingredients.map(function (ingredient) {
        return (<li key={ingredient}>{ingredient}</li>)
    })

    function handleSubmit(formData) {

        const newIngredient = formData.get("ingredient")

        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
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
            <ul>
                {ingredientsList}
            </ul>
        </main>
    )
}