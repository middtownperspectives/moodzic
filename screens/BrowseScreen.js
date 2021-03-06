import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

const BrowseScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>This is the Browse Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  title: {
    fontFamily: "montserrat-black",
    fontSize: 18,
  },
});

export default BrowseScreen;
