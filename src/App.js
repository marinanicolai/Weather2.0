import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home/index";
import ChangeLocation from "./ChangeLocation";

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/locations/">
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
