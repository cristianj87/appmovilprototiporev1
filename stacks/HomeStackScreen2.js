import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import HomeScreen1 from "../screens/HomeScreen1";
import HomeScreen2 from "../screens/HomeScreen2";
import HomeScreen3 from "../screens/HomeScreen3";


const HomeStackScreen = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Registro/Login" component={HomeScreen} options={{ headerShown: false }}/>
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
