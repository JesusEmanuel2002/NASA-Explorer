import { getData, storeData } from '../../infrastructure/storage/asyncStorage'; 
import { Apod } from '../../domain/models/Apod'; 
import { nasaApiClient } from '../../infrastructure/api/nasa/nasaApi/nasaApiClient';

// Función asíncrona que obtiene los datos del APOD (Astronomy Picture of the Day)
export const fetchApodData = async (): Promise<Apod | null> => {
    try {
        // Intentamos obtener los datos de la API de la NASA
        const response = await nasaApiClient.get('/planetary/apod');
        const data = response.data;  // Obtenemos los datos de la respuesta
        await storeData('@apod', data);  // Guardamos los datos en AsyncStorage
        return data;  // Retornamos los datos obtenidos
    } catch (error) {
        // Si ocurre un error, intentamos obtener los datos almacenados en caché
        const cached = await getData('@apod');
        return cached;  // Si existen datos en caché, los retornamos
    }
};