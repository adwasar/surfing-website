import { FC, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { useSelector } from 'react-redux';

import Mapboxgl, { MapboxGeoJSONFeature } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import Marker from '../Marker';
import SkeletonLoading from 'src/components/SkeletonLoading';

import { useGetMapSourceQuery } from 'src/store/query/mapSourceApi';
import { RootState } from 'src/store';

import { createGeoJSON, getFilteredFeatures, removeMarkersNotOnScreen } from '../utils';

import { clusterCountLayer, clustersLayer } from '../constants';

import { MarkerElement } from '../type';

import s from './Map.module.scss';
import './map.scss';

interface MapProps {}

Mapboxgl.accessToken = import.meta.env.VITE_APP_MAPBOX_ACCESS_TOKEN;

const initialData = {
  lng: -4.8937,
  lat: 36.50908,
  zoom: 14,
};

const Map: FC<MapProps> = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<Mapboxgl.Map | null>(null);

  const filters = useSelector((state: RootState) => state.filters);
  const { data, isLoading } = useGetMapSourceQuery(filters);
  const [isMapSourceLoad, SetIsMapSourceLoad] = useState(false);

  useEffect(() => {
    if (map.current) return;
    if (mapContainer.current && data) {
      let markersOnScreen: MarkerElement[] = [];

      map.current = new Mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/abiespana/cltantp6a00ut01pj4v9h0srk',
        center: [initialData.lng, initialData.lat],
        zoom: initialData.zoom,
      });

      map.current.on('load', () => {
        SetIsMapSourceLoad(true);

        if (map.current) {
          map.current.addSource('booking', {
            type: 'geojson',
            data: createGeoJSON(data),
            cluster: true,
            clusterRadius: 80,
          });

          map.current.addLayer(clustersLayer);

          map.current.addLayer(clusterCountLayer);

          map.current.on('render', () => {
            if (map.current) {
              if (!map.current.isSourceLoaded('booking')) return;

              const addNewMarkers = (features: MapboxGeoJSONFeature[]) => {
                features.forEach(feature => {
                  let coords;
                  const props = feature.properties;

                  if (feature.geometry.type === 'Point') {
                    coords = feature.geometry.coordinates;
                  } else {
                    throw new Error('Unsupported geometry type for this operation');
                  }

                  if (!markersOnScreen.some(marker => marker.id === props?.id)) {
                    const markerElement = document.createElement('div');

                    createRoot(markerElement).render(<Marker content={props?.content} />);
                    if (map.current) {
                      const marker = new Mapboxgl.Marker(markerElement, { anchor: 'bottom' })
                        .setLngLat([coords[0], coords[1]])
                        .addTo(map.current);
                      markersOnScreen.push({
                        id: props?.id,
                        element: marker,
                      });
                    }
                  }
                });
              };

              const features = getFilteredFeatures(map.current);

              if (features) {
                markersOnScreen = removeMarkersNotOnScreen(features, markersOnScreen);
                addNewMarkers(features);
              }
            }
          });
        }
      });
      map.current.addControl(new Mapboxgl.NavigationControl(), 'bottom-right');
    }
  }, [data, isLoading]);

  useEffect(() => {
    if (!map.current) return;
    if (isMapSourceLoad && data) {
      const newData = createGeoJSON(data);
      const source = map.current.getSource('booking') as mapboxgl.GeoJSONSource;
      source.setData(newData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <SkeletonLoading isLoading={isLoading}>
      <div ref={mapContainer} className={s.map} />
    </SkeletonLoading>
  );
};

export default Map;
