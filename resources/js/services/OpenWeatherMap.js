import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
})

export default {
    getWeatherInfo(placeName) {
        return apiClient.get('/weather', {
            params: {
                'q': placeName,
                'units': 'metric',
                'appid': 'ea53c7f42868126a2e6b00a83dffad84'
            }
        })
    },
}