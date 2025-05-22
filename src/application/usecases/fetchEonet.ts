import { fetchSolarStormsFromApi } from '../../infrastructure/api/nasa/nasaApi/nasaApiClient'; 
import { EonetEvent } from '../../domain/models/EonetEvent';

// Función que obtiene eventos de tormentas solares
export const fetchSolarStorms = async (): Promise<EonetEvent[]> => {
  try {
    // Llamamos a la API para obtener los eventos de tormentas solares
    const events = await fetchSolarStormsFromApi();  
    return events;  // Retornamos los eventos obtenidos
  } catch (error) {
    // Si ocurre un error, lanzamos una excepción con un mensaje claro
    throw new Error('Error al obtener tormentas solares');
  }
};