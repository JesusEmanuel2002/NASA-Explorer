// ViewModel para obtener imágenes EPIC (Earth Polychromatic Imaging Camera)
import { useState, useEffect } from 'react';
import { Epic } from '../../domain/models/Epic';
import { fetchEpicData } from '../../application/usecases/fetchEpic';
import { storeData, getData } from '../../infrastructure/storage/asyncStorage';

export const useEpicViewModel = () => {
    const [images, setImages] = useState<Epic[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadImages = async () => {
            try {
                const cached = await getData('@epic');
                if (cached) {
                    setImages(cached);
                } else {
                    const data = await fetchEpicData();
                    setImages(data);
                    await storeData('@epic', data);
                }
            } catch (e) {
                setError('Error al cargar imágenes EPIC.');
            } finally {
                setLoading(false);
            }
        };
        loadImages();
    }, []);

    return { images, loading, error };
};