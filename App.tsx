import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Navigation from "./src/Navigation";
import { Provider } from "react-redux";

import { store } from "./src/store/redux";

export default function App() {
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
