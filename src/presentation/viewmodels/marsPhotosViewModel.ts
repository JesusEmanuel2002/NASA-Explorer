import { useState, useEffect } from 'react';
import { fetchMarsPhotosWithPagination } from '../../application/usecases/fetchMarsPhotos';
import { MarsPhoto } from '../../domain/models/MarsPhoto';
import { storeData, getData } from '../../infrastructure/storage/asyncStorage';

export const useMarsPhotosViewModel = (sol: number, rover: string, page: number = 1) => {
    const [photos, setPhotos] = useState<MarsPhoto[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const loadPhotos = async () => {
            try {
                const cachedPhotos = await
                getData(`@marsPhotos_${sol}_${rover}_page_${page}`);
                if (cachedPhotos) {
                    setPhotos(cachedPhotos);
                } else {
                    const data = await fetchMarsPhotosWithPagination(sol, rover, page); setPhotos(data);
                    await storeData(`@marsPhotos_${sol}_${rover}_page_${page}`, data);
                }
            } catch (err) {
                setError('Hubo un problema al cargar las fotos. Por favor, inténtalo más tarde.');
            } finally {
                setLoading(false);
            }
        };
        loadPhotos();
    }, [sol, rover, page]);
    return { photos, loading, error };
};