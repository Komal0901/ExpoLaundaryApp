import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./src/redux/Store";
import StackNavigator from "./src/Components/StackNavigator";

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigator />
      {/* <HomeScreen /> */}
      <StatusBar style="light" backgroundColor="black" />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
