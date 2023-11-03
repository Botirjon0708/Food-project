import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

import MealList from "../components/mealList/MealList";
import Preloader from "../components/preloader/Preloader";
import { getFilteredCategory } from "../api";

const Category = () => {
  const { name } = useParams();

  const { goBack } = useHistory();

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <title>Food</title>
      </Helmet>
      <button className="btn" onClick={goBack}>
        Go back
      </button>
      <div>{!meals.length ? <Preloader /> : <MealList meals={meals} />}</div>
    </>
  );
};

export default Category;
