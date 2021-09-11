import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import CityChart from "./pages/CityChart";

function App() {
  return (
    <div className="App">
      <h1>Weather</h1>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:cityId">
          <CityChart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
