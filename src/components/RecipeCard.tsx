import { Link } from "react-router-dom";

type Recipe = {
  id: number;
  name: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  image: string;
  ingredients: string[];
  instructions: string[];
};

type RecipeCardProps = {
  recipe: Recipe;
};

function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link to={`/recipe/${recipe.id}`} className="recipe-card-link">
      <article className="recipe-card">
        <img src={recipe.image} alt={recipe.name} />

        <div className="recipe-card-content">
          <h2>{recipe.name}</h2>
          <p>Préparation : {recipe.prepTimeMinutes} minutes</p>
        </div>
      </article>
    </Link>
  );
}

export default RecipeCard;
