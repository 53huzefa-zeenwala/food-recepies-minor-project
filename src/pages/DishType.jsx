import {useState, useEffect} from 'react'
import Recipes from '../components/Recipes'
import "../App.css"  
import { Navbar } from '../components/Navbar'
import { fetchDishTypeData } from '../utils/FetchApi'
import { useParams } from 'react-router-dom'

const DishType = () => {
    // const APP_ID = "e9608c68"
  
    // const API_KEY = "0e979af04124ba996ad3ed69811fa813"
    const {dishType} = useParams();

  
    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('')
  
    useEffect(() => {
           getRecipes()
    },[query])
  
    const getRecipes = async () => {
      const data = await fetchDishTypeData(dishType ?? [], query);

      console.log("hits", data.hits)
  
      setRecipes(data.hits);
    }
  
    return (
      <div className='App'>
        <Navbar  getData={(search) => {
          console.log(search);
          if (query != search) {
            setQuery(search);
          }
        }}/>
        <span className='h-20 block'></span>
        {/* <form onSubmit={getSearch} className='search-form' >
          <input onChange={updateSearch} className='search-bar' value={search} type='text'/>
          <button 
           className='search-button'
           type='submit'> Search
             </button>
        </form> */}
        <div className="grid grid-rows-1 sm:grid-rows-2 md:grid-cols-3 xl:grid-rows-4 gap-4 mx-4">
        {recipes != undefined && recipes != null
          ? recipes?.map((recipe, index) => (
              <Recipes
                key={index}
                labels={[...(recipe.recipe?.cuisineType ?? []), ...(recipe.recipe?.mealType ?? []), ...(recipe.recipe?.healthLabels ?? [])]}
                title={recipe.recipe?.label}
                calories={recipe.recipe?.calories}
                image={recipe.recipe?.image}
                // ingredients={recipe.recipe?.ingredients}
                nutrients={recipe.recipe.totalNutrients}
              />
            ))
          : null}
      </div>
        </div>
    )
  
}

export default DishType