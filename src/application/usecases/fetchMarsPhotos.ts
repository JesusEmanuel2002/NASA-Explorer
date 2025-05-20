import { nasaRepository } from '../../infrastructure/repositories/nasaRepository';
import { MarsPhoto } from '../../domain/models/MarsPhoto';

// Caso de uso para obtener fotos de Marte con paginación.
export const fetchMarsPhotosWithPagination = async (
    sol: number,
    rover: string,
    page: number = 1
): Promise<MarsPhoto[]> => {
    try {
        return await nasaRepository.fetchMarsPhotos(sol, rover, page);
        // Llama al repositorio.
        } catch (err) 
        {
            throw new Error('Error al obtener fotos de Marte con paginación');
        }
};