import React from "react";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList";
import { View, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText";

const CategoryMealsScreen = (props) => {
  const catId = props.route.params?.categoryId;

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.screen}>
        <DefaultText>
          There are no meals in this category, this could be due to your filters
        </DefaultText>
      </View>
    );
  }

  return <MealsList listData={displayedMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});

export default CategoryMealsScreen;
