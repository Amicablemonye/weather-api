const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("cityInput");
const weatherContainer = document.getElementById("weather-container");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();

  if (city === "") {
    weatherContainer.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  weatherContainer.innerHTML = "<p>Loading...</p>";

  fetch(`/weather?city=${city}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        weatherContainer.innerHTML = `<p>${data.error}</p>`;
        return;
      }

      weatherContainer.innerHTML = `
        <h3>${data.city}</h3>
        <p>Temperature: ${data.temperature_c} °C</p>
        <p>Humidity: ${data.humidity} %</p>
        <p>Condition: ${data.conditions}</p>
        <p>Local Time: ${data.local_time}</p>
      `;
    })
    .catch((error) => {
      weatherContainer.innerHTML = "<p>Error fetching weather data.</p>";
    });
});
