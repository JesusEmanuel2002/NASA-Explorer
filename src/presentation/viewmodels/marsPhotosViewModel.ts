import { useState, useEffect } from 'react';
import { fetchMarsPhotos } from '../../application/usecases/fetchMarsPhotos';
import { MarsPhoto } from '../../domain/models/MarsPhoto';
import { storeData, getData } from '../../infrastructure/storage/asyncStorage';

export const useMarsPhotosViewModel = (sol: number, rover: string) => {
    const [photos, setPhotos] = useState<MarsPhoto[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const loadPhotos = async () => {
            try {
                const cachedPhotos = await
                getData(`@marsPhotos_${sol}_${rover}`);
                if (cachedPhotos) {
                    setPhotos(cachedPhotos);
                } else {
                    const data = await fetchMarsPhotos(sol, rover);
                    setPhotos(data);
                    await storeData(`@marsPhotos_${sol}_${rover}`, data);
                }
            } catch (err) {
                setError('Error al cargar fotos');
            } finally {
                setLoading(false);
            }
        };
        loadPhotos();
    }, [sol, rover]);
    return { photos, loading, error };
};