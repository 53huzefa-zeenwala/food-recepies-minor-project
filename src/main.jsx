import React from "react";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Cuisines from "./pages/Cuisines";
import MealType from "./pages/MealType";
import DishType from "./pages/DishType";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "cuisine/:cuisineType",
    element: <Cuisines />,
  },
  {
    path: "mealtype/:mealType",
    element: <MealType />,
  },
  {
    path: "dishtype/:dishType",
    element: <DishType />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
