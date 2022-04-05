import React from "react";
import { Link } from "react-router-dom";
import { StyledLink } from "./NavBar.styles";

class NavBar extends React.Component {
  render() {
    const logoUrl = `https://ucarecdn.com/a56ad090-17b0-40cc-8cba-cb6d8a3ffd26/-/scale_crop/100x100/smart/`;
    return (
      <>
        <nav>
          <Link to="/">
            <span className="logo">
              <img src={logoUrl} alt="weathe-app-logo" />
            </span>
          </Link>
          <StyledLink to="/currentLocation">Current Location</StyledLink>
          <StyledLink to="/changeLocation">Change Location</StyledLink>
        </nav>
      </>
    );
  }
}

export default NavBar;
