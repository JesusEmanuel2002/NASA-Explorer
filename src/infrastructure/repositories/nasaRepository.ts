import { MarsPhoto } from '../../domain/models/MarsPhoto';
import axios from 'axios';

const API_KEY = process.env.EXPO_PUBLIC_NASA_API_KEY;

// Repositorio que encapsula la lógica de acceso a datos del rover en Marte
export const nasaRepository = {
    fetchMarsPhotos: async (
        sol: number,
        rover: string,
        page: number = 1
    ): Promise<MarsPhoto[]> => {
        try {
            // Llamada a la API de fotos del rover
            const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos`, {
                params: {
                    sol,
                    page,
                    api_key: API_KEY,
                },
            });
            return response.data.photos;  // Retornamos solo el array de fotos
        } catch (error) {
            console.error('Error al obtener las fotos desde la API de NASA:', error);
            throw new Error('No se pudieron obtener las fotos del rover');
        }
    },
};