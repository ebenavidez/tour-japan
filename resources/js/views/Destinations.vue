<template>
    <div v-for='(place, index) in places' :key="index">
        <router-link :to="{ name: 'DestinationCity', params: { placeName: place.name } }"> 
            <h1>{{ place.name }}</h1>
            <DestinationWeather :weather="place.weather" />
        </router-link>
    </div>
</template>

<script>
import OpenWeatherMap from '../services/OpenWeatherMap'
import DestinationWeather from '../views/DestinationWeather.vue'

export default {
    name: 'Destinations',
    data() {
        return {
            places: [
                {'name': 'Tokyo', 'weather': null},
                {'name': 'Yokohama', 'weather': null},
                {'name': 'Kyoto', 'weather': null},
                {'name': 'Osaka', 'weather': null},
                {'name': 'Sapporo', 'weather': null},
                {'name': 'Nagoya', 'weather': null},
            ],
            weather: null
        }
    },
    components: {
        DestinationWeather
    },
    created() {
        this.getPlacesWeatherInfo();
    }, 
    methods: {
        getPlacesWeatherInfo() {
            this.places.forEach(place =>{
                OpenWeatherMap.getWeatherInfo(place.name)
                .then(response => {
                    place.weather = response.data;
                })
                .catch(e => {
                    console.log('e:', e);
                })
            })
        }
    }
}
</script>