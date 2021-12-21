<template>
    <div v-if="weather">
        <div v-for="weather in weather.weather" :key="weather.id">
            <div><img v-bind:src="'http://openweathermap.org/img/wn/' + weather.icon + '@2x.png'" alt=""></div>
            <div>{{ weather.description }}</div>
        </div>
        <div>
            Temperature: {{ weather.main.temp }}&deg; 
            (Min: {{ weather.main.temp_min }}&deg; / Max: {{ weather.main.temp_max }}&deg;)
        </div>
        <div>Feels Like: {{ weather.main.feels_like }}&deg;</div>
        <div>Humidity: {{ weather.main.humidity }}</div>
    </div>
</template>

<script>
export default {
    name: "DestionationWeather",
    props: {
        weather: Object
    }
}
</script>

<style>

</style>