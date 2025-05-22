// Modelo que representa una imagen EPIC (Earth Polychromatic Imaging Camera)
export interface Epic {
    identifier: string;  // Identificador único de la imagen
    caption: string;     // Descripción o leyenda
    image: string;       // Nombre del archivo de imagen
    date: string;        // Fecha de captura
}