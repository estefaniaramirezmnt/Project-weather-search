let tempNextDays = document.querySelectorAll(".temperature-day");

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.getElementById("temperature");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  let tempNextDays = document.querySelectorAll(".temperature-day");

  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);

  tempNextDays.forEach(function (tempDay) {
    let tempInCelsius = parseInt(tempDay.innerHTML);
    let tempInFahrenheit = Math.round(tempInCelsius * 1.8 + 32);
    tempDay.innerHTML = `${tempInFahrenheit}º`;
  });

  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.getElementById("temperature");
  let tempNextDays = document.querySelectorAll(".temperature-day");

  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  tempNextDays.forEach(function (tempDay) {
    let tempInFahrenheit = parseInt(tempDay.innerHTML);
    let tempInCelsius = Math.round((tempInFahrenheit - 32) * (5 / 9));
    tempDay.innerHTML = `${tempInCelsius}º`;
  });

  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
}

let celsiusTemperature = null;
