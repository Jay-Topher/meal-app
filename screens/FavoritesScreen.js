import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList";
import DefaultText from "../components/DefaultText";

const FavoritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.screen}>
        <DefaultText>No Favorite meals found. Start adding some!</DefaultText>
      </View>
    );
  }

  return <MealsList listData={favMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FavoritesScreen;
