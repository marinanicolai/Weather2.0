import React from "react";
import axios from "axios";
import Weather from "../../Weather/index";

class Location extends React.Component {
  state = {
    weatherData: null,
  };

  getWeatherInfo = async (location) => {
    try {
      const result = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=ea5774b2eb37139cdce8d3374ec2be7e`
      );
      this.setState({
        weatherData: result.data,
      });
      console.log("this is result", result);
    } catch (err) {
      window.alert("An error occured. Please enter valid location.");
    }
  };

  componentDidMount() {
    const city = this.props.match.params.locationName;
    this.getWeatherInfo(city);
  }

  componentDidUpdate(prevProps, prevState) {
    const city = this.props.match.params.locationName;
    if (prevProps.match.params.locationName !== city) {
      this.getWeatherInfo(city);
    }
  }

  render() {
    const { weatherData } = this.state;
    return <Weather weatherData={weatherData} />;
  }
}

export default Location;
