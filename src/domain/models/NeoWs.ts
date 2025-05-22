// Modelo que representa objetos cercanos a la Tierra (NEO)
export interface NeoWs {
    id: string;  // ID del objeto
    name: string;  // Nombre del asteroide u objeto
    nasa_jpl_url: string;  // Enlace a la base de datos JPL
    close_approach_data: Array<{
        close_approach_date: string;  // Fecha de aproximación
        relative_velocity: {
            kilometers_per_second: string;  // Velocidad relativa
        };
        miss_distance: {
            kilometers: string;  // Distancia a la Tierra
        };
    }>;
}