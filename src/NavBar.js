import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    const logoUrl = `https://ucarecdn.com/a56ad090-17b0-40cc-8cba-cb6d8a3ffd26/-/scale_crop/100x100/smart/`;
    return (
      <>
        <nav>
          <span className="logo">
            <img src={logoUrl} alt="weathe-app-logo" />
          </span>

          <Link to="/currentLocation">Current Loc.</Link>
          <Link to="/changeLocation">Change Loc</Link>
        </nav>
      </>
    );
  }
}

export default NavBar;
