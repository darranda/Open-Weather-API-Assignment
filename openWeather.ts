import './index.html'
import './weatherStyle.css'

//*You must display the following data points on the page from the API: Current Date, City from the zipcode, 
//Current temperature in ferinheight, current conditions, Temp Hi/Lo */
// You must make an API call to the service and get the weather data

const myApi = "a1abbf3acc40da02cb3d567822d3f241";

// function get weather data
async function getWeatherData(zipCode : string) {
  
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${myApi}&units=imperial`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// function displays the weather
interface displayWeather {
  data: {
  name: string,
  weather: Array < {description: string}>;
  main: {
  temp: number,
  max: number,
  min: number,
  };
  date: Date,
};
}


function displayWeatherData (data: displayWeather ['data']) {

  // date and time
  let currentDate = new Date (). toLocaleDateString();
  (document.querySelector(".currentDate") as HTMLInputElement).innerHTML = `Date: ${currentDate}`;

  // city and condition
  let city = data.name;
  let conditions = data.weather[0].description;

  (document.querySelector(".zipCodeCity") as HTMLInputElement).innerHTML = `City: ${city}`;
  (document.querySelector(".currentConditions") as HTMLInputElement).innerHTML = `Current conditions: ${conditions}`;

  // the temperature
  let currentTemp = data.main.temp;
  let tempHi = data.main.max;
  let tempLo = data.main.min;

  (document.querySelector(".temperature") as HTMLInputElement).innerHTML = `Temperature: ${currentTemp} &#x2109`;
  (document.querySelector(".tempHi") as HTMLInputElement).innerHTML = `High: ${tempHi} &#x2109`;
  (document.querySelector(".tempLo") as HTMLInputElement).innerHTML = `Low: ${tempLo} &#x2109`;
}
// user clicks the "Get Weather" button, get the weather for the zipcode they entered.
  document.getElementById("getWeather")?. addEventListener("click", async function() {

  let zipCode = (document.getElementById("zipCode") as HTMLInputElement).value;
  let data = await getWeatherData(zipCode);
 displayWeatherData(data);

  });