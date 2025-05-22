// ViewModel para búsqueda de imágenes en la NASA Image Library
import { useEffect, useState } from 'react';
import { NasaImage } from '../../domain/models/NasaImage';
import { fetchNasaImages } from '../../application/usecases/fetchNasaImages';

export const useNasaImagesViewModel = (query: string) => {
    const [images, setImages] = useState<NasaImage[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadImages = async () => {
            try {
                const data = await fetchNasaImages(query);
                setImages(data);
            } catch (err) {
                setError('Error al cargar imágenes');
            } finally {
                setLoading(false);
            }
        };
        loadImages();
    }, [query]); // Se actualiza si cambia la búsqueda

    return { images, loading, error };
};