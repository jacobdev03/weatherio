export default async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=398ec10b90a9b21f54be1e90fcf719fa`;
  const response = await fetch(url);
  const data = await response.json();

  const name = data.name;
  const wind = data.wind.speed;
  const datetime = data.dt;
  const { sunrise, sunset, country } = data.sys;
  const currentDate = new Date(datetime * 1000).toLocaleString();
  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString('en-US');
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString('en-US');
  const { description } = data.weather[0];
  const { temp, feels_like, pressure } = data.main;
  const currentTemp = (temp - 273.15).toFixed(1);
  const currentFeel = (feels_like - 273.15).toFixed(1);

  return {
    name,
    currentTemp,
    currentDate,
    currentFeel,
    sunriseTime,
    sunsetTime,
    currentDate,
    country,
    description,
    wind,
    pressure,
  };
}
