import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SessionScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>This is the Sessions Screen</Text>
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

export default SessionScreen;
