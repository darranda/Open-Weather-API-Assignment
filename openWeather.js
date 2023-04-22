//*You must display the following data points on the page from the API: Current Date, City from the zipcode, 
//Current temperature in ferinheight, current conditions, Temp Hi/Lo */
// You must make an API call to the service and get the weather data

const myApi = "a1abbf3acc40da02cb3d567822d3f241";

// function get weather data
async function getWeatherData(zipCode) {
  const myApi = "a1abbf3acc40da02cb3d567822d3f241";
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${myApi}&units=imperial`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
getWeatherData();

// function displays the weather
function displayWeather(data) {
  const city = data.name;
  const conditions = data.weather[0].description;
  const currentTemp = data.main.temp;
  const tempHi = data.main.temp_max;
  const tempLo = data.main.temp_min;
  const currentDate = new Date().toLocaleDateString();

  // date and time
  document.querySelector(".currentDate").innerHTML = `Date: ${currentDate}`;

  // city and condition
  document.querySelector(".zipCodeCity").innerHTML = `City: ${city}`;
  document.querySelector(".currentConditions").innerHTML = `Current conditions: ${conditions}`;

  // the temperature
  document.querySelector(".temperature").innerHTML = `Temperature: ${currentTemp} &#x2109`;
  document.querySelector(".tempHi").innerHTML = `High: ${tempHi} &#x2109`;
  document.querySelector(".tempLo").innerHTML = `Low: ${tempLo} &#x2109`;
}

// user clicks the "Get Weather" button, get the weather for the zipcode they entered.
  document.getElementById("getWeather").addEventListener("click", function() {
  const zipCode = document.getElementById("zipCode").value;
  getWeatherData(zipCode).then(displayWeather);
});