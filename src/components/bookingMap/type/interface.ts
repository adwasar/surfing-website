import { Marker } from 'mapbox-gl';
export interface UserDataMarker {
  id: number;
  content: string;
  lng: number;
  lat: number;
  idArea: number;
}

export interface MarkerElement {
  id: number;
  element: Marker;
}
