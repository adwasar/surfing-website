import { AnyLayer } from 'mapbox-gl';

export const clustersLayer: AnyLayer = {
  id: 'clusters',
  type: 'circle',
  source: 'booking',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': [
      'step',
      ['get', 'point_count'],
      'rgba(51, 56, 99, .5)',
      100,
      '#f1f075',
      750,
      '#f28cb1',
    ],
    'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40],
  },
};
