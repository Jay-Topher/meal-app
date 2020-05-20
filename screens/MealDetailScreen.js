import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const MealDetailScreen = (props) => {
  const mealId = props.route.params?.mealId;
  return (
    <View style={styles.screen}>
      <Text>This is the Meal Detail screen</Text>
      <Text>{mealId}</Text>
      <Button
        title="Go back to categories screen"
        onPress={() => props.navigation.popToTop()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MealDetailScreen;
