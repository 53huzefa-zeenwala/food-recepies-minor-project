import { useState, useEffect } from "react";
import Recipes from "../components/Recipes";
import "../App.css";
import { Navbar } from "../components/Navbar";
import { fetchRandomData, fetchSearchQueryData } from "../utils/FetchApi";
import Image from "../assets/chef.jpg";

const Home = () => {
  // const APP_ID = "e9608c68"

  // const API_KEY = "0e979af04124ba996ad3ed69811fa813"

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const data = await (query.length == 0
      ? fetchRandomData()
      : fetchSearchQueryData(query));

    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <Navbar
        getData={(search) => {
          console.log(search);
          if (query != search) {
            setQuery(search);
          }
        }}
      />
      <span className="h-20 block"></span>
      {/* <form onSubmit={getSearch} className='search-form' >
          <input onChange={updateSearch} className='search-bar' value={search} type='text'/>
          <button 
           className='search-button'
           type='submit'> Search   
             </button>
        </form> */}
      <section className="sm:mt-6 lg:mt-8 mt-4 max-w-7xl mx-auto pr-4 sm:pr-6 lg:pr-8">
        <div className="my-6 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-4 lg:mt-10 lg:pr-8 xl:mt-12 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
          <div className="sm:text-center lg:text-left my-auto">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Cook Like a Pro with Our </span>
              <span className="block text-indigo-600 xl:inline">
                Easy and Tasty Recipies
              </span>
            </h1>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>

          <div className="lg:inset-y-0 lg:right-0 w-1/2 my-4">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={Image}
              alt=""
            />
          </div>
        </div>
      </section>
      <div className="grid grid-rows-1 sm:grid-rows-2 md:grid-cols-3 xl:grid-rows-4 gap-4 mx-4">
        {recipes != undefined && recipes != null
          ? recipes?.map((recipe, index) => (
              <Recipes
                key={index}
                labels={[
                  ...(recipe.recipe?.mealType ?? []),
                  ...(recipe.recipe?.cuisineType ?? []),
                  ...(recipe.recipe?.dishType ?? []),
                  ...(recipe.recipe?.healthLabels ?? []),
                ]}
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
  );
};

export default Home;
