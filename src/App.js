import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home/index";
import CurrentLocation from "./CurrentLocation";
import ChangeLocation from "./ChangeLocation";

export default function App() {
  return (
    <Router>
      <div>
       <NavBar/>
        <Switch>
          <Route path="/CurrentLocation">
            <CurrentLocation />
          </Route>
          <Route path="/ChangeLocation">
            <ChangeLocation />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




