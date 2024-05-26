import axios from "axios";

const BaseUrl = "https://api.edamam.com/api/recipes/v2";

const API_KEY = import.meta.env.VITE_FOOD_API_KEY;
const APP_ID = import.meta.env.VITE_FOOD_API_APP_ID;

export const fetchSearchQueryData = async (query) => {
  try {
    const { data } = await axios.get(BaseUrl, {
      params: {
        q: query,
        app_id: `${APP_ID}`,
        app_key: `${API_KEY}`,
        type: "public",
      },
      headers: {
        "Access-Control-Allow-Credentials": "true",
      },
    });

    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchRandomData = async () => {
  try {
    const { data } = await axios.get(BaseUrl, {
      params: {
        random: "true",
        health: "vegetarian",
        app_id: `${APP_ID}`,
        app_key: `${API_KEY}`,
        type: "public",
      },
      headers: {
        "Access-Control-Allow-Credentials": "true",
      },
    });

    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchCuisinesData = async (type, query) => {
  try {
    const { data } = await axios.get(BaseUrl, {
      params: {
        cuisineType: type ?? "Indian",
        app_id: `${APP_ID}`,
        app_key: `${API_KEY}`,
        type: "public",
        q: query ?? "",
      },
      headers: {
        "Access-Control-Allow-Credentials": "true",
      },
    });

    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const fetchMealTypeData = async (type, query) => {
    try {
      const { data } = await axios.get(BaseUrl, {
        params: {
          mealType: type ?? "Dinner",
          app_id: `${APP_ID}`,
          app_key: `${API_KEY}`,
          type: "public",
          q: query ?? "",
        },
        headers: {
          "Access-Control-Allow-Credentials": "true",
        },
      });
  
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  
  export const fetchDishTypeData = async (type, query) => {
    try {
      const { data } = await axios.get(BaseUrl, {
        params: {
          dishType: type ?? "Dinner",
          app_id: `${APP_ID}`,
          app_key: `${API_KEY}`,
          type: "public",
          q: query ?? "",
        },
        headers: {
          "Access-Control-Allow-Credentials": "true",
        },
      });
  
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  