import axios from 'axios';

// Se obtiene la API Key desde variables de entorno expuestas por Expo
const NASA_API_KEY = process.env.EXPO_PUBLIC_NASA_API_KEY;
const BASE_URL = 'https://api.nasa.gov/planetary/apod';

// Cliente Axios preconfigurado para consumir APOD
export const apodApiClient = axios.create({
    baseURL: BASE_URL,  // URL base para el servicio APOD
    params: {
        api_key: NASA_API_KEY,  // Se añade la API key como parámetro por defecto
    },
});