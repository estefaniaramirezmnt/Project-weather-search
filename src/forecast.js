function displayForecast(response) {
  let forecastData = response.data.daily;

  let forecastElement = document.getElementById("forecast");

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
            <span class="weather-forecast-temperature-max">
              ${Math.round(forecastDay.temperature.maximum)}º
            </span>
            <span class="weather-forecast-temperature-min">
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
