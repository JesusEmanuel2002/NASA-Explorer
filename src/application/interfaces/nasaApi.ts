// Interfaz que define el contrato para obtener fotos de Marte
import { MarsPhoto } from '../../domain/models/MarsPhoto'; 
 
export interface INasaRepository { 
  fetchMarsPhotos(sol: number, rover: string): Promise<MarsPhoto[]>; 
}