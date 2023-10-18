function getForecast(coordinates) {
  console.log(coordinates);
  let apiForecastUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${coordinates.latitude}&lon=${coordinates.longitude}&key=${apiKey}&units=metric`;

  axios.get(apiForecastUrl).then(displayForecast);
}

function displayTemperature(response) {
  let temperatureElement = document.getElementById("temperature");
  let cityElement = document.getElementById("city");
  let descriptionElement = document.getElementById("description");
  let humidityElement = document.getElementById("humidity");
  let windElement = document.getElementById("wind");
  let dateElement = document.getElementById("date");
  let iconElement = document.getElementById("icon");

  celsiusTemperature = response.data.temperature.current;

  temperatureElement.textContent = Math.round(celsiusTemperature);
  cityElement.textContent = response.data.city;
  descriptionElement.textContent = response.data.condition.description;
  humidityElement.textContent = response.data.temperature.humidity;
  windElement.textContent = Math.round(response.data.wind.speed);
  dateElement.textContent = formatDate(response.data.time * 1000);
  iconElement.setAttribute(
    "src",
    `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
  iconElement.setAttribute("alt", response.data.condition.icon);

  getForecast(response.data.coordinates)
}

function search(city) {
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.getElementById("city-input");
  search(cityInputElement.value);
  cityInputElement.value = "";
}

let form = document.getElementById("search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.getElementById("fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.getElementById("celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

search("Madrid");

