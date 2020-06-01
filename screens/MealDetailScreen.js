import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import DefaultText from "../components/DefaultText";
import { MEALS } from "../data/dummy-data";
import ListItem from "../components/ListItem";

const MealDetailScreen = (props) => {
  const mealId = props.route.params?.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      <View style={styles.ingredientsContainer}>
        {selectedMeal.ingredients.map((ingredient, index) => (
          <ListItem key={ingredient}>{`${index + 1}. ${ingredient}`}</ListItem>
        ))}
      </View>
      <View style={styles.ingredientsContainer}>
        <Text style={styles.title}>Steps</Text>
        {selectedMeal.steps.map((step, index) => (
          <ListItem key={step}>{`${index + 1}. ${step}`}</ListItem>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  title: {
    fontFamily: "open-sans-bold",
    textAlign: "center",
    fontSize: 18,
  },
  ingredientsContainer: {},
});

export default MealDetailScreen;
