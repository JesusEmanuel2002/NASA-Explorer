import { useState, useEffect } from 'react';
import { Apod } from '../../domain/models/Apod';
import { fetchApodData } from '../../application/usecases/fetchApod';
import { getData, storeData } from '../../infrastructure/storage/asyncStorage';

export const useApodViewModel = () => {
    // Estados locales para los datos, carga y errores
    const [apod, setApod] = useState<Apod | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Efecto para cargar datos al montar el componente
    useEffect(() => {
        const loadApod = async () => {
            try {
                const cached = await getData('@apod'); // Intenta cargar desde cache
                if (cached) {
                    setApod(cached);
                } else {
                    const data = await fetchApodData(); // Llama al caso de uso
                    setApod(data);
                    await storeData('@apod', data); // Guarda en cache
                }
            } catch (e) {
                setError('Error al cargar datos de APOD.');
            } finally {
                setLoading(false);
            }
        };
        loadApod();
    }, []);

    return { apod, loading, error }; // Devuelve datos al componente de presentación
};