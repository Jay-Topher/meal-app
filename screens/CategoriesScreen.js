import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() =>
          props.navigation.navigate("CategoryMeals", {
            categoryId: itemData.item.id,
          })
        }
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      numColumns={2}
      renderItem={renderGridItem}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
    />
  );
};

CategoriesScreen.title = "Meal Categories";
// deprecated
// CategoriesScreen.navigationOptions = {
//   headerTitle: "Meal Categories",
//   headerStyle: {
//     backgroundColor: Colors.primaryColor,
//   },
// };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
  },
});

export default CategoriesScreen;
