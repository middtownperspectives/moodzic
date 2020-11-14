import React, { useState } from "react";
import { enableScreens } from "react-native-screens";
// import { NavigationContainer } from "@react-navigation/native";
// import AppBottomNavigator from "./navigation/AppBottomNavigator";

import { AppLoading } from "expo";
import * as Font from "expo-font";

// import SessionStackNavigator from "./navigation/GenerateSessionStackNavigator";
import BottomTabNavigator from "./navigation/GenerateSessionStackNavigator";
import LoginScreen from "./screens/LoginScreen";

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "montserrat-thin": require("./assets/fonts/Montserrat-Thin.ttf"),
    "montserrat-light": require("./assets/fonts/Montserrat-Light.ttf"),
    "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "montserrat-medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "montserrat-semiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "montserrat-black": require("./assets/fonts/Montserrat-Black.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
      ></AppLoading>
    );
  }
  // return <BottomTabNavigator />;
  return <LoginScreen />;
}
