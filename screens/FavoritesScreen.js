import React from "react";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList";

const FavoritesScreen = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <MealsList listData={favMeals} navigation={props.navigation} />;
};

export default FavoritesScreen;
