import { Map } from 'mapbox-gl';
export const getFilteredFeatures = (map: Map) => {
  return map
    .querySourceFeatures('booking')
    .filter(
      (item, index, self) =>
        item.properties?.id &&
        index === self.findIndex(t => t.properties?.id === item.properties?.id)
    );
};
