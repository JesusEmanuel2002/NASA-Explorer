// ViewModel para objetos cercanos a la Tierra (NEO)
import { useState, useEffect } from 'react';
import { NeoWs } from '../../domain/models/NeoWs';
import { fetchNeoWsData } from '../../application/usecases/fetchNeoWs';
import { getData, storeData } from '../../infrastructure/storage/asyncStorage';

export const useNeoViewModel = () => {
    const [neoObjects, setNeoObjects] = useState<NeoWs[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const cached = await getData('@neo');
                if (cached) {
                    setNeoObjects(cached);
                } else {
                    const data = await fetchNeoWsData();
                    setNeoObjects(data);
                    await storeData('@neo', data);
                }
            } catch (e) {
                setError('Error al cargar datos de objetos cercanos a la Tierra.');
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    return { neoObjects, loading, error };
};