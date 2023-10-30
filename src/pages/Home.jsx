import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import Search from "../components/search/Search";
import { getAllCategories } from "../api";
import Preloader from "../components/preloader/Preloader";
import CategoryList from "../components/categoryList/CategoryList";


const Home = () => {
  const [ catalog, setCatalog ] = useState([])
  const [filteredCatalog, setFilteredCatalog] = useState([])

  const {pathname, search} = useLocation()
  const { push } = useHistory()

  const handleSearch  = (str) => {
    setFilteredCatalog(catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())))

    push({
      pathname,
    search: `?search=${str}`})
  }

  useEffect(() => {
    getAllCategories()
      .then(data => {
        setCatalog(data.categories)
        setFilteredCatalog( search ? data.categories.filter((item) =>
          item.strCategory
            .toLowerCase()
            .includes(search.split('=')[1].toLowerCase())
        ): data.categories
        )
      } )
    
},[search])
  
  

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
  

    
};

export default Home;
