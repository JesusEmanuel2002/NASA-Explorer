// Consulta imágenes por página y tipo de medio
import axios from 'axios';

const API_KEY = 'tu_api_key';
const BASE_URL = 'https://images-api.nasa.gov/search';

export const fetchNasaImages = async (page = 1, mediaType = 'image') => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                api_key: API_KEY,
                page,
                media_type: mediaType,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching NASA images:', error);
        throw error;
    }
};