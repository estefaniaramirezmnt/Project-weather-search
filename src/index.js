function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`
    }
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wensday",
      "Thursday",
      "Friday",
      "Saturday",
    ]
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
  
    temperatureElement.textContent = Math.round(
      response.data.temperature.current
    );
    cityElement.textContent = response.data.city;
    descriptionElement.textContent = response.data.condition.description;
    humidityElement.textContent = response.data.temperature.humidity;
    windElement.textContent = Math.round(response.data.wind.speed);
    dateElement.textContent = formatDate(response.data.time * 1000);
    iconElement.setAttribute(
      "src",
      `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
    );
  }
  
  let apiKey = "4efbbf43t600f8b07428238a0a4o0852";
  let city = "Madrid";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(displayTemperature);
  