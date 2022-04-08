import React from "react";
import { Card } from "./Weather.styles";
import { StyledItem } from "./Weather.styles";

const Weather = ({ weatherData }) => {
  const weather = weatherData && weatherData.weather && weatherData.weather[0];
  const weatherMain = weather && weather.main;

  const name = weatherData && weatherData.name;
  const main = weatherData && weatherData.main;
  const temp = ((main && main.temp) || 0).toFixed();
  const feelsLike = ((main && main.feels_like) || 0).toFixed();

  return (
    <>
      <h2>
        The Forecast for {name} for today {new Date().toLocaleString()} is:
      </h2>
      <Card>
        <StyledItem>{weatherMain}</StyledItem>
        <StyledItem>
          <span>{temp}°F</span>
        </StyledItem>
        <StyledItem>Real Feel: {feelsLike}°F</StyledItem>
      </Card>
    </>
  );
};

export default Weather;
