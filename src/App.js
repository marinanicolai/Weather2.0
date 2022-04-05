import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles.css";
import Home from "./Home/index";
import NavBar from "./NavBar/index";
import CurrentLocation from "./CurrentLocation/index";
import ChangeLocation from "./ChangeLocation/index";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/currentLocation">
         <CurrentLocation />
        </Route>
        <Route path="/changeLocation">
          <ChangeLocation />
        </Route>
      </Switch>
    </div>
  );
}
