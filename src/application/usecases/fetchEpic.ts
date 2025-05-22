import { getData, storeData } from '../../infrastructure/storage/asyncStorage'; 
import { Epic } from '../../domain/models/Epic'; 
import { nasaApiClient } from '../../infrastructure/api/nasa/nasaApi/nasaApiClient';

// Función que obtiene las imágenes EPIC de la NASA
export const fetchEpicData = async (): Promise<Epic[]> => {
  try {
    // Realizamos la solicitud a la API para obtener imágenes EPIC
    const response = await nasaApiClient.get('/EPIC/api/natural/images');
    const data = response.data;  // Obtenemos los datos de la respuesta
    await storeData('@epic', data);  // Guardamos los datos en AsyncStorage
    return data;  // Retornamos las imágenes EPIC obtenidas
  } catch (error) {
    // Si ocurre un error, intentamos obtener los datos desde la caché
    const cached = await getData('@epic');
    if (cached) return cached;  // Si hay datos en caché, los retornamos
    // Si no hay datos en caché, lanzamos un error
    throw new Error('No se pudieron obtener imágenes EPIC ni datos guardados');
  }
};