import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Appbar, Button, DefaultTheme, Searchbar } from "react-native-paper";
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
      <View style={styles.topBar}>
        <View style={styles.overlay}>
          <WeatherView></WeatherView>
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: "#45ffff",
    paddingTop: "10%",
    height: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  overlay: {
    paddingTop: 10,
    backgroundColor: "#FFFFFF",
    height: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
