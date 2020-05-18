import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";

const MoodGridTileDisplay = (props) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <ImageBackground
        source={{ uri: props.imgURL }}
        style={styles.BGImage}
        imageStyle={{ borderRadius: 10 }}
      >
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          {/* <Text style={styles.title}>{props.title}</Text> */}
        </View>
        <View>
          <Text style={styles.moodTitle}>{props.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    opacity: 0.6,
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  title: {
    fontFamily: "montserrat-black",
    fontSize: 18,
    textAlign: "right",
    opacity: 1,
  },
  BGImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  moodTitle: {
    position: "absolute",
    fontFamily: "montserrat-black",
    color: "white",
    fontSize: 18,
    bottom: 5,
    left: 10,
  },
});

export default MoodGridTileDisplay;
