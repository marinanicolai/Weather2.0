import React from "react";
import { Card } from "./Weather.styles";
import { StyledItem } from "./Weather.styles";

const Weather = ({
  weatherData: { coord, weather, main, name, wind, sys, ...restOfWeatherData }
}) => {
  return (
    <>
      <Card>
        <h2>
          The Forecast for {name} for today {new Date().toLocaleString()} is:
        </h2>
        <StyledItem>{weather[0].main}</StyledItem>
        <StyledItem>
          <span>{main.temp.toFixed()}°F</span>
        </StyledItem>
        <StyledItem>Real Feel: {main.feels_like.toFixed()}°F</StyledItem>
      </Card>
    </>
  );
};

export default Weather;
