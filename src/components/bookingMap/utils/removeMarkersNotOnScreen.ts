import { MapboxGeoJSONFeature } from 'mapbox-gl';
import { MarkerElement } from '../type';

export const removeMarkersNotOnScreen = (
  features: MapboxGeoJSONFeature[],
  markersOnScreen: MarkerElement[]
) => {
  return markersOnScreen.filter(marker => {
    if (!features.some(feature => feature.properties?.id === marker.id)) {
      marker.element.remove();
      return false;
    }
    return true;
  });
};
