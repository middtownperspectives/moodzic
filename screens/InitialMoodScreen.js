import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { MOODCATEGORIES } from "../data/dummy-data";
import MoodGridTileDisplay from "../components/MoodGridTileDisplay";

import Colors from "../constants/Colors";

const InitialMoodScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <MoodGridTileDisplay
        title={itemData.item.title}
        color={itemData.item.color}
        imgURL={itemData.item.imgURL}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "PreferredMood",
            params: {
              moodId: itemData.item.id,
              moodTitle: itemData.item.title,
            },
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={MOODCATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
};

InitialMoodScreen.navigationOptions = {
  headerTitle: "Initial Mood",
};

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: Colors.primary,
    height: "100%",
  },
  title: {
    fontFamily: "montserrat-black",
    fontSize: 18,
  },
});

export default InitialMoodScreen;
