import { FeatureCollection, GeoJsonProperties, Point } from 'geojson';
import { UserDataMarker } from '../type';

export const createGeoJSON = (
  dataMarker: UserDataMarker[]
): FeatureCollection<Point, GeoJsonProperties> => {
  return {
    type: 'FeatureCollection',
    features: dataMarker.map(location => ({
      type: 'Feature',
      properties: {
        id: location.id,
        content: location.content,
      },
      geometry: {
        type: 'Point',
        coordinates: [location.lng, location.lat],
      },
    })),
  };
};
