import { createRouter, createWebHistory } from 'vue-router'
import Destinations from '../views/Destinations.vue'
import DestinationCity from '../views/DestinationCity.vue'
import About from '../views/About.vue'

const routes = [
    {
        path: '/',
        name: 'Destinations',
        component: Destinations
    },
    {
        path: '/city/:placeName',
        name: 'DestinationCity',
        props: true,
        component: DestinationCity
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})  