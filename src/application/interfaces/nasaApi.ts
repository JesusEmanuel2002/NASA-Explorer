// Interfaz que define el contrato para obtener fotos de Marte
import { MarsPhoto } from '../../domain/models/MarsPhoto'; 

// La interfaz define el contrato que debe seguir cualquier clase que implemente este repositorio
export interface INasaRepository { 
  // Método para obtener fotos de Marte, recibe el día solar y el nombre del rover
  fetchMarsPhotos(sol: number, rover: string): Promise<MarsPhoto[]>; 
}