import axios from "axios";
function showWeather(response) {
  let currentTemperature = document.querySelector("#current-temp");
  let weather = Math.round(response.data.temperature.current);
  let cityHeading = document.querySelector("#show-city-heading");

  cityHeading.innerHTML = response.data.city;
  currentTemperature.innerHTML = weather;
}

function showCity(event) {
  event.preventDefault();

  let searchCity = document.querySelector("#city-input");
  let city = searchCity.value;

  let apiKey = "385o3754a369fbecdd611206btfe6a77";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
}

let enterCity = document.querySelector("#enterCity");
enterCity.addEventListener("submit", showCity);

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hour = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hour < 10) {
    hour = `0${hour}`;
  }

  return `${day} ${hour}:${minutes}`;
}

let paragraph = document.querySelector("#current-date");
let date = new Date();

paragraph.innerHTML = formatDate(date);
