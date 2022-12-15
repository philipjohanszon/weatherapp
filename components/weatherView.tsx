import React from "react";
import { Text } from "react-native";
import { Searchbar } from "react-native-paper";

export interface WeatherViewProps {
  foo?: string;
}

const WeatherView: React.FC<WeatherViewProps> = ({ foo }) => {
  return (
    <Searchbar
      value={"hey"}
      placeholder="hey"
      style={{ width: "100%", marginTop: 50 }}
    ></Searchbar>
  );
};

export default WeatherView;
