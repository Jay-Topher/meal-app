import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CategoryMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>This is the Category Meals screen</Text>
      <Button
        title="Go to meal detail"
        onPress={() => props.navigation.navigate("MealDetails")}
      />
      <Button title="Go back" onPress={() => props.navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CategoryMealsScreen;
