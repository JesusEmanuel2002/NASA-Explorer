// Modelo que representa una foto del rover en Marte
export interface MarsPhoto {
    id: number;  // ID de la foto
    img_src: string;  // URL de la imagen
    earth_date: string;  // Fecha en la Tierra cuando se capturó
    rover: {
        name: string;  // Nombre del rover que la tomó
    };
}