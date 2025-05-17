import { nasaRepository } from '../../infrastructure/repositories/nasaRepository';
import { MarsPhoto } from '../../domain/models/MarsPhoto';

export const fetchMarsPhotos = async (sol: number, rover: string):
Promise<MarsPhoto[]> => {
    return await nasaRepository.fetchMarsPhotos(sol, rover);
};