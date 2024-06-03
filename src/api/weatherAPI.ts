import { WeatherData } from "../interfaces/weatherData-interface";

const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
const GEOCODING_API_URL = "https://api.openweathermap.org/geo/1.0/direct";

const fetchCoordinates = async (city: string) => {
  const response = await fetch(
    `${GEOCODING_API_URL}?q=${city}&limit=1&appid=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("City not found");
  }
  const data = await response.json();
  if (data.length === 0) {
    throw new Error("City not found");
  }
  return {
    lat: data[0].lat,
    lon: data[0].lon,
  };
};

const fetchWeather = async (lat: number, lon: number): Promise<WeatherData> => {
  const response = await fetch(
    `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) {
    throw new Error("Weather data not found");
  }
  const data: WeatherData = await response.json();
  return data;
};

const viewWeather = async (city: string) => {
  const { lat, lon } = await fetchCoordinates(city);
  const weatherData = await fetchWeather(lat, lon);

  return weatherData;
};

export { viewWeather };
