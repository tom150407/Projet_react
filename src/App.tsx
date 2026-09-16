import "./App.css";
import RecipeCard from "./components/RecipeCard";
import recipesData from "./data/recipes.json";

function App() {
  const recipes = recipesData.recipes;

  return (
    <main>
      <h1>Catalogue de recettes</h1>

      <h2>Prénom NOM</h2>

      <section className="recipes-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </section>
    </main>
  );
}

export default App;
