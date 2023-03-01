<template>
  <div class="weather-forecast">
    <button class="refresh-button" @click="fetchForecast">Show</button>
    <div class="forecast-data" v-if="forecast">
      <img src="../assets/hot.png" v-if="forecastData.current_weather.temperature > 27">
      <img src="../assets/cold.png" v-if="forecastData.current_weather.temperature < 27">
      <div class="temperature">Temperature: {{ forecastData.current_weather.temperature }}°C</div>
      <div class="wind-speed">Wind Speed: {{ forecastData.current_weather.windspeed }}km/hr</div>
      <div class="wind-direction">Wind Direction: {{ forecastData.current_weather.winddirection }}°</div>
      <div class="weather-code">Weather Code: {{ forecastData.current_weather.weathercode }}</div>
      <div class="time">Time: {{ forecastData.current_weather.time}}</div>
    </div>
  </div>
</template>
<script lang="ts" src="./weather-forecast.component.ts"></script>

<style>
.weather-forecast {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2em;
}

.refresh-button {
  margin-bottom: 1em;
  padding: 0.5em 1em;
  background-color: #0080ff;
  color: white;
  border: none;
  border-radius: 0.3em;
  cursor: pointer;
  transition: background-color 0.2s;
}

.refresh-button:hover {
  background-color: #0052cc;
}

.forecast-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 0.5em;
  padding: 1em;
  background-color: #f7f7f7;
}

.forecast-data > * {
  margin-bottom: 0.5em;
}

.temperature {
  font-size: 2em;
  font-weight: bold;
}

.time {
  margin-top: 1em;
}
</style>
