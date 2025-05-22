// ViewModel que maneja fotos del rover con paginación
import { useState, useEffect } from 'react';
import { fetchMarsPhotosWithPagination } from '../../application/usecases/fetchMarsPhotos';
import { MarsPhoto } from '../../domain/models/MarsPhoto';

export const useMarsPhotosViewModel = (sol: number, rover: string, initialPage: number = 1) => {
    const [photos, setPhotos] = useState<MarsPhoto[]>([]);
    const [page, setPage] = useState(initialPage);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const loadMore = () => setPage((prev) => prev + 1); // Función para paginación

    useEffect(() => {
        const loadPhotos = async () => {
            setLoading(true);
            try {
                const newPhotos = await fetchMarsPhotosWithPagination(sol, rover, page);
                setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]); // Agrega nuevas fotos
            } catch (err) {
                setError('Hubo un error al cargar las fotos');
            } finally {
                setLoading(false);
            }
        };
        loadPhotos();
    }, [sol, rover, page]); // Se ejecuta si cambian los parámetros

    return { photos, loading, error, loadMore };
};