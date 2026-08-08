import axios from 'axios';
const API_KEY = '57070176-1d3ec272671065a7e5a57d0b3';

export function fetchImages(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    })
    .then(response => response.data);
}
