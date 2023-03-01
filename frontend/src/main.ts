
import { setupAxiosInterceptors } from './shared/axios-interceptor';
import WeatherService from './services/weather-service.service';
import SharedDataService from './services/shared-data';
import VueGoogleMaps from '@fawmi/vue-google-maps';
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import store from './store';


setupAxiosInterceptors(() => {
    console.log('Unauthenticated');
});

const app = createApp(App)

const weatherService = new WeatherService();

const sharedDataService = new SharedDataService();


app.provide('weatherService', weatherService);
app.provide('sharedDataService',sharedDataService);

app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAmlmN3Spuolpvy8xtSeeYK2KgH0166I90',
        libraries: 'places,geometry',
    },
});

app.use(store).use(router)

app.mount('#app')

