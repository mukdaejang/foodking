import { MapStyle } from './map.styled';
import { useEffect, useRef } from 'react';
import Modal from '@/components/Modal';

interface mapType {
  pos: number[];
}

const Map = ({ pos }: mapType) => {
  const { kakao }: any = window;
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mapRef.current;
    const options = {
      center: new kakao.maps.LatLng(pos[0], pos[1]),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(pos[0], pos[1]);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    map.setDraggable(false);
    marker.setMap(map);
  }, []);

  const MapBigSize = () => {
    console.log('event');
  };

  return <MapStyle ref={mapRef} onClick={MapBigSize}></MapStyle>;
};

export default Map;
