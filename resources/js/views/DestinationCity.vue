<template>
    <h1 v-if="placeName">{{ placeName }}</h1>
    <div v-if="venues">
        <DestinationCityVenue 
            v-for="(venue, index) in venues" 
            :key="index" 
            :venue="venue"
        />
    </div>
</template>

<script>
import FourSquareService from '../services/FourSquareService'
import DestinationCityVenue from '../views/DestinationCityVenue.vue'

export default {
    name: 'DestinationCity',
    props: {
        placeName: String,
    },
    components: {
        DestinationCityVenue
    },
    data() {
        return {
            venues: null        
        }
    },
    created() {
        FourSquareService.getPlacesSearch(this.placeName)
        .then(response => {
            this.venues = response.data.results
            console.log(response.data);
        })
        .catch(e => {
            console.log('e:', e);
        })
    }
}
</script>