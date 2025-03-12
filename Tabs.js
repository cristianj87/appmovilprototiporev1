import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./stacks/HomeStackScreen";
import HomeStackScreen2 from "./stacks/HomeStackScreen2";
import SettingsStackScreen from "./stacks/SettingsStackScreen";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="Usuario" screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Usuario"
        component={HomeStackScreen2}
        options={{
          tabBarBadge: 1,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <FontAwesome name="user" size={24} color={focused ? "#16247d" : "#111"} />
              </View>
            );
          }
        }}
      />
      <Tab.Screen
        name="Configuración"
        component={SettingsStackScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Ionicons name="settings" size={24} color={focused ? "#16247d" : "#111"} />
              </View>
            );
          }
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
