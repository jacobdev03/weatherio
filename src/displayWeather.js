export default function displayWeather(data) {
  const card = document.querySelector('.card');
  card.innerHTML = '';
  const content = document.createElement('div');
  const cityName = document.createElement('h2');
  const temp = document.createElement('p');
  const feels = document.createElement('p');
  const pressure = document.createElement('p');
  const wind = document.createElement('p');
  const sunrise = document.createElement('p');
  const sunset = document.createElement('p');

  cityName.innerHTML = `${data.name} <span class='currentDate'>${data.currentDate}</span>`;
  temp.innerHTML = `Temperature ${data.currentTemp} &#8451;`;
  feels.innerHTML = `Feels like ${data.currentFeel} &#8451;`;
  pressure.innerHTML = `Pressure ${data.pressure} hPa`;
  wind.innerHTML = `Wind speed ${data.wind} m/s`;
  sunrise.innerHTML = `Sunrise ${data.sunriseTime}`;
  sunset.innerHTML = `Sunset ${data.sunsetTime}`;
  content.classList.add('content');
  content.appendChild(cityName);
  content.appendChild(temp);
  content.appendChild(feels);
  content.appendChild(pressure);
  content.appendChild(wind);
  content.appendChild(sunrise);
  content.appendChild(sunset);
  card.appendChild(content);
}
