// Modelo que representa una imagen obtenida del API de imágenes de NASA
export interface NasaImage {
    data: Array<{
        title: string;            // Título de la imagen
        description: string;      // Descripción
        date_created: string;     // Fecha de creación
    }>;
    links: Array<{
        href: string;             // URL del recurso (imagen)
        render: string;           // Tipo de recurso (image, video)
    }>;
}