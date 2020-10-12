import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LandingScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>This is the Landing Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#161A36",
  },
  title: {
    fontFamily: "montserrat-black",
    fontSize: 18,
    color: "#ffffff",
  },
});

export default LandingScreen;
