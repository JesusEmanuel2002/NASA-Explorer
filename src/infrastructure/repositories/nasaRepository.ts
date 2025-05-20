import { INasaRepository } from '../../application/interfaces/nasaApi';
import { MarsPhoto } from '../../domain/models/MarsPhoto';
import { nasaApiClient } from '../api/nasa/nasaApi/nasaApiClient';

export const nasaRepository: INasaRepository = {
    async fetchMarsPhotos(
        sol: number,
        rover: string,
        page: number = 1
    ): Promise<MarsPhoto[]> {
        try {
            const response = await
            nasaApiClient.get(`/marsphotos/api/v1/rovers/${rover}/photos`, {
                params: { sol, page }, // Usamos el parámetro de página para paginar los resultados.
            });
            return response.data.photos;
        } catch (error) {
            throw new Error('Error al obtener las fotos de la NASA');
        }
    },
};