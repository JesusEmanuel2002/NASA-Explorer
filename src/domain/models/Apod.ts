// Modelo que representa los datos del Astronomy Picture of the Day (APOD)
export interface Apod {
    date: string;               // Fecha de la imagen
    explanation: string;       // Explicación del contenido
    hdurl: string;             // URL de imagen en alta definición
    media_type: string;        // Tipo de medio (imagen o video)
    service_version: string;   // Versión del servicio
    title: string;             // Título de la imagen
    url: string;               // URL de la imagen estándar
}