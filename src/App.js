import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles.css";
import Home from "./Home";
import NewsLetter from "./NewsLetter";
import NavBar from "./NavBar";
import ChangeLocation from "./ChangeLocation";

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
          <NewsLetter />
        </Route>
        <Route path="/changeLocation">
          <ChangeLocation />
        </Route>
      </Switch>
    </div>
  );
}
