function displayTemperature(response) {
    let temperatureElement = document.getElementById("temperature");
    let cityElement = document.getElementById("city");
    let descriptionElement = document.getElementById("description");
    let humidityElement = document.getElementById("humidity");
    let windElement = document.getElementById("wind");
  
    temperatureElement.textContent = Math.round(
      response.data.temperature.current
    );
    cityElement.textContent = response.data.city;
    descriptionElement.textContent = response.data.condition.description.charAt(0).toUpperCase() + response.data.condition.description.slice(1);
    humidityElement.textContent = response.data.temperature.humidity;
    windElement.textContent = Math.round(response.data.wind.speed);
  }
  
  let apiKey = "4efbbf43t600f8b07428238a0a4o0852";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=New%20York&key=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(displayTemperature);
  

