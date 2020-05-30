import React from "react";
import { Platform, View, Text } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import HeaderButton from "../components/HeaderButton";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import Colors from "../constants/Colors";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const Stack = createStackNavigator();

function MealsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? Colors.primaryColor : "#fff",
        },
        headerTintColor: Platform.OS === "ios" ? Colors.primaryColor : "#fff",
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
        },
        headerBackTitleStyle: {
          fontFamily: "open-sans",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={CategoriesScreen}
        options={({ navigation }) => {
          return {
            title: CategoriesScreen.title,
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName="ios-menu"
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            ),
          };
          // headerStyle: {
          //   backgroundColor:
          //     Platform.OS === "android" ? Colors.primaryColor : "#fff",
          // },
          // headerTintColor: Platform.OS === "ios" ? Colors.primaryColor : "#fff",
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
      <Stack.Screen
        name="MealDetails"
        component={MealDetailScreen}
        options={({ route }) => {
          const mealId = route.params.mealId;
          const selectedMeal = MEALS.find((meal) => meal.id === mealId);

          return {
            title: selectedMeal.title,
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Favorite"
                  iconName="ios-star"
                  onPress={() => console.log("Favorite pressed")}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
}

const FavoritesStack = createStackNavigator();

const FavoritesNavigator = () => {
  return (
    <FavoritesStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? Colors.primaryColor : "#fff",
        },
        headerTintColor: Platform.OS === "ios" ? Colors.primaryColor : "#fff",
        headerTitle: "Your Favorites",
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
        },
        headerBackTitleStyle: {
          fontFamily: "open-sans",
        },
      }}
    >
      <FavoritesStack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={({ navigation }) => {
          return {
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName="ios-menu"
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
      <FavoritesStack.Screen name="MealDetails" component={MealDetailScreen} />
    </FavoritesStack.Navigator>
  );
};

const FilterStack = createStackNavigator();

const FilterNavigator = () => {
  return (
    <FilterStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? Colors.primaryColor : "#fff",
        },
        headerTintColor: Platform.OS === "ios" ? Colors.primaryColor : "#fff",
        headerTitle: "Filter Meals",
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
        },
        headerBackTitleStyle: {
          fontFamily: "open-sans",
        },
      }}
    >
      <FilterStack.Screen
        name="Filter"
        component={FiltersScreen}
        options={({ navigation }) => {
          return {
            headerTitle: "Filter Meals",
            headerStyle: {
              backgroundColor: Colors.primaryColor,
            },
            headerTintColor: "#fff",
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName="ios-menu"
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}
                  color="#000000"
                />
              </HeaderButtons>
            ),
          };
        }}
      />
    </FilterStack.Navigator>
  );
};

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{ activeTintColor: Colors.accentColor }}
      screenOptions={({ route }) => ({
        tabBarIcon: (tabInfo) => {
          let iconName;
          if (route.name === "Meals") {
            iconName = "ios-restaurant";
          } else if (route.name === "Favorites") {
            iconName = "ios-star";
          }
          return <Ionicons name={iconName} size={25} color={tabInfo.color} />;
        },
      })}
      activeColor="white"
      shifting={true}
    >
      <Tab.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          tabBarColor: Colors.primaryColor,
          tabBarLabel:
            Platform.OS === "android" ? (
              <Text style={{ fontFamily: "open-sans" }}>Meals</Text>
            ) : (
              "Meals"
            ), //this can be styled with stylesheet
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesNavigator}
        options={{
          tabBarLabel:
            Platform.OS === "android" ? (
              <Text style={{ fontFamily: "open-sans" }}>Favorites</Text>
            ) : (
              "Favorites"
            ), //this can be styled with stylesheet"Favorites!",
          tabBarColor: Colors.accentColor,
          // tabBarIcon: (tabInfo) => {
          //   return (
          //     <Ionicons name="ios-heart" size={25} color={tabInfo.color} />
          //   );
          // },
        }}
      />
    </Tab.Navigator>
  );
}

const MainNavigator = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator
        drawerContentOptions={{
          activeTintColor: Colors.accentColor,
          labelStyle: { fontFamily: "open-sans-bold" },
        }}
      >
        <MainNavigator.Screen
          name="MealsFavs"
          component={MyTabs}
          options={{ drawerLabel: "Meals" }}
        />
        <MainNavigator.Screen
          name="Filters"
          component={FilterNavigator}
          options={{ drawerLabel: "Filters" }}
        />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;
