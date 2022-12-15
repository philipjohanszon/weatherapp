import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, DefaultTheme, Searchbar } from "react-native-paper";
import { Provider as PaperProvider } from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";
import WeatherView from "./components/weatherView";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

export default function App() {
  const [arr, setArr] = useState<number[]>([]);

  return (
    <PaperProvider theme={theme}>
      <WeatherView></WeatherView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
