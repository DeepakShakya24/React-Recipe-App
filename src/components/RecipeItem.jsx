import React from "react";
import uuid from "react-uuid";
import loader from "./img/Glowing ring.gif";
import RecipeGrid from "./RecipeGrid";
const RecipeItem = ({ recipeArray, loading }) => {
  return loading ? (
    <div className="col-md-12 img-div" align="center">
      <img src={loader} alt="loader" />
    </div>
  ) : (
    <section className="recipe-grid">
      <div className="container-fluid">
        <div className="row">
          {recipeArray.map((element) => (
            <RecipeGrid
              key={uuid()}
              loading={loading}
              label={element.recipe.label}
              image={element.recipe.image}
              calories={element.recipe.calories}
              dietLabels={element.recipe.dietLabels}
              cuisineType={element.recipe.cuisineType}
              ingredient={element.recipe.ingredientLines}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeItem;
