import { nasaImagesApiClient } from '../../infrastructure/api/nasa/nasaApi/nasaImagesApiClient'; 
import { NasaImage } from '../../domain/models/NasaImage';

// Función que obtiene imágenes de NASA en base a un término de búsqueda
export const fetchNasaImages = async (searchTerm: string): Promise<NasaImage[]> => {
    try {
        // Realizamos la solicitud a la API para obtener las imágenes de NASA relacionadas con el término de búsqueda
        const response = await nasaImagesApiClient.get(`/search`, {
        params: { q: searchTerm },  // Pasamos el término de búsqueda como parámetro
        });
        return response.data.collection.items;  // Retornamos las imágenes obtenidas
    } catch (error) {
        // Si ocurre un error, lanzamos una excepción con un mensaje claro
        throw new Error('Error al obtener las imágenes de NASA');
    }
};