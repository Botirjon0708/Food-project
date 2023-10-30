

import CategoryItem from "../categoryItem/CategoryItem";

import "./categoryList.css";
const CategoryList = ({ catalog = [] }) => {



  return (
  
    <div className="list">
      {catalog.map((el) => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
    </div>
  
  );
};

export default CategoryList;
