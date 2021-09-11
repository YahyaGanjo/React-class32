import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import CityChart from "./pages/CityChart";

function App() {
  return (
    <div className="App">
      <h1>Weather</h1>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/:cityId">
        <CityChart />
      </Route>
    </div>
  );
}

export default App;
