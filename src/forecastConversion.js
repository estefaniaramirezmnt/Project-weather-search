function forecastToFarenheit() {
  let MaxtempNextDays = document.querySelectorAll(
    ".weather-forecast-temperature-max"
  );
  let MintempNextDays = document.querySelectorAll(
    ".weather-forecast-temperature-min"
  );

  MaxtempNextDays.forEach(function (tempDay, index) {
    let tempInCelsius = celsiusMaxTemperature[index];
    let tempInFahrenheit = Math.round(tempInCelsius * 1.8 + 32);
    tempDay.innerHTML = `${tempInFahrenheit}º`;
  });
  MintempNextDays.forEach(function (tempDay, index) {
    let tempInCelsius = celsiusMinTemperature[index];
    let tempInFahrenheit = Math.round(tempInCelsius * 1.8 + 32);
    tempDay.innerHTML = `${tempInFahrenheit}º`;
  });
}

function forecastToCelsius() {
  let MaxtempNextDays = document.querySelectorAll(
    ".weather-forecast-temperature-max"
  );
  let MintempNextDays = document.querySelectorAll(
    ".weather-forecast-temperature-min"
  );

  MaxtempNextDays.forEach(function (tempDay, index) {
    tempDay.innerHTML = `${Math.round(celsiusMaxTemperature[index])}º`;
  });

  MintempNextDays.forEach(function (tempDay, index) {
    tempDay.innerHTML = `${Math.round(celsiusMinTemperature[index])}º`;
  });
}

let celsiusMaxTemperature = null;
let celsiusMinTemperature = null;
