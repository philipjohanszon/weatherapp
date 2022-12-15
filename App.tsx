import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, DefaultTheme } from "react-native-paper";
import { Provider as PaperProvider } from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";

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
      <View style={styles.container}>
        <>
          <Text>{arr.map((val) => val)}</Text>
          <StatusBar style="auto" />
        </>
      </View>
    </PaperProvider>
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
