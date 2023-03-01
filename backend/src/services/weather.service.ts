
import axios from 'axios';

export interface ForecastModel {
    latitude: number,
    longitude: number,
    elevation: number,
    current_weather: {
        temperature: number,
        windspeed: number,
        winddirection: number,
        weathercode: number,
        time: Date
    }
}


 export async function getWeatherForecast(lat: number, lng: number): Promise<any> {

//     // TODO: make a call to this API with latitude and longitude from the frontend
//     // use axios to make the call
//     //  https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true

//     return {
//         latitude: 52.52,
//         longitude: 13.41,
//         elevation: 0,
//         current_weather: {
//             temperature: 10,
//             windspeed: 10,
//             winddirection: 10,
//             weathercode: 10,
//             time: new Date()
//         }
//     };
// }


//export async function getWeatherForecast(lat: number, lng: number): Promise<ForecastModel> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`;
 
  try {
    const response = await axios.get(url);
    const forecastData = response.data;
    return forecastData;

  } catch (error) {
    console.error(error);
    throw new Error('Error fetching weather forecast');
  }
}