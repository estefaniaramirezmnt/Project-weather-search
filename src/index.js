function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wensday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day} ${hours}:${minutes}`;
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

function displayFarenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.getElementById("temperature");
  celsiusLink.classList.remove("active");
  farenheitLink.classList.add("active");
  let farenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(farenheitTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  farenheitLink.classList.remove("active");
  let temperatureElement = document.getElementById("temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let form = document.getElementById("search-form");
form.addEventListener("submit", handleSubmit);

let farenheitLink = document.getElementById("fahrenheit-link");
farenheitLink.addEventListener("click", displayFarenheitTemperature);

let celsiusLink = document.getElementById("celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

search("Madrid");

