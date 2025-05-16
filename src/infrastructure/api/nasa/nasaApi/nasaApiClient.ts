import axios from 'axios';

const NASA_API_KEY = process.env.EXPO_PUBLIC_NASA_API_KEY;
const BASE_URL = 'https://api.nasa.gov';

export const nasaApiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: NASA_API_KEY,
  },
});