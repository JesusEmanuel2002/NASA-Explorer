// Obtiene datos de objetos cercanos a la Tierra (Near-Earth Objects)
import axios from 'axios';

const API_KEY = 'tu_api_key';
const BASE_URL = 'https://api.nasa.gov/neo/rest/v1/neo/browse';

export const fetchNeoWsData = async (page = 1, size = 20) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                api_key: API_KEY,
                page,
                size,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching NeoWs data:', error);
        throw error;
    }
};