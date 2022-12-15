import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export interface TemperatureViewProps {
  isLoaded: boolean;
  temperature?: number;
  feelsLike?: number;
}

const TemperatureView: React.FC<TemperatureViewProps> = ({
  temperature,
  feelsLike,
  isLoaded,
}) => {
  return (
    <View style={styles.container}>
      {isLoaded && (
        <>
          <Text style={styles.subText}>Temperatur</Text>
          <Text style={styles.bigText}>{temperature}C</Text>
          <Text style={styles.subText}>Feels like</Text>
          <Text style={styles.bigText}>{feelsLike}C</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  subText: {
    fontSize: 14,
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
  },
  bigText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
  },
  container: {
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default TemperatureView;
