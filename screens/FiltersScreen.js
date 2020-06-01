import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={props.value ? Colors.accentColor : null}
        value={props.value}
        onValueChange={props.onChange}
      />
    </View>
  );
};
  return (
    <View style={styles.screen}>
      <Text>This is the Filters screen</Text>
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

export default FiltersScreen;
