import axios from 'axios';

const NASA_API_KEY = process.env.EXPO_PUBLIC_NASA_API_KEY;

// Cliente Axios específico para la API de imágenes de NASA
export const nasaImagesApiClient = axios.create({
    baseURL: 'https://images-api.nasa.gov',
    params: {
        api_key: NASA_API_KEY,  // Se incluye API key por defecto
    },
});