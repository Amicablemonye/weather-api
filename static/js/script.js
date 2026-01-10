const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("cityInput");
const weatherContainer = document.getElementById("weather-container");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();

  if (city === "") {
    weatherContainer.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  console.log("City entered:", city);
});
fetch(`/weather?city=${city}`);
