import { useState, useEffect } from "react";
import { useParams, useHistory  } from "react-router-dom";
import { Helmet } from "react-helmet";

import Preloader from "../components/preloader/Preloader";
import { getMealById } from "../api";

import './recipe.css'

const Recipe = () => {
const {id} = useParams()
    const [ recipe, setRecipe ] = useState({})
const {goBack} = useHistory()

    const {
      strMeal,
      idMeal,
      strInstructions,
      strMealThumb,
      strCategory,
      strArea,
      strYoutube,
    } = recipe;
    
    useEffect(() => {
        getMealById(id)
            .then(data => {
            setRecipe(data.meals[0])
        })
        
    }, [id]);

    return (
      <>
        <Helmet>
        <meta
          name="description"
          content={`Recipe ${strMeal}`}
          />
        <title>{strMeal}</title>
          </Helmet>
        {!idMeal ? (
          <Preloader />
        ) : (
          <div className="recipe">
            <img className="img_recipe" src={strMealThumb} alt={strMeal} />
            <h1>{strMeal}</h1>
            <h6>Category:{strCategory}</h6>
            {strArea ? <h6>Area:{strArea}</h6> : null}
            {<p>{strInstructions}</p>}
            <table className="centered">
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(recipe).map((key) => {
                  if (key.includes("Ingredient") && recipe[key]) {
                    return (
                      <tr key={key}>
                        <td>{recipe[key]}</td>
                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    );
                  }

                  return null;
                })}
              </tbody>
            </table>
            {strYoutube ? (
              <div className="row">
                <h5>Video Recipe</h5>
                <iframe
                  className="iframe"
                  title={id}
                  src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
                  allowfullscreen
                />
              </div>
            ) : null}
          </div>
        )}
        <button className="btn" onClick={goBack}>
          Go Back
        </button>
      </>
    );
}

export default Recipe;