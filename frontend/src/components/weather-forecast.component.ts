import WeatherService from '@/services/weather-service.service';
import SharedDataService from '@/services/shared-data';
import { Options, Vue } from 'vue-class-component';
import { Inject } from 'vue-property-decorator';

import { ComponentPublicInstance } from 'vue'

interface MyComponent extends ComponentPublicInstance {
  $on(event: string, callback: Function): void
}

@Options({
  props: {
  }
})
export default class WeatherForecast extends Vue {

  forecast = false;
  forecastData: any;

  @Inject('weatherService')
  public weatherService!: WeatherService;
  @Inject()
  public sharedDataService!:SharedDataService;
  

  getLatLong(data: any) {
    return data;
  }

   
  mounted()  {}
    // TODO - use the latitude and longitude from the search city component -- Done
    // TODO - display the weather forecast in the template -- Done
    // TODO - Error handling, if the API call fails we should display an error message -- Done
    // this.sharedDataService.getData();
    // const thisInstance = this;
    // this.getLatLong(this.data);
    // this.weatherService.getWeatherForecast(52.52, 13.419998).then((res) => {
    //   console.log(res);
    // });
  
    //Retrieve the data response which returns an object having the values temperature, wind direction etc..

  fetchForecast() {
    let sharedData = [];
    sharedData = this.sharedDataService.getData();
    this.weatherService.getWeatherForecast(sharedData.latitude, sharedData.longitude).then((res) => {
      this.forecast =true;
      this.forecastData = res;
      this.$forceUpdate();
      console.log(res);
    });
  }

}
