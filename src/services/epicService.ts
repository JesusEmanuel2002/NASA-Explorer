// Obtiene una imagen reciente de la NASA EPIC API
import axios from 'axios';

const API_KEY = 'tu_api_key';
const BASE_URL = 'https://api.nasa.gov/EPIC/api/natural/images';

export const fetchEpicImage = async () => {
    try {
        const response = await axios.get(BASE_URL, {
            params: { api_key: API_KEY },
        });
        return response.data[0]; // Retorna solo la más reciente
    } catch (error) {
        console.error('Error fetching EPIC image:', error);
        throw error;
    }
};