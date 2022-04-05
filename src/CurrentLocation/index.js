import React from "react";
import axios from "axios";
import Weather from "../Weather/index";

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

class CurrentLocation extends React.Component {
  state = {
    weatherData: null
  };
  success = (pos) => {
    var crd = pos.coords;

    this.getWeather(crd.latitude, crd.longitude);
  };

  getUserCoordinates = () => {
    navigator.geolocation.getCurrentPosition(this.success, error, options);
  };

  getWeather = async (lat, long) => {
    try {
      const res = await axios(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=ea5774b2eb37139cdce8d3374ec2be7e`
      );
      const { data } = res;
      this.setState({ weatherData: data });
    } catch (err) {
      if (err.request) {
        console.log(err);
      }
    }
  };

  componentDidMount() {
    this.getUserCoordinates();
  }
  render() {
    const { weatherData } = this.state;

    return <>{weatherData && <Weather weatherData={weatherData} />}</>;
  }
}

export default CurrentLocation;
