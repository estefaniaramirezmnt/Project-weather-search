function displayForecast() {
    let forecastElement = document.getElementById("forecast");
    let forecastHTML = `<div class="row">`;
    let days = ["Thu", "Fri", "Sat", "Sun"];
    days.forEach(function (day) {
      forecastHTML =
        forecastHTML +
        `
        <div class="col-2">
          <div class="weather-forecast-date">${day}</div>
            <img 
              src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/shower-rain-day.png"
              alt="" 
              width="42"
            /> 
            <div class="weather-forecast-temperatures">
              <span class="weather-forecast-temperature-max">
                18º
              </span>
              <span class="weather-forecast-temperature-min">
                12º
              </span>
            </div>
      </div>
      `;
    });
    forecastHTML = forecastHTML + `</div>`;
    forecastElement.innerHTML = forecastHTML;
}