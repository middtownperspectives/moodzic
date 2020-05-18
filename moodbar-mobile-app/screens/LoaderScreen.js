import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LoaderScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "montserrat-black",
    fontSize: 18,
  },
});

export default LoaderScreen;
