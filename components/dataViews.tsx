import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

export interface DataViewsProps {
  foo?: string;
}

const DataViews: React.FC<DataViewsProps> = ({ foo }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text>hey</Text>
          <Text>hey</Text>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Text>hey</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "40%",
  },
  container: {
    width: "100%",
  },
});

export default DataViews;
