import { MapModalStyle } from './map.styled';
import { useEffect, useRef } from 'react';

interface mapType {
  pos: number[];
}

const MapModal = ({ pos }: mapType) => {
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
    marker.setMap(map);
  }, []);

  return <MapModalStyle ref={mapRef}></MapModalStyle>;
};

export default MapModal;
