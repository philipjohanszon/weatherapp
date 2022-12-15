import React, { useEffect, useState } from "react";
import { Text, Searchbar } from "react-native-paper";
import { StyleSheet, Image } from "react-native";
import axios from "axios";
import TemperatureView from "./temperatureView";
import DataViews from "./dataViews";

export interface WeatherViewProps {
  foo?: string;
}

const url =
  "https://api.weatherapi.com/v1/forecast.json?key=4cd46107f4e040b4b2a144345221512&q=";

const WeatherView: React.FC<WeatherViewProps> = ({ foo }) => {
  const [search, setSearch] = useState<string>("");
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecast>();

  useEffect(() => {
    query();
  }, [search]);

  const query = async () => {
    try {
      const response = await axios.get(url + search);
      setWeatherForecast(response.data);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <>
      <Searchbar
        value={search}
        placeholder="Search for a city"
        onChangeText={(text) => setSearch(text)}
        style={{
          width: "auto",
          marginTop: "1%",
          marginLeft: "3%",
          marginRight: "3%",
          borderRadius: 25,
        }}
      ></Searchbar>
      {weatherForecast ? (
        <>
          <Text style={styles.cityText}>{weatherForecast.location.name}</Text>
          <Image
            style={styles.icon}
            source={{
              uri:
                "http://" +
                weatherForecast.current.condition.icon.slice(
                  2,
                  weatherForecast.current.condition.icon.length
                ),
            }}
          />
        </>
      ) : (
        <>
          <Text style={styles.cityText}>bruh</Text>
          <Image
            style={styles.icon}
            source={{
              uri: "https://i.pinimg.com/474x/21/33/bc/2133bc99449900064b47cf7cc729f8c8.jpg",
            }}
          ></Image>
        </>
      )}
      <TemperatureView
        isLoaded={weatherForecast !== undefined}
        temperature={weatherForecast?.current.temp_c}
        feelsLike={weatherForecast?.current.feelslike_c}
      ></TemperatureView>
      <DataViews></DataViews>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 250,
    height: 250,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "FFFFFF",
    border: "1px solid red",
  },
  cityText: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
  },
});

export default WeatherView;
