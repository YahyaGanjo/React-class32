import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

const CityChart = () => {
  const [city, SetCity] = useState({});
  const [cityIsFound, setCityIsFound] = useState(true);

  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?id=${params.cityId}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
        );
        const requestedCity = await response.json();
        requestedCity.message ? setCityIsFound(false) : setCityIsFound(true);
        const cityName = `${requestedCity.city.name}, ${requestedCity.city.country}`;
        const chartData = requestedCity.list.map(
          (item) =>
            (item = {
              date: item.dt_txt.split(" ")[0],
              temp: (item.main.temp - 273.15).toFixed(),
            })
        );
        SetCity({ name: cityName, data: chartData });
      } catch (error) {
        setCityIsFound(false);
      }
    }
    fetchData();
  }, [params.cityId]);

  return (
    <div className="rechart-container">
      {cityIsFound && (
        <>
          <h2>5 Days Forecast</h2>
          <h4>{city.name}</h4>
          <AreaChart
            width={730}
            height={250}
            data={city.data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="temp"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </>
      )}
      {!cityIsFound && <h1>City not Found</h1>}
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
};

export default CityChart;
