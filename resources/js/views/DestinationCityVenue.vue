<template>
    <a v-bind:href="'http://www.foursquare.com/v/' + venue.fsq_id"
        class="link"
        target=”_blank”
    >
        <div class="card">
            <div>Venue Name: {{ venue.name }}</div>
            <div>Address:    {{ venue.location.address }}</div>
            <div>Locality:   {{ venue.location.locality }}</div>
            <div>Region:     {{ venue.location.region }}</div>
            <div>Postcode:   {{ venue.location.postcode }}</div>
            <img v-for="category in venue.categories" :key="category.id"
                v-bind:src="category.icon.prefix + '32' + category.icon.suffix" 
                alt=""
                class="icon"
            >
        </div>
    </a>
</template>

<script>
export default {
  name: "Destionation City Venue",
  props: {
    venue: Object
  }
};
</script>
