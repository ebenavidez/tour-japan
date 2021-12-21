import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api.foursquare.com/v3',
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'fsq3LZuK+zi0pcFj6X8ZuYsalctHG3cbU5xAyn2gtDILyZg='
    }
})

export default {
    getPlacesSearch(placeName) {
        return apiClient.get('/places/search', {
            params: {
                'near': placeName  + ', JP',
            }
        })
    },
}