import "./App.css";
import Card from "./components/Card";
import cities from "./city-weather.json";

function App() {
  return (
    <div className="App">
      <h1>Weather</h1>
      <div className="container">
        {cities.map((city) => {
          return (
            <Card
              key={city.id}
              name={city.name}
              country={city.sys.country}
              weatherMain={city.weather[0].main}
              description={city.weather[0].description}
              minTemp={city.main.temp_min}
              maxTemp={city.main.temp_max}
              lon={city.coord.lon}
              lat={city.coord.lat}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
