import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import CityChart from "./pages/CityChart";
import SearchedCitiesProvider from "./store/SearchedCitiesProvider";

function App() {
  return (
    <div className="App">
      <h1>Weather</h1>
      <Switch>
        <SearchedCitiesProvider>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/:cityId">
            <CityChart />
          </Route>
        </SearchedCitiesProvider>
      </Switch>
    </div>
  );
}

export default App;
