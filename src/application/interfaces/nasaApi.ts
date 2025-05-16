import { MarsPhoto } from '../../domain/models/MarsPhoto'; 
 
export interface INasaRepository { 
  fetchMarsPhotos(sol: number, rover: string): Promise<MarsPhoto[]>; 
}