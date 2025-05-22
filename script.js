const apiKey = "1bb81c998f7d71c1dfcf44d92076b6be"; // Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const result = document.getElementById("result");

  if (!city) {
    result.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const { name, main, weather, wind } = data;
      result.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Wind Speed: ${wind.speed} m/s</p>
        <p>Condition: ${weather[0].main}</p>
        <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="Weather icon">
      `;
    })
    .catch(error => {
      result.innerHTML = `<p>${error.message}</p>`;
    });
}

