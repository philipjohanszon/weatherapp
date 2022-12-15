import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

export interface DataViewsProps {
  isLoaded: boolean;
  uv?: number;
  rain?: number;
  wind?: number;
  humidity?: number;
}

const DataViews: React.FC<DataViewsProps> = ({
  isLoaded,
  uv,
  rain,
  wind,
  humidity,
}) => {
  return (
    <View style={styles.container}>
      {isLoaded && (
        <>
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.subText}>Humidity</Text>
              <Text style={styles.bigText}>{humidity}%</Text>
              <Text style={styles.subText}>Wind speed</Text>
              <Text style={styles.bigText}>{wind}km/h</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.subText}>Chance of rain</Text>
              <Text style={styles.bigText}>{rain}%</Text>
              <Text style={styles.subText}>UV index</Text>
              <Text style={styles.bigText}>{uv}</Text>
            </Card.Content>
          </Card>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  subText: {
    fontSize: 14,
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  bigText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
  },
});

export default DataViews;
