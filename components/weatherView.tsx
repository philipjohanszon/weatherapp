import React, { useEffect, useState } from "react";
import { Text, Searchbar } from "react-native-paper";
import { StyleSheet, Image } from "react-native";
import axios from "axios";
import TemperatureView from "./temperatureView";
import DataViews from "./dataViews";
import * as Location from "expo-location";

export interface WeatherViewProps {
  foo?: string;
}

const url =
  "https://api.weatherapi.com/v1/forecast.json?key=4cd46107f4e040b4b2a144345221512&q=";

const WeatherView: React.FC<WeatherViewProps> = ({ foo }) => {
  const [search, setSearch] = useState<string>("");
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecast>();
  const [hasQueried, setHasQueried] = useState<boolean>(false);

  useEffect(() => {
    if (hasQueried != true) {
      queryLocation();
      setHasQueried(true);
    } else {
      query();
    }
  }, [search]);

  const query = async () => {
    const searchData = search
      .split("")
      .map((char) =>
        char === "ä" || char === "å" ? "a" : char === "ö" ? "o" : char
      )
      .join("");

    try {
      const response = await axios.get(url + searchData);
      setWeatherForecast(response.data);
    } catch {
      setWeatherForecast(undefined);
    }
  };

  const queryLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return;
    }

    let location = await Location.getCurrentPositionAsync({});

    try {
      const response = await axios.get(
        url + location?.coords.latitude + ", " + location?.coords.longitude
      );
      setWeatherForecast(response.data);
    } catch {
      setWeatherForecast(undefined);
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
          <Text style={styles.cityText}>No data found</Text>
          <Image
            style={styles.icon}
            source={require("../assets/image.png")}
          ></Image>
        </>
      )}
      <TemperatureView
        isLoaded={weatherForecast !== undefined}
        temperature={weatherForecast?.current.temp_c}
        feelsLike={weatherForecast?.current.feelslike_c}
      ></TemperatureView>
      <DataViews
        isLoaded={weatherForecast !== undefined}
        uv={weatherForecast?.current.uv}
        rain={weatherForecast?.current.cloud}
        humidity={weatherForecast?.current.humidity}
        wind={weatherForecast?.current.wind_kph}
      ></DataViews>
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
