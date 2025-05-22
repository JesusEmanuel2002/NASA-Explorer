// Modelo que representa un evento del sistema EONET (eventos naturales)
export interface EonetEvent {
    id: string;  // ID del evento
    title: string;  // Título descriptivo
    description?: string;  // Descripción opcional
    categories: { id: number; title: string }[];  // Categorías del evento
    sources: { id: string; url: string }[];  // Fuentes oficiales del evento
    geometry: {
        magnitudeValue?: number;  // Valor de magnitud si aplica
        date: string;             // Fecha del evento
        type: string;             // Tipo de geometría (point, polygon)
        coordinates: number[];    // Coordenadas geográficas
    }[];
}