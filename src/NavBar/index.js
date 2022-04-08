import React from "react";
import { Link } from "react-router-dom";
import { StyledLink, NavItem, NavList } from "./NavBar.styles";

class NavBar extends React.Component {
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
            <NavItem>
              <StyledLink to="/currentLocation">CurrentLocation </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/changeLocation">ChangeLocation</StyledLink>
            </NavItem>
          </NavList>
        </nav>
        <hr />
      </>
    );
  }
}

export default NavBar;
