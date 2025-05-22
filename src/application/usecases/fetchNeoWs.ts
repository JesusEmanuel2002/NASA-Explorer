import { getData, storeData } from '../../infrastructure/storage/asyncStorage'; 
import { NeoWs } from '../../domain/models/NeoWs'; 
import { nasaApiClient } from '../../infrastructure/api/nasa/nasaApi/nasaApiClient';

// Función que obtiene datos de NEO (Near Earth Objects)
export const fetchNeoWsData = async (): Promise<NeoWs[]> => {
  try {
    // Realizamos la solicitud a la API para obtener los datos de NEO
    const response = await nasaApiClient.get('/neo/rest/v1/neo/browse');
    const data = response.data.near_earth_objects;  // Obtenemos los objetos cercanos a la Tierra
    await storeData('@neoWs', data);  // Guardamos los datos en AsyncStorage
    return data;  // Retornamos los objetos cercanos a la Tierra
  } catch (error) {
    // Si ocurre un error, intentamos obtener los datos desde la caché
    const cached = await getData('@neoWs');
    if (cached) return cached;  // Si hay datos en caché, los retornamos
    // Si no hay datos en caché, lanzamos un error
    throw new Error('No se pudieron obtener datos de NEO ni datos guardados');
  }
};