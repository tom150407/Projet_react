import { useParams } from "react-router-dom";
import recipesData from "../data/recipes.json";

function Recipe() {
  const { id } = useParams();

  const recipe = recipesData.recipes.find((recipe) => recipe.id === Number(id));

  if (!recipe) {
    return <h1>Recette introuvable</h1>;
  }

  return (
    <main className="recipe-detail">
      <img
        className="recipe-detail-image"
        src={recipe.image}
        alt={recipe.name}
      />

      <p>Temps de préparation : {recipe.prepTimeMinutes} minutes</p>

      <h2>Ingrédients</h2>

      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2>Étapes</h2>

      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </main>
  );
}

export default Recipe;
