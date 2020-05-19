import React from "react";
import { Platform } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";
import { CATEGORIES } from "../data/dummy-data";

const Stack = createStackNavigator();

function MealsNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : "#fff",
          },
          headerTintColor: Platform.OS === "ios" ? Colors.primaryColor : "#fff",
        }}
      >
        <Stack.Screen
          name="Home"
          component={CategoriesScreen}
          options={{
            title: CategoriesScreen.title,
          }}
        />
        <Stack.Screen
          name="CategoryMeals"
          component={CategoryMealsScreen}
          options={({ route }) => {
            const catId = route.params.categoryId;
            const selectedCategory = CATEGORIES.find(
              (category) => category.id === catId
            );

            return {
              title: selectedCategory.title,
            };
          }}
        />
        <Stack.Screen name="MealDetails" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MealsNavigator;
