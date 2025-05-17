import { INasaRepository } from '../../application/interfaces/nasaApi';
import { MarsPhoto } from '../../domain/models/MarsPhoto';
import { nasaApiClient } from '../api/nasa/nasaApi/nasaApiClient';

export const nasaRepository: INasaRepository = {
    async fetchMarsPhotos(sol: number, rover: string):
    Promise<MarsPhoto[]> {
        const response = await nasaApiClient.get(`/marsphotos/api/v1/rovers/${rover}/photos`, {
            params: { sol },
        });
        return response.data.photos;
    },
};