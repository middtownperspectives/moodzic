import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons"; // NOTE: FIND ICONS --- https://infinitered.github.io/ionicons-version-3-search/

import LoaderScreen from "../screens/LoaderScreen"; //remove once able to provide in any situation
import InitialMoodScreen from "../screens/InitialMoodScreen";
import PreferredMoodScreen from "../screens/PreferredMoodScreen";
import BrowseScreen from "../screens/BrowseScreen";
import CollectionsScreen from "../screens/CollectionScreen";

import Colors from "../constants/Colors";

const SessionStackNavigator = createStackNavigator(
  {
    InitialMood: InitialMoodScreen,
    PreferredMood: PreferredMoodScreen,
    Loader: LoaderScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: Colors.primary },
      headerTintColor: "white",
    },
  }
);

const BottomTabNavigator = createBottomTabNavigator(
  {
    Collection: {
      screen: CollectionsScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-list" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
    Session: {
      screen: SessionStackNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-disc" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
    Browse: {
      screen: BrowseScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="md-bookmarks" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accent,
      inactiveTintColor: Colors.lite,
      style: {
        backgroundColor: Colors.primary,
        borderTopColor: Colors.primary,
      },
    },
  }
);

export default createAppContainer(BottomTabNavigator);
