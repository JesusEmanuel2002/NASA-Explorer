import { nasaRepository } from '../../infrastructure/repositories/nasaRepository'; 
import { MarsPhoto } from '../../domain/models/MarsPhoto';

// Función que obtiene fotos de Marte con soporte de paginación
export const fetchMarsPhotosWithPagination = async (
    sol: number,  // Día solar de Marte
    rover: string,  // Nombre del rover
    page: number = 1  // Página para la paginación (por defecto la primera página)
): Promise<MarsPhoto[]> => {
    try {
        // Llamamos al repositorio para obtener las fotos de Marte con paginación
        return await nasaRepository.fetchMarsPhotos(sol, rover, page);
    } catch (err) {
        // Si ocurre un error, lanzamos una excepción con un mensaje claro
        throw new Error('Error al obtener fotos de Marte con paginación');
    }
};