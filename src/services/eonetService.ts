// Función para obtener tormentas solares desde EONET
import axios from 'axios';

const BASE_URL = 'https://eonet.gsfc.nasa.gov/api/v3/events';

export const fetchSolarStorms = async () => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                category: 'severeStorms',
                days: 1, // Solo eventos del último día
            },
        });
        return response.data.events;
    } catch (error) {
        console.error('Error fetching solar storms:', error);
        throw error;
    }
};