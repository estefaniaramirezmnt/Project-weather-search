function displayForecast(response) {
  let forecastData = response.data.daily;
  console.log(forecastData)
  let forecastElement = document.getElementById("forecast");

  celsiusMaxTemperature = forecastData.map((item) => item.temperature.maximum);
  celsiusMinTemperature = forecastData.map((item) => item.temperature.minimum);

  let forecastHTML = `<div class="row">`;
  forecastData.forEach(function (forecastDay, index) {
    if (index < 6) {

      forecastHTML += `
      <div class="col-2">
        <div class="weather-forecast-date">${formatForecastDay(
          forecastDay.time
        )}</div>
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${
              forecastDay.condition.icon
            }.png"
            alt=""
            width="42"
          />
          <div class="weather-forecast-temperatures">
            <span class="temperature-day weather-forecast-temperature-max">
              ${Math.round(forecastDay.temperature.maximum)}º
            </span>
            <span class="temperature-day weather-forecast-temperature-min">
            ${Math.round(forecastDay.temperature.minimum)}º
            </span>
          </div>
      </div>
    `;
    }
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}
