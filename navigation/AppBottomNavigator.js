// import React from "react";
// // import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

// import CollectionScreen from "../screens/CollectionScreen";
// import BrowseScreen from "../screens/BrowseScreen";
// import SessionScreen from "../screens/SessionScreen";
// import LandingScreen from "../screens/LandingScreen";

// const MainAppStackNavigation = createBottomTabNavigator();

// const AppBottomNavigator = (props) => {
//   return (
//     <MainAppStackNavigation.Navigator>
//       <MainAppStackNavigation.Screen name="Landing" component={LandingScreen} />

//       <MainAppStackNavigation.Screen
//         name="Collections"
//         component={CollectionScreen}
//         options={{
//           tabBarLabel: "Collections",
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="book" color={color} size={size} />
//           ),
//         }}
//       />
//       <MainAppStackNavigation.Screen
//         name="Session"
//         component={SessionScreen}
//         options={{
//           tabBarLabel: "Session",
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="music" color={color} size={size} />
//           ),
//         }}
//       />
//       <MainAppStackNavigation.Screen
//         name="Browse"
//         component={BrowseScreen}
//         options={{
//           tabBarLabel: "Browse",
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="wan" color={color} size={size} />
//           ),
//         }}
//       />
//     </MainAppStackNavigation.Navigator>
//   );
// };

// export default AppBottomNavigator;
