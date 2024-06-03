import { useState } from "react";
import { viewWeather } from "../api/weatherAPI";
import { WeatherData } from "../interfaces/weatherData-interface";

const WeatherCard = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const weatherData = await viewWeather(city);
      setWeather(weatherData);
      setError("");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Weather App</h1>
        <div className="mb-4">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
            className="w-full p-2 border rounded mb-2"
          />
          <button
            onClick={handleSearch}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Search
          </button>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {weather && (
          <div className="weather-info text-center">
            <h2 className="text-xl font-semibold">{weather.name}</h2>
            <p className="text-2xl">{weather.main.temp} °C</p>
            <p className="text-gray-700">{weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
