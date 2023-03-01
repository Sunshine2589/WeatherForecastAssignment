import WeatherService from "../services/weather-service.service";
import SharedDataService from "../services/shared-data";
import { Options, Vue } from 'vue-class-component';
import { Inject } from "vue-property-decorator";

@Options({
  props: {
  }
})

export default class SearchCity extends Vue {


  @Inject()
  public weatherService!: WeatherService;
  @Inject()
  public sharedDataService!:SharedDataService;
  

  selectedPlace: { lat: number; lng: number } | null = null;


  //Method associated when the location is selected from Map.
  placeChanged(place: any, text:any) {
    if (text == "mapClicked") {
      this.selectedPlace = {
        lat: place.latLng.lat(),
        lng: place.latLng.lng()
      };
      this.sharedDataService.setData(this.selectedPlace);
    }
    else {
      this.selectedPlace = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
      };
      this.sharedDataService.setData(this.selectedPlace);
    }
    this.weatherService.getWeatherForecast(this.selectedPlace.lat, this.selectedPlace.lng)
      .then((data) => {
        // Handle the weather data
        this.sharedDataService.setData(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }
  
  //Event corresponding to location selected by clicking on Map.
  mapClicked(event: any) {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    this.placeChanged(event,"mapClicked");
  }
  
}


