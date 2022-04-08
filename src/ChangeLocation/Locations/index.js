import React from "react";
import { Link } from "react-router-dom";

class Locations extends React.Component {
  renderLocation = () => {
    return this.props.locations.map((location) => (
      <Link key={location} to={`/locations/${location}`}>
        {location}{" "}
      </Link>
    ));
  };

  render() {
    return <div>{this.renderLocation()} </div>;
  }
}

export default Locations;
