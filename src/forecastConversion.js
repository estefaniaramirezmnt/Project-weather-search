// function forecastToFarenheit() {
//   let MaxtempNextDays = document.querySelectorAll(
//     ".weather-forecast-temperature-max"
//   );
//   let MintempNextDays = document.querySelectorAll(
//     ".weather-forecast-temperature-min"
//   );

//   MaxtempNextDays.forEach(function (tempDay) {
//     let tempInCelsius = parseInt(tempDay.innerHTML);
//     let tempInFahrenheit = Math.round(tempInCelsius * 1.8 + 32);
//     tempDay.innerHTML = `${tempInFahrenheit}º`;
//   });
//   MintempNextDays.forEach(function (tempDay) {
//     let tempInCelsius = parseInt(tempDay.innerHTML);
//     let tempInFahrenheit = Math.round(tempInCelsius * 1.8 + 32);
//     tempDay.innerHTML = `${tempInFahrenheit}º`;
//   });
// }

// function forecastToCelsius() {
//   let MaxtempNextDays = document.querySelectorAll(
//     ".weather-forecast-temperature-max"
//   );
//   let MintempNextDays = document.querySelectorAll(
//     ".weather-forecast-temperature-min"
//   );

//   MaxtempNextDays.forEach(function (tempDay) {
//     tempDay.innerHTML = `${Math.round(celsiusMaxTemperature)}º`;
//   });

//     MintempNextDays.forEach(function (tempDay) {
//         tempDay.innerHTML = `${Math.round(celsiusMinTemperature)}º`;
//     });
// }

// let celsiusMaxTemperature = null;
// let celsiusMinTemperature = null;