import React from "react";
import { Route, Switch } from "react-router-dom";
import Locations from "./Locations/index";
import Location from "./Location/index";
import ChangeLocationNav from "./ChangeLocationNav/index";

class ChangeLocation extends React.Component {
  state = {
    locations: [],
  };

  handleNewLocation = (name) => {
    const locationName = name.toLowerCase();
    if (this.state.locations.includes(locationName)) {
      return;
    }
    const updatedLocations = [...this.state.locations, locationName];
    this.setState({ ...this.state, locations: updatedLocations });
  };

  handleCilck = () => {
    this.setState({ locations: [] });
  };

  render() {
    return (
      <>
        <Locations locations={this.state.locations} />
        {this.state.locations.length > 0 && (
          <button onClick={this.handleCilck}>Reset</button>
        )}
        <Switch>
          <Route path="/locations/:locationName" component={Location} />
        </Switch>
      </>
    );
  }
}

export default ChangeLocation;
