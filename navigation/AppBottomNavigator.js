import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import CollectionScreen from "../screens/CollectionScreen";
import BrowseScreen from "../screens/BrowseScreen";
import SessionScreen from "../screens/SessionScreen";

const MainAppStackNavigation = createBottomTabNavigator();

const AppBottomNavigator = (props) => {
  return (
    <MainAppStackNavigation.Navigator>
      <MainAppStackNavigation.Screen
        name="Collections"
        component={CollectionScreen}
      />
      <MainAppStackNavigation.Screen name="Session" component={SessionScreen} />
      <MainAppStackNavigation.Screen name="Browse" component={BrowseScreen} />
    </MainAppStackNavigation.Navigator>
  );
};

export default AppBottomNavigator;