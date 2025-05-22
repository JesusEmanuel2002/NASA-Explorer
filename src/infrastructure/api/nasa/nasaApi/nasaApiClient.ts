import axios from 'axios';

const NASA_API_KEY = process.env.EXPO_PUBLIC_NASA_API_KEY;
const BASE_URL = 'https://api.nasa.gov';

// Cliente Axios general para múltiples endpoints
export const nasaApiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: NASA_API_KEY,
  },
});

// Función que obtiene datos EPIC usando el cliente configurado
export const fetchEpicData = async () => {
  const response = await nasaApiClient.get('/EPIC/api/natural/images');
  return response.data;
};

// Función que obtiene eventos de tormentas solares desde EONET (fuera de API principal de NASA)
export const fetchSolarStormsFromApi = async () => {
  const response = await axios.get('https://eonet.gsfc.nasa.gov/api/v3/events', {
    params: { category: 'severeStorms', days: 1 },  // Eventos de las últimas 24 horas
  });
  return response.data.events;
};