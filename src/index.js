import fetchWeather from './fetchWeather';
import displayWeather from './displayWeather';
const form = document.querySelector('.search');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const cityInput = document.querySelector('.search input');
  fetchWeather(cityInput.value)
    .then((data) => displayWeather(data))
    .catch((err) => console.log(err));
});

fetchWeather('Warsaw').then((data) => displayWeather(data));
