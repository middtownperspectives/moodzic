import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { MOODCATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const PreferredMoodScreen = (props) => {
  const moodId = props.navigation.getParam("moodId");
  const selectedMood = MOODCATEGORIES.find((mood) => mood.id === moodId);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{selectedMood.title}</Text>
      <Button
        title="Continue with selection?"
        onPress={() => {
          props.navigation.replace("Loader");
        }}
      />
    </View>
  );
};

PreferredMoodScreen.navigationOptions = (navigationData) => {
  const moodId = navigationData.navigation.getParam("moodId");
  const selectedMood = MOODCATEGORIES.find((mood) => mood.id === moodId);

  return {
    headerTitle: selectedMood.title,
    headerStyle: { backgroundColor: selectedMood.color },
  };
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

export default PreferredMoodScreen;
