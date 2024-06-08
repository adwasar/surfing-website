import { AnyLayer } from 'mapbox-gl';

export const clusterCountLayer: AnyLayer = {
  id: 'cluster-count',
  type: 'symbol',
  source: 'booking',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    'text-size': 12,
  },
  paint: {
    'text-color': '#FFFFFF',
  },
};
