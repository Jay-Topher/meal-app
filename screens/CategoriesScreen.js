import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <View style={styles.gridItem}>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };
  return (
    <FlatList
      numColumns={2}
      renderItem={renderGridItem}
      data={CATEGORIES}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  gridItem: {}
});

export default CategoriesScreen;
