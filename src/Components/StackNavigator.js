import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import PickUpScreen from "../screens/PickUpScreen";
import CartScreen from "../screens/CartScreen";
const StackNavigator = () => {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen
          name="PickUp"
          component={PickUpScreen}
          Options={{ headerShown: false }}
        />
        <stack.Screen name="CartScreen" component={CartScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
