import React from "react";
import Locations from "../ChangeLocation/Locations";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { StyledLink, NavItem, NavList } from "./NavBar.styles";

class NavBar extends React.Component {
  state = {
    inputValue: "",
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

  handleClick = () => {
    this.setState({ locations: [] });
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ inputValue: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleNewLocation(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    const logoUrl = `https://ucarecdn.com/a56ad090-17b0-40cc-8cba-cb6d8a3ffd26/-/scale_crop/100x100/smart/`;
    return (
      <>
        <nav>
          <NavList>
            <NavItem>
              <Link to="/">
                {" "}
                <span className="logo">
                  <img src={logoUrl} alt="weathe-app-logo" />
                </span>
              </Link>
            </NavItem>
            <NavItem handleNewLocation={this.handleNewLocation}>
              <form onSubmit={this.handleSubmit}>
                <input
                  placeholder="enter city"
                  value={this.state.inputValue}
                  onChange={this.handleChange}
                />
              </form>
            </NavItem>
          </NavList>
        </nav>
        <Locations locations={this.state.locations} />
        {this.state.locations.length > 0 && (
          <button onClick={this.handleClick}>Reset</button>
        )}

        <Switch>
          <Route path="locations/:locationName" component={Location} />
        </Switch>
        <hr />
      </>
    );
  }
}

export default NavBar;
